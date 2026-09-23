*User*
Representa o usuário da plataforma.

-Campos
-id
-name
-username
-email
-password
-bio
-avatar
-banner
-birthDate
-location
-website
-verified
-createdAt
-updatedAt
-Relacionamentos
-bookshelves
-reviews
-comments
-likes
-quotes
-readingSessions
-readingGoals
-notifications
-followers
-following
-achievements
-customLists
2. Book

Representa um livro.

Campos
id
title
subtitle
description
isbn10
isbn13
pages
language
publishDate
edition
coverImage
averageRating
totalRatings
totalReviews
publisherId
createdAt
updatedAt
Relacionamentos
authors
genres
publisher
reviews
shelves
quotes
readingSessions
3. Author

Representa um autor.

Campos
id
name
biography
photo
birthDate
deathDate
country
Relacionamentos
books
4. Publisher

Editora.

Campos
id
name
logo
website
description
Relacionamentos
books
5. Genre

Gênero literário.

Campos
id
name
description
Relacionamentos
books
6. BookAuthor (Tabela N:N)
Campos
bookId
authorId
7. BookGenre (Tabela N:N)
Campos
bookId
genreId
8. UserBookshelf

Representa um livro na estante do usuário.

Campos
id
userId
bookId
status
currentPage
startedAt
finishedAt
rating
favorite
private
rereadCount
createdAt
updatedAt
9. Review

Resenha.

Campos
id
title
content
rating
spoiler
likesCount
commentsCount
createdAt
updatedAt
userId
bookId
Relacionamentos
comments
likes
10. Comment

Comentários da resenha.

Campos
id
content
createdAt
updatedAt
userId
reviewId
11. Like

Curtidas.

Campos
userId
reviewId
createdAt
12. Follow

Usuário seguindo outro.

Campos
followerId
followingId
createdAt
13. Quote

Trechos favoritos.

Campos
id
content
page
chapter
visibility
createdAt
userId
bookId
14. ReadingSession

Sessão de leitura.

Campos
id
userId
bookId
pagesRead
minutesRead
startedAt
endedAt
15. ReadingGoal

Meta anual.

Campos
id
year
booksGoal
pagesGoal
booksCompleted
pagesCompleted
userId
16. Achievement

Conquistas.

Campos
id
name
description
icon
points
17. UserAchievement

Tabela N:N.

Campos
userId
achievementId
unlockedAt
18. Notification

Notificações.

Campos
id
type
title
message
read
senderId
receiverId
createdAt
19. BookList

Listas criadas pelos usuários.

Exemplo:

Livros Favoritos
Quero Comprar
Melhores de Fantasia
Campos
id
name
description
visibility
userId
createdAt
20. BookListItem

Tabela N:N.

Campos
listId
bookId
addedAt
21. Badge

Selos do perfil.

Campos
id
name
description
icon
22. UserBadge

Tabela N:N.

Campos
userId
badgeId
unlockedAt
23. Recommendation

Livros recomendados ao usuário.

Campos
id
userId
bookId
reason
score
createdAt
24. Report

Denúncias.

Campos
id
type
reason
reporterId
targetId
status
createdAt
25. Activity

Feed de atividades.

Exemplos:

Arthur terminou "O Hobbit"
Arthur avaliou com 5 estrelas
Arthur começou a ler
Campos
id
type
userId
bookId
reviewId
createdAt

- SuperBook - Back-end

Este repositório contém o back-end do SuperBook, responsável por processar as informações enviadas pelo front-end, realizar operações no banco de dados e controlar funcionalidades como usuários e autenticação. A aplicação foi desenvolvida utilizando NestJS e TypeScript, seguindo uma estrutura baseada em módulos, controllers e services.

O back-end também utiliza Prisma para fazer a comunicação com o banco de dados PostgreSQL. Dessa forma, as informações recebidas pela API são processadas pelo NestJS e armazenadas ou consultadas através do Prisma.

- Tecnologias utilizadas

O projeto foi desenvolvido principalmente com NestJS 11 e TypeScript. Para o banco de dados é utilizado PostgreSQL juntamente com Prisma 7. O projeto também possui ferramentas relacionadas à autenticação e segurança, como JWT e bcrypt.

Para autenticação, o projeto utiliza JWT através da biblioteca "@nestjs/jwt". As senhas dos usuários são protegidas utilizando "bcrypt", evitando que sejam armazenadas diretamente como texto comum no banco de dados.

As principais tecnologias utilizadas são NestJS, TypeScript, Prisma, PostgreSQL, JWT, bcrypt, Node.js, Jest, ESLint e Prettier.

- Estrutura do projeto

A maior parte do código da aplicação está localizada dentro da pasta "src". O arquivo "src/main.ts" é responsável por iniciar a aplicação, enquanto "src/app.module.ts" funciona como módulo principal e reúne os outros módulos do projeto.

A pasta "src/user" concentra as funcionalidades relacionadas aos usuários. Nela estão o controller, o service, os DTOs e o módulo de usuário. A pasta "src/auth" possui a estrutura responsável pela autenticação. Já a pasta "src/prisma" contém a configuração utilizada para estabelecer a comunicação entre a aplicação e o banco de dados.

A pasta "prisma" contém o arquivo "schema.prisma", responsável por definir a estrutura das tabelas e dos relacionamentos existentes no banco de dados.

- Inicialização da aplicação

A inicialização do servidor acontece através do arquivo "src/main.ts". Esse arquivo cria a aplicação utilizando o NestJS e carrega o módulo principal definido em "src/app.module.ts".

Atualmente o servidor é iniciado na porta "3001". Dessa forma, ao executar o projeto localmente, a API fica disponível no endereço "http://localhost:3001".

O projeto também possui CORS habilitado. Isso permite que aplicações executadas em outros endereços, como o front-end do SuperBook em "http://localhost:3000", façam requisições para a API.

- Módulo principal

O arquivo "src/app.module.ts" representa o módulo principal da aplicação. Ele é responsável por reunir os módulos necessários para o funcionamento do sistema.

Atualmente são importados "UserModule", "PrismaModule" e "AuthModule". Dessa forma, as funcionalidades relacionadas aos usuários, banco de dados e autenticação ficam disponíveis dentro da aplicação.

Também são registrados "AppController" e "AppService", responsáveis pela rota inicial da API.

- Rota inicial

O arquivo "src/app.controller.ts" possui uma rota simples para verificar se o servidor está funcionando.

Ao acessar a rota "GET /", a aplicação utiliza o "AppService" e retorna a mensagem "Hello World!".

Essa rota pode ser utilizada como uma verificação básica para saber se o servidor foi iniciado corretamente.

- Usuários

A principal estrutura relacionada aos usuários está localizada na pasta "src/user". O arquivo "src/user/user.controller.ts" recebe as requisições HTTP, enquanto "src/user/user.service.ts" contém a lógica utilizada para acessar e alterar os dados dos usuários.

O projeto possui atualmente operações para cadastrar, listar, consultar, atualizar e excluir usuários.

A rota "POST /users" cria um novo usuário. A rota "GET /users" retorna os usuários cadastrados. A rota "GET /users/:id" busca um usuário utilizando seu identificador. A rota "PUT /users/:id" permite atualizar informações e "DELETE /users/:id" remove um usuário.

Essas operações utilizam o "UserService", que por sua vez utiliza o "PrismaService" para realizar as consultas no PostgreSQL.

- Cadastro de usuários

O cadastro acontece através da rota "POST /users". Quando uma requisição chega nessa rota, os dados são enviados para o método responsável pela criação do usuário dentro de "src/user/user.service.ts".

Os dados utilizados para criação estão definidos em "src/user/dto/create-user.dto.ts". Atualmente a estrutura trabalha com as informações "name", "username", "email", "password", "idade" e "totalPoints".

Antes de cadastrar o usuário, o sistema verifica se já existe uma conta utilizando o mesmo e-mail. Também é feita uma verificação para impedir a criação de usuários com o mesmo nome de usuário.

Caso o e-mail já esteja cadastrado, o servidor retorna um erro informando que aquele endereço já existe. O mesmo acontece caso o "username" já esteja sendo utilizado.

