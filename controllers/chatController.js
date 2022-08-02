import fs from "fs";
import path from "path";
import groupMessages from "../utils/groupMessages.js";

//dirname resolve
const __dirname = path.resolve();
const chatMessages = JSON.parse(
  fs.readFileSync(`${__dirname}/mocks/messages.json`)
);

//route handlers
export const getAllChatMessages = (req, res) => {
    res.status(200).json({
      status: "success",
      results: chatMessages.length,
      data: {
        chatMessages: groupMessages(chatMessages),
      },
    });
  };
  
  export const getChatMessage = (req, res) => {
    const { id } = req.params;
    const chatMessage = chatMessages.find(
      (message) => message.id === parseInt(id)
    );
  
    if (!chatMessage) {
      return res.status(404).json({
        status: "fail",
        message: "Message not found",
      });
    }
  
    res.status(200).json({
      status: "success",
      results: chatMessages.length,
      data: {
        chatMessage,
      },
    });
  };
  
  export const createChatMessage = (req, res) => {
    const data = req.body;
    const newMessage = {
      id: chatMessages.length + 1,
      ...data,
    };
    chatMessages.push(newMessage);
    fs.writeFile(
      `${__dirname}/mocks/messages.json`,
      JSON.stringify(chatMessages),
      (err) => {
        res.status(201).json({
          status: "success",
          data: {
            chatMessage: newMessage,
          },
        });
      }
    );
  };
  
  export const editChatMessage = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const chatMessage = chatMessages.find(
      (message) => message.id === parseInt(id)
    );
  
    if (!chatMessage) {
      return res.status(404).json({
        status: "fail",
        message: "Message not found",
      });
    }
  
    const index = chatMessages.indexOf(chatMessage);
    chatMessages[index] = {
      ...chatMessage,
      ...data,
    };
  
    fs.writeFile(
      `${__dirname}/mocks/messages.json`,
      JSON.stringify(chatMessages),
      (err) => {
        res.status(200).json({
          status: "success",
          data: {
            chatMessage: chatMessages[index],
          },
        });
      }
    );
  };
  
  export const deleteChatMessage = (req, res) => {
    const { id } = req.params;
    const chatMessage = chatMessages.find(
      (message) => message.id === parseInt(id)
    );
  
    if (!chatMessage) {
      return res.status(404).json({
        status: "fail",
        message: "Message not found",
      });
    }
  
    const index = chatMessages.indexOf(chatMessage);
    chatMessages.splice(index, 1);
  
    fs.writeFile(
      `${__dirname}/mocks/messages.json`,
      JSON.stringify(chatMessages),
      (err) => {
        res.status(200).json({
          status: "success",
          data: {
            chatMessage: chatMessages[index],
          },
        });
      }
    );
  };
