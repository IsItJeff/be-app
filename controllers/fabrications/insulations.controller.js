const { createInsulation } = require("../../models/fabrications/insulations.model.js");

exports.postInsulation = (req , res , next) => {
    const insulationData = req.body;

    createInsulation(insulationData)
        .then((insulation) => {
            res.status(201).send({insulation});
        }).catch((err) => {
            next(err);
        });
};