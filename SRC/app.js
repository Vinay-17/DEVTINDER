const express = require("express");
const app = express();

const { connectDB } = require("./Config/database.js");
const User = require("./Model/user.js");

app.use(express.json());

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User saved successfully");
  } catch (err) {
    res.status(500).send("Error saving user: " + err.message);
  }
});

// GET USER BY EMAIL
app.get("/user", async (req, res) => {
  try {
    const userEmail = req.body.email;
   const user = await User.find({email : userEmail})
      if(user.length != 0){
        res.send(user)
      }  
      else{
        throw new Error ("user not found")
      }
    // const user = await User.findOne({ email: userEmail });

    // if (!user) {
    //   return res.status(404).send("User not found");
    // }

    // res.send(user);

  } catch (err) {
    res.status(500).send("Something went wrong: " + err.message);
  }
});

// GET ALL USERS
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send("Internal server error: " + err.message);
  }
});
 app.delete("/user" , async (req , res) => {
  try{
    const userId = req.body.userId;
    const user = await User.findByIdAndDelete( userId)
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send("user deleted successfully")
  }
  catch(err){
   res.status(400).send("something went wrong")
  }
 })
 app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

connectDB().then(() => {
  console.log("Database connected");

  app.listen(1700, () => {
    console.log("Server running on port 1700");
  });
});
