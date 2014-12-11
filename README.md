restLogin
=========

Login &amp; logout periodically to the LROS REST server.

The code is test if there is any minimum time between two successive logout & login.
I started this because I've got the following error when my script logged out (and 5 seconds later) logged back-in.

Dec 11 13:27:53 LROS LROS: Error: User does not exist
Dec 11 13:27:53 LROS LROS:     at findUserById (/usr/linerate/node/node_js/http_serv.js:38:8)
Dec 11 13:27:53 LROS LROS:     at /usr/linerate/node/node_js/http_serv.js:52:3
Dec 11 13:27:53 LROS LROS:     at pass (/usr/linerate/node/node_modules/passport/lib/passport/index.js:217:7)
Dec 11 13:27:53 LROS LROS:     at Passport.deserializeUser (/usr/linerate/node/node_modules/passport/lib/passport/index.js:221:4)
Dec 11 13:27:53 LROS LROS:     at SessionStrategy.authenticate (/usr/linerate/node/node_modules/passport/lib/passport/strategies/session.js:40:28)
Dec 11 13:27:53 LROS LROS:     at Passport.authenticate (/usr/linerate/node/node_modules/passport/lib/passport/middleware/authenticate.js:114:14)
Dec 11 13:27:53 LROS LROS:     at Object.handle (native)
Dec 11 13:27:53 LROS LROS:     at next (/usr/linerate/node/node_modules/connect/lib/http.js:203:15)
Dec 11 13:27:53 LROS LROS:     at Passport.initialize (/usr/linerate/node/node_modules/passport/lib/passport/middleware/initialize.js:69:5)
Dec 11 13:27:53 LROS LROS:     at Object.handle (native)

