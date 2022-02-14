const { createTube, fetchTube, fetchTubes } = require("../../models/fabrications/tubes.model.js");

exports.postTube = (req , res , next) => {
    const tubeData = req.body;

    createTube(tubeData)
        .then((tube) => {
            res.status(201).send({msg: "New Tube Created"})
        }).catch((err) => {
            next(err);
        });
};

exports.getTube = (req , res , next) => {
    const tubeId = req.params.tubeId;

    fetchTube(tubeId)
        .then((tube) => {
            res.status(200).send({tube});
        }).catch((err) => {
            next(err);
        });
};

exports.getTubes = (req , res , next) => {
    
    fetchTubes()
        .then((tubesArr) => {
            res.status(200).send({tubesArr});
        }).catch((err) => {
            next(err);
        });
};