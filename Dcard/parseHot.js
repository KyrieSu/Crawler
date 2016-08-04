var request = require('request');
var cheerio = require('cheerio');

request('https://www.dcard.tw/f',function(err,res,body){
    if(err){
        console.log(err);
        return;
    }
    $ = cheerio.load(body);
    var article = [];
    var tmp = $('.PostEntry_title_t1BVP').each(function(index,elem){
        if(index==10) return false;
        article.push( { title : $(elem).text().split('\n')[0] } );
    })
    var tmp = $('.PostLikeCount_likeCount_2uhBH').each(function(index,elem){
        if(index == 10) return false;
        article[index].good = $(elem).text();
    })
    console.log(article);
})
