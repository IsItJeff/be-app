const { createRing } = require("../../models/fabrications/rings.model.js");

exports.postRing = (req , res , next) => {
    const ringData = req.body;

    createRing(ringData)
        .then((ring) => {
            res.status(201).send({ring});
        }).catch((err) => {
            next(err);
        });
};