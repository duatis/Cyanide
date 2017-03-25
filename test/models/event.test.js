/**
 * Created by duatis on 17/03/2017.
 */
var chai = require('chai')
var expect = chai.expect
var faker = require('faker')
var models = require('../../library/models/module')

describe("Event model", ()=>{
    it("Should be defined", (done)=>{
        expect(models.Event).to.be.ok;
        done();
    });

    it("Event name should be required", (done)=>{
        var model = new models.Event();
        model.date = faker.date.future();
        model.validate((err)=>{
            expect(err).to.be.not.null
            done()
        })
    });


    it("Event date should be required", (done)=>{
        var model = new models.Event();
        model.name = faker.name.findName();
        model.validate((err)=>{
            expect(err).to.be.not.null
            done()
        })
    });

    it("Should save an event", (done)=>{
        var model = new models.Event();
        model.name = faker.name.findName();
        model.date = faker.date.future();
        model.save((err, data) =>{
            if(err) return done(err);
            done();
        });
    });


    it("Should include teams", (done)=>{
        var team = generateValidTeam();
        team.save((err, data)=> {
            if(err)return done(err);
            var event = new models.Event({name: faker.name.findName(), date: faker.date.future()});
            event._teams.push(team);
            event.save((err, data) => {
                if (err) return done(err);
                expect(data._teams).not.to.be.empty;
                done();
            });
        });
    });

})

var generateValidTeam = function()
{
    return new models.Team({name: faker.name.findName(), number: faker.random.number()})

}