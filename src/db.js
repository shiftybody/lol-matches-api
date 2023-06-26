import { URL } from './local.settings.js'
import pkg from 'mongodb';
const { MongoClient } = pkg;


const client = new MongoClient(URL, {useUnifiedTopology: true});

let conn;

try{
    conn = await client.connect();
    console.log("Connected to MongoDB");
} catch(e){
    console.log(e);
}

export const db = conn.db('squedules');
