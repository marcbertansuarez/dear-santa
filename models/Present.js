const mongoose = require('mongoose');
const { Schema } = mongoose;

const presentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'You must introduce a name']
    },
    image: String,
    price: Number,
    recipient: String,
    description: {
        type: String,
        default: 'No description was provided'
    }
})

const Present = mongoose.model('Present', presentSchema);

module.exports = Present;

