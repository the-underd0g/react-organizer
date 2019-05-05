import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDb } from "./connect-db";
import './initialize-db';
import { authenticationRoute } from './authenticate';
let port = 9090;
let app = express();

app.listen(port, console.log("Server listeining on Port",port));

app.use(
    cors(),

    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

authenticationRoute(app);

export const addNewTask = async task => {
    let db = await connectDb();
    console.info("addNewTask got DB, ", db);

    let collection = db.collection(`tasks`);
    await collection.insertOne(task);
};

export const updateTask = async (id, task) => {
    let { group, isComplete, name } = task;
    let db = await connectDb();
    let collection = db.collection(`tasks`);

    if (group) {
        await collection.updateOne({id}, {$set:{group}})
    }

    if (name) {
        await collection.updateOne({id}, {$set:{name}})
    }

    if (isComplete) {
        await collection.updateOne({id}, {$set:{isComplete}})
    }

};

app.post('/task/new', async (req, res) => {
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send()
});

app.put('/task/{${id}', async (req, res) => {
    let task = req.body.task;
    await updateTask(id, task);
    res.status(200).send()
});