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