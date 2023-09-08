import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://seanfowles:Q1w2e3r4@clusterice.2xr9otn.mongodb.net/";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;