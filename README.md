# SIG-SEG (Sistema de Informação Gerencial para Secretaria de Segurança)

## Descrição

O SIG-SEG é uma aplicação web que visa gerenciar denúncias recebidas pela Secretaria de Segurança, com funcionalidades de cadastro de usuários, login de servidores e registro de denúncias. O sistema permite que os usuários registrem ocorrências de forma fácil, e que servidores da Secretaria de Segurança possam consultar essas denúncias.

## Funcionalidades

### Frontend (React)
- **Menu Principal**: Exibe links para as outras rotas da aplicação.
- **Cadastro de Usuários**: Tela para cadastro de novos usuários com nome, email e senha.
- **Login**: Tela de login para servidores com autenticação via email e senha.
- **Cadastro de Denúncias**: Permite o registro de denúncias com tipo, descrição, bairro e data (não requer login).
- **Busca de Denúncia por Código**: Permite que qualquer usuário consulte uma denúncia pelo ID (não requer login).

### Backend (Spring Boot)
- **Cadastro de Usuário**: Permite o cadastro de novos usuários (nome, email e senha).
- **Login**: Permite login de servidores com email e senha.
- **Cadastro de Denúncia**: Permite o cadastro de denúncias com tipo, descrição, bairro e data (não requer login).
- **Busca de Denúncia**: Permite que os servidores busquem uma denúncia pelo ID (não requer login).
- **Segurança**: Implementação de Spring Security para garantir a autenticação e autorização, além de uso do Bcrypt para segurança das senhas.

## Tecnologias

- **Frontend**:
  - React.js
  - React Router (para navegação entre páginas)
  - Axios (para comunicação com o backend)
  - npm para gerenciamento de dependências
- **Backend**:
  - Java Spring Boot
  - Spring Security (para autenticação e autorização)
  - BCrypt (para codificação das senhas armazenas no banco de dados)
  - JPA (para interação com o banco de dados)
  - Flyway (para gerenciamento de migrations do banco de dados)
- **Banco de Dados**:
  - PostgreSQL

## Como Rodar o Projeto

### 1. Backend (Spring Boot)

1. Clone o repositório do projeto.
2. No diretório do backend, execute o seguinte comando para rodar a aplicação:
    ```bash
    mvn spring-boot:run
    ```
   Isso irá iniciar o backend na porta `8080`.

3. O banco de dados PostgreSQL será configurado automaticamente pelo Flyway com as migrations necessárias para criar as tabelas `usuario` e `denuncia`.

### 2. Frontend (React)

1. Navegue até o diretório do frontend.
2. Instale as dependências com o npm:
    ```bash
    npm install
    ```
3. Para rodar a aplicação em modo de desenvolvimento, execute:
    ```bash
    npm run dev
    ```
   Isso irá iniciar o frontend na porta `5173`.

4. Para buildar a versão de produção, execute:
    ```bash
    npm run build
    ```
   Isso irá gerar a pasta `build` com os arquivos otimizados para produção.

### 3. Configuração do Banco de Dados

O projeto utiliza PostgreSQL como banco de dados. Certifique-se de ter o PostgreSQL rodando e configure as credenciais no arquivo `application.properties` do backend:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/sigseg
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha

### 4. Realizando as Migrations

O Flyway é usado para gerenciar as migrations e criar as tabelas usuario e denuncia no banco de dados. As migrations são executadas automaticamente ao iniciar o backend.
