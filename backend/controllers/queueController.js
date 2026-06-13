const Queue = require("../models/Queue");

exports.joinQueue = async (req, res) => {

    try {

        const existingQueue = await Queue.findOne({
            patientId: req.user.id,
            status: "waiting"
        });

        if (existingQueue) {
            return res.status(200).json(existingQueue);
        }

        const totalWaiting =
            await Queue.countDocuments({
                status: "waiting"
            });

        const queueNumber =
            totalWaiting + 1;

        const estimatedWait =
            totalWaiting * 10;

        const queue =
            await Queue.create({

                patientId: req.user.id,

                queueNumber,

                position: queueNumber,

                estimatedWait
            });

        res.status(201).json(queue);

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

exports.getMyQueue =
async (req,res)=>{

    try {

        const queue =
            await Queue.findOne({

                patientId:
                req.user.id,

                status:"waiting"

            });

        res.json(queue);

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

exports.getAllQueues =
async (req,res)=>{

    try {

        const queues =
            await Queue.find()

            .populate(
                "patientId",
                "name email"
            )

            .sort({
                queueNumber:1
            });

        res.json(queues);

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

exports.completeQueue = async (req, res) => {

    try {

        const queue =
            await Queue.findByIdAndUpdate(
                req.params.id,
                {
                    status: "completed"
                },
                {
                    new: true
                }
            );

        res.json(queue);

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};