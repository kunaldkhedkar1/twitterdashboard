import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    '&:hover': {
      backgroundColor: '#f5f8fa'
    },
    minWidth: 275,
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: '#fff',
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
    color: 'rgb(28, 32, 34)',
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
    color: '#657786',
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
};

function Tweet(props) {
  const { classes, data } = props;
  const date = data.created_at;
  // TODO: correctly formt date
  let localDate = new Date(date).toLocaleString();
  // TODO: check this
  const url = data.entities.urls[0] ? data.entities.urls[0].url : '#'
  return (
    <Card className={classes.card}>
      <CardContent className={classes.CardContent}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {/* {localDate} */}
          {data.retweeted_status &&
            <div className={classes.retweet}>
              <div className={classes.Icon}>
                <img className={classes.retweetIcon} src="http://iccpic-image.oss-ap-northeast-1.aliyuncs.com/previews/d4/77/d4/reload%20repeat%20retweet%20sh.svg"></img>
              </div>
              <div className={classes.retweetedText}>
                {data.user.name} Retweeted
               </div>
            </div>
          }
        </Typography>
        <Typography className={classes.content} fontSize="fontSize">
          {data.text}
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