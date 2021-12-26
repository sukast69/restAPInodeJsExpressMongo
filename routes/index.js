import express from "express";
import { getNotifs, getNotifID, saveNotif, updateNotif, deletedNotif } from "../controllers/notificationControllers.js";
const router = express.Router();


//get all data
router.get('/', getNotifs);


//create data
router.post('/', saveNotif);

//getByID
router.get('/:id', getNotifID);

//update
router.patch('/:id', updateNotif);

//deleted
router.delete('/:id', deletedNotif);


export default router;