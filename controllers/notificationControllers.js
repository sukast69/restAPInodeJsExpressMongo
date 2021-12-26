import Notification from "../models/Notification.js";
export const getNotifs = async(_req, res) => {

    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }

}

export const getNotifID = async(_req, res) => {

    try {
        const notifications = await Notification.findById(_req.params.id);
        res.status(200).json(notifications);

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }

}

export const saveNotif = async(_req, res) => {

    const notification = new Notification(_req.body);

    try {

        const ressave = await notification.save();
        res.status(200).json(ressave);

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }


}

export const updateNotif = async(_req, res) => {
    var notifID = await Notification.findById(_req.params.id);

    if (!notifID) return res.status(404).json({ status: false, message: " Data tidak ada!" });


    try {

        const ressave = await Notification.updateOne({ _id: _req.params.id }, { $set: _req.body });
        res.status(200).json(ressave);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }


}

export const deletedNotif = async(_req, res) => {
    var notifID = await Notification.findById(_req.params.id);

    if (!notifID) return res.status(404).json({ status: false, message: " Data tidak ada!" });


    try {

        const resdel = await Notification.deleteOne({ _id: _req.params.id });
        res.status(200).json(resdel);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }


}