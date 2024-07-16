import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

const sendMessage = async (req, res) => {
  try {
    const sender = req.user._id;
    const { reciever } = req.params;
    const { message } = req.body;

    const conversation = await Conversation.findOne({
      participants: { $all: [sender, reciever] },
    });

    if (!conversation) {
      await Conversation.create({
        participants: [sender, reciever],
      });
    }

    const newMessage = await Message.create({
      sender,
      receiver,
      content: message,
    });

    if (!newMessage) return res.status(400).send("Message not created");
    res.status(201).send("Message created successfully");
  } catch (error) {
    console.log("Error in the sendMessage controller:", error.message);
    res.status(500).send("Internal server error");
  }
};

export default sendMessage;
