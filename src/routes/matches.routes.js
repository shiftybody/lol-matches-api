import { Router } from 'express'
import { 
    getMatches
} from '../controllers/matches.controller.js'

const router = Router();

router.get('/league/:league/matches/:day', getMatches);

export default router;