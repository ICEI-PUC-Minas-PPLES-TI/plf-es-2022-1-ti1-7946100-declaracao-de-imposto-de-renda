# Informações do Projeto
`TÍTULO DO PROJETO`  

Dificuldade na Declaração do Imposto de Renda

`CURSO` 

Engenharia de Software

## Participantes

Os membros do grupo são: 

> - Diogo Martins de Assis
> - Davi Cesar Martins e Silva
> - Henrique Carvalho Almeida
> - Mateus Estevão de Souza
> - Pedro Afonso De Campos Faria Maciel
> - Vítor dos Santos Moreira

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

> A dificuldade que os entrevistados nos mostraram quando abordamos o assunto "Declarar o imposto de renda",
> foram a falta de informação e a complexa linguagem técnica usada para a declaração. 

## Objetivos

> O projeto tem como objetivo criar um software onde:
> - auxilie as pessoas que passam pelas dificudades ditas acima.
> - apresente de modo dinâmico o assunto estimulando as pessoas a fazerem sozinhas.
> - informe as consequências de não declarar o imposto de renda e até mesmo.

## Justificativa

> Durante todo desenvolvimento das crianças e jovens, o Imposto de Renda não é um assunto abordado de maneira direta,
> o que acaba gerando os problemas ditos acima. Do outro lado, existem vários adultos e idosos que não tem uma afinidade
> grande com o processo de declarar o Imposto de Renda e acabam pedindo para terceiros, como os contadores, para fazerem por eles. 


## Público-Alvo

> Jovens que estão entrando na fase adulta e que em um futuro próximo teram que declarar o Imposto de Renda.
> Adultos que já conhecem, ou não, sobre a declaração e terceirizam por acharem muito complexo.
> Pessoas de idade avançada onde apresentam uma dificuldade maior para absorver as regras da declaração.

 
# Especificações do Projeto

> Coletamos informações atraves de entrevistas feitas pelo google forms onde a partir delas conseguimos d
> eterminar personas e desenhar seus respectivos mapas de empatia. Juntando as ideias com essas novas 
> informações definimos os requisitos funcionais e os não funcionais.

## Personas e Mapas de Empatia

> João Teodoro da Silva, 68 anos, professor universitário: 
> 1. Muito competente em seu trabalho, mas na questão financeira deixa a desejar.
> 2. Possui rotina árdua, com prazos de entrega a cumprir, e colegas de trabalho para a ajudar.
> 3. Sua personalidade reservada e introvertida o impede de buscar a ajuda humana para questões de seu próprio meio social.
> 4. Uma ferramenta online, seja site ou aplicativo, o ajudaria e muitas em questões de declaração de imposto de renda desde que a mesma
> esclaressa corretamente dados a serem entendidos e expliquem determinados termos, o que poupa tempo e não afetando seu meio profissional.

> Ricardo Martins Xavier, 36 anos, técnico de T.I:
> 1. Produz soluções práticas de grande impacto, tem colegas que o ajudam e gosta de ajudar, não acredita que seus dados na internet estão realmente seguros.
> 2. Possui grande conhecimento na área de desenvolvimento de programas de computador, mas deixa a desejar na área administrativo-financeira.
> 3. Sua personalidade bem humorada o permite ter boas relações sociais, sempre busca ajuda da internet resoluções para seus problemas, sejam de sua própria 
> profissão quanto para seus problemas do dia a dia.
> 4. Por deixar a desejar em questões de conhecimento financeiro, procura uma ferramenta, com linguagem acessível e links úteis para compreender como declarar
> um imposto de renda.

> Elizabeth Clara Lima, 22 anos, estudante de economia:
> 1. Busca seu próprio desenvolvimento pessoal, sempre buscando informações úteis na internet.
> 2. Considera a declaração de imposto uma mera formalidade e que acredita que receita já saiba todos seus tributos, mas a considera necessária, já que há
> consequências para a não declaração.
> 3. Sua personalidade orgulhosa e racional justifica seu empenho para buscar soluções rápidas, possui uma mente aberta, mas quando recebe críticas não
> recebe de bom grado, mas no final acaba absorvendo e aceitando.
> 4. Por ser investidora, uma ferramenta fácil de manusear no quesito declaração de imposto de venda seria uma mão na roda quando se trata da complexidade
> da declaração quando se trata de demonstrar seus investimentos e sua rentabilidade anual.

## Histórias de Usuários

> Eu como professor universitário, uma ferramenta online capaz de me instruir e de me esclarecer sobre requisitos necessários da declaração de imposto de renda
> seria muito útil e de grande ajuda para reduzir meu tempo gasto pois o mesmo é limitado aos meus afazeres profissionais e domésticos, não possuo nínguem para me
> ajudar.

> Eu como técnico de T.I, preciso de um site capaz de me dizer o que fazer para declarar meu imposto corretamente para me auxiliar na parte financeira pois
> não possuo tanta experiência e nem conhecimento nessa área.

> Eu como estudante de economia e investidora, preciso de uma ferramenta para declarar com facilidade meus investimentos e minha rentabilidade anual, 
> com esclarecimento de dados necessários, direcionamento correto com base em meu perfil e ferramentas auxiliares, para que minhas declarações sejam feitas de 
> maneira correta e assim aprendendo como é feito uma declaração.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Fazer uma eliminação para definir se a pessoa está dentro do nicho de quem precisa declarar ou não | ALTA | 
|RF-002| Permitir que o usuário faça uma simulação do Imposto de Renda | ALTA |
|RF-003| Fornecer acessibilidade as informações referentes a declaração | ALTA |
|RF-004| Indicar para o cliente quais investimentos são necessários declarar e como declarar os mesmos | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | BAIXO | 
|RNF-002| Fornecer dados com uma certa facilidade para compreender | MÉDIO | 
|RNF-003| Segurança de dados sigilosos dos usuarios | MÉDIO |


!!!!!!
 Com base nas Histórias de Usuário, enumere os requisitos da sua solução
 Lembre-se que cada requisito deve corresponder à uma e somente uma
 característica alvo da sua solução. Além disso, certifique-se de que
 todos os aspectos capturados nas Histórias de Usuário foram cobertos.
!!!!!!

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                             |
|--|-----------------------------------------------------------------------|
|01| Todo o projeto usando somente frontend |
|02| Não podemos utilizar nenhum banco de dados para manter os dados do cliente sigilosos |


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

>![Wireframe](images/wireframedip (1).jpg)


# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.


## Ferramentas


| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
| Repositório de código | GitHub | https://github.com/XXXXXXX |
| Comunicação | Discord | https://discord.com/ |
| Processo de Design Thinking  | Miro |  https://miro.com/XXXXXXX | 
| Wireframe | Uizard  | https://app.uizard.io/prototypes/LWwYG0A38qiLw6PJ3gBx |
| Protótipo Interativo | Figma  | https://figma.com/XXXXXXX | 

> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação e de concepção utilizadas possuem
> integração semelhante e por isso foram selecionadas. 
> Para o wireframe escolhemos o Uizard porque ja tinhamos afinidade com a 
> ferramenta e por fim, para criar o prototipo utilizamos o figma 
> por melhor captar as necessidades da nossa solução.

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
