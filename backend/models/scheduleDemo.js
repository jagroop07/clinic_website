const mongoose = require('mongoose')

const demoSchema = new mongoose.Schema({
    company: String,
    specialty: String,
    first_name: String,
    last_name: String,
    phone_number: Number,
    email: String,
    providers_number: String,
    locations_number: String,
    source: String
})

export default mongoose.models.ScheduleDemo || mongoose.model('ScheduleDemo', demoSchema)