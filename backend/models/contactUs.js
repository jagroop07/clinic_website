const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    company: String,
    email: {
        type: String,
        required: true
    },
    phone_number: Number,
    message: String
})

export default mongoose.models.ContactUs || mongoose.model('ContactUs', contactSchema)