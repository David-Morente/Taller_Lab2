import { Router } from "express";
import { getAppointments, saveAppointment, updateAppointment } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.post("/", getAppointments);

router.put("/updateAppointment/:uid", updateAppointment);

export default router;