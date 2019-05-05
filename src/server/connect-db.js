import { MongoClient } from 'mongodb';
const url = `mongodb://localhost:37017/`;

let db = null;

export async function connectDb(){
    if (db) return db;
    let client = await MongoClient.connect(url, {useNewUrlParser: true});
    db = client.db("myorganizer");
    return db;
}

//connectDb();