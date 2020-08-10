# Funcionalidades

## Conexões

- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas
- Rota para criar uma aula;
- Rota para listar aulas;
    - Filtrar por matéria, dia da semana, Horário;
    
    
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

<a href="https://github.com/terentinv/proffy_nlw2_full_project">Voltar<a/>
