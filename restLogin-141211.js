/* Repeat login & logout to the REST server
 * 2014-12-11: ST
 */
'use strict';
var client = new (require('lrs/managementRest')).Client();
var uid = {'username': 'admin', 'password': 'changeme'};
var period = 5 * 1000;  // milli-seconds
var path = '/status/system/uptime';

function timer(arg) {
    client.on('loginFailure', function(resp, body) {
        console.log('Failed to login REST: ' + resp.statusCode);
        return;
    });
    client.on('login', function() {
        var body = '';
        client.getJSON(path, function(response) {
            response.on('data', function(chunk) {
                body += chunk;
            });
            response.on('end', function() {
                var obj = JSON.parse(body);
                console.log('uptime: ' + obj[path]['data']);
                client.logOut();
                return;
            });
        });
    });
    client.logIn(uid);
}

setInterval(timer, period);
