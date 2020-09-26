
// imports
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

// custom function definition
const log = console.log;

require('dotenv').config();


function HandlePostRequest()
{
    // Body Parser Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // get information from index.html doc
    app.get('/', (req, res) =>
    {
        res.render('contact me!');
    });

    app.post('/api/sendMail', (req, res) =>
    {
        // debug
        log(req.body);

    //#region NODEMAILER start
        const output = `\
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
        <li style="list-style-type: none;">Name: ${req.body.personName}</li>
        <li style="list-style-type: none;">Company: ${req.body.companyName}</li>
        <li style="list-style-type: none;">Email: ${req.body.emailName}</li>
        <li style="list-style-type: none;">Phone: ${req.body.phoneName}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>`;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: `gmail`,

            // sender's email and password info
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
                // user: "dummytestfucyou@gmail.com",
                // pass: "123456789#!"
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions =
        {
            // process.env.EMAIL
            from: req.body.email, // sender address
            to: 'leo1997.work@gmail.com', // list of receivers
            cc: 'brandi.00@outlook.com',
            subject: 'Node Contact Request', // Subject line
            text: req.body.message, // plain text body

            // the html key will overwrite the text key when received by the receiver
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) =>
        {
            if (error)
            {
                return log(error);
            }

            log('Message sent: %s', info.messageId);
            log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.render('contact', { msg: 'Email has been sent' });
        });
    //#endregion NODEMAILER end
    });

    // listen at the specified port
    var server = app.listen(3001, () =>
    {
        var host = server.address().address;
        var port = server.address().port;

        log("app listening at http://%s:%s", host, port);
    });
}

// simiulate a main method from languages like java and C
function Main()
{
    HandlePostRequest();
}


// runs the Main method
Main();

// run node dummy.js
// then type the following in the browser:
// http://127.0.0.1:8081/