Antes de armazenar a senha, o sistema utiliza "bcrypt" para gerar uma versão criptografada. Atualmente o hash é criado utilizando o valor "10" como fator de custo. Assim, a senha original não é armazenada diretamente no banco de dados.

Depois dessas verificações, o Prisma cria o usuário no PostgreSQL.

- Consulta de usuários

A rota "GET /users" utiliza o método "findByAll" para buscar todos os usuários armazenados no banco de dados.

Para buscar apenas um usuário é utilizada a rota "GET /users/:id". O valor ":id" representa o identificador numérico do usuário. O NestJS utiliza "ParseIntPipe" para transformar e validar esse valor como um número.

Antes de retornar o resultado, o sistema verifica se o usuário existe. Caso nenhum usuário seja encontrado com aquele identificador, é retornado um erro informando que o usuário não foi encontrado.

O "UserService" também possui métodos internos para localizar usuários através de "email" e "username". Essas funções são utilizadas principalmente durante o cadastro e o login.

- Atualização de usuários

A atualização acontece através da rota "PUT /users/:id". Os campos que podem ser modificados estão definidos no arquivo "src/user/dto/update-user.dto.ts".

Atualmente podem ser atualizados "name", "username", "email", "password", "idade" e "totalPoints".

Antes da atualização, o sistema verifica se o usuário realmente existe. Depois disso, o Prisma realiza a atualização dos dados no banco.

É importante observar que a lógica atual de atualização envia os dados diretamente para o Prisma. Portanto, caso a senha seja alterada através dessa rota, ainda seria necessário adicionar uma etapa específica para aplicar "bcrypt" novamente antes de armazenar a nova senha.

- Exclusão de usuários

A exclusão utiliza a rota "DELETE /users/:id".

Antes de remover o registro, o sistema utiliza o método responsável por buscar o usuário através do identificador. Isso garante que seja retornado um erro caso seja feita uma tentativa de excluir um usuário que não existe.

Caso o registro seja encontrado, o Prisma realiza a exclusão no banco de dados. Quando a operação é concluída, a rota utiliza o status HTTP "204 No Content".

- Autenticação

A autenticação está organizada dentro da pasta "src/auth". O arquivo "src/auth/auth.controller.ts" recebe as requisições de autenticação e o arquivo "src/auth/auth.service.ts" possui a lógica necessária para realizar o login.

Atualmente o login é realizado através da rota "POST /auth/login".

O usuário deve enviar seu "email" e sua "password". Depois disso, o sistema utiliza o "UserService" para procurar o usuário através do endereço de e-mail informado.

Caso nenhum usuário seja encontrado, o sistema retorna um erro de autenticação. Se o usuário existir, a senha enviada é comparada com a senha criptografada armazenada no banco utilizando "bcrypt".

Se a senha estiver correta, a aplicação cria um token JWT contendo o identificador e o e-mail do usuário. Esse token é retornado através da propriedade "access_token".

Esse token poderá ser utilizado futuramente para identificar usuários autenticados e proteger determinadas rotas da aplicação.

- Prisma

A integração com o banco de dados está localizada na pasta "src/prisma". O arquivo "src/prisma/prisma.service.ts" cria a conexão utilizada pela aplicação.

O projeto utiliza "PrismaClient" juntamente com "PrismaPg", que é o adaptador do Prisma utilizado para comunicação com PostgreSQL.

O endereço do banco é obtido através da variável de ambiente "DATABASE_URL". Quando o módulo do Prisma é iniciado, a aplicação abre a conexão com o banco. Quando o módulo é encerrado, a conexão é finalizada.

O arquivo "src/prisma/prisma.module.ts" disponibiliza o "PrismaService" para outros módulos. Dessa maneira, serviços como o "UserService" conseguem utilizar o Prisma para acessar os dados.

- Banco de dados

A estrutura do banco está definida no arquivo "prisma/schema.prisma". O banco configurado atualmente é PostgreSQL.

O sistema possui modelos para usuários, livros, autores, editoras, gêneros, estantes de leitura, avaliações, comentários, curtidas, pontos e quizzes.

O modelo "User" representa os usuários da plataforma. Ele armazena informações como identificador, nome, nome de usuário, e-mail, senha, idade, pontuação total e datas de criação e atualização.

O modelo "Book" representa os livros cadastrados. Ele possui informações como título, subtítulo, descrição, ISBN, quantidade de páginas, idioma, data de publicação e editora.

Os modelos "Author", "Publisher" e "Genre" representam autores, editoras e gêneros literários. Os modelos "BookAuthor" e "BookGenre" são utilizados para construir os relacionamentos entre livros, autores e gêneros.

O modelo "UserBookshelf" representa os livros adicionados à estante de cada usuário. Ele permite armazenar informações como página atual, avaliação, favorito e situação da leitura.

Os possíveis estados de leitura estão definidos através de "ReadingStatus". Atualmente existem os estados "QUERO_LER", "LENDO", "LIDO" e "ABANDONADO".

Também existem os modelos "Review", "Comment" e "Like", responsáveis pelas avaliações, comentários e curtidas relacionadas aos livros e usuários.

O modelo "BookPoints" permite controlar uma quantidade de pontos relacionada a determinado usuário e livro.

Além disso, existem os modelos "Quiz", "QuizQuestion" e "QuizOption". Eles formam a estrutura para criação de quizzes relacionados aos livros. Um quiz pode possuir várias perguntas e cada pergunta pode possuir diferentes alternativas, sendo possível indicar qual alternativa está correta.

- Configuração do banco

A configuração utilizada pelo Prisma está localizada em "prisma7.config.ts". Esse arquivo aponta para "prisma/schema.prisma", define a pasta de migrations e utiliza "DATABASE_URL" como endereço do PostgreSQL.

Para executar o projeto é necessário criar um arquivo ".env" na raiz e configurar a variável com os dados do banco.

Um exemplo de configuração seria "DATABASE_URL="postgresql://usuario:senha@localhost:5432/superbook"".

Os valores de "usuario", "senha", "localhost", "5432" e "superbook" devem ser alterados de acordo com a configuração do PostgreSQL utilizado.

- Como executar o projeto

Antes de iniciar o backend é necessário possuir Node.js, npm, Git e acesso a um banco PostgreSQL.

Primeiro, clone o repositório utilizando "git clone https://github.com/Nickss09/superbook-back.git".

Depois acesse a pasta do projeto utilizando "cd superbook-back".

Em seguida, instale as dependências utilizando "npm install".

Após instalar as dependências, crie o arquivo ".env" na raiz do projeto e configure "DATABASE_URL" com a conexão do PostgreSQL. Um exemplo seria "DATABASE_URL="postgresql://usuario:senha@localhost:5432/superbook"".

Depois que o banco estiver configurado, utilize "npx prisma migrate dev" para aplicar as migrations necessárias ao banco de dados.

Também utilize "npx prisma generate" para gerar o Prisma Client utilizado pela aplicação.

Com o banco preparado, o servidor pode ser iniciado em modo de desenvolvimento utilizando "npm run start:dev".

Depois da inicialização, a API estará disponível no endereço "http://localhost:3001".

- Rotas disponíveis

Atualmente a API possui uma rota inicial, rotas relacionadas aos usuários e uma rota de autenticação.

A rota "GET /" pode ser utilizada para verificar se a aplicação está funcionando. A rota "POST /users" cria usuários, "GET /users" lista os usuários, "GET /users/:id" busca um usuário específico, "PUT /users/:id" atualiza um usuário e "DELETE /users/:id" remove um usuário.

Para autenticação, a rota disponível atualmente é "POST /auth/login". Essa rota recebe "email" e "password" e, quando as informações estão corretas, retorna um "access_token".

- Scripts disponíveis

O arquivo "package.json" possui diferentes comandos para executar e testar o projeto.

O comando "npm run start:dev" inicia a aplicação em modo de desenvolvimento e acompanha as alterações realizadas no código. O comando "npm run start" inicia normalmente o NestJS e "npm run build" gera a versão compilada da aplicação.

Para executar a aplicação compilada pode ser utilizado "npm run start:prod".

