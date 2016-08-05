var request = require('request');
var cheerio = require('cheerio');

exports.getinfo = function(url, callback){
    request(url, function(err, res, body){
        if(err || res.statusCode == 404){
            callback(err, '404 not founded');
            return;
        }
        $ = cheerio.load(body);
        var title = $('span#eow-title.watch-title').text().trim();
        var watch = $('div.watch-view-count').text().substring(5).replace(',', '');
        callback(err, {
            title: title,
            watch: watch
        });
    });
}
