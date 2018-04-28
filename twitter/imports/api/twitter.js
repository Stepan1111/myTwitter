Meteor.methods({
  getTweet: function(inpValue) {
      if(Meteor.isServer){
        const Twit = require('twit');
        const T = new Twit({
          consumer_key: 'WGElLpg5Jdx18KXe0cvH4QL5U', 
          consumer_secret: '8aKiEwPnNCf70RW0HYHV1o4DM9Ft12TkmCU85OFPR3xQByCBnp',
          access_token: '709177313179607044-uHVHDo0XgobUJ5rVRwDageJqyzrmcdG',
          access_token_secret: 'qz5sdMKScEHySpEQKcobNTB9SVBwK1AevP5yjI8KvXVNQ'
        });
        return Meteor.wrapAsync((callback)=>{
            T.get('search/tweets', { q: inpValue, count: 100 }, function(err,data, res){
                callback(err, data);
            });
        })();
      }
  }
});
  
