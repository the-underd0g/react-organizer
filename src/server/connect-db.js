import { MongoClient } from 'mongodb';
const url = `mongodb://localhost:37017/myorganizer`;

let db = null;

export async function connectDb(){
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParser: true})
    db = client.db();
    console.info("Got DB, ", db)
    return db;
}

//connectDb();