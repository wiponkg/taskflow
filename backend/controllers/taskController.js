const taskModel = require("../models/taskModel");

// GET
exports.getTasks = (req, res) => {
    taskModel.getAllTasks((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// POST
exports.createTask = (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Título é obrigatório" });
    }

    taskModel.createTask(title, description, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: "Tarefa criada com sucesso" });
    });
};

// PUT
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    taskModel.updateTask(id, title, description, status, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Tarefa atualizada com sucesso" });
    });
};

// DELETE
exports.deleteTask = (req, res) => {
    const { id } = req.params;

    taskModel.deleteTask(id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Tarefa deletada com sucesso" });
    });
};