var send = require('./sendmail.js');
var commit = require('./commit.js');

commit.getNewCommit(function(err,boolean){
    if(err){
        console.log(err);
        return;
    }
    if(boolean){
        send.send(function(err,msg){
            if(err){
                console.log(err);
                return;
            }
            console.log(msg);
        })
    }else{ // no new commit
        console.log('no new commit in KyrieSu/Crawler');
    }
})
