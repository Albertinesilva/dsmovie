<h1 align="center">
  <img src="https://img.icons8.com/color/30/000000/spring-logo.png"/>
  Projeto Full Stack com Spring Boot e React
  <img src="https://img.icons8.com/color/30/000000/react-native.png"/>
</h1>

DSMovie é uma aplicação full-stack, responsiva, desenvolvida para a avaliação de filmes. Este projeto foi realizado em monorepo, utiliza um banco de dados relacional e foi dividido em 4 episódios, nos quais o professor [Nélio Alves](https://github.com/acenelio) explica detalhadamente como construir a aplicação. A aplicação foi desenvolvida durante a 6ª edição da Semana [DevSuperior](https://devsuperior.com.br/) (#sds6), um evento promovido pela DevSuperior.

A proposta principal do DSMovie é permitir que os usuários avaliem filmes por meio de um formulário simples, atribuindo uma nota de 1 a 5. Essas avaliações são armazenadas e exibidas tanto no app web quanto na versão mobile da aplicação.  

🔗 O site em deploy pode ser visualizado [aqui](https://dsmovie-portfolio.netlify.app/).

---

### 🎯 Objetivo

O **DSMovie** foi desenvolvido com o propósito de **aprimorar a integração entre backend e frontend**, utilizando **Spring Boot e React** em um ambiente full stack.  

A motivação para este projeto vem da busca contínua por evolução na **formação web**, explorando tecnologias modernas e boas práticas no desenvolvimento full stack.  

O projeto foi construído durante a **Semana DevSuperior (#sds6)**, permitindo uma abordagem prática do aprendizado ao longo de quatro etapas, cobrindo desde a estruturação do backend até a construção da interface web interativa.  

Além disso, a aplicação **também agrega valor para os usuários**, possibilitando que eles **avaliem filmes e acompanhem as notas atribuídas pela comunidade**. Dessa forma, o sistema contribui para que os usuários tenham uma **referência rápida sobre a popularidade e qualidade dos filmes avaliados**.

---

## 📌 Modelo Conceitual

![Modelo Conceitual](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/MC.png)

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- **Backend:** Spring Boot, JPA / Hibernate, Banco de Dados H2 / PostgreSQL
- **Frontend:** React, TypeScript, Axios, React Router, Bootstrap
- **Implantação:** Netlify (frontend), Heroku (backend)
- **Outras ferramentas:** Postman, VS Code, Git/GitHub

## 🏗️ Arquitetura e Lógica do Projeto

A aplicação DSMovie segue uma estrutura de **backend em Spring Boot** e **frontend em React**, organizados de forma modular para garantir escalabilidade e fácil manutenção.

### 🔄 Fluxo da Lógica de Avaliação

O sistema permite que os usuários avaliem filmes seguindo os passos abaixo:

1️⃣ **O usuário informa** o email, o ID do filme e a nota (de 1 a 5).  
2️⃣ **O sistema verifica** se o usuário já existe no banco de dados:
   - Se existir, continua o processo.
   - Se não existir, um novo usuário é cadastrado.  
3️⃣ **A avaliação do usuário** é salva no banco de dados para o filme selecionado.  
4️⃣ **A média das avaliações** do filme é recalculada e salva no banco.  

### 📌 Representação da Lógica do Sistema
A imagem abaixo ilustra o funcionamento do processo de avaliação:

![Fluxo de Lógica](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/dsmovie-objs.png "Fluxo de Lógica")

### 📌 Padrão de Camadas Adotado
O sistema segue uma arquitetura em camadas, conforme o esquema abaixo:

![Padrão de Camadas](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/padrao-camadas.png)

## 🎨 Interface do Usuário

A seguir, algumas imagens da interface do usuário no **web** e **mobile**:

### 🖥️ Layout Web  
![Web1](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/web.png)  
![Web2](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/web2.png)  
![Web3](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/web3.png)  
![Web4](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/web4.png)  

### 📱 Layout Mobile  
![Mobile 1](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/mobile1.png) ![Mobile 2](https://github.com/Albertinesilva/dsmovie/blob/main/_assets/mobile2.png) 



## Tecnologias
O sistema utiliza React em seu front-end e Spring no back-end.

## Objetivos
O projeto possui objetivos a cada episódio, a saber:

- **Episódio 1 - Spring e React no mercado**: 
    - Criar projetos back-end e front-end
    - Salvar os projeto no Github em monorepo
    - Montar o visual estático do front-end
    
- **Episódio 2 - Aprofundando na Prática**: 
    - Implementar o back-end
    - Modelo de domínio
    - Acesso a banco de dados
    - Estruturar o back end no padrão camadas
    - Criar endpoints da API REST
    - Implantação na nuvem

- **Episódio 3 - O Mapa da Carreira**: 
    - Integrar back-end e front-end
    - Três pilares do React
        - Componentes
        - Props
        - Estado
    - React Hooks
        - useState
        - useEffect
        - useParams
        - useNavigate

- **Episódio 4 - Dúvidas Respondidas**: 
    - Sanar dúvidas dos alunos nos canais de comunicação

### Objetivos pessoais 
O objetivo deste treinamento é aprofundar meus conhecimentos em Spring, framework do Java, e compreender o funcionamento full-stack de uma aplicação. Apesar de React não ser a ferramenta da minha stack, percebo aproximações conceituais com o framework que utilizo (no caso, Angular) e o treinamento tem contribuído para agregar conhecimentos. 

## Funcionalidades
- Tela Home (início): Tela inicial, onde mostra a lista de filmes cadastradas com páginas de navegação.
- Tela de Cadastro: Tela para cadastro e armazenamento de informações da Tela Home.

## Realização
[DevSuperior - Escola de programação](https://devsuperior.com.br)

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)


> Status do projeto: Concluído :heavy_check_mark:


# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Semana Spring React
## Ferramentas Utilizadas no projeto:

- Curl
- Git
- Java JDK 11 ou 17
- Maven
- STS
- Postman
- Postgresql e pgAdmin
- Heroku CLI
- NodeJS 16.x 
- VS Code

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## Objetivos do projeto 
- Implementar o back end
- Modelo de domínio
- Acesso a banco de dados
- Estruturar o back end no padrão camadas
- Criar endpoints da API REST
- Implantação na nuvem

    
#### Modelo conceitual
![Image](https://raw.githubusercontent.com/devsuperior/bds-assets/main/sds/dsmovie-dominio.png "Modelo conceitual")

#### Padrão camadas adotado

![Image](https://github.com/devsuperior/bds-assets/raw/main/sds/padrao-camadas.png "Padrão camadas")

- Criar repository
- Criar DTO
- Criar service
- Criar controller
- **COMMIT: Find movies**

### Passo: Salvar avaliação

#### Lógica:

1) Informar email, id do filme e valor da avaliação (1 a 5).

2) Recuperar usuário do banco de dados pelo email. Se o usuário não existir, insira no banco.

3) Salvar a avaliação do usuário para o dado filme.

4) Recalcular a avaliação média do filme e salvar no banco de dados.

![Image](https://raw.githubusercontent.com/devsuperior/bds-assets/main/sds/dsmovie-objs.png "Padrão camadas")


### Passo: Implantação no Heroku
- Criar app no Heroku
- Provisionar banco Postgres
- Definir variável APP_PROFILE=prod
- Conectar ao banco via pgAdmin
- Criar seed do banco

```bash
heroku -v
heroku login
heroku git:remote -a <nome-do-app>
git remote -v
git subtree push --prefix backend heroku main
```


### Passo: implantação no Netlify
- Deploy básico
  - Base directory: frontend
  - Build command: yarn build
  - Publish directory: frontend/build

- Arquivo _redirects
```
/* /index.html 200
```

- Configurações adicionais
  - Site settings -> Domain Management: (colocar o nome que você quiser)
  - Deploys -> Trigger deploy
