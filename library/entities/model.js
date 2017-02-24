/**
 * Created by duatis on 17/11/2016.
 */
var db = require('./database')
class Model
{
    /**
     *
     * @param schema structure for the mongo document based on mongoose
     */
    constructor( schema )
    {
        var _schema = new db.Schema(schema);                       //Create schema
        this.model = db.model( this.constructor.name, _schema );   //Create model
    }

    static get Schema()
    {
        return db.Schema;
    }
}

module.exports = Model;
