/**
 * Created by duatis on 24/02/2017.
 */
var chai = require('chai')
var expect = chai.expect
var faker = require('faker')
var models = require('../../library/models/module')


describe("Player model", ()=>{
    it("Should be defined", (done)=>{
        expect(models.Player).to.be.ok;
        done();
    });

    it("Should save a player", (done)=>{
        var model = new models.Player();
        model.name = faker.name.findName();
        model.number = faker.random.number();
        model.save((err, data) =>{
            if(err) return done(err);
            done();
        });
    });

    it("Player name should be required", (done)=>{
        var model = new models.Player();
        model.number = faker.random.number();
        model.validate((err)=>{
            expect(err).to.be.not.null
            done()
        })
    });

    it("Player number should be required", (done)=>{
        var model = new models.Player();
        model.name = faker.name.findName();
        model.validate((err)=>{
            expect(err).to.be.not.null
            done()
        })
    });
})