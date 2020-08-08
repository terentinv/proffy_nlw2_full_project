# nlw2-proffy


------------------------------------------------------------

<p align="center">
   <img src=".github/logo.png" width="300"/>
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/maicon-boer-35210797/">
      <img alt="Maicon Boer" src="https://img.shields.io/badge/-MaiconBoer-8257E5?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <a aria-label="Completed" href="https://nextlevelweek.com/episodios/omnistack/edicao/2">
    <img src="https://img.shields.io/badge/Proffy-NLW 2.0-8257E5?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
  <a href="https://github.com/maiconboer/nlw2-proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/maiconboer/nlw2-proffy?color=8257E5&logo=github">
  </a>
</p>


<p align="center">Conectando professores e estudantes, Next Level Week#2 @Rocketseat</p>


# Especificações

* [Tecnologias](#computer-tecnologias)
* [Funcionalidades](#rocket-funcionalidades)
* [Como rodar](#construction_worker-como-rodar)


<p align="center">Web</p>
<p align="center">
   <img src=".github/web-landing.png" width="400px">
   <img src=".github/web-list.png" width="400px">
</p>


<p align="center">Mobile</p>
<p align="center">
   <img src=".github/mobile-splash.png" width="180">
   <img src=".github/mobile-onboarding.png" width="180">
   <img src=".github/mobile-home.png" width="180">
   <img src=".github/mobile-favoritos.png" width="180">
</p>

# :computer: Tecnologias
Utiliza as seguintes tecnologias:

**Back-end**
<ul>
  <li>Node.js</li>
  <li>Typescript</li>
  <li>Express</li>
  <li>Knex.js</li>
  <li>SQLite</li>
</ul>

**Front-end: Web**
<ul>
  <li>ReactJS</li>
  <li>Typescript</li>
  <li>Axios</li>
</ul>

**Front-end: Mobile**
<ul>
  <li>React-Native</li>
  <li>Typescript</li>
  <li>Axios</li>
</ul>

# :rocket: Funcionalidades

* Aplicação para conectar estudantes e professores.

# :construction_worker: Como rodar
```bash
# Clone o Repositorio
$ git clone https://github.com/maiconboer/nlw2-proffy.git
```
### 📦 Rode o Servidor/API

Importante!

Crie dentro da pasta ```proffy_server / src / database```  um arquivo chamado ```database.sqlite```

```bash
# Acesse a pasta do servidor
$ cd proffy_server
# Instale as depedencias
$ yarn install
# Rode as migrations para criar as tabelas no banco de dados
$ yarn knex:migrate
# Inicie o servidor
$ yarn start
```
API rodando no endereço: http://localhost:3333/

### 💻 Rode a versão WEB

```bash
# Acesse a pasta web
$ cd proffy_web
# Instale as depedencias
$ yarn install
# Inicie a aplicação
$ yarn start
```
Aplicação rodando no endereço: http://localhost:3000/ 

------------------------------------------------------------

Em breve explicações para rodar versão mobile.