O projeto também possui os comandos "npm test", "npm run test:watch", "npm run test:cov" e "npm run test:e2e" para executar diferentes tipos de testes.

Para verificar e corrigir padrões de código podem ser utilizados "npm run lint" e "npm run format".

- Testes

A pasta "test" contém a estrutura destinada aos testes da aplicação. Atualmente existe um teste de ponta a ponta para a rota "GET /".

Esse teste inicia a aplicação e verifica se a rota principal responde com o status "200" e retorna a mensagem "Hello World!".

O projeto utiliza Jest e Supertest para realizar os testes.

- Integração com o Front-end

O front-end e o back-end foram construídos como projetos separados. Durante o desenvolvimento, o front-end normalmente é executado em "http://localhost:3000", enquanto este backend utiliza "http://localhost:3001".

Como o CORS está habilitado no arquivo "src/main.ts", o navegador pode permitir a comunicação entre as duas aplicações.

Porém, existe atualmente uma diferença entre algumas informações esperadas pelo front-end e pelo backend.

No backend, o cadastro é realizado através de "POST /users". Portanto, não existe atualmente uma rota "POST /auth/register".

Além disso, o backend trabalha com os campos "name", "username", "email", "password" e "idade" para criação do usuário. O front-end precisa utilizar os mesmos nomes e enviar os campos obrigatórios esperados pelo banco para que o cadastro funcione corretamente.

No login, o backend recebe "email" e "password" através de "POST /auth/login". Portanto, o front-end também deve enviar "password" e não outro nome de propriedade para a senha.

Essas diferenças precisam ser padronizadas entre os dois projetos para que a comunicação entre front-end e back-end funcione corretamente.

- Pontos de atenção

A implementação atual ainda está em desenvolvimento e existem alguns pontos importantes que podem ser ajustados.

O "AuthService" utiliza "JwtService" para criar o token de autenticação. Entretanto, o módulo "src/auth/auth.module.ts" ainda precisa possuir a configuração adequada do módulo JWT e de sua chave secreta para que essa autenticação seja utilizada de forma completa.

Outro ponto está nas respostas das rotas de usuários. Atualmente o "UserService" retorna diretamente os registros obtidos através do Prisma. Como o modelo possui o campo "password", é importante evitar que o hash da senha seja enviado nas respostas da API.

Também é importante ajustar o processo de atualização de senha. A criação de usuários utiliza "bcrypt", porém a atualização realizada através de "PUT /users/:id" ainda não aplica automaticamente essa mesma proteção caso uma nova senha seja enviada.

Além disso, os DTOs atuais definem a estrutura dos objetos utilizando TypeScript, mas ainda podem receber validações adicionais para verificar informações como formato do e-mail, tamanho mínimo da senha, idade e campos obrigatórios.

- Melhorias futuras

O backend pode continuar sendo expandido conforme novas funcionalidades forem adicionadas ao SuperBook. Entre as melhorias possíveis estão a implementação completa da autenticação JWT, criação de guards para proteger rotas privadas, validação dos dados recebidos, tratamento mais completo de erros e padronização das respostas da API.

Também poderão ser criados controllers e services para os livros, autores, editoras, gêneros, estantes, avaliações, comentários, curtidas, pontos e quizzes que já possuem estrutura definida no banco de dados.

Outra melhoria importante é ampliar os testes automatizados, adicionando testes para criação de usuários, login, atualização, exclusão e demais funcionalidades.

- Resumo

O SuperBook Back-end representa a parte responsável pela lógica e pelos dados da aplicação. Atualmente ele possui conexão com PostgreSQL através do Prisma, gerenciamento de usuários e uma estrutura inicial de autenticação utilizando bcrypt e JWT.

O NestJS organiza a aplicação através de módulos, controllers e services. Os controllers recebem as requisições, os services executam a lógica necessária e o Prisma realiza a comunicação com o banco de dados.

O projeto já possui uma estrutura de banco mais ampla, incluindo livros, autores, gêneros, estantes, avaliações, comentários, pontos e quizzes. Conforme o desenvolvimento continuar, essas estruturas poderão receber suas próprias rotas e funcionalidades, ampliando o funcionamento do SuperBook.
