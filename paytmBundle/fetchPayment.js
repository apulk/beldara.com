const https = require('https');
const router = require('express').Router()
const paytm_config = require('./paytm/paytm_config').paytm_config;

// Set up the request
router.post('/', (request, res) => {

    /* initialize an object */
    var paytmParams = {};

    /* head parameters */
    paytmParams.head = {
        /* put transaction token here, this is same token which was generated by Initiate Transaction API */
        "txnToken" : request.body.token
    };

/* prepare JSON string for request */
var post_data = JSON.stringify(paytmParams);

var options = {

    /* for Staging */
    hostname: 'securegw-stage.paytm.in',

    /* for Production */
    // hostname: 'securegw.paytm.in',

    port: 443,
    path: `/fetchPaymentOptions?mid=${paytm_config.MID}&orderId=${request.body.orderid}`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': post_data.length
    }
};

    var response = "";
    var post_req = https.request(options, function(post_res) {
        post_res.on('data', function (chunk) {
            response += chunk;
        });
        post_res.on('end', function(){
            console.log('Response: end');
            res.status(200).send(response)
        });
    });

    // post the data
    // console.log('result ',post_data)
    post_req.write(post_data);
    post_req.end();
    

});

module.exports = router;