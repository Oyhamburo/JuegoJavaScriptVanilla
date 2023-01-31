import { NPCs } from "../../models/NPCs/npc.models.js"
import { NPCsDao } from "../../app.js"

const npcController = {}

npcController.getAll = async (req, res, next) => {
    try {
        const npcs = await NPCsDao.getAll()
        res.json(npcs)
    } catch (error) {
        next(error)
    }
}
npcController.addNew = async (req, res, next) => {
    const data = new NPCs(req.body);
    try {
        res.json(await NPCsDao.addItem(data));
    } catch (error) {
        next(error);
    }
};
npcController.oka = async (req, res, next) => {
    try {
        console.log('POST OKA')
        console.log(req.body)
    } catch (error) {
        next(error);
    }
};
npcController.getById = async (req, res, next) => {
    const { id } = req.params
    try {
        const npc = await NPCsDao.getById(id)
        res.json(npc)
    } catch (error) {
        next(error)
    }
}
npcController.deleteById = async (req, res, next) => {
    const id = req.params.id;
    try {
        res.json(await NPCsDao.deleteItem(id));
    } catch (error) {
        next(error);
    }
};
npcController.updateById = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
        res.json(await NPCsDao.updateItem(id, data));
    } catch (error) {
        next(error);
    }
};

export { npcController }