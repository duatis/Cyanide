/**
 * Created by duatis on 02/03/2017.
 */
var chai = require('chai')
var expect = chai.expect
var faker = require('faker')
var controllers = require('../../library/controllers/module')

describe("Player controller", (done)=>{
    it("Should be defined", (done)=>{
        expect(controllers.PlayersController).to.be.ok;
        done();
    });

    it("Should extend Controller", (done) =>{
        var parent = Object.getPrototypeOf(controllers.PlayersController).name;
        expect(parent).to.equal('Controller');
        done();
    });
});