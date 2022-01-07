const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());
const { addRecord , getRecord} = require("./user.js")

const cors = require("cors");
app.use(cors());


app.get("/get-records", async (req, res) => {
  const list = await getRecord();
  res.json(list);
});


app.post("/add-records", async (req, res) => {
    const user = req.body;
    await addRecord(user);
    res.json(" Added Successfully" );
});



app.listen(4000, () => console.log("server started"));