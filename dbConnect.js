const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://shaifansari9695486193:S4yfLHcPd0p5VYnT@cluster0.pjfwf5s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      // useNewUrlPareser: true,
      //   strict: true,
      //   deprecationErrors: true,
      //   useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
