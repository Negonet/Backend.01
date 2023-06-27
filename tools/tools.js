require("dotenv").config();
import { MongoClient, ServerApiVersion } from "mongodb";

// url for connection
// const uri = `mongodb+srv://user:${process.env.KEY_MG}@cluster0.gh5astt.mongodb.net/?retryWrites=true&w=majority`;

const uri = `url for connection`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client;