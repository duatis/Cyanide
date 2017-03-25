/**
 * Created by duatis on 17/03/2017.
 */
var Model = require('../classes/model');

class Event extends Model
{
    constructor()
    {
        var schema =
        {
            name: {type: String, required: true},
            date: {type: Date, required: true},
            _teams: [{type: Model.Schema.Types.ObjectId, ref: 'Team'}]

        };
        super(schema);
        return this.model;
    }
}

module.exports = new Event();