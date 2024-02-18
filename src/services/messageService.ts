interface Message {
  id: number;
  body: string;
}

interface ChannelMessages {
  [key: string]: Message[];
}

const messages: ChannelMessages = {};

export const initializeMessages = (channels: string[]): void => {
  channels.forEach((channel) => {
    messages[channel] = [];
  });
};

export const getMessagesByChannel = (channel: string): Message[] => {
  return messages[channel] || [];
};

export const createMessage = (channel: string, body: string): Message => {
  const newMessage: Message = { id: Date.now(), body };
  messages[channel].push(newMessage);
  return newMessage;
};
