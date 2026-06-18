const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema(
{
    clubName: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String
    },

    president: {
        type: String
    },

    vicePresident: {
        type: String
    },

    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model("Club", clubSchema);