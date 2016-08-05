var request = require('request');
var cheerio = require('cheerio');

exports.getinfo = function(url,callback){
    request(url,function(err,res,body){
        if(err || res.statusCode==404){
            callback(err,'404 not founded ~');
            return;
        }else{
            $ = cheerio.load(body);
            var info = [];
            var video_title = $('#eow-title').each(function(index,elem){
                info.push({ title :  $(elem).text().split('\n')[1].trim() });
            });
            var video_count = $('.watch-view-count').each(function(index,elem){
                info[index].watch = $(elem).text().substring(5);
            })
        }
        callback(err,info);
    })
}
