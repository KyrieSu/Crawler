var send = require('./sendmail.js');
var commit = require('./commit.js');

var commit_num = 27;

function loop(){
    setTimeout(function(){
        commit.getNewCommit(function(err,num){
            if(err){
                console.log(err);
                return;
            }
            if(num!=commit_num){ //new commit
                commit_num = num;
                send.send(function(err,msg){
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log(msg);
                })
            }else{
                console.log('no new commit in KyrieSu/Crawler');
            }
        })
        loop();
    },20*1000);
}

loop();
