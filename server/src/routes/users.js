import { Router } from 'express';
import * as Users from '../controllers/users.ctrl';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';

let router = Router();

router
  .get('/', tokenMiddleware, isLoggedIn, Users.all)
  .get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
  })
  .get('/:id', tokenMiddleware, isLoggedIn, Users.read)
  .post('/', Users.create)
  .put('/:id', tokenMiddleware, isLoggedIn, Users.update)
  .delete('/:id', tokenMiddleware, isLoggedIn, Users.destroy);

export default router;