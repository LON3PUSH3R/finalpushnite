const path = require('path');
var newsFile = path.join(__dirname, '/config/news.json');
var news = require(newsFile);
var configFile = path.join(__dirname, '/config/config.json');
var config = require(configFile);
module.exports = {
    _title: 'Fortnite Game',
    _activeDate: new Date().toISOString(),
    lastModified: new Date().toISOString(),
    _locale: 'en-US',
    loginmessage: {
        _title: 'LoginMessage',
        loginmessage: {
            _type: 'CommonUI Simple Message',
            message: {
                _type: 'CommonUI Simple Message Base',
                title: '| PushServer |  | Made by LON3PUSH3R#4446 |',
                body: ' Verpasse keine Updates wenn du ins Pushnite Control Panel Guckst! | Teile Diese Version mit niemanden, denn es ist STRENGSTENS VERBOTEN!'
            }
        },
        _activeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    },
    battleroyalenews: {
        news: {
            platform_messages: [],
            _type: 'Battle Royale News',
            messages: [
                {
                    image: news.image1,
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    adspace: news.adspace1,
                    title: news.title1,
                    body: news.text1,
                    spotlight: false
                },
                {
                    image: news.image2,
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    adspace: news.adspace2,
                    title: news.title2,
                    body: news.text2,
                    spotlight: false
                },
                {
                    image: news.image3,
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    adspace: news.adspace3,
                    title: news.title3,
                    body: news.text3,
                    spotlight: false
                }
            ]
        },
        _title: 'battleroyalenews',
        header: '',
        style: 'None',
        _activeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    },
    emergencynotice: {
        news: {
            platform_messages: [],
            _type: 'Battle Royale News',
            messages: [
                {
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    subgame: 'br',
                    title: 'Pushnite Beta | MADE BY LON3PUSH3R#4446 |',
                    body: config.announcement,
                    spotlight: true
                }
            ]
        },
        _title: 'emergencynotice',
        _activeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    }
}