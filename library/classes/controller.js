/**
 * Created by duatis on 02/03/2017.
 */
class Controller
{
    /**
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

    find(query, cb)
    {
       return this.model.find(query,cb);
    }

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
