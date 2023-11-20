// Importando a classe 'AppError' de um arquivo chamado 'AppError' no diretório '../Utils'.
const AppError = require("../Utils/AppError");

// Definindo a classe 'UserController'.
class UserController {
    // Método para criar um novo usuário.
    create(request, response) {
        // Extrai os dados do corpo da requisição.
        const { name, email, password } = request.body;

        // Verifica se o campo 'name' está presente na requisição.
        if (!name) {
            // Se não estiver presente, lança um erro utilizando a classe 'AppError'.
            // Este tipo de erro pode ser capturado pelo middleware de erro global definido anteriormente.
            throw new AppError("Nome é obrigatório!");
        }

        // Se o campo 'name' estiver presente, responde com um status 201 (Created) e um JSON contendo os dados do usuário.
        response.status(201).json({ name, email, password });
    }
}

// Exportando a classe 'UserController' para ser utilizada em outros arquivos.
module.exports = UserController;
