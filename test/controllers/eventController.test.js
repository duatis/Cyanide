/**
 * Created by duatis on 17/03/2017.
 */
var chai = require('chai')
var expect = chai.expect
var faker = require('faker')
var controllers = require('../../library/controllers/module')
var models = require('../../library/models/module')

describe("Player controller", (done)=> {
    it("Should be defined", (done)=> {
        expect(controllers.EventsController).to.be.ok;
        done();
    });

    it("Should extend Controller", (done) => {
        var parent = Object.getPrototypeOf(controllers.EventsController).name;
        expect(parent).to.equal('Controller');
        done();
    });


    it("Should be controller of Event model", (done) => {
        var controller = new controllers.EventsController();
        expect(controller.model.modelName).to.eql('Event');
        done();
    });

    it("Should respond to base controller's functions", (done) => {
        var controller = new controllers.EventsController();
        expect(controller).to.respondsTo('findOne');
        expect(controller).to.respondsTo('find');
        expect(controller).to.respondsTo('save');
        expect(controller).to.respondsTo('remove');
        done();
    })

    it("Should save teams", (done) => {
        var controller = new controllers.EventsController();
        var event = controller.create({
            name: faker.name.findName(),
            date: faker.date.future()
        });
        models.Team.find({_players: {$not: {$size: 0}}}).limit(2).exec((err, data) => {
            if (err)return done(err);
            data.forEach((i)=>event._teams.push(i));
            controller.save(event, (err, data) => {
                if (err)return done(err);
                controller.findOne(data, (err, data)=> {
                    if (err)return done(err);
                    expect(data._teams.length).to.eql(2);
                    done();
                })

            });
        });
    });

    it("Should save teams with promises", (done) => {
        var controller = new controllers.EventsController();
        var teams = new controllers.TeamsController();
        var event = controller.create({
            name: faker.name.findName(),
            date: faker.date.future()
        });
        var find = teams.find({_players: {$not: {$size: 0}}});
        find.
        then((_teams)=> {
            _teams.forEach((i)=>event._teams.push(i));
            var save = controller.save(event);
            save.
            then((_event)=> {
                var findOne = controller.findOne(event._id);
                findOne.then((data)=> {
                    expect(data._teams.length).to.eql(_teams.length);
                    done();
                }).then(null, (err)=>done(err));
            }).
            then(null, (err)=>done(err));
        }).
        then(null, (err)=>done(err));
    });

    it("findOne should populate teams", (done) =>{
        var controller = new controllers.EventsController();
        controller.findOne({_teams:{$not:{$size:0},$exists:true}}, (err,data)=>{
            if(err)return done(err);
            expect(data._teams).to.be.instanceof(Array);
            var teams = new models.Team(data._teams[0]);
            teams.validate((err)=>{
                if(err) return done(err);
                done();
            });
        });
    });

    it("findOne should populate teams & players", (done) =>{
        var controller = new controllers.EventsController();
        controller.findOne({_teams:{$not:{$size:0},$exists:true,_teams:{$elemMatch:{_players:{$not:{$size:0}}}}}}, (err,data)=>{
            if(err)return done(err);
            console.log(data);
            expect(data._teams).to.be.instanceof(Array);
            expect(data._teams[0]._players).to.be.instanceof(Array);
            console.log(data._teams[0]._players);
            var player = new models.Player(data._teams[0]._players[0]);
            player.validate((err)=>{
                if(err) return done(err);
                done();
            });
        });
    });
});