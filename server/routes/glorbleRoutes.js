import { Router } from "express";
import {
  getAllGlorbles,
  getGlorbleById,
  createGlorble,
  changeGlorble,
  deleteGlorble
} from "../controllers/glorbleControls.js";

const router = Router();

router.get('/', getAllGlorbles);
router.get('/:id', getGlorbleById);
router.post('/', createGlorble);
router.patch('/:id', changeGlorble);
router.delete('/:id', deleteGlorble);

export default router;