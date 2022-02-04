const { createCone } = require("../../models/fabrications/cones.model.js");

exports.postCone = (req , res , next) => {
    const coneData = req.body;

    createCone(coneData)
        .then((cone) => {
            res.status(201).send({cone});
        }).catch((err) => {
            next(err);
        });
};