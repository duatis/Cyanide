/**
 * Created by duatis on 25/02/2017.
 */
/**
 * Created by duatis on 24/02/2017.
 */
var chai = require('chai')
var expect = chai.expect
var faker = require('faker')
var models = require('../../library/models/module')


describe("Team model", ()=>{
    it("Should be defined", (done)=>{
        expect(models.Team).to.be.ok;
        done();
    });

    it("Should save a team", (done)=>{
        var model = new models.Team();
        model.name = faker.name.findName();
        model.save((err, data) =>{
            if(err) return done(err);
            done();
        });
    });

    it("Name should be required", (done)=>{
        var model = new models.Team();
        model.validate((err)=>{
            expect(err).to.be.not.null
            done()
        })
    });

    it("Should include players", (done)=>{
        var player = generateValidPlayer();
        player.save((err, data)=> {
            if(err)return done(err);
            var team = new models.Team({name: faker.name.findName()});
            team._players.push(player);
            team.save((err, data) => {
                if (err) return done(err);
                expect(data._players).not.to.be.empty;
                done();
            });
        });
    });

    it("Populate should return valid players", (done) =>{
        models.Team.findOne({_players:{$not:{$size:0}}}).
        populate("_players").
        exec((err, data) =>{
            if(err)return done(err);
            var player = new models.Player(data._players[0]);
            player.validate((err)=>{
                if(err)return done(err);
                expect(err).to.be.null
                done();
            })
        });
    });
});

var generateValidPlayer = ()=>{
    return new models.Player({name: faker.name.findName(), number: faker.random.number()})
}