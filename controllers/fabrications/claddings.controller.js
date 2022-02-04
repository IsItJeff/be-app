const { createCladding } = require("../../models/fabrications/claddings.model.js")

exports.postCladding = (req , res , next) => {
    const claddingData = req.body;

    createCladding(claddingData)
        .then((cladding) => {
            res.status(201).send({cladding});
        }).catch((err) => {
            next(err);
        });
};