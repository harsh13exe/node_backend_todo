const mongoose = require("mongoose");

const connection = mongoose
  .createConnection(
    "mongodb+srv://harshdhiman74949:harsh122334@cluster18.kmkv1.mongodb.net/"
  )
  .on("open", () => {
    console.log("Mongoose connected");
  })
  .on("error", () => {
    console.log("error");
  });

module.exports = connection;
