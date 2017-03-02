/**
 * Created by duatis on 17/11/2016.
 */
var db = require('./database')
class Model
{
    /**
     *
     * @param schema structure for the mongo document based on mongoose
     * @parem methods custom methods for schema
     */
    constructor( schema, methods )
    {
        this.schema = new db.Schema(schema);                       //Create schema
        if(methods) methods(this.schema);
        this.model = db.model( this.constructor.name, this.schema );   //Create model
    }

    static get Schema()
    {
        return db.Schema;
    }
}

module.exports = Model;
