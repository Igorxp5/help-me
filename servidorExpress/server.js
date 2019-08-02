var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')

var profilesRaw = fs.readFileSync('profiles.json')
var profiles = JSON.parse(profilesRaw)

var achievementsRaw = fs.readFileSync('achievements.json')
var achievements = JSON.parse(achievementsRaw)

var idPub = 0

var app = express()

const port = process.env.PORT || 5000;
app.listen(port);


app.use(express.static('website'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/get-profile/:name', function(req, res){
    let name = req.params.name
    let data = profiles.profiles

    let foundProf = data.find(function (prof){
        return prof.name == name
    })

    if(foundProf){
        res.send(foundProf)
    }else{
        res.status(400).send({messbitrhday: "profile not found"})
    }
})

app.get('/login/:email/:pass', function(req, res){
    let email = req.params.email
    let pass = req.params.pass
    let data = profiles.profiles

    let foundProf = data.find(function (prof){
        return prof.email == email
    })

    if(foundProf){
        if(foundProf.password == pass){
            res.send("ok")
        }else{
            res.send("fail to login")
        }
    }else{
        res.status(400).send({message: "profile not found"})
    }
})

app.get('', function(req, res){
    res.send(profiles.profiles)
})

var requests = []
app.get('/get-requests', function(req, res){
    var requestsA = []
    for(let i = 0; i < requests.length; i++){
        if(requests[i].status){
            requestsA.push(requests[i])
        }
    }
    res.send(requestsA)
})


app.get('/new-request/:id/:place/:request', function(req, res){
    let id = req.params.id
    let place = req.params.place
    let request = req.params.request
    let data = profiles.profiles

    let foundProf = data.find(function (prof){
        return prof.id == id
    })
    requests.push({
        id: idPub++,
        userId: id,
        userName: foundProf.name,
        place: place,
        status: true,
        request: request
    })

    res.send("request added to the list")
})

app.get('/new-profile/:name/:bitrhday/:email/:pass', function(req, res){
    let email = req.params.email
    let bitrhday = req.params.bitrhday
    let data = profiles.profiles
    let id = profiles.profiles.length 
    let pass = req.params.pass
    let name = req.params.name
    let foundProf = data.find(function (prof){
        return prof.email == email
    })
    if(!foundProf){
        profiles.profiles[id] = {"id":id, "email":email,"password": pass,"name":name, "birthday":bitrhday, "points": 0, "achievements":[]}
        var dataA = JSON.stringify(profiles, null, 4)
        fs.writeFile('profiles.json', dataA, function(){
        res.send({msg: "Thank you"})
        })
    }else{
        res.send({msg: "erro"})
    }
})


app.get('/solved/:id/:reqId', function(req, res){
    let id = req.params.id
    let reqId = req.params.reqId
    requests[reqId].status = false
    if(profiles.profiles[id]){
        profiles.profiles[id].points++
        if(profiles.profiles[id].points == 1 || profiles.profiles[id].points == 5 || profiles.profiles[id].points == 10 || profiles.profiles[id].points == 15 || profiles.profiles[id].points == 20 || profiles.profiles[id].points == 25 || profiles.profiles[id].points == 30 || profiles.profiles[id].points == 35 || profiles.profiles[id].points == 40 || profiles.profiles[id].points == 45 || profiles.profiles[id].points == 50){
            
                profiles.profiles[id].achievements.push(achievements[Math.floor((profiles.profiles[id].points/5))])
            
        }
        var dataA = JSON.stringify(profiles, null, 4)
        fs.writeFile('profiles.json', dataA, function(){
        res.send({msg: "Thank you"})
        })
    }

})


// get> localhost:3000/get-profile/:name encontrar perfil pelo nome
// get> localhost:3000lista de todos os perfis
// get> localhost:3000/get-requests' lista de todos os pedidos ativos
// get> localhost:3000/new-request/:id/:place/:request adiciona novo pedido
// get> localhost:3000/solved/:id/:reqId resolve pedido
// get> localhost:3000/new-profile/:name/:bitrhday/:email/:pass adiciona novo perfil
// get> localhost:3000/login/:email/:pass login

