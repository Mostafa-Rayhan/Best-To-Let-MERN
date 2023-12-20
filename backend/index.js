const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri ="mongodb+srv://user1:SbCzvJSOh38tsXnO@cluster0.nvwuo3f.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {

    const db = client.db("tolet");
    const usersCollection = db.collection("users");
    const roomsCollection = db.collection("rooms");

    // user manage

    // upload user
    app.post("/user", async (req, res) => {
      const body = req.body;
      const newuser = await usersCollection.insertOne(body);
      res.send(newuser);
    });

    // get user
    app.get("/user", async (req, res) => {
      const result = await usersCollection.find({}).toArray();
      res.send(result);
    });
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    app.put("/user/:id", async (req, res) => {

      const body = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedData = {
        $set: body,
      };
      const newRoom = await usersCollection.updateOne(
        query,
        updatedData,
        options
      );
      res.send(newRoom);
    });

    // delete user
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    // room manage

    // upload room
    app.post("/room", async (req, res) => {
      const body = req.body;
      const newTour = await roomsCollection.insertOne(body);
      res.send(newTour);
    });
    // get room
    app.get("/room", async (req, res) => {
      const result = await roomsCollection.find({}).toArray();
      res.send(result);
    });

    // update room

    app.put("/room/:id", async (req, res) => {

      const body = req.body;
      const id = req.params.id;
      console.log("calling this",id, body);
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedData = {
        $set: body,
      };
      const newRoom = await roomsCollection.updateOne(
        query,
        updatedData,
        options
      );
      res.send(newRoom);
    });

    //get single rom

    app.get("/room/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await roomsCollection.findOne(query);
      res.send(result);
    });

    // delete room
    app.delete("/room/:id", async (req, res) => {
      const id = req.params.id;
      console.log(" calling delete"); 

      const query = { _id: new ObjectId(id) };
      const result = await roomsCollection.deleteOne(query);
      res.send(result);
    });


    await client.db("admin").command({ ping: 1 });
    console.log("successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Travel server is Running");
});

app.listen(port, () => {
  console.log(`Travel server running on port: ${port}`);
});
