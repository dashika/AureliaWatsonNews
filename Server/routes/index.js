var express = require('express');
var router = express.Router();
var path = require('path');


router.post('/api/watson', function (req, res, next) {
    console.log( "query === " + req.body.content);
    
    var watson = require('watson-developer-cloud');

    var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

    var discovery = new DiscoveryV1({
        username: "",
        password: "",
        version_date: DiscoveryV1.VERSION_DATE_2017_09_01
    });

    discovery.query({
            environment_id: 'system',
            collection_id: 'news-en',
            query: req.body.content
        },
        function (err, response) {
            if (err) {
                console.error(err);
            } else {
                console.log(JSON.stringify(response, null, 2));
                res.json(response);
            }
        }
    );
});


router.get('/', function (req, res, next) {
    console.log('get /');
    res.sendFile(path.resolve('index.html'));
});

module.exports = router;