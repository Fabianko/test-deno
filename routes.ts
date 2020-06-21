import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getAllMrkData, getSingleMrkData} from './controllers/mrkData.ts'
const router = new Router();

router.get('/api/v1/welcome', ({ response }: { response: any }) => {
    response.body = {
        success: true,
        message: "Welcome to Artists API"
    }
});

router.get('/api/v1/data', getAllMrkData)
    .get('/api/v1/data/:id', getSingleMrkData);



export default router;