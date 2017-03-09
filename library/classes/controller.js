/**
 * Created by duatis on 02/03/2017.
 */
class Controller
{
    /**
     * Creates a controller based on a Model based class
     * @param model Object of type extending Model class
     */
    constructor(model)
    {
        if( model == null || Object.getPrototypeOf(model).name != 'Model' )
           throw new Error("No model parameter or incorrect extension type." +
                            "'model' parameter should extend Model Class");
        this.model = model;
    }

    create(data)
    {
        return new this.model(data);
    }

    /**
     * Validates and saves an entity if its valid
     * @param entity object of controllers model's class
     * @param cb callback funcion
     */
    save(entity, cb)
    {
        entity.validate((err)=>
        {
            if(err){
                if(cb)return cb(err);
                else return;
            }
           return entity.save((err, data)=>{
                if(cb)cb(err,data);
            });
        });
    }

    /**
     * Looks for a collection of entities
     * @param query mongo query object
     * @param cb callback funcion
     * @returns promise
     */
    find(query, cb)
    {
       return this.model.find(query,cb);
    }

    /**
     * Search for a single entities marching que query criteria
     * @param query mongo query object
     * @param cb callback funcion
     * @returns promise
     */
    findOne(query, cb)
    {
        return this.model.findOne(query, cb);
    }

    remove(query, cb)
    {
        return this.model.remove(query, cb);
    }

}


module.exports = Controller;
