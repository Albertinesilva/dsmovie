<h1 align="center">
  <img src="https://img.icons8.com/color/30/000000/spring-logo.png"/>
  Projeto Full Stack com Spring Boot e React
  <img src="https://img.icons8.com/color/30/000000/react-native.png"/>
</h1>

📝 DSMovie é uma aplicação full-stack, responsiva, desenvolvida para a avaliação de filmes. Este projeto foi realizado em monorepo, utiliza um banco de dados relacional e foi dividido em 4 episódios, nos quais o professor [Nélio Alves](https://github.com/acenelio) explica detalhadamente como construir a aplicação. A aplicação foi desenvolvida durante a 6ª edição da Semana [DevSuperior](https://devsuperior.com.br/) (#sds6), um evento promovido pela DevSuperior.

A proposta principal do DSMovie é permitir que os usuários avaliem filmes por meio de um formulário simples, atribuindo uma nota de 1 a 5. Essas avaliações são armazenadas e exibidas tanto no app web quanto na versão mobile da aplicação.  

🌐 O site em deploy pode ser visualizado [aqui](https://dsmovie-portfolio.netlify.app/).

---

### 🎯 Objetivo

O **DSMovie** foi desenvolvido com o propósito de **aprimorar a integração entre backend e frontend**, utilizando **Spring Boot e React** em um ambiente full stack.  

A motivação para este projeto vem da busca contínua por evolução na **formação web**, explorando tecnologias modernas e boas práticas no desenvolvimento full stack.  

O projeto foi construído durante a **Semana DevSuperior (#sds6)**, permitindo uma abordagem prática do aprendizado ao longo de quatro etapas, cobrindo desde a estruturação do backend até a construção da interface web interativa.  

Além disso, a aplicação **também agrega valor para os usuários**, possibilitando que eles **avaliem filmes e acompanhem as notas atribuídas pela comunidade**. Dessa forma, o sistema contribui para que os usuários tenham uma **referência rápida sobre a popularidade e qualidade dos filmes avaliados**.

---

### 📊 Modelo Conceitual

![Modelo Conceitual](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/MC.png)

---

### 🚀 Tecnologias Utilizadas

O projeto DSMovie foi desenvolvido utilizando uma stack moderna para backend e frontend, garantindo escalabilidade, segurança e performance.

### ⚙️ **Backend**
O backend da aplicação foi implementado em **Java** com **Spring Boot**, seguindo o padrão **MVC** e boas práticas de desenvolvimento.

- **Linguagem:** Java (JDK 17)
- **Framework:** Spring Boot
- **Módulos:**
  - Spring Web (API REST)
  - Spring Data JPA / Hibernate (Persistência)
- **Banco de Dados:**
  - H2 (ambiente de desenvolvimento)
  - PostgreSQL (produção)
  - pgAdmin (gerenciamento do banco)
- **Ferramentas:**
  - Maven (gerenciamento de dependências)
  - Postman / cURL (testes de API)
  - STS (Spring Tool Suite) / IntelliJ IDEA (IDE)
  - Heroku CLI (implantação na nuvem)
  - Git / GitHub: Utilizado para controle de versão e colaboração no código. O projeto segue a estratégia de **monorepo**, onde tanto o back-end quanto o front-end são mantidos no mesmo repositório.
---

### 🎨 **Frontend**
O frontend foi desenvolvido utilizando **ReactJS** e **TypeScript**, seguindo os princípios de componentes reutilizáveis.

- **Linguagens e Tecnologias:**
  - HTML / CSS / JavaScript
  - TypeScript
  - ReactJS / React Native
- **Bibliotecas e Ferramentas:**
  - React Router DOM (gerenciamento de rotas)
  - React Hooks (`useState`, `useEffect`, `useParams`, `useNavigate`)
  - Apex Charts (gráficos interativos)
  - Axios (requisições HTTP)
  - Bootstrap (estilização responsiva)
  - Expo (desenvolvimento mobile)
- **Ambiente de Desenvolvimento:**
  - Node.js 16.x
  - VS Code (IDE principal)
---

### ☁️ **Implantação e Infraestrutura**
A aplicação foi implantada em serviços cloud para garantir disponibilidade e escalabilidade.

- **Backend:** Heroku
- **Frontend Web:** Netlify
- **Banco de Dados:** PostgreSQL
---

### 🔁 **Integração entre Backend e Frontend**
A comunicação entre as camadas do sistema foi feita por meio de **API REST** no backend e consumo via **Axios** no frontend.

- **Três pilares do React:**
  - Componentes
  - Props
  - Estado
- **Padrão arquitetural:**
  - Modelo de domínio
  - Acesso a banco de dados
  - API REST estruturada em camadas
---

### 🧱 Arquitetura e Lógica do Projeto

A aplicação DSMovie segue uma estrutura de **backend em Spring Boot** e **frontend em React**, organizados de forma modular para garantir escalabilidade e fácil manutenção.

### 🔄 Fluxo da Lógica de Avaliação

O sistema permite que os usuários avaliem filmes seguindo os passos abaixo:

1️⃣ **O usuário informa** o email, o ID do filme e a nota (de 1 a 5).  
2️⃣ **O sistema verifica** se o usuário já existe no banco de dados:
   - Se existir, continua o processo.
   - Se não existir, um novo usuário é cadastrado.  
3️⃣ **A avaliação do usuário** é salva no banco de dados para o filme selecionado.  
4️⃣ **A média das avaliações** do filme é recalculada e salva no banco.
---

### 🌀 Representação da Lógica do Sistema
A imagem abaixo ilustra o funcionamento do processo de avaliação:

![Fluxo de Lógica](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/dsmovie-objs.png "Fluxo de Lógica")

---

### 📚 Padrão de Camadas Adotado
O sistema segue uma arquitetura em camadas, conforme o esquema abaixo:

![Padrão de Camadas](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/padrao-camadas.png)

---

### 🎨 Interface do Usuário

A seguir, algumas imagens da interface do usuário no **web** e **mobile**:

### 🖥️ Layout Web  
![Web1](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/web.png)  
![Web2](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/web2.png)  
![Web3](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/web3.png)  
![Web4](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/web4.png)  

---

### 📱 Layout Mobile  
<img src="https://github.com/Albertinesilva/dsmovie/blob/main/_assets/mobile1.png" width="260" height="auto"> &nbsp; <img src="https://github.com/Albertinesilva/dsmovie/blob/main/_assets/mobile2.png" width="260" height="auto"> &nbsp; <img src="https://github.com/Albertinesilva/dsmovie/blob/main/_assets/mobile3.png" width="260" height="auto">

---

## ☁️ Passo: Implantação no Heroku

### Criar App no Heroku
- Crie um novo app no Heroku.

### Provisionar Banco PostgreSQL
- No painel do Heroku, adicione o serviço Heroku Postgres.

### Definir Variável de Ambiente
- Defina a variável `APP_PROFILE=prod` no Heroku.

### Conectar ao Banco via pgAdmin
- Conecte o pgAdmin ao banco PostgreSQL usando as credenciais fornecidas pelo Heroku.

---

### Deploy do Backend
1. Faça login no Heroku:
   ```bash
   heroku login

2. Conecte o repositório ao Heroku:
      ```bash
      heroku git:remote -a <nome-do-app>
      ```

3. Faça o deploy do backend para o Heroku:
      ```bash
      git subtree push --prefix backend heroku main
      ```

---

☁️ Passo: Implantação no Netlify
Criar Site no Netlify
- Crie um novo site no Netlify a partir do repositório GitHub.

Configurações de Deploy
- Base directory: frontend

- Build command: yarn build

- Publish directory: frontend/build

Arquivo _redirects
- No diretório frontend/public, crie o arquivo _redirects com o seguinte conteúdo:
  ```bash
  /* /index.html 200
  ```

Configurações Adicionais
- Defina o nome do site em Site settings -> Domain Management.

- Trigger deploy em Deploys -> Trigger deploy.

---

## 🎉 Conclusão

Ao longo do desenvolvimento do projeto **DSMovie**, adquiri uma série de conhecimentos e habilidades valiosas que ampliaram minha compreensão sobre **desenvolvimento web full-stack**. 

### Principais aprendizados:

- **Desenvolvimento Backend com Spring Boot:**
  - Aprendi a criar uma aplicação backend estruturada com **Spring Boot**, utilizando o padrão de projeto **MVC** e integrando com **JPA** e **Hibernate** para a persistência de dados.
  - Trabalhei com **Banco de Dados PostgreSQL** e usei **pgAdmin** para gerenciar a base de dados e realizar conexões eficientes.
  - A implementação de **API REST** foi um ponto chave, permitindo a comunicação entre o **backend** e o **frontend**.

- **Gestão de Dependências e Deploy:**
  - Ganhei experiência no uso do **Maven** para gerenciamento de dependências.
  - Realizei o **deploy do backend no Heroku** e aprendi a configurar variáveis de ambiente e conectar o banco PostgreSQL para garantir o funcionamento da aplicação na nuvem.
  - Implantei o **frontend no Netlify**, configurando o build e criando redirecionamentos para garantir uma navegação suave.

- **Desenvolvimento Frontend com ReactJS:**
  - Trabalhei com **ReactJS** e **TypeScript** para construir a interface do usuário, criando componentes reutilizáveis e interativos.
  - Implementei o **React Router** para navegação e usei **React Hooks** como `useState`, `useEffect` e `useParams` para gerenciar estado e efeitos colaterais na aplicação.
  - Aprendi a consumir APIs utilizando **Axios**, integrando o frontend com o backend de maneira eficiente.

- **Integração Backend e Frontend:**
  - Aprendi como integrar o **backend e o frontend** utilizando **API REST** para comunicação e compartilhamento de dados.
  - Explorei o conceito de **monorepo** no **Git/GitHub**, permitindo o controle de versão de ambos os componentes do projeto (backend e frontend) em um único repositório.

- **Melhorias de Infraestrutura:**
  - Ao longo do processo, aprendi a configurar ferramentas de deploy, incluindo o uso do **Heroku CLI** para realizar o deploy do backend e o uso de **Netlify** para o deploy do frontend.
  - Refinei o entendimento sobre a configuração de **banco de dados** e a **geração de seeds** para preencher dados iniciais no banco de dados da aplicação.

Este projeto foi uma excelente oportunidade para colocar em prática conceitos de **desenvolvimento web full-stack**, **deploy** na nuvem e **integração de sistemas**, além de aprimorar minha habilidade em trabalhar com tecnologias modernas no ecossistema Java e JavaScript.

---

### 🧑‍💻 **[Albert](https://www.linkedin.com/in/albert-backend-java-spring-boot/)**
