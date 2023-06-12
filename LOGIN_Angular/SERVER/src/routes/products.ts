import { Router } from 'express';
import { getProduct } from '../controller/Product';
import validateToken from './validate-token';

const  router = Router();

router.get('/', validateToken, getProduct)

export default router;