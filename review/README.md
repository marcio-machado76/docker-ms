# Serviço de Reviews

Esse projeto é um serviço de cadastro de reviews. Ele trabalha cadastrando o review de qualquer elemento.

## Estrutura do projeto

Esse projeto trabalha com uma base de dados Postgree 

![Diagrama](./img/diagrama.png)

## Configuração

É preciso determinar a connection string pra que ele acesse o banco de dados Postgree. Isso pode ser feito alterando o arquivo src/Review.Web/appsettings.json ou definindo como variável de ambiente (ConnectionStrings__MyConnection)

Exemplo:

ConnectionStrings__MyConnection: Host=localhost;Database=pguser;Username=pguser;Password=Pg@123;
