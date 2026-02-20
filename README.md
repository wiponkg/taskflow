# TaskFlow

<!---.badges_start--->
[![GitHub Issues](https://img.shields.io/github/issues/wiponkg/taskflow)](https://github.com/wiponkg/taskflow/issues)
[![GitHub Stars](https://img.shields.io/github/stars/wiponkg/taskflow)](https://github.com/wiponkg/taskflow/stargazers)
[![License](https://img.shields.io/github/license/wiponkg/taskflow)](https://github.com/wiponkg/taskflow/blob/main/LICENSE)
<!---.badges_end--->

TaskFlow é uma aplicação Full Stack para gerenciamento de tarefas (CRUD completo), focada em organização, produtividade e boas práticas de arquitetura MVC.  
O projeto permite criar, listar, atualizar e excluir tarefas utilizando uma API REST construída com Node.js e MySQL.

---

## Ferramentas

- Criação de tarefas
- Listagem de tarefas
- Atualização de tarefas
- Exclusão de tarefas
- Integração Frontend + Backend
- API REST estruturada
- Autenticação com JWT (em desenvolvimento)
- Deploy em produção (planejado)

---

## Tecnologias

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API

### Backend
- Node.js
- Express.js
- MySQL2
- CORS

### Banco de Dados
- MySQL

---

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js (versão 16+)
- npm
- MySQL
- Git

---

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/wiponkg/taskflow.git
```

### 2. Acesse o projeto

```bash
cd taskflow/backend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados

No MySQL, execute:

```sql
CREATE DATABASE taskflow;

USE taskflow;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Depois, edite o arquivo:

```
backend/config/db.js
```

E coloque sua senha do MySQL.

### 5. Inicie o servidor

```bash
node server.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

## Endpoints da API

| Método | Rota        | Descrição        |
|--------|------------|------------------|
| GET    | /tasks     | Listar tarefas   |
| POST   | /tasks     | Criar tarefa     |
| PUT    | /tasks/:id | Atualizar tarefa |
| DELETE | /tasks/:id | Deletar tarefa   |

---

## Exemplo de Uso da API

```javascript
fetch("http://localhost:3000/tasks", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Estudar Node.js",
    completed: false
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

---

## Estrutura do Projeto

```
backend/
│
├── config/
│   └── db.js
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── tasks.js
└── server.js
```

Arquitetura baseada no padrão MVC para melhor organização e escalabilidade.

---

## Objetivo do Projeto

Este projeto foi desenvolvido para:

- Praticar desenvolvimento Full Stack
- Aplicar arquitetura MVC
- Criar APIs REST
- Integrar Node.js com MySQL
- Consolidar conhecimentos em JavaScript

---

## Roadmap

- Sistema de autenticação com JWT
- Cadastro de usuários
- Deploy em produção
- Interface responsiva
- Dockerização

---

## Autor

William José Gomes Pinto Junior

GitHub: https://github.com/wiponkg  
LinkedIn: https://www.linkedin.com/in/william-jose-gomes-pinto-junior-81a39826a  

---
