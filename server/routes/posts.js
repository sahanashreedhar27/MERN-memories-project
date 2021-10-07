import express from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost
} from '../controllers/posts.js';
const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); // patch - updating existing document
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost); // Like is also a patch request becase it updates the number of likes the post has
export default router;
