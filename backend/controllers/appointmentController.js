const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {

    try {

        const appointment =
            await Appointment.create({

                patientId: req.user.id,

                symptoms:
                    req.body.symptoms,

                department:
                    req.body.department,

                doctor:
                    req.body.doctor,

                appointmentDate:
                    req.body.appointmentDate
            });

        res.status(201).json(
            appointment
        );

    } catch(error){

        res.status(500).json({
            message: error.message
        });

    }
};

exports.getAppointments = async (
    req,
    res
) => {

    try {

        const appointments =
            await Appointment
            .find()
            .populate(
                "patientId",
                "name email"
            );

        res.json(appointments);

    } catch(error){

        res.status(500).json({
            message: error.message
        });

    }
};