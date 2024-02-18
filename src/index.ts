import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import { router } from './routes/router';
import { initializeMessages } from './services/messageService';
import { getChannels } from './services/channelService';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors({
    credentials: true,
}));

// Initialize channels
initializeMessages(getChannels());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});