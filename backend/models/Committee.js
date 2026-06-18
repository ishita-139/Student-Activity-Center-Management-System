const mongoose = require("mongoose");

const committeeSchema = new mongoose.Schema(
{
    committeeName: {
        type: String,
        required: true,
        unique: true
    },

    description: String,

    president: String,

    vicePresident: String,

    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model("Committee", committeeSchema);