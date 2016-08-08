var send = require('./sendmail.js');
var commit = require('./commit.js');

var timer = 0 , commit_num = 0;

function loop(){
    setTimeout(function(){
        commit.getNewCommit(function(err,num){
            if(err){
                console.log(err);
                return;
            }
            if(timer==0){
                commit_num = num;
                timer = 1;
                return;
            }
            //console.log(num , commit_num);
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
    },10*1000);
}

loop();
