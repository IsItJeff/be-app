const { createTube } = require("../../models/fabrications/tubes.model.js");

exports.postTube = (req , res , next) => {
    const tubeData = req.body;

    createTube(tubeData)
        .then((tube) => {
            res.status(201).send({tube})
        }).catch((err) => {
            next(err);
        });
};