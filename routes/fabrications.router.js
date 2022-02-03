const express = require("express");
const {
    postBranch ,
    postChimney ,
    postCladding ,
    postCone ,
    postGusset ,
    postInsulation ,
    postRectangle ,
    postRing ,
    postTopCap ,
    postTube
} = require("../controllers/fabrications.controller.js");

const [
    branchsRouter ,
    chimneysRouter ,
    claddingsRouter ,
    conesRouter ,
    gussetsRouter ,
    insulationsRouter ,
    rectanglesRouter ,
    ringsRouter ,
    topCapsRouter ,
    tubesRouter ,
] = express();

branchsRouter
    .route("/branchs")
    .get()
    .post(postBranch);

branchsRouter
    .route("/branchs/:branchId")
    .get()
    .patch()
    .delete();

chimneysRouter
    .route("/chimneys")
    .get()
    .post(postChimney);

chimneysRouter
    .route("/chimneys/:chimneyId")
    .get()
    .patch()
    .delete();

claddingsRouter
    .route("/claddings")
    .get()
    .post(postCladding);

claddingsRouter
    .route("/claddings/:claddingId")
    .get()
    .patch()
    .delete();

conesRouter
    .route("/cones")
    .get()
    .post(postCone);

conesRouter
    .route("/cones/:coneId")
    .get()
    .patch()
    .delete();

gussetsRouter
    .route("/gussets")
    .get()
    .post(postGusset);

gussetsRouter
    .route("/gussets/:gussetId")
    .get()
    .patch()
    .delete()

insulationsRouter
    .route("/insulations")
    .get()
    .post(postInsulation);

insulationsRouter
    .route("/insulations/:insulationId")
    .get()
    .patch()
    .delete();

rectanglesRouter
    .route("/rectangles")
    .get()
    .post(postRectangle);

rectanglesRouter
    .route("/rectangles/:rectangleId")
    .get()
    .patch()
    .delete();

ringsRouter
    .route("/rings")
    .get()
    .post(postRing);

ringsRouter
    .route("/rings/:ringId")
    .get()
    .patch()
    .delete();

topCapsRouter
    .route("/topCaps")
    .get()
    .post(postTopCap);

topCapsRouter
    .route("/topCaps/:topCapId")
    .get()
    .patch()
    .delete();

tubesRouter
    .route("/tubes")
    .get()
    .post(postTube);

tubesRouter
    .route("/tubes/tubeId")
    .get()
    .patch()
    .delete()