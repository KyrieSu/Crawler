var request = require('request');
var cheerio = require('cheerio');

var url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Tainan_City.htm';


request(url,function(err,res,body){
    $ = cheerio.load(body);
    var weather = [];
    var tmp = $('.FcstBoxTable01 tbody tr').each(function(i,elem){
        weather.push($(this).text().split('\n'));
        // 找到class = 'FcstBoxTable01'
        // 尋找標籤 <tbody>....</tbody>
        // 再找標籤裡面的每一個 <tr>....</tr>
        // 再擷取裡面的文字部分
    });
    /* weather:
    [
        [
            '',
            '\t\t今晚至明晨 08/03 18:00~08/04 06:00',
            '\t\t28 ~ 31',
            '\t\t',
            '\t\t',
            '\t\t舒適至悶熱',
            '\t\t30 %',
            '\t\t'
        ],

        [
            '',
            '\t\t明日白天 08/04 06:00~08/04 18:00',
            '\t\t28 ~ 33',
            '\t\t',
            '\t\t',
            '\t\t舒適至悶熱',
            '\t\t0 %',
            '\t\t'
        ],

        [
            '',
            '\t\t明日晚上 08/04 18:00~08/05 06:00',
            '\t\t28 ~ 31',
            '\t\t',
            '\t\t',
            '\t\t舒適至悶熱',
            '\t\t0 %',
            '\t\t'
        ]
    ]
    */
    var output = [];
    for(var i=0;i<weather.length;i++){
        output.push({
            time : weather[i][1].substring(2).split(' ')[0], //
            temp : weather[i][2].substring(2),
            feel : weather[i][5].substring(2),
            rain : weather[i][6].substring(2)
        });
    }
    for(var i=0;i<output.length;i++){
        var time = output[i].time;
        var temp = output[i].temp;
        var feel = output[i].feel;
        var rain = output[i].rain;
        var str = time + '，溫度：' + temp + '，覺得：' + feel + '，降雨機率約：' + rain;
        console.log(str);
    }
});
