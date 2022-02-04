const { createBranch } = require("../../models/fabrications/branchs.model.js")

exports.postBranch = (req , res , next) => {
    const branchData = req.body;

    createBranch(branchData)
        .then((branch) => {
            res.status(201).send({branch});
        }).catch((err) => {
            next(err);
        });
};