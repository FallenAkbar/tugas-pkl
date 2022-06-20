import express from "express";
import laptopController from "./controllers/LaptopController.js";
const router = express.Router();

router.get('/laptop',laptopController.getAll)
router.get('/laptop/:id',laptopController.getId)
router.post('/laptop',laptopController.input)
router.patch('/laptop/:id',laptopController.update)
router.delete('/laptop/:id',laptopController.delete)


export default router;