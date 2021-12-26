import mongoose from "mongoose";


const Notification = mongoose.Schema({

    reqID: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    userID: {
        type: Number,
        require: true,
    },
    file: {
        type: String,

    },

}, {
    timestamps: true,
});


export default mongoose.model("Notifications", Notification);