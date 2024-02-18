import { Request, Response } from 'express';
import { getChannels } from '../services/channelService';

export const getAllChannels = async (req: Request, res: Response)=> {
  res.json(await getChannels());
};
