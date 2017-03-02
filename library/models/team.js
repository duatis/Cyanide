/**
 * Created by duatis on 17/11/2016.
 */
var Model = require('../classes/model');

class Team extends Model
{
    constructor()
    {
        var schema =
        {
            name: {type: String, required: true},
            _players: [{type: Model.Schema.Types.ObjectId, ref: 'Player'}]
        };

        super(schema);
        return this.model;
    }

}

module.exports = new Team();
