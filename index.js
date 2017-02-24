var request = require('request');
var express = require('express');
var app = express();

app.get('/:msg', function(req, res) {

    var keyWord = req.params.msg;

    request('http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + encodeURI(keyWord), function(error, response, body) {
        var reBackWord = JSON.parse(body);
        console.log(reBackWord);
        if (!reBackWord.errno && 0 === reBackWord.result) {
            res.send(reBackWord.content);
        } else {
            res.send("OMG, 我出Bug了");
        }

    })

});

app.listen(3000, function() {
    console.log("3000 port started");
});