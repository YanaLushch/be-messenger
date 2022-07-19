export const groupMessages = (messages) => {
  const grouping = messages.reduce((acc, message) => {
    const { userId } = message;
    const lastMessage = acc[acc.length - 1];
    if (lastMessage && lastMessage.userId === userId) {
      if (lastMessage.type !== "group") {
        acc[acc.length - 1] = {
          id: lastMessage.id,
          chatId: lastMessage.chatId,
          userId: lastMessage.userId,
          type: "group",
          messages: [lastMessage, message],
        };
      } else if (lastMessage.type === "group") {
        const newMessages = [...acc[acc.length - 1].messages, message];
        acc[acc.length - 1].messages = newMessages;
      }
    } else {
      acc.push({ ...message, type: "single" });
    }
    return acc;
  }, []);
  return grouping;
};
