const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://aswathy:ashexhere22@ac-d01d9ty-shard-00-00.36nhatr.mongodb.net:27017,ac-d01d9ty-shard-00-01.36nhatr.mongodb.net:27017,ac-d01d9ty-shard-00-02.36nhatr.mongodb.net:27017/evdb?ssl=true&replicaSet=atlas-sg5pws-shard-0&authSource=admin&appName=Cluster0")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((error) => {
        console.log(error)
    })


const Booking = mongoose.model("Bookings", new mongoose.Schema(
    {
        bookingId: Number,
        ownerName: String,
        email: String,
        phone: String,
        vehicleRegistrationNumber: String,
        vehicleBrand: String,
        vehicleModel: String,
        batteryCapacity: Number,
        connectorType: String,
        chargingDate: String,
        timeSlot: String,
        estimatedUnits: Number,
        chargingBayNumber: Number
    }
))


app.post("/add-booking", async (req, res) => {

    await Booking.create(req.body)

    res.json({
        "status": "success"
    })

})


app.get("/view-booking", async (req, res) => {

    const bookings = await Booking.find()

    res.send(bookings)

})


app.listen(5002, () => {

    console.log("Server Started")

})