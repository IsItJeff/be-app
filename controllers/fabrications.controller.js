const { 
    createBranch ,
    createChimney ,
    createCladding ,
    createCone ,
    createGusset ,
    createInsulation ,
    createRectangle ,
    createRing ,
    createTopCap ,
    createTube
} = require("../models/fabrication.model.js");

exports.postBranch = (req , res , next) => {
    const branchData = req.body;

    createBranch(branchData)
        .then((branch) => {
            res.status(201).send({branch});
        }).catch((err) => {
            next(err);
        });
};

exports.postChimney = (req , res , next) => {
    const chimneyData = req.body;

    createChimney(chimneyData)
        .then((chimney) => {
            res.status(201).send({chimney});
        }).catch((err) => {
            next(err);
        });
};

exports.postCladding = (req , res , next) => {
    const claddingData = req.body;

    createCladding(claddingData)
        .then((cladding) => {
            res.status(201).send({cladding});
        }).catch((err) => {
            next(err);
        });
};

exports.postCone = (req , res , next) => {
    const coneData = req.body;

    createCone(coneData)
        .then((cone) => {
            res.status(201).send({cone});
        }).catch((err) => {
            next(err);
        });
};

exports.postGusset = (req , res , next) => {
    const gussetData = req.body;

    createGusset(gussetData)
        .then((gusset) => {
            res.status(201).send({gusset});
        }).catch((err) => {
            next(err);
        })
};

exports.postInsulation = (req , res , next) => {
    const insulationData = req.body;

    createInsulation(insulationData)
        .then((insulation) => {
            res.status(201).send({gusset});
        }).catch((err) => {
            next(err);
        });
};

exports.postRectangle = (req , res , next) => {
    const rectangleData = req.body;

    createRectangle(rectangleData)
        .then((rectangle) => {
            res.status(201).send({rectangle});
        }).catch((err) => {
            next(err)
        });
};

exports.postRing = (req , res , next) => {
    const ringData = req.body;

    createRing(ringData)
        .then((ring) => {
            res.status(201).send({ring});
        }).catch((err) => {
            next(err);
        });
};

exports.postTopCap = (req , res , next) => {
    const topCapData = req.body;

    createTopCap(topCapData)
        .then((topCap) => {
            res.status(201).send({topCap});
        }).catch((err) => {
            next(err);
        });
};

exports.postTube = (req , res , next) => {
    const tubeData = req.body;

    createTube(tubeData)
        .then((tube) => {
            res.status(201).send({tube})
        }).catch((err) => {
            next(err);
        });
};