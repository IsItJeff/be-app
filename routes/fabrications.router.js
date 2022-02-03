const express = require("express");

const fabricationsRouter = express();

const branchsRouter = require("./fabrications/branchs.router.js");
const chimneysRouter = require("./fabrications/chimneys.router.js");
const claddingsRouter = require("./fabrications/claddings.router.js");
const conesRouter = require("./fabrications/cones.router.js");
const gussetsRouter = require("./fabrications/gussets.router.js");
const insulationsRouter = require("./fabrications/insulations.router.js");
const rectanglesRouter = require("./fabrications/rectangles.router.js");
const ringsRouter = require("./fabrications/rings.router.js");
const topCapsRouter = require("./fabrications/topCaps.router.js");
const tubesRouter = require("./fabrications/tubes.router.js");

fabricationsRouter.use("/branchs" , branchsRouter);
fabricationsRouter.use("/chimneys" , chimneysRouter);
fabricationsRouter.use("/claddings" , claddingsRouter);
fabricationsRouter.use("/cones" , conesRouter);
fabricationsRouter.use("/gussets" , gussetsRouter);
fabricationsRouter.use("/insulations" , insulationsRouter);
fabricationsRouter.use("/rectangles" , rectanglesRouter);
fabricationsRouter.use("/rings" , ringsRouter);
fabricationsRouter.use("/topCaps" , topCapsRouter);
fabricationsRouter.use("/tubes" , tubesRouter);

module.exports = fabricationsRouter;