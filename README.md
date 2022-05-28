# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa


### 1) Qual a relação entre os métodos HTTP e o CRUD?  


 O **Hypertext Transfer Protocol - _HTTP_**, como o prórpio nome diz, é um protocolo que permite a obtenção de recursos, como documentos HTML. É a base das trocas de dados na Web. Funciona através do modelo cliente/servidor, ou seja, as interações são iniciadas sempre pelo cliente, geralmente um navegador Web. As mensagens trocadas entre as ártes são individuais, a mensagem enviada pelo cliente é chamada de requisição _(request)_, e a mensagem devolvida pelo servidor é intitulada resposta _(response)_.
  
O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para obter um dado recurso. Conhecidos como _HTTP Verbs_, os mais conhecidos são:
- GET - solicita a representação de um recurso específico
- POST - é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor. 
- PUT - substitui todas as atuais representações do recurso de destino pela carga de dados da requisição. 
- PATCH - é utilizado para aplicar modificações parciais em um recurso.
- DELETE - remove um recurso específico.

O **CRUD** _(Create, Read, Update, Delete)_, é um acrônimo para as maneiras de se operar em informação armazenada. São as operações executadas em bancos de dados relacional (SQL) e não-relacional (NoSQL). Essas operações pertencem ao agrupamento chamado de Data Manipulation Language (DML). 

- CREATE - operação de criação de um registro.
- READ - operação de consulta de um ou mais registros.
- UPDATE - comando utilizado para a atualização de um ou mais registros.
- DELETE - comando utilizado para a exclusão de registro.

> Embora possam ser parecidos em um primeiro momento, CRUD se refere às quatro operações realizadas em bancos de dados, enquanto HTTP é um protocolo com métodos de requisição responsáveis por indicar as ações a serem executadas. 



### 2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

> Ambos são métodos de requisição HTTP e diferenciam-se quanto as suas finalidades.

- **PUT** é o método de requisição que cria um novo recurso ou subsititui uma representação do recurso de destino com os novos dados. É um método idempotente. Por exemplo: quando você deseja atualizar o nome e e-mail do Candidato, deve-se enviar todos os parâmetros do Candidato incluindo aqueles que não devem ser atualizados no corpo da solicitação, caso contrário, ele simplesmente substituirá todo o recurso pelo nome e e-mail.

- **PATCH** é o método de requisição que executa atualizações parciais. No exemplo acima, para o PATCH request, a requisição deve indicar apenas o campo a ser modificado.



### 4) Defina o conceito de idempotência e como uma API pode ser idempotente

O conceito matemático se mantém. Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Sem efeitos colaterais.

Método HTTP| Seguro| Idempotente
-- | -- | --
GET | Sim | Sim
HEAD | Sim | Sim
OPTIONS | Sim | Sim
TRACE | Sim | Sim
PUT | Não | Sim
DELETE | Não | Sim
POST | Não | Não
PATCH | Não | Não



### 5) Cite alguns diferentes padrões de projetos de software

Padrões de Projeto - _design patterns_ são soluções típicas para problemas comuns em projeto de software. Os padrões podem ter finalidades de criação, comportamento e estrutural.

> Criação _(Creational)_
- Abstracty Factory
- Factory Method
- Singleton

> Estrutura _(Structural)_
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

> Comportamento _(Behavioral)_
- Chain of Responsability
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor