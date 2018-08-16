import { Router } from 'express';
import searchRouter from './api-search';
import userRouter from './users';
import reviewRouter from './reviews';
import favoriteRouter from './favorites';
import userStorageRouter from './storage';
import storageCategoriesRouter from './categories';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router
    .use('/search', searchRouter)

// AUTH ROUTES
router.use('/auth', authRouter);
//router.use(isLoggedIn);
// router.route('*')
//     .post(tokenMiddleware, isLoggedIn)
//     .put(tokenMiddleware, isLoggedIn)
//     .delete(tokenMiddleware, isLoggedIn);
// /////////

router
    .use('/user', userRouter)
    .use('/review', reviewRouter)
    .use('/favorite', favoriteRouter)
    .use('/storage', userStorageRouter)
    .use('/categories', storageCategoriesRouter);

export default router;
