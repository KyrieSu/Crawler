var readline = require('readline');
var repo = require('./parseGithub.js');

var rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question('> Enter a user on github : ',function(ans){
    repo.getRepos(ans,function(err,repo){
        if(err){
            console.log(err);
        }else{
            console.log(repo);
        }
    })
    rl.close();
});
