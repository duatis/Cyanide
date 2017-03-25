/**
 * Created by duatis on 17/03/2017.
 */
var Controller = require("../classes/controller");
var models = require("../models/module");

class EventsController extends Controller
{
    constructor()
    {
        super(models.Event);
    }

    find(query, cb)
    {
        return this.model.find(query).
        populate("_teams").
        populate("_teams._players").
        exec(cb);
    }

    findOne(query, cb)
    {
        return this.model.findOne(query).
        populate("_teams").
        populate("_teams._players").
        exec(cb);
    }
}

module.exports = EventsController
