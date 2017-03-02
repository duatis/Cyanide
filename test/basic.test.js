/**
 * Created by duatis on 17/11/2016.
 */
var chai = require('chai')
var expect = chai.expect
var faker = require('faker')
var models = require('../library/entities/module')

describe('Entities', function()
{
    it('Should be invalid if empty', (done) => {
        var player = new models.Player()
        player.validate((err)=>{
            expect(err).to.be.not.null
            done()
        })
    })

    it('Should be valid if required fields are filled', (done) => {
        var player = generateValidPlayer()
        player.validate((err)=>{
            expect(err).to.be.null
            done()
        })
    })

    it('Should save valid objects', (done) => {
        var player = generateValidPlayer()
        player.save((err, player) =>{
            expect(err).to.be.null
            expect(player).to.be.ok
            done()
        })
    })

    it("Should not save invalid objects", (done) =>{
        var player = new models.Player()
        player.save( (err, player )=>{
            expect(err).to.be.ok
            expect(player).not.to.be.ok
            done()

        })
    })
})

var generateValidPlayer = ()=>{
    return new models.Player({name: faker.name.findName(), number: faker.random.number()})
}

/*
models.Player.findOne((err,data)=>{
    team._players.push(data)
    team.save()
})*/
