import { Object } from "../../models/index.models.js"
import { ObjectsDao } from "../../app.js"

const objectController = {}

objectController.getAll = async (req, res, next) => {
    try {
        const objects = await ObjectsDao.getAll()
        res.json(objects)
    } catch (error) {
        next(error)
    }
}
objectController.addNew = async (req, res, next) => {
    const data = new Object(req.body);
    try {
        res.json(await ObjectsDao.addItem(data));
    } catch (error) {
        next(error);
    }
};
objectController.getById = async (req, res, next) => {
    const { id } = req.params
    try {
        const object = await ObjectsDao.getById(id)
        res.json(object)
    } catch (error) {
        next(error)
    }
}
objectController.deleteById = async (req, res, next) => {
    const id = req.params.id;
    try {
        res.json(await ObjectsDao.deleteItem(id));
    } catch (error) {
        next(error);
    }
};
objectController.updateById = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
        res.json(await ObjectsDao.updateItem(id, data));
    } catch (error) {
        next(error);
    }
};

export { objectController }