import express from 'express'

import { getUsersForSidebar } from '../controllers/message.js';
import { getConversationsForSidebar } from '../controllers/message.js';
import { getMessages } from '../controllers/message.js';
import { sendMessage } from '../controllers/message.js';
import { protectRoute } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js'

const router = express.Router();

router.use(protectRoute);

router.get('/users', getUsersForSidebar);
router.get('/conversations', getConversationsForSidebar);
router.get('/:id', getMessages);
router.post('send/:id', upload.single('media'), sendMessage);

export default router;