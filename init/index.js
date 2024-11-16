const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, owner: "6733400050482ff36a4c1c96",geometry: {
            type: "Point",
            coordinates: [74, 28] // Fixed values for longitude and latitude
        }
    }));
    await Listing.insertMany(initData.data);
    console.log("Data inserted successfully");
}
initDB();