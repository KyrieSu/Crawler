var request = require('request');
var cheerio = require('cheerio');

// exports.getRepos = function getRepos(user, callback(err, repos))

exports.getRepos = function(username,callback){
    var url = 'https://github.com/' + username + '?tab=repositories';
    request(url,function(err,res,body){
        if(err || res.statusCode == 404){
            callback('user not found');
            return;
        }
        $ = cheerio.load(body); //get html
        var info = [];
        var tmp = $('.repo-list-name a').each(function(index,elem){ //class: repo-list-name //tag: a
            info.push($(elem).html().split('\n'));
        })
    /* info:
    [
        [ '', '        Crawler' ],
        [ '', '        Code_cpp' ],
        [ '', '        together' ]
    ]
    */
        var output = [];
        for(var i=0;i<info.length;i++){
            output.push(info[i][1].trim().substring(0));
        }
        callback(err,output);
    });
}
