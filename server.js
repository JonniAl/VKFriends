const axios = require('axios');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const getAccessToken = async (client_id, client_secret, redirect_url, code) => {
    return (
        await axios.get(`https://oauth.vk.com/access_token?client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_url}&code=${code}`, {
        })
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
            })
    )
};

// An api endpoint that returns a short list of items
app.post('/token', async (req, res) => {

    const answer = await getAccessToken(req.body.client_id, req.body.client_secret, req.body.redirect_url, req.body.code);
    res.send(answer);
});


const port = process.env.PORT || 4000;
app.listen(port);

console.log('App is listening on port ' + port);