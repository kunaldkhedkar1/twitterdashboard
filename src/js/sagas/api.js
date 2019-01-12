var axios = require('axios')
export function fetchAll(accounts) {
    var url = 'http://localhost:7890/1.1/statuses/user_timeline.json';
    var promises = Object.keys(accounts).map((account)=>{
        return axios.get(url, {params:{screen_name:account, count: accounts[account].options.count}});
    })
    return Promise.all(promises).then((responses) => {
        let date = new Date();
        return responses.map((response, index) => {
            let data = {
                username: Object.keys(accounts)[index],
                tweets: response.data,
                fetchedAt: date
            }
            return data;
        })
    }).catch((error)=>{console.log(error);return error})

}