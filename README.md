# 🚀 Atividade 06 - API REST com Express e TypeScript

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/REST-API-blue?style=for-the-badge"/>
</p>

---

## 📌 Descrição

API REST desenvolvida com **Express + TypeScript** com foco em:

- Semântica REST
- Manipulação de Query Params, Route Params e Body JSON
- Uso de Middlewares
- Boas práticas com organização de rotas

---

## 🧰 Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- CORS
- ts-node-dev

---

## 🔗 Endpoints da API

### 📦 Produtos

| Método | Rota | Descrição |
|------|------|----------|
| GET | `/products` | Lista todos os produtos |
| GET | `/products?category=eletronicos` | Filtra por categoria |
| GET | `/products/:id` | Busca produto por ID |

---

### 🛒 Pedidos

| Método | Rota | Descrição |
|------|------|----------|
| POST | `/orders` | Cria um novo pedido |
| PATCH | `/orders/:id` | Atualiza o status do pedido |
| DELETE | `/orders/:id` | Remove um pedido |

---

## 🧠 Middlewares

- 📌 **Logger** → Exibe no terminal:


- 📌 **Validação de Body** → Retorna erro 400 se o corpo estiver vazio

---

## 🧪 Testes da API

### 📦 Listagem de produtos
![GET products](docs/assets/get-products.png)

### 🔍 Filtro por categoria
![GET products filter](docs/assets/get-products-filter.png)

### 📄 Produto por ID
![GET product id](docs/assets/get-product-id.png)

### ❌ Erro: Corpo vazio (400)
![Erro POST](docs/assets/post-order-error.png)

---

### 🛒 Criar pedido (POST)
![POST order](docs/assets/post-order.png)

### ❌ Erro body vazio
![POST error](docs/assets/post-order-error.png)

### 🔄 Atualizar pedido (PATCH)
![PATCH order](docs/assets/patch-order.png)

### 🗑️ Deletar pedido (DELETE)
![DELETE order](docs/assets/delete-order.png)

---

## 📦 Exemplo de Body (POST /orders)

```json
{
  "customerName": "Ednardo Peixoto",
  "productIds": [1, 2]
}


---

## 🚀 Como executar

```md
## 🚀 Como executar o projeto

```bash
# instalar dependências
npm install

# rodar servidor
npm run dev

📍 Servidor disponível em:
http://localhost:3333


---

## 🎯 Conceitos

```md
## 🎯 Conceitos Aplicados

- ✔ Semântica REST (GET, POST, PATCH, DELETE)
- ✔ Query Params (`req.query`)
- ✔ Route Params (`req.params`)
- ✔ Body JSON (`req.body`)
- ✔ Status Codes HTTP
- ✔ Middlewares personalizados
- ✔ Organização com `express.Router()`

## 👨‍💻 Autor

Ednardo Pinheiro Peixoto

## ⭐ Observação

Este projeto foi desenvolvido como atividade prática para consolidar conceitos de backend com Node.js e Express.