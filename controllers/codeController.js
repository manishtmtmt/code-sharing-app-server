const CodeModel = require("../models/CodeModel");

module.exports.saveCode = async (req, res) => {
  const body = req.body;

  try {
    const newCode = new CodeModel(body);

    const response = await newCode.save();

    return res.status(201).json({
      success: true,
      message: "Code saved successfully",
      data: {
        code_id: response._id,
      },
    });
  } catch (error) {
    console.log("Failed to save code", error);
    return res.status(500).json({
      success: false,
      message: "Failed to share code",
      data: {
        error: error.message,
      },
    });
  }
};

module.exports.getCode = async (req, res) => {
  const code_id = req.params.codeId;

  try {
    const response = await CodeModel.findById(code_id);

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Failed to retrieve code",
        data: {
          error: "Cannot find the code with given id",
        },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched code from database",
      data: response,
    });
  } catch (error) {
    console.log("Failed to retrieve code", error);
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve code",
      data: {
        error: error.message,
      },
    });
  }
};

module.exports.updateCode = async (req, res) => {
  const code_id = req.params.codeId;
  const requestBody = req.body;

  try {
    const response = await CodeModel.findByIdAndUpdate(code_id, requestBody);

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Failed to retrieve code",
        data: {
          error: "Cannot find the code with given id",
        },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched code from database",
      data: {
        code_id: response._id
      },
    });
  } catch (error) {
    console.log("Failed to update code", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update code",
      data: {
        error: error.message,
      },
    });
  }
};
