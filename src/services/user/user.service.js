import { UsuariosModel } from "../../models/index.models.js";
import { BaseDao } from "../../daos/BaseDao.js";

class UsuarioService extends BaseDao {

    ID_FIELD = "_id";
    USERNAME_FIELD = 'username';

    static getInstance() {
        return new UsuarioService();
    }

    constructor() {
        if (typeof UsuarioService.instance === 'object') {
            return UsuarioService.instance;
        }
        super();
        UsuarioService.instance = this;
        return this;
    }

    async createUser(object) {
        try {
            return await UsuariosModel.create(object);
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async loginUser(object) {
        try {
            const user = await UsuariosModel.findOne({
                [this.USERNAME_FIELD]: object.username
            });

            if (!user) {
                this.logger.info(`User '${object.username}' does not exist`)
                return null;
            }

            return await user.comparePassword(object.password);

        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}

export { UsuarioService }