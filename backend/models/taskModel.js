const db = require("../config/db");

// Buscar todas as tarefas
exports.getAllTasks = (callback) => {
    db.query("SELECT * FROM tasks ORDER BY created_at DESC", callback);
};

// Criar nova tarefa
exports.createTask = (title, description, callback) => {
    const sql = "INSERT INTO tasks (title, description) VALUES (?, ?)";
    db.query(sql, [title, description], callback);
};

// Atualizar tarefa
exports.updateTask = (id, title, description, status, callback) => {
    const sql = "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?";
    db.query(sql, [title, description, status, id], callback);
};

// Deletar tarefa
exports.deleteTask = (id, callback) => {
    db.query("DELETE FROM tasks WHERE id = ?", [id], callback);
};