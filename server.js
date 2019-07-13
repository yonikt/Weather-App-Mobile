const express = require('express')
const request = require('request')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 1888
const cityModel = require('./models/cityModel')
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/city/:cityName', function (req, res) {
    const cityName = req.params.cityName
    request.get(`http://api.apixu.com/v1/current.json?key=b7b1ffabaca24426aa993629191007&q=${cityName}`, function (error, response) {
        let resp = JSON.parse(response.body)
        const c1 = {
            name: resp.location.name,
            updatedAt: resp.current.last_updated,
            temperature: resp.current.temp_c,
            condition: resp.current.condition.text,
            conditionPic: resp.current.condition.icon
        }
        res.json(c1)
    })
})

app.get('/cities', function (req, res) {
    cityModel.find({}, function (err, data) {
        res.send(data)
    })
})

app.post('/city', (req, res) => {
    const c2 = new cityModel(req.body)
    c2.save(() => res.json({ success: true }))
})


app.delete('/city/:cityName', function(req, res){
    const city = req.params.cityName
    cityModel.findOneAndRemove({'name': city}).then(function(){
    })
    res.end()
})




mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/city', { useNewUrlParser: true }).then(() => {
    app.listen(process.env.PORT || port, () => console.log(`Running server on port ${port}`))
})



