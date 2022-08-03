import groupMessages from "../utils/groupMessages.js";
import Message from "../models/messageModel.js";

//route handlers
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      status: "success",
      results: messages.length,
      data: {
        messages: groupMessages(messages),
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.status(200).json({
      status: "success",
      results: messages.length,
      data: {
        message,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const createMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        message: newMessage,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const editMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        message,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const message = new Message.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        message,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
