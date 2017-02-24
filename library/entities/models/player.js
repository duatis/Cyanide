/**
 * Created by duatis on 17/11/2016.
 */
var Model = require('../model');

class Player extends Model
{
    constructor()
    {
        var schema =
        {
            name: {type: String, required: true},
            number: {type: Number, required: true}
        };
        super(schema);
        return this.model;
    }
}

module.exports = new Player();