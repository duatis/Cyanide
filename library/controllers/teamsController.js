/**
 * Created by duatis on 02/03/2017.
 */
var Controller = require("../classes/controller");
var models = require("../models/module");

class TeamsController extends Controller
{
    constructor()
    {
        super(models.Team);
    }
}

module.exports = TeamsController