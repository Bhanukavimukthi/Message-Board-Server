import { Request, Response } from 'express';
import { getMessagesByChannel, createMessage } from '../services/messageService';

export const getMessages = async (req: Request, res: Response) => {
  const { channel } = req.params;
  res.json(await getMessagesByChannel(channel));
};

export const sendMessage = async (req: Request, res: Response) => {
  const { channel } = req.params;
  const { body } = req.body;

  if (!body) {
    res.status(400).json({ error: 'Message body is required' });
    return;
  }

  const newMessage = createMessage(channel, body);
  res.json(newMessage);
};
