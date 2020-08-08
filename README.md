# #NextLevelWeek2


------------------------------------------------------------

<p align="center">
   <a href="https://rocketseat.com.br/"><img src="https://i.ibb.co/yYHmzQm/2-NLW-02-1400x900.jpg" alt="2-NLW-02-1400x900" border="0"></a>
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/vinicius-terentin/">
      <img alt="Vinicius Terentin" src="https://img.shields.io/badge/-ViniciusTerentin-8257E5?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <a aria-label="Completed" href="https://nextlevelweek.com/episodios/omnistack/edicao/2">
    <img src="https://img.shields.io/badge/Proffy-NLW 2.0-8257E5"></img>
  </a>
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
  
</p>


<h3 align="center">Projeto desenvolvido durante a #NextLevelWeek2, @RocketSeat</h3>


# Especificações

* [Tecnologias](#computer-tecnologias)
* [Funcionalidades](#gear-funcionalidades)
* [Como rodar](#construction_worker-como-rodar)


<p align="center">Web</p>
<p align="center">
   <img src="https://media.giphy.com/media/S5nQ0YTAEkjI2bAiZ1/giphy.gif" width="400px">
   
</p>


<p align="center">Mobile</p>
<p align="center">
   <img src="" width="180">
   <img src="" width="180">
   <img src="" width="180">
   <img src="" width="180">
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

# :gear: Funcionalidades

* Aplicação FullStack para conectar estudantes e professores.

# :construction_worker: Como rodar
```bash
# Clone o Repositorio
$ git clone https://github.com/terentinv/proffy_nlw2_full_project.git
```

### 📦 Rode o Servidor/API


```bash
# Acesse a pasta do servidor
$ cd /server/
# Instale as depedencias
$ yarn install
# Rode as migrations para gerar o arquivo database.sqlite e as tabelas no banco de dados 
$ yarn knex:migrate
# Inicie o servidor
$ yarn start
```
API rodando no endereço: http://localhost:3333/

### 💻 Rode a versão WEB

```bash
# Acesse a pasta web
$ cd /web/
# Instale as depedencias
$ yarn install
# Inicie a aplicação
$ yarn start
```
Aplicação rodando no endereço: http://localhost:3000/ 




