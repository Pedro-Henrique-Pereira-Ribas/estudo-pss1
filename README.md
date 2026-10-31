# Caderno PSS 1 2026

Site de estudos **offline** para o Processo Seletivo Seriado 1 da CPS (2026), com resumos, flashcards, quizzes por matéria e simulado cronometrado.

O projeto é feito em HTML, CSS e JavaScript puros: não precisa de instalação, build nem servidor para usar.

## Conteúdo

- **9 matérias**: Arte, Educação Física, Língua Portuguesa, Inglês, Espanhol, Biologia, Química, Matemática e Geografia.
- **207 tópicos** com resumo, pontos principais, pegadinhas e glossário.
- **102 flashcards** para revisão ativa.
- **150 questões** comentadas, organizadas por matéria e tópico.
- **Simulado geral** com questões sorteadas e cronômetro.
- **Tema claro e escuro**, com botão de alternância, preferência salva e respeito ao tema do sistema.
- **Progresso local**: tópicos estudados, melhores notas, histórico de simulados, flashcards e anotações.
- **Exportar/importar progresso** em JSON e opção de apagar os dados.

## Como usar

1. Abra o arquivo `index.html` no navegador (Chrome, Edge, Firefox ou Safari).
2. Navegue pelas matérias no menu lateral.
3. Use os flashcards, faça os quizzes e acompanhe tudo em **Meu progresso**.

O progresso fica salvo no `localStorage` do próprio navegador, na chave `pss1-caderno-v1`. A preferência de tema usa a chave `pss1-tema`. Nada é enviado para nenhum servidor. Se você limpar os dados do navegador, o histórico é apagado; por isso, exporte um backup de vez em quando na página de progresso.

> Alguns navegadores restringem o armazenamento local quando o arquivo é aberto diretamente como `file://`. Se isso acontecer, execute um servidor local simples na pasta do projeto:
>
> ```bash
> python -m http.server 8000
> ```
>
> Depois acesse `http://localhost:8000`.

## Estrutura do projeto

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   └── estilo.css
│   └── js/
│       ├── app.js
│       ├── tema.js
│       └── dados/
│           ├── arte.js
│           ├── biologia.js
│           ├── edfisica.js
│           ├── espanhol.js
│           ├── geografia.js
│           ├── ingles.js
│           ├── matematica.js
│           ├── portugues.js
│           └── quimica.js
└── README.md
```

Cada arquivo em `assets/js/dados/` registra uma matéria em `window.PSS_DADOS`. O `app.js` lê esses dados e monta as rotas da aplicação.

### Formato dos dados

```js
window.PSS_DADOS.exemplo = {
  id: "exemplo",
  nome: "Exemplo",
  sigla: "EX",
  cor: "#335c4b",
  ordem: 10,
  descricao: "Descrição curta da matéria.",
  topicos: [
    {
      id: "exemplo-1-1-1",
      grupo: "1.1 Grupo",
      numero: "1.1.1",
      titulo: "Título do tópico",
      resumo: ["Parágrafo 1.", "Parágrafo 2."],
      pontos: ["Ponto principal."],
      pegadinhas: ["Erro comum."],
      termos: [{ termo: "Conceito", definicao: "Definição." }]
    }
  ],
  flashcards: [{ f: "Pergunta", v: "Resposta" }],
  questoes: [
    {
      id: "exemplo-q01",
      enunciado: "Enunciado da questão?",
      alternativas: ["A", "B", "C", "D", "E"],
      correta: 0,
      explicacao: "Comentário da resposta.",
      topicoId: "exemplo-1-1-1"
    }
  ]
};
```

Para adicionar ou corrigir conteúdo, edite o arquivo da matéria correspondente. Não é necessário recompilar nada: basta recarregar a página.

## Publicar no GitHub Pages

O site pode ser publicado diretamente a partir da branch `main`:

1. No GitHub, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`.
4. Salve e aguarde a publicação.

Em contas gratuitas, o GitHub Pages publica apenas repositórios **públicos**. Se o repositório estiver privado, altere a visibilidade em **Settings → General → Danger Zone** ou use um plano que permita Pages em repositórios privados.

Endereço esperado:

```text
https://Pedro-Henrique-Pereira-Ribas.github.io/estudo-pss1/
```

O arquivo `.nojekyll` já está incluído para publicar os arquivos estáticos sem processamento do Jekyll.

## Aviso

Este é um material independente de apoio aos estudos, **não oficial da CPS**. O conteúdo foi organizado a partir dos temas do edital e pode conter simplificações. Confira sempre o edital oficial, as obras indicadas e as orientações da instituição. As questões servem para revisão e não são provas oficiais.
