/**
 * Created by duatis on 17/11/2016.
 */
var Model = require('../model');

class Team extends Model
{
    constructor()
    {
        var schema =
        {
            name: String,
            _players: [{type: Model.Schema.Types.ObjectId, ref: 'Player'}]
        };
        super(schema);
        return this.model;
    }
}

module.exports = new Team();
