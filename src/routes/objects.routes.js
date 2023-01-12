import { Router } from "express";
import { objectController } from "../controller/index.controller.js";
const router = Router()

router.get('/', objectController.getAll)

router.get('/:id', objectController.getById)

router.post("/", objectController.addNew);

router.put("/:id", objectController.updateById);

router.delete("/:id", objectController.deleteById);

export { router as objectRouter }
