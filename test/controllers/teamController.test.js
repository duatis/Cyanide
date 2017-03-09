/**
 * Created by duatis on 02/03/2017.
 */
var chai = require('chai')
var expect = chai.expect
var faker = require('faker')
var controllers = require('../../library/controllers/module')

describe("Team controller", (done)=>{
    it("Should be defined", (done)=>{
        expect(controllers.TeamsController).to.be.ok;
        done();
    });

    it("Should extend Controller", (done) =>{
        var parent = Object.getPrototypeOf(controllers.TeamsController).name;
        expect(parent).to.equal('Controller');
        done();
    });

    it("Should be controller of Team model", (done) =>{
        var controller = new controllers.TeamsController();
        expect(controller.model.modelName).to.eql('Team');
        done();
    });
    
    it("Should respond to base controller's functions", (done) =>{
        var controller = new controllers.TeamsController();
        expect(controller).to.respondsTo('findOne');
        expect(controller).to.respondsTo('find');
        expect(controller).to.respondsTo('save');
        expect(controller).to.respondsTo('remove');
        done();
    })
});