const express = require('express')

const side = require('cookies')

const idgen = require('idgen')

const storage = require('nedb')

const users = new storage({
    filename: 'storage/users',
    autoload: true
})

const challenges = new storage({
    filename: 'storage/challenges',
    autoload: true
})

const application = express()

application.set('view engine', 'hbs')

application.use(express.static('source'))
application.use(express.urlencoded(
    {
        extended: true
    }
))

application.use(function(request, response, afterawards) {

    global.cookies = new side(request, response, {
        keys: ['zdRqPdoOjl4fPLrzYbfXY1Gu6uO6VtBSU38Ku8ApJg9KXE6w2U']
    })
    
    global.authorization = cookies.get('_host-myapps.csrf')

    global.key = idgen('64')

    switch (authorization ?? 'Authorization not successful, try again') {

        case 'Authorization not successful, try again': {
            
            cookies.set('_host-myapps.csrf', key, {
                'maxAge': '86400000',
                'signed': false
            })

                break

        }
    }
    
    afterawards()

})
    
application.get('/', function(_, response) {

    response.render('myapps', {
        'layout': 'layouts/myapps'
    })
})
 
application.get('/continue-as-guest', function(_, response) {

    challenges.find({

    }, function(_, challenges) {

        response.render('continue-as-guest', {
            'layout': 'layouts/continue-as-guest',

            challenges: challenges
        })
    })
})

application.get('/challenges', function(_, response) {

    challenges.find({
        type: 'in-progress'
    }, function(_, challenges) {

        response.render('challenges', {
            'layout': 'layouts/continue-as-guest',

            challenges: challenges
        })
    })
})

application.get('/terms-of-service', function(_, response) {

    response.render('terms-of-service', {
        'layout': 'layouts/myapps'
    })
})

//API access
application.post('/api/authorization', function(request, response) {

    switch (request.body.name ?? 'Full name is incorrect, try again') {

        case 'Full name is incorrect, try again': {
            
            response.send('Full name is incorrect, try again')

                break

        }
        case '': {
            
            response.send('Full name is required, try again')

                break

        }
        default: {

            switch (request.body.email_address ?? 'Email address is incorrect, try again') {

                case 'Email address is incorrect, try again': {
                    
                    response.send('Email address is incorrect, try again')
        
                        break
        
                }
                case '': {
                    
                    response.send('Email address is required, try again')
        
                        break
        
                }
                default: {
        
                    switch (request.body.password ?? 'Password is incorrect, try again') {

                        case 'Password is incorrect, try again': {
                            
                            response.send('Password is incorrect, try again')
                
                                break
                
                        }
                        case '': {
                            
                            response.send('Password is required, try again')
                
                                break
                
                        }
                        default: {
                
                            users.findOne({
                                email_address: request.body.email_address
                            }, function(_, user) {

                                switch (user ?? 'User not found, congratulations') {

                                    case 'User not found, congratulations': {

                                        const documents = {
                                            name: request.body.name,
                                            email_address: request.body.email_address,
                                            password: request.body.password
                                        }
                                        
                                        users.insert(documents, function() {
                                            
                                            response.send('User has been listed, congratulations')

                                        })

                                            break

                                    }
                                    default: {

                                        response.send('Email address has already been used, try again')

                                    }
                                }
                            })
                        }
                    }
                }
            }
        }
    }
})

application.post('/api/sign-in', function(request, response) {

    switch (request.body.email_address ?? 'Email address is incorrect, try again') {

        case 'Email address is incorrect, try again': {
            
            response.send('Email address is incorrect, try again')

                break

        }
        case '': {
            
            response.send('Email address is required, try again')

                break

        }
        default: {

            switch (request.body.password ?? 'Password is incorrect, try again') {

                case 'Password is incorrect, try again': {
                    
                    response.send('Password is incorrect, try again')
        
                        break
        
                }
                case '': {
                    
                    response.send('Password is required, try again')
        
                        break
        
                }
                default: {
        
                    users.findOne({
                        email_address: request.body.email_address,
                        password: request.body.password
                    }, function(_, user) {

                        console.log(user ?? 'User not found, try again')

                        switch (user ?? 'Failed to sign in, try again') {

                            case 'Failed to sign in, try again': {

                                response.send('Failed to sign in, try again')

                                    break

                            }
                            default: {

                                response.send('Successfully sign in, congratulations')

                            }
                        }
                    })
                }
            }
        }
    }
})

application.post('/api/sort', function(request, response) {

    challenges.find({
        type: request.body.sort
    }, function(_, challenges) {

        response.send({
            challenges: challenges
        })
    })
})

application.listen('80')