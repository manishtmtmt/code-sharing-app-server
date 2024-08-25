const { Schema, model } = require("mongoose");

const CodeSchema = new Schema(
  {
    html: String,
    css: String,
    javascript: String,
  },
  { timestamps: true }
);

const CodeModel = model("code", CodeSchema);

module.exports = CodeModel;
