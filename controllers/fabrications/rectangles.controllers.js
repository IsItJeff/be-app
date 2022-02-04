const { createRectangle } = require("../../models/fabrications/rectangles.model.js");

exports.postRectangle = (req , res , next) => {
    const rectangleData = req.body;

    createRectangle(rectangleData)
        .then((rectangle) => {
            res.status(201).send({rectangle});
        }).catch((err) => {
            next(err)
        });
};