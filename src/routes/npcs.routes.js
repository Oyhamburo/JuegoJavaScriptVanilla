import { Router } from "express";
import { npcController } from "../controller/index.controller.js";
const router = Router()

router.get('/', npcController.getAll)

router.get('/:id', npcController.getById)

router.post("/", npcController.addNew);

router.put("/:id", npcController.updateById);

router.delete("/:id", npcController.deleteById);

export { router as npcRouter }
