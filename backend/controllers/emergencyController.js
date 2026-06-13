const Emergency =
require("../models/Emergency");

function getSeverity(text) {

    const description =
        text.toLowerCase();

    if (
        description.includes("unconscious") ||
        description.includes("not breathing") ||
        description.includes("heart attack")
    ) {
        return "critical";
    }

    if (
        description.includes("chest pain") ||
        description.includes("severe")
    ) {
        return "high";
    }

    if (
        description.includes("injury")
    ) {
        return "medium";
    }

    return "low";
}

exports.createEmergency =
async (req,res)=>{

    try {

        const {
            type,
            description,
            lat,
            lng
        } = req.body;

        const severity =
            getSeverity(
                description || ""
            );

        const emergency =
            await Emergency.create({

                patientId:
                    req.user.id,

                type,

                description,

                severity,

                location: {
                    lat,
                    lng
                }
            });

        res.status(201).json(
            emergency
        );

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

exports.getEmergencies =
async (req,res)=>{

    try {

        const emergencies =
            await Emergency.find()

            .populate(
                "patientId",
                "name email"
            )

            .sort({
                createdAt:-1
            });

        res.json(emergencies);

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

exports.updateStatus =
async (req,res)=>{

    try {

        const emergency =
            await Emergency
            .findByIdAndUpdate(

                req.params.id,

                {
                    status:
                    req.body.status
                },

                {
                    new:true
                }
            );

        res.json(emergency);

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};