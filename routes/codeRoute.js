const { Router } = require("express");

const {
  saveCode,
  getCode,
  updateCode,
} = require("../controllers/codeController");

const codeRouter = Router();

codeRouter.post("/save", saveCode);

codeRouter.get("/get/:codeId", getCode);

codeRouter.put('/update/:codeId', updateCode)

module.exports = codeRouter;
