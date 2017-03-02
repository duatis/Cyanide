/**
 * Created by duatis on 02/03/2017.
 */
var Controller = require("../classes/controller");
var models = require("../models/module");

class PlayersController extends Controller
{
    constructor()
    {
        super(models.Player);
    }
}

module.exports = PlayersController