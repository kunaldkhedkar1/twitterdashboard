import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme=> {
  let themeType = theme.palette.type;
  let hoverBg = themeType === 'dark' ? 'rgba(0,0,0,0.8)' : '#f5f8fa'
  let contentColor = themeType === 'dark' ? 'white' : 'rgb(28, 32, 34)'
  return({
  card: {
    '&:hover': {
      backgroundColor: hoverBg
    },
    minWidth: 275,
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    cursor: 'pointer',
    // backgroundColor: '#fff',
    borderBottom: '1px solid #e6ecf0',
    boxShadow: 'none',
    borderRadius: '0',
  },
  CardContent: {
    paddingBottom: '0px'
  },
  title: {
    fontSize: 14,
  },
  content: {
    color: contentColor,
    font: '16px/1.4 Helvetica, Roboto, "Segoe UI", Calibri, sans-serif',
    lineHeight: '1.4',
    fontSize: 16,
    textAlign: 'left',
    direction: 'ltr',
  },
  twtrlnk: {
    color: 'rgb(43, 123, 185);',
  },
  retweet: {
    width: '100%'
  },
  Icon: {
    width: '10%',
    float: 'left',
    // color: '#657786',
    fontSize: 14,
    margin: '0 6px 0 0',
    position: 'relative',
    top: 2
  },
  retweetIcon: {
    width: 45,
    height: 26,
    marginTop: '-16%'
  },
  retweetedText: {
    width: '90%'
  }
})};

function Tweet(props) {
  const { classes, data } = props;
  let {createdAt , isRetweet, username, text, id} = data;
  let url = `https://twitter.com/i/web/status/${id}`
  // TODO: correctly formt date
  let localDate = new Date(createdAt).toLocaleString();
  // TODO: check this
  return (
    <Card className={classes.card}>
      <CardContent className={classes.CardContent}>
          {/* {localDate} */}
          {isRetweet &&
            <div className={classes.retweet}>
              <div className={classes.Icon}>
                <img className={classes.retweetIcon} src="http://iccpic-image.oss-ap-northeast-1.aliyuncs.com/previews/d4/77/d4/reload%20repeat%20retweet%20sh.svg"></img>
              </div>
              <div className={classes.retweetedText}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>

                {username} Retweeted
        </Typography>

               </div>
            </div>
          }
        <Typography className={classes.content} fontSize="fontSize">
          {text}
        </Typography>
        <Typography style={{ marginTop: '3%' }} size="small"><a className={classes.twtrlnk} href={url} target="_blank">Read More</a></Typography>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

Tweet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tweet);