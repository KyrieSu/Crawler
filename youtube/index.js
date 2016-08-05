var readline = require('readline');
var tube = require('./parse.js')
// getinfo(err,arr)
var rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question('> Enter a link on youtube : ',function(ans){
    tube.getinfo(ans,function(err,info){
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
    rl.close();
});
