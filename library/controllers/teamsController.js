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

    /**
     * Override parent function find to populate players
     * @param query
     * @param cb
     * @returns {Promise}
     */
    find(query, cb)
    {
        return this.model.find(query).
        populate("_players").
        exec(cb);
    }

    /**
     * Override parent function findOne to populate players
     * @param query
     * @param cb
     * @returns {Promise}
     * @see controller.find
     */
    findOne(query, cb)
    {
        return this.model.findOne(query).
        populate("_players").
        exec(cb);
    }
}

module.exports = TeamsController