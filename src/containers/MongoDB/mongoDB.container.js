import { MongoClient, ObjectId } from "mongodb";

class ContainerMongoDB {
    constructor(connectionString, db, collection){
        this.mongo = new MongoClient(connectionString)
        this.db = db
        this.collection = collection
    }
    async connect() {
        try{
            await this.mongo.connect()
            console.log('Connected to database')
        } catch(error){
            throw error
        }
    }
    async getAll(){
        try{
            const data = await this.mongo
                .db(this.db)
                .collection(this.collection)
                .find({})
                .toArray()
            return data
        } catch (error){
            throw error
        }
    }
    async getById(id){
        try{
            const data = await this.mongo
                .db(this.db)
                .collection(this.collection)
                // .findOne({
                //     _id: new ObjectId(id)
                // })
                .findOne({
                    code: Number(id)
                    // name: id
                    // _id: new ObjectId(id)
                })
            return data
        } catch( error ){
            throw error
        }
    }
    async addItem (data) {
        try{
            return await this.mongo
            .db(this.db)
            .collection(this.collection) 
            .insertOne(data)
        } catch(error){
            throw error
        }
    }
    async updateItem (id,data) {
        try{
            return await this.mongo
            .db(this.db)
            .collection(this.collection) 
            .insertOne({
                _id: new ObjectId(id)
            }, {
                $set: data
            })
        } catch(error){
            throw error
        }
    }
    async deleteItem(id) {
        try {
            return await this.mongo
                .db(this.db)
                .collection(this.collection)
                .deleteOne({
                    _id: new ObjectId(id)
                });
        } catch (error) {
            throw error;
        }
    }
}

export {ContainerMongoDB}