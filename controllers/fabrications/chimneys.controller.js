const { createChimney } = require("../../models/fabrications/chimneys.model.js");

exports.postChimney = (req , res , next) => {
    const chimneyData = req.body;

    createChimney(chimneyData)
        .then((chimney) => {
            res.status(201).send({chimney});
        }).catch((err) => {
            next(err);
        });
};