var request = require('request');
var cheerio = require('cheerio');

// exports.getRepos = function getRepos(user, callback(err, repos))
// username = KyrieSu // repos = ?tab=repositories
request('https://github.com/KyrieSu?tab=repositories',function(err,res,body){
    if(err){
        console.log(err);
    }else{
        $ = cheerio.load(body); //get html
        var info = [];
        var tmp = $('.repo-tab ul div').each(function(index,elem){
            info.push($(elem).text().split('\n'));
        })
    }
    console.log(info);
});
