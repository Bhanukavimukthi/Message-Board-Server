import { getAllChannels } from '../controllers/channelController';
import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/messageController';

export const router = Router();

router.get('/channels', getAllChannels);
router.get('/messages/:channel', getMessages);
router.post('/:channel', sendMessage);
