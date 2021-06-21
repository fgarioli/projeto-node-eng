import Usuario from "../models/Usuario.js";

export default class UsuarioService {
    static inserir(body) {
        const user = new Usuario(body);
        return user.save();
    }

    static findById(id) {
        return Usuario.findById(id).exec();
    }

    static alterar(id, body) {
        return Usuario.findByIdAndUpdate(id, body).exec();
    }

    static deletar(id) {
        return Usuario.findByIdAndDelete(id).exec();
    }
}