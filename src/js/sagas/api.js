const axios = require('axios')
const dot = require('dot-object')
const mapping = {
    id: 'id_str',
    createdAt : 'created_at',
    url : 'entities.urls.0.url',
    isRetweet : 'retweeted_status',
    username : 'user.name',
    text : 'text'
}
function transform(objectArr, mapping){
     return objectArr.map((item)=>{
         let newItem = {}
            Object.keys(mapping).forEach((key)=>{
                  newItem[key] = dot.pick(mapping[key], item)
            })
            return newItem
     })
}
export function fetchAll(accounts) {
    var url = 'http://localhost:7890/1.1/statuses/user_timeline.json';
    var promises = Object.keys(accounts).map((account) => {
        return axios.get(url, { params: { screen_name: account, count: accounts[account].options.count } });
    })
    return Promise.all(promises).then((responses) => {
        let date = new Date();
        return responses.map((response, index) => {
            let data = {
                username: Object.keys(accounts)[index],
                tweets: transform(response.data, mapping),
                fetchedAt: date
            }
            return data;
        })
    }).catch((error) => { console.log(error); return error })

}