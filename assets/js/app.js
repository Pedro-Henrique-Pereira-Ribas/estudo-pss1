/* =========================================================
   Caderno PSS 1 2026 — aplicação
   ========================================================= */
(function () {
  "use strict";

  var DADOS = window.PSS_DADOS || {};
  var CHAVE = "pss1-caderno-v1";
  var LETRAS = ["A", "B", "C", "D", "E"];

  var MATERIAS = Object.keys(DADOS)
    .map(function (id) { return DADOS[id]; })
    .filter(function (m) { return m && m.id && Array.isArray(m.topicos); })
    .sort(function (a, b) { return (a.ordem || 99) - (b.ordem || 99); });

  var estado = carregarEstado();
  var timerSimulado = null;
  var timerAviso = null;
  var timerNotas = null;

  var main = document.getElementById("conteudo");
  var navMaterias = document.getElementById("nav-materias");
  var barraLateral = document.getElementById("barra-lateral");
  var sobreposicao = document.getElementById("sobreposicao");
  var botaoMenu = document.getElementById("abrir-menu");
  var botaoFechar = document.getElementById("fechar-menu");
  var aviso = document.getElementById("aviso");

  var ICONES = {
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
    checkCirculo: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/></svg>',
    circulo: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/></svg>',
    setaDireita: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    setaEsquerda: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    setaBaixo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
    cartoes: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 4h11a2 2 0 012 2v11"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 114 2c-.9.7-1.5 1.2-1.5 2.5"/><path d="M12 17.2h.01"/></svg>',
    relogio: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    livro: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 016.5 3H20v17H6.5A2.5 2.5 0 004 22V5.5z"/><path d="M4 17.5A2.5 2.5 0 016.5 15H20"/></svg>',
    brilho: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
    alerta: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l9.5 17h-19L12 3z"/><path d="M12 9v5M12 17.2h.01"/></svg>',
    anotacao: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9a2.8 2.8 0 00-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/></svg>',
    imprimir: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4V9h16v9h-2"/><rect x="7" y="14" width="10" height="7"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>',
    upload: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4M7 9l5-5 5 5M4 21h16"/></svg>',
    lixo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14"/></svg>',
    embaralhar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
    voltar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 016 6v4"/></svg>',
    alvo: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>'
  };

  /* ---------- Persistência ---------- */

  function estadoInicial() {
    return {
      estudados: {},
      anotacoes: {},
      quizzes: {},
      flashcards: {},
      dias: [],
      ultimoTopico: null,
      simulados: []
    };
  }

  function carregarEstado() {
    var base = estadoInicial();
    try {
      var bruto = localStorage.getItem(CHAVE);
      if (!bruto) return base;
      var dados = JSON.parse(bruto);
      if (!dados || typeof dados !== "object") return base;
      return {
        estudados: dados.estudados && typeof dados.estudados === "object" ? dados.estudados : base.estudados,
        anotacoes: dados.anotacoes && typeof dados.anotacoes === "object" ? dados.anotacoes : base.anotacoes,
        quizzes: dados.quizzes && typeof dados.quizzes === "object" ? dados.quizzes : base.quizzes,
        flashcards: dados.flashcards && typeof dados.flashcards === "object" ? dados.flashcards : base.flashcards,
        dias: Array.isArray(dados.dias) ? dados.dias : base.dias,
        ultimoTopico: dados.ultimoTopico && typeof dados.ultimoTopico === "object" ? dados.ultimoTopico : base.ultimoTopico,
        simulados: Array.isArray(dados.simulados) ? dados.simulados : base.simulados
      };
    } catch (erro) {
      return base;
    }
  }

  function salvar() {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(estado));
    } catch (erro) {
      mostrarAviso("Não foi possível salvar o progresso neste navegador.");
    }
  }

  function dataISO(data) {
    var d = data || new Date();
    var mes = String(d.getMonth() + 1).padStart(2, "0");
    var dia = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + mes + "-" + dia;
  }

  function registrarDia() {
    var hoje = dataISO();
    if (estado.dias.indexOf(hoje) === -1) {
      estado.dias.push(hoje);
      salvar();
    }
  }

  /* ---------- Helpers ---------- */

  function esc(texto) {
    return String(texto == null ? "" : texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function pct(parte, total) {
    return total > 0 ? Math.round((parte / total) * 100) : 0;
  }

  function plural(n, singular, pluralTexto) {
    return n === 1 ? singular : pluralTexto;
  }

  function embaralhar(lista) {
    var copia = lista.slice();
    for (var i = copia.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var aux = copia[i];
      copia[i] = copia[j];
      copia[j] = aux;
    }
    return copia;
  }

  function acharMateria(id) {
    return MATERIAS.find(function (m) { return m.id === id; });
  }

  function acharTopico(materia, id) {
    if (!materia) return null;
    return materia.topicos.find(function (t) { return t.id === id; });
  }

  function progressoMateria(m) {
    var total = m.topicos.length;
    var feitos = m.topicos.filter(function (t) { return !!estado.estudados[t.id]; }).length;
    return { feitos: feitos, total: total, porcento: pct(feitos, total) };
  }

  function progressoGeral() {
    var total = 0;
    var feitos = 0;
    MATERIAS.forEach(function (m) {
      var p = progressoMateria(m);
      total += p.total;
      feitos += p.feitos;
    });
    return { feitos: feitos, total: total, porcento: pct(feitos, total) };
  }

  function totalFlashcards() {
    var total = 0;
    var conhecidos = 0;
    MATERIAS.forEach(function (m) {
      total += (m.flashcards || []).length;
      conhecidos += (estado.flashcards[m.id] && Array.isArray(estado.flashcards[m.id].conhecidos))
        ? estado.flashcards[m.id].conhecidos.length
        : 0;
    });
    return { total: total, conhecidos: conhecidos };
  }

  function mediaQuizzes() {
    var notas = [];
    MATERIAS.forEach(function (m) {
      var q = estado.quizzes[m.id];
      if (q && typeof q.melhor === "number") notas.push(q.melhor);
    });
    if (!notas.length) return null;
    return Math.round(notas.reduce(function (a, b) { return a + b; }, 0) / notas.length);
  }

  function calcularSequencia() {
    var dias = new Set(estado.dias);
    var cursor = new Date();
    var total = 0;
    if (!dias.has(dataISO(cursor))) {
      cursor.setDate(cursor.getDate() - 1);
    }
    while (dias.has(dataISO(cursor))) {
      total++;
      cursor.setDate(cursor.getDate() - 1);
      if (total > 3660) break;
    }
    return total;
  }

  function mostrarAviso(mensagem) {
    if (!aviso) return;
    aviso.textContent = mensagem;
    aviso.hidden = false;
    clearTimeout(timerAviso);
    timerAviso = setTimeout(function () { aviso.hidden = true; }, 2600);
  }

  function atualizarTitulo(texto) {
    document.title = (texto ? texto + " · " : "") + "Caderno PSS 1 2026";
  }

  function limparTimers() {
    if (timerSimulado) {
      clearInterval(timerSimulado);
      timerSimulado = null;
    }
  }

  function formatarTempo(segundos) {
    var s = Math.max(0, Math.round(segundos));
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var resto = s % 60;
    if (h > 0) {
      return h + "h " + String(m).padStart(2, "0") + "min";
    }
    return String(m).padStart(2, "0") + ":" + String(resto).padStart(2, "0");
  }

  function formatarData(iso) {
    if (!iso) return "—";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return "—";
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  }

  function textoCurto(texto, limite) {
    var t = String(texto || "").trim();
    if (t.length <= limite) return t;
    return t.slice(0, limite - 1).trim() + "…";
  }

  /* ---------- Navegação ---------- */

  function renderizarNav() {
    if (!navMaterias) return;
    navMaterias.innerHTML = MATERIAS.map(function (m) {
      return '<a class="nav-item" href="#/materia/' + encodeURIComponent(m.id) + '" data-nav="' + esc(m.id) + '">' +
        '<span class="nav-ponto" style="--cor:' + esc(m.cor || "#335c4b") + '"></span>' +
        esc(m.nome) +
        "</a>";
    }).join("");
  }

  function marcarNav(chave) {
    document.querySelectorAll("[data-nav]").forEach(function (el) {
      el.classList.toggle("ativo", el.getAttribute("data-nav") === chave);
      if (el.getAttribute("data-nav") === chave) {
        el.setAttribute("aria-current", "page");
      } else {
        el.removeAttribute("aria-current");
      }
    });
  }

  function abrirMenu() {
    if (!barraLateral) return;
    barraLateral.classList.add("aberta");
    document.body.classList.add("menu-aberto");
    if (sobreposicao) sobreposicao.hidden = false;
    if (botaoMenu) botaoMenu.setAttribute("aria-expanded", "true");
    if (botaoFechar) botaoFechar.focus();
  }

  function fecharMenu() {
    if (!barraLateral) return;
    barraLateral.classList.remove("aberta");
    document.body.classList.remove("menu-aberto");
    if (sobreposicao) sobreposicao.hidden = true;
    if (botaoMenu) {
      botaoMenu.setAttribute("aria-expanded", "false");
      if (document.activeElement && barraLateral.contains(document.activeElement)) {
        botaoMenu.focus();
      }
    }
  }

  function rotear() {
    limparTimers();
    clearTimeout(timerNotas);
    fecharMenu();

    var rota = location.hash.replace(/^#\/?/, "");
    var partes = rota.split("/").filter(Boolean).map(decodeURIComponent);

    try {
      if (!partes.length) {
        viewInicio();
      } else if (partes[0] === "materia" && partes[1]) {
        viewMateria(partes[1]);
      } else if (partes[0] === "topico" && partes[1] && partes[2]) {
        viewTopico(partes[1], partes[2]);
      } else if (partes[0] === "flashcards" && partes[1]) {
        viewFlashcards(partes[1]);
      } else if (partes[0] === "quiz" && partes[1]) {
        viewQuiz(partes[1]);
      } else if (partes[0] === "simulado") {
        viewSimulado();
      } else if (partes[0] === "progresso") {
        viewProgresso();
      } else {
        viewNaoEncontrado();
      }
    } catch (erro) {
      console.error(erro);
      main.innerHTML = '<div class="vazio"><h2>Algo deu errado</h2><p>Não foi possível abrir esta página. Volte ao início e tente novamente.</p><p><a class="botao" href="#/">Ir para o início</a></p></div>';
      atualizarTitulo("Erro");
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    if (main) main.focus({ preventScroll: true });
  }

  function irPara(hash) {
    if (location.hash === hash) {
      rotear();
    } else {
      location.hash = hash;
    }
  }

  /* ---------- Início ---------- */

  function viewInicio() {
    marcarNav("inicio");
    atualizarTitulo("Início");

    var geral = progressoGeral();
    var seq = calcularSequencia();
    var ultimo = null;

    if (estado.ultimoTopico) {
      var materiaUltima = acharMateria(estado.ultimoTopico.materiaId);
      var topicoUltimo = acharTopico(materiaUltima, estado.ultimoTopico.topicoId);
      if (materiaUltima && topicoUltimo) {
        ultimo = { materia: materiaUltima, topico: topicoUltimo };
      }
    }

    var cartoes = MATERIAS.map(function (m) {
      var p = progressoMateria(m);
      return '<a class="cartao-materia" href="#/materia/' + encodeURIComponent(m.id) + '" style="--cor:' + esc(m.cor || "#335c4b") + '">' +
        '<div class="cartao-materia-topo">' +
          '<span class="cartao-materia-ponto" aria-hidden="true"></span>' +
          '<span class="cartao-materia-num">' + String(m.ordem || 0).padStart(2, "0") + " · " + m.topicos.length + " tópicos</span>" +
        "</div>" +
        "<h3>" + esc(m.nome) + "</h3>" +
        "<p>" + esc(textoCurto(m.descricao, 74)) + "</p>" +
        '<div class="cartao-materia-progresso">' +
          '<div class="barra-progresso" aria-hidden="true"><span style="width:' + p.porcento + '%"></span></div>' +
          "<p><span>" + p.porcento + "% estudado</span><span>" + p.feitos + "/" + p.total + "</span></p>" +
        "</div>" +
      "</a>";
    }).join("");

    var continuar = "";
    if (ultimo) {
      continuar = '<a class="continuar" href="#/topico/' + encodeURIComponent(ultimo.materia.id) + "/" + encodeURIComponent(ultimo.topico.id) + '">' +
        '<span class="continuar-selo">' + ICONES.livro + "</span>" +
        '<span class="continuar-texto"><small>Continuar de onde parou</small><strong>' + esc(ultimo.topico.titulo) + "</strong></span>" +
        '<span class="continuar-seta">' + ICONES.setaDireita + "</span>" +
      "</a>";
    }

    var proximo = null;
    for (var i = 0; i < MATERIAS.length && !proximo; i++) {
      var m = MATERIAS[i];
      var t = m.topicos.find(function (top) { return !estado.estudados[top.id]; });
      if (t) proximo = { materia: m, topico: t };
      else if (m.topicos[0]) proximo = { materia: m, topico: m.topicos[0] };
    }

    var chamada = !geral.feitos && proximo
      ? '<a class="continuar" href="#/topico/' + encodeURIComponent(proximo.materia.id) + "/" + encodeURIComponent(proximo.topico.id) + '">' +
          '<span class="continuar-selo">' + ICONES.brilho + "</span>" +
          '<span class="continuar-texto"><small>Comece por aqui</small><strong>' + esc(proximo.materia.nome) + " · " + esc(proximo.topico.titulo) + "</strong></span>" +
          '<span class="continuar-seta">' + ICONES.setaDireita + "</span>" +
        "</a>"
      : continuar;

    main.innerHTML =
      '<section class="hero">' +
        '<div>' +
          '<p class="olho">CPS · Processo Seletivo Seriado · 2026</p>' +
          '<h1 class="titulo-pagina">Um caderno para <em>estudar de verdade</em>.</h1>' +
          '<p class="hero-subtitulo">Todo o conteúdo do PSS 1 em resumos diretos, flashcards, quizzes e simulado. Sem distração, sem cadastro: seu progresso fica salvo neste navegador.</p>' +
        "</div>" +
        '<div class="hero-progresso">' +
          '<span class="hero-numero">' + geral.porcento + "<small>%</small></span>" +
          "<p>" + geral.feitos + " de " + geral.total + " tópicos estudados" + (seq ? " · " + seq + " " + plural(seq, "dia seguido", "dias seguidos") : "") + "</p>" +
          '<div class="barra-progresso" aria-hidden="true"><span style="width:' + geral.porcento + '%"></span></div>' +
        "</div>" +
      "</section>" +
      chamada +
      '<section class="secao">' +
        '<div class="secao-cabecalho"><h2 class="titulo-secao">Matérias</h2><a class="link-seta" href="#/progresso">Ver progresso ' + ICONES.setaDireita + "</a></div>" +
        '<div class="grade-materias">' + cartoes + "</div>" +
      "</section>" +
      '<section class="secao">' +
        '<div class="secao-cabecalho"><h2 class="titulo-secao">Para praticar</h2></div>' +
        '<div class="atalhos">' +
          '<a class="atalho" href="#/simulado"><span class="atalho-icone">' + ICONES.relogio + "</span><span><strong>Simulado geral</strong><span>Questões de todas as matérias com cronômetro.</span></span></a>" +
          '<a class="atalho" href="#/progresso"><span class="atalho-icone">' + ICONES.alvo + "</span><span><strong>Meu progresso</strong><span>Tópicos, quizzes e flashcards em um só lugar.</span></span></a>" +
          (MATERIAS[0] ? '<a class="atalho" href="#/flashcards/' + encodeURIComponent(MATERIAS[0].id) + '"><span class="atalho-icone">' + ICONES.cartoes + "</span><span><strong>Flashcards</strong><span>Revise os conceitos-chave de cada matéria.</span></span></a>" : "") +
        "</div>" +
      "</section>" +
      '<p class="nota-rodape">Os resumos são material de apoio e não substituem o edital oficial, as obras literárias indicadas nem as aulas. Sempre confira o conteúdo programático divulgado pela CPS.</p>';
  }

  /* ---------- Matéria ---------- */

  function viewMateria(id) {
    var m = acharMateria(id);
    if (!m) return viewNaoEncontrado();

    marcarNav(m.id);
    atualizarTitulo(m.nome);

    var p = progressoMateria(m);
    var grupos = [];
    m.topicos.forEach(function (t) {
      var nome = t.grupo || "Conteúdos";
      var grupo = grupos.find(function (g) { return g.nome === nome; });
      if (!grupo) {
        grupo = { nome: nome, topicos: [] };
        grupos.push(grupo);
      }
      grupo.topicos.push(t);
    });

    var listaGrupos = grupos.map(function (g) {
      return '<section class="grupo-topico">' +
        '<h2 class="grupo-topico-titulo">' + esc(g.nome) + "</h2>" +
        '<div class="lista-topicos">' +
          g.topicos.map(function (t) {
            var feito = !!estado.estudados[t.id];
            return '<a class="topico-linha" href="#/topico/' + encodeURIComponent(m.id) + "/" + encodeURIComponent(t.id) + '">' +
              '<span class="topico-num">' + esc(t.numero || "") + "</span>" +
              '<span class="topico-nome">' + esc(t.titulo) + "</span>" +
              '<span class="topico-status' + (feito ? " estudado" : "") + '">' + (feito ? ICONES.checkCirculo : ICONES.circulo) + "<span>" + (feito ? "Estudado" : "Estudar") + "</span></span>" +
            "</a>";
          }).join("") +
        "</div>" +
      "</section>";
    }).join("");

    var primeiroNaoEstudado = m.topicos.find(function (t) { return !estado.estudados[t.id]; }) || m.topicos[0];
    var acoes = "";
    if (primeiroNaoEstudado) {
      acoes += '<a class="botao principal" href="#/topico/' + encodeURIComponent(m.id) + "/" + encodeURIComponent(primeiroNaoEstudado.id) + '">' +
        (p.feitos ? ICONES.setaDireita + " Continuar estudando" : ICONES.livro + " Começar a estudar") + "</a>";
    }
    if ((m.flashcards || []).length) {
      acoes += '<a class="botao" href="#/flashcards/' + encodeURIComponent(m.id) + '">' + ICONES.cartoes + " Flashcards</a>";
    }
    if ((m.questoes || []).length) {
      acoes += '<a class="botao" href="#/quiz/' + encodeURIComponent(m.id) + '">' + ICONES.quiz + " Fazer quiz</a>";
    }

    main.innerHTML =
      '<header class="cabecalho-materia">' +
        '<nav class="migalhas" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span><span>' + esc(m.nome) + "</span></nav>" +
        '<div class="materia-titulo-linha" style="--cor:' + esc(m.cor || "#335c4b") + '">' +
          '<span class="materia-ponto" aria-hidden="true"></span>' +
          "<div>" +
            '<p class="olho">Matéria ' + String(m.ordem || 0).padStart(2, "0") + "</p>" +
            '<h1 class="titulo-pagina">' + esc(m.nome) + "</h1>" +
            '<p class="subtitulo">' + esc(m.descricao || "") + "</p>" +
          "</div>" +
        "</div>" +
        '<div class="materia-resumo">' +
          '<div class="progresso-inline">' +
            '<div class="progresso-inline-texto"><span>Seu progresso</span><strong>' + p.feitos + " de " + p.total + " tópicos</strong></div>" +
            '<div class="barra-progresso" aria-hidden="true"><span style="width:' + p.porcento + '%"></span></div>' +
          "</div>" +
        "</div>" +
        '<div class="lista-acoes materia-acoes">' + acoes + "</div>" +
      "</header>" +
      listaGrupos +
      '<p class="nota-rodape">Dica: marque cada tópico como estudado ao terminar a leitura. Depois, faça o quiz para verificar o que ficou.</p>';
  }

  /* ---------- Tópico ---------- */

  function viewTopico(materiaId, topicoId) {
    var m = acharMateria(materiaId);
    var t = acharTopico(m, topicoId);
    if (!m || !t) return viewNaoEncontrado();

    estado.ultimoTopico = { materiaId: m.id, topicoId: t.id };
    salvar();

    marcarNav(m.id);
    atualizarTitulo(t.titulo);

    var indice = m.topicos.indexOf(t);
    var anterior = indice > 0 ? m.topicos[indice - 1] : null;
    var proximo = indice < m.topicos.length - 1 ? m.topicos[indice + 1] : null;
    var estudado = !!estado.estudados[t.id];
    var palavras = (t.resumo || []).join(" ").split(/\s+/).filter(Boolean).length;
    var minutos = Math.max(2, Math.round(palavras / 180));

    var corpo = (t.resumo || []).map(function (p) {
      return "<p>" + esc(p) + "</p>";
    }).join("");

    var imagens = (t.imagens || []).map(function (img) {
      if (!img || !img.src) return "";
      return '<figure class="figura-topico">' +
        '<img src="' + esc(img.src) + '" alt="' + esc(img.alt || img.legenda || "") + '" loading="lazy">' +
        (img.legenda ? "<figcaption>" + esc(img.legenda) + (img.credito ? " · " + esc(img.credito) : "") + "</figcaption>" : "") +
      "</figure>";
    }).join("");

    var pontos = (t.pontos || []).length
      ? '<section class="caixa caixa-pontos"><h2>' + ICONES.brilho + " Pontos-chave</h2><ul>" +
        t.pontos.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></section>"
      : "";

    var pegadinhas = (t.pegadinhas || []).length
      ? '<section class="caixa caixa-pegadinhas"><h2>' + ICONES.alerta + " Atenção na prova</h2><ul>" +
        t.pegadinhas.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></section>"
      : "";

    var termos = (t.termos || []).length
      ? '<section class="caixa caixa-termos"><h2>' + ICONES.livro + " Termos para lembrar</h2><dl class=\"lista-termos\">" +
        t.termos.map(function (item) {
          return "<div><dt>" + esc(item.termo) + "</dt><dd>" + esc(item.definicao) + "</dd></div>";
        }).join("") + "</dl></section>"
      : "";

    var anotacao = estado.anotacoes[t.id] || "";

    main.innerHTML =
      '<article class="topico">' +
        '<header class="topico-cabecalho">' +
          '<nav class="migalhas" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span><a href="#/materia/' + encodeURIComponent(m.id) + '">' + esc(m.nome) + '</a><span aria-hidden="true">/</span><span>' + esc(t.numero || "") + "</span></nav>" +
          '<p class="olho">' + esc(t.grupo || m.nome) + "</p>" +
          '<h1 class="titulo-pagina">' + esc(t.titulo) + "</h1>" +
          '<div class="topico-meta">' +
            '<span class="pilula">Tópico ' + esc(t.numero || "") + "</span>" +
            '<span class="pilula">' + minutos + " min de leitura</span>" +
            '<span id="status-topico" class="pilula ' + (estudado ? "verde" : "") + '">' + (estudado ? "Estudado" : "Ainda não estudado") + "</span>" +
          "</div>" +
        "</header>" +
        '<div class="topico-corpo" style="margin-top:30px">' + corpo + imagens + pontos + pegadinhas + termos + "</div>" +
        '<div class="lista-acoes botoes-topico" style="margin-top:30px">' +
          '<button class="botao ' + (estudado ? "" : "principal") + '" type="button" data-acao="marcar" id="botao-estudado">' +
            (estudado ? ICONES.check + " Tópico estudado" : ICONES.check + " Marcar como estudado") +
          "</button>" +
          '<button class="botao secundario" type="button" data-acao="imprimir">' + ICONES.imprimir + " Imprimir resumo</button>" +
        "</div>" +
        '<section class="bloco-anotacoes">' +
          '<div class="bloco-anotacoes-cabecalho"><h2>Suas anotações</h2><span class="salvo-indicador" id="salvo-indicador">Salvo</span></div>' +
          '<textarea id="anotacoes-topico" placeholder="Escreva aqui dúvidas, exemplos ou conexões com outras matérias…" aria-label="Anotações do tópico">' + esc(anotacao) + "</textarea>" +
          "<p>Salvo automaticamente neste navegador.</p>" +
        "</section>" +
        '<nav class="navegacao-topico" aria-label="Navegar entre tópicos">' +
          (anterior
            ? '<a class="nav-topico" href="#/topico/' + encodeURIComponent(m.id) + "/" + encodeURIComponent(anterior.id) + '"><small>' + ICONES.setaEsquerda + " Anterior</small><span>" + esc(anterior.titulo) + "</span></a>"
            : "<span></span>") +
          (proximo
            ? '<a class="nav-topico proximo" href="#/topico/' + encodeURIComponent(m.id) + "/" + encodeURIComponent(proximo.id) + '"><small>Próximo ' + ICONES.setaDireita + "</small><span>" + esc(proximo.titulo) + "</span></a>"
            : "") +
        "</nav>" +
      "</article>";

    var textarea = document.getElementById("anotacoes-topico");
    var indicador = document.getElementById("salvo-indicador");

    if (textarea) {
      textarea.addEventListener("input", function () {
        estado.anotacoes[t.id] = textarea.value;
        salvar();
        if (indicador) {
          indicador.classList.add("visivel");
          clearTimeout(timerNotas);
          timerNotas = setTimeout(function () { indicador.classList.remove("visivel"); }, 1400);
        }
      });
    }

    main.querySelectorAll("[data-acao]").forEach(function (botao) {
      botao.addEventListener("click", function () {
        var acao = botao.getAttribute("data-acao");
        if (acao === "imprimir") {
          window.print();
          return;
        }
        if (acao === "marcar") {
          if (estado.estudados[t.id]) {
            delete estado.estudados[t.id];
            mostrarAviso("Tópico desmarcado.");
          } else {
            estado.estudados[t.id] = dataISO();
            registrarDia();
            mostrarAviso("Tópico marcado como estudado.");
          }
          salvar();
          var agora = !!estado.estudados[t.id];
          botao.className = "botao" + (agora ? "" : " principal");
          botao.innerHTML = ICONES.check + (agora ? " Tópico estudado" : " Marcar como estudado");
          var status = document.getElementById("status-topico");
          if (status) {
            status.className = "pilula" + (agora ? " verde" : "");
            status.textContent = agora ? "Estudado" : "Ainda não estudado";
          }
        }
      });
    });
  }

  /* ---------- Flashcards ---------- */

  function viewFlashcards(id) {
    var m = acharMateria(id);
    if (!m) return viewNaoEncontrado();
    var cartoes = (m.flashcards || []).map(function (c, i) {
      return { frente: c.f, verso: c.v, indice: i };
    });

    marcarNav(m.id);
    atualizarTitulo("Flashcards · " + m.nome);

    if (!cartoes.length) {
      main.innerHTML = '<div class="vazio"><h2>Flashcards em breve</h2><p>Esta matéria ainda não tem cartões.</p><a class="botao" href="#/materia/' + encodeURIComponent(m.id) + '">Voltar para ' + esc(m.nome) + "</a></div>";
      return;
    }

    if (!estado.flashcards[m.id]) estado.flashcards[m.id] = { conhecidos: [] };
    var conhecidos = new Set(estado.flashcards[m.id].conhecidos.filter(function (n) {
      return typeof n === "number" && n >= 0 && n < cartoes.length;
    }));

    var ordem = embaralhar(cartoes.map(function (c) { return c.indice; }));
    var posicao = 0;
    var virado = false;
    var concluido = false;

    main.innerHTML =
      '<header class="cabecalho-ferramenta">' +
        '<nav class="migalhas" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span><a href="#/materia/' + encodeURIComponent(m.id) + '">' + esc(m.nome) + '</a><span aria-hidden="true">/</span><span>Flashcards</span></nav>' +
        '<div><p class="olho">Memorização ativa</p><h1 class="titulo-pagina">Flashcards</h1><p class="ferramenta-info">' + esc(m.nome) + " · " + cartoes.length + " cartões</p></div>" +
        '<a class="botao" href="#/materia/' + encodeURIComponent(m.id) + '">' + ICONES.setaEsquerda + " Voltar</a>" +
      "</header>" +
      '<div class="flash-area" id="flash-area"></div>';

    var area = document.getElementById("flash-area");

    function contagemConhecidos() {
      return conhecidos.size;
    }

    function render() {
      var total = cartoes.length;
      if (concluido) {
        var porcento = pct(contagemConhecidos(), total);
        area.innerHTML =
          '<div class="cartao flash-concluido">' +
            "<h2>Sessão concluída</h2>" +
            "<p>Você já domina <strong>" + contagemConhecidos() + " de " + total + "</strong> cartões desta matéria (" + porcento + "%).</p>" +
            '<div class="barra-progresso" style="margin:18px auto;max-width:340px" aria-hidden="true"><span style="width:' + porcento + '%"></span></div>' +
            '<div class="lista-acoes" style="justify-content:center">' +
              '<button class="botao principal" type="button" data-flash="revisar">' + ICONES.embaralhar + " Revisar todos</button>" +
              '<button class="botao" type="button" data-flash="zerar">' + ICONES.lixo + " Zerar domínio</button>" +
              '<a class="botao secundario" href="#/quiz/' + encodeURIComponent(m.id) + '">' + ICONES.quiz + " Fazer quiz</a>" +
            "</div>" +
          "</div>";
        return;
      }

      var indiceOriginal = ordem[posicao];
      var cartao = cartoes[indiceOriginal];
      var dominado = conhecidos.has(indiceOriginal);

      area.innerHTML =
        '<div class="flash-progresso"><span>Cartão ' + (posicao + 1) + " de " + total + '</span><span>' + contagemConhecidos() + " dominados" + (dominado ? " · você já sabia" : "") + "</span></div>" +
        '<div class="barra-progresso" aria-hidden="true"><span style="width:' + pct(posicao, total) + '%"></span></div>' +
        '<button class="flash-cartao' + (virado ? " virado" : "") + '" type="button" id="flash-cartao" aria-pressed="' + (virado ? "true" : "false") + '" aria-label="Virar cartão">' +
          '<span class="flash-cartao-interno">' +
            '<span class="flash-face">' +
              '<span class="flash-face-rotulo">Pergunta</span>' +
              "<p>" + esc(cartao.frente) + "</p>" +
            "</span>" +
            '<span class="flash-face verso">' +
              '<span class="flash-face-rotulo">Resposta</span>' +
              "<p>" + esc(cartao.verso) + "</p>" +
            "</span>" +
          "</span>" +
        "</button>" +
        '<p class="flash-dica">Clique no cartão ou pressione <strong>Espaço</strong> para virar.</p>' +
        '<div class="flash-controles">' +
          '<button class="botao" type="button" data-flash="nao">Ainda não sei</button>' +
          '<button class="botao principal" type="button" data-flash="sim">Eu já sei</button>' +
        "</div>" +
        '<div class="flash-rodape"><button class="botao secundario pequeno" type="button" data-flash="sair">Encerrar sessão</button></div>';
    }

    function avancar(sabia) {
      var indiceOriginal = ordem[posicao];
      if (sabia) {
        conhecidos.add(indiceOriginal);
      } else {
        conhecidos.delete(indiceOriginal);
      }
      estado.flashcards[m.id] = { conhecidos: Array.from(conhecidos) };
      salvar();
      if (sabia) registrarDia();

      posicao++;
      virado = false;
      if (posicao >= ordem.length) {
        concluido = true;
        render();
        return;
      }
      render();
    }

    function virar() {
      if (concluido) return;
      virado = !virado;
      var cartaoEl = document.getElementById("flash-cartao");
      if (cartaoEl) {
        cartaoEl.classList.toggle("virado", virado);
        cartaoEl.setAttribute("aria-pressed", virado ? "true" : "false");
      }
    }

    area.addEventListener("click", function (evento) {
      var alvo = evento.target.closest("[data-flash], #flash-cartao");
      if (!alvo) return;
      var acao = alvo.getAttribute("data-flash");
      if (alvo.id === "flash-cartao") {
        virar();
        return;
      }
      if (acao === "sim") avancar(true);
      else if (acao === "nao") avancar(false);
      else if (acao === "revisar") {
        ordem = embaralhar(cartoes.map(function (c) { return c.indice; }));
        posicao = 0;
        virado = false;
        concluido = false;
        render();
      } else if (acao === "zerar") {
        if (window.confirm("Zerar todos os cartões dominados desta matéria?")) {
          conhecidos.clear();
          estado.flashcards[m.id] = { conhecidos: [] };
          salvar();
          mostrarAviso("Baralho zerado.");
          render();
        }
      } else if (acao === "sair") {
        concluido = true;
        render();
      }
    });

    document.addEventListener("keydown", function aoTeclar(evento) {
      if (!document.getElementById("flash-cartao")) {
        document.removeEventListener("keydown", aoTeclar);
        return;
      }
      if (evento.code === "Space" && document.activeElement === document.body) {
        evento.preventDefault();
        virar();
      }
    });

    render();
  }

  /* ---------- Quiz ---------- */

  function viewQuiz(id) {
    var m = acharMateria(id);
    if (!m) return viewNaoEncontrado();

    marcarNav(m.id);
    atualizarTitulo("Quiz · " + m.nome);

    var questoes = m.questoes || [];
    if (!questoes.length) {
      main.innerHTML = '<div class="vazio"><h2>Quiz em breve</h2><p>Esta matéria ainda não tem questões.</p><a class="botao" href="#/materia/' + encodeURIComponent(m.id) + '">Voltar para ' + esc(m.nome) + "</a></div>";
      return;
    }

    var registro = estado.quizzes[m.id] || null;
    var mapaTopicos = {};
    m.topicos.forEach(function (t) { mapaTopicos[t.id] = t; });

    main.innerHTML =
      '<header class="cabecalho-ferramenta">' +
        '<nav class="migalhas" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span><a href="#/materia/' + encodeURIComponent(m.id) + '">' + esc(m.nome) + '</a><span aria-hidden="true">/</span><span>Quiz</span></nav>' +
        '<div><p class="olho">Teste seus conhecimentos</p><h1 class="titulo-pagina">Quiz de ' + esc(m.nome) + '</h1><p class="ferramenta-info">' + questoes.length + " questões · correção com explicação</p></div>" +
        '<a class="botao" href="#/materia/' + encodeURIComponent(m.id) + '">' + ICONES.setaEsquerda + " Voltar</a>" +
      "</header>" +
      '<div class="quiz-area" id="quiz-area"></div>';

    var area = document.getElementById("quiz-area");
    var perguntas = [];
    var atual = 0;
    var selecionada = null;
    var confirmada = false;
    var respostas = [];
    var iniciado = false;
    var finalizado = false;

    function renderIntro() {
      var melhor = registro && typeof registro.melhor === "number" ? registro.melhor : null;
      area.innerHTML =
        '<div class="cartao" style="text-align:center;padding:40px 28px">' +
          '<p class="olho">' + esc(m.nome) + "</p>" +
          '<h2 class="titulo-secao" style="font-size:30px">' + questoes.length + " questões para praticar</h2>" +
          '<p class="subtitulo" style="margin:0 auto 18px">As alternativas são corrigidas na hora, com explicação e link para o tópico. O resultado fica salvo no seu progresso.</p>' +
          (melhor !== null ? '<p style="margin-bottom:20px"><span class="pilula ' + (melhor >= 60 ? "verde" : "aviso") + '">Melhor resultado: ' + melhor + "%</span></p>" : "") +
          '<button class="botao principal" type="button" data-quiz="comecar">Começar quiz ' + ICONES.setaDireita + "</button>" +
        "</div>";
    }

    function renderPergunta() {
      var q = perguntas[atual];
      var correta = typeof q.correta === "number" ? q.correta : 0;
      var alternativas = (q.alternativas || []).map(function (alt, i) {
        var classe = "alternativa";
        if (!confirmada && selecionada === i) classe += " selecionada";
        if (confirmada && i === correta) classe += " correta";
        if (confirmada && selecionada === i && i !== correta) classe += " incorreta";
        return '<button class="' + classe + '" type="button" data-alt="' + i + '"' + (confirmada ? " disabled" : "") + ">" +
          '<span class="letra">' + LETRAS[i] + "</span><span>" + esc(alt) + "</span>" +
        "</button>";
      }).join("");

      var topico = mapaTopicos[q.topicoId];
      var feedback = "";
      if (confirmada) {
        var acertou = selecionada === correta;
        feedback = '<div class="feedback ' + (acertou ? "ok" : "erro") + '">' +
          "<strong>" + (acertou ? "Resposta correta." : "Resposta incorreta. A correta é a letra " + LETRAS[correta] + ".") + "</strong>" +
          esc(q.explicacao || "") +
          (topico ? ' <a href="#/topico/' + encodeURIComponent(m.id) + "/" + encodeURIComponent(topico.id) + '">Revisar o tópico: ' + esc(topico.titulo) + "</a>." : "") +
        "</div>";
      }

      area.innerHTML =
        '<div class="quiz-topo"><span>Questão <strong>' + (atual + 1) + "</strong> de " + perguntas.length + '</span><span>' + esc(m.nome) + "</span></div>" +
        '<div class="barra-progresso" aria-hidden="true"><span style="width:' + pct(atual, perguntas.length) + '%"></span></div>' +
        '<div class="quiz-cartao" style="margin-top:14px">' +
          '<p class="quiz-enunciado">' + esc(q.enunciado) + "</p>" +
          '<div class="quiz-alternativas">' + alternativas + "</div>" +
          feedback +
          '<div class="quiz-acoes">' +
            '<span class="ferramenta-info">' + (topico ? "Tópico " + esc(topico.numero || "") : "") + "</span>" +
            (confirmada
              ? '<button class="botao principal" type="button" data-quiz="proxima">' + (atual === perguntas.length - 1 ? "Ver resultado" : "Próxima questão") + " " + ICONES.setaDireita + "</button>"
              : '<button class="botao principal" type="button" data-quiz="confirmar"' + (selecionada === null ? " disabled" : "") + ">Confirmar resposta</button>") +
          "</div>" +
        "</div>";
    }

    function finalizar() {
      finalizado = true;
      var acertos = respostas.filter(function (r) { return r.acertou; }).length;
      var total = perguntas.length;
      var porcento = pct(acertos, total);
      var anterior = estado.quizzes[m.id];
      estado.quizzes[m.id] = {
        melhor: anterior && typeof anterior.melhor === "number" ? Math.max(anterior.melhor, porcento) : porcento,
        ultimo: porcento,
        acertos: acertos,
        total: total,
        data: new Date().toISOString()
      };
      registrarDia();
      salvar();

      var erros = respostas.filter(function (r) { return !r.acertou; });
      var revisao = erros.length
        ? '<section class="revisao"><h2>Revisar os erros</h2>' + erros.map(function (r) {
            var topico = mapaTopicos[r.questao.topicoId];
            return '<div class="revisao-item">' +
              "<h3>" + esc(r.questao.enunciado) + "</h3>" +
              '<p class="sua">Sua resposta: ' + LETRAS[r.escolha] + " — " + esc(r.questao.alternativas[r.escolha]) + "</p>" +
              '<p class="certa">Correta: ' + LETRAS[r.questao.correta] + " — " + esc(r.questao.alternativas[r.questao.correta]) + "</p>" +
              "<p>" + esc(r.questao.explicacao || "") + "</p>" +
              (topico ? '<p><a href="#/topico/' + encodeURIComponent(m.id) + "/" + encodeURIComponent(topico.id) + '">Estudar ' + esc(topico.titulo) + "</a></p>" : "") +
            "</div>";
          }).join("") + "</section>"
        : '<p class="nota-rodape" style="margin-top:28px">Sem erros. Você pode revisar os flashcards ou tentar outra matéria.</p>';

      area.innerHTML =
        '<div class="resultado-hero">' +
          '<p class="olho">Resultado do quiz</p>' +
          '<span class="resultado-numero">' + porcento + "<small>%</small></span>" +
          "<p>" + acertos + " de " + total + " respostas corretas em " + esc(m.nome) + "</p>" +
          '<div class="barra-progresso" style="max-width:340px;margin:0 auto 20px" aria-hidden="true"><span style="width:' + porcento + '%"></span></div>' +
          '<div class="lista-acoes" style="justify-content:center">' +
            '<button class="botao principal" type="button" data-quiz="refazer">Refazer quiz</button>' +
            '<a class="botao" href="#/flashcards/' + encodeURIComponent(m.id) + '">' + ICONES.cartoes + " Flashcards</a>" +
            '<a class="botao secundario" href="#/materia/' + encodeURIComponent(m.id) + '">Voltar para a matéria</a>' +
          "</div>" +
        "</div>" +
        revisao;
    }

    area.addEventListener("click", function (evento) {
      var alvo = evento.target.closest("[data-quiz], [data-alt]");
      if (!alvo) return;

      if (alvo.hasAttribute("data-alt")) {
        if (confirmada) return;
        selecionada = Number(alvo.getAttribute("data-alt"));
        renderPergunta();
        return;
      }

      var acao = alvo.getAttribute("data-quiz");
      if (acao === "comecar" || acao === "refazer") {
        perguntas = embaralhar(questoes.slice());
        atual = 0;
        selecionada = null;
        confirmada = false;
        respostas = [];
        iniciado = true;
        finalizado = false;
        renderPergunta();
      } else if (acao === "confirmar" && !confirmada && selecionada !== null) {
        var q = perguntas[atual];
        var correta = typeof q.correta === "number" ? q.correta : 0;
        confirmada = true;
        respostas.push({
          questao: q,
          escolha: selecionada,
          acertou: selecionada === correta
        });
        renderPergunta();
      } else if (acao === "proxima") {
        if (atual === perguntas.length - 1) {
          finalizar();
        } else {
          atual++;
          selecionada = null;
          confirmada = false;
          renderPergunta();
        }
      }
    });

    renderIntro();
  }

  /* ---------- Simulado ---------- */

  function questoesDisponiveis() {
    return MATERIAS.reduce(function (total, m) {
      return total + ((m.questoes || []).length);
    }, 0);
  }

  function montarSimulado(quantidade) {
    var pools = MATERIAS
      .filter(function (m) { return (m.questoes || []).length; })
      .map(function (m) {
        return embaralhar(m.questoes.map(function (q) {
          return { materia: m, questao: q };
        }));
      })
      .filter(function (p) { return p.length; });

    var itens = [];
    var indice = 0;
    while (itens.length < quantidade && pools.some(function (p) { return p.length; })) {
      var pool = pools[indice % pools.length];
      if (pool.length) itens.push(pool.pop());
      indice++;
      if (indice > 5000) break;
    }
    return itens;
  }

  function viewSimulado() {
    marcarNav("simulado");
    atualizarTitulo("Simulado");

    var total = questoesDisponiveis();
    var historico = estado.simulados || [];

    if (!total) {
      main.innerHTML = '<div class="vazio"><h2>Simulado em preparação</h2><p>As questões ainda não foram carregadas.</p><a class="botao" href="#/">Voltar ao início</a></div>';
      return;
    }

    var opcoesQtd = [20, 40, total].filter(function (n, i, arr) {
      return n <= total && arr.indexOf(n) === i;
    });

    main.innerHTML =
      '<header class="cabecalho-ferramenta">' +
        '<nav class="migalhas" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span><span>Simulado</span></nav>' +
        '<div><p class="olho">Prática geral</p><h1 class="titulo-pagina">Simulado PSS 1</h1><p class="ferramenta-info">Questões de todas as matérias, com cronômetro e resultado por área.</p></div>' +
      "</header>" +
      '<form class="config-simulado" id="form-simulado">' +
        '<fieldset class="campo-grupo" style="border:0;padding:0">' +
          "<legend>Quantidade de questões</legend>" +
          '<div class="opcoes-radio">' +
            opcoesQtd.map(function (n, i) {
              return '<label class="opcao-radio"><input type="radio" name="quantidade" value="' + n + '"' + (i === 0 ? " checked" : "") + "><span>" + n + " questões</span></label>";
            }).join("") +
          "</div>" +
        "</fieldset>" +
        '<fieldset class="campo-grupo" style="border:0;padding:0">' +
          "<legend>Tempo</legend>" +
          '<div class="opcoes-radio">' +
            '<label class="opcao-radio"><input type="radio" name="tempo" value="90" checked><span>1,5 min por questão</span></label>' +
            '<label class="opcao-radio"><input type="radio" name="tempo" value="120"><span>2 min por questão</span></label>' +
            '<label class="opcao-radio"><input type="radio" name="tempo" value="0"><span>Sem limite</span></label>' +
          "</div>" +
        "</fieldset>" +
        '<p class="nota-rodape" style="margin-top:0;padding-top:0;border:0">O simulado sorteia questões equilibradamente entre as matérias. Ao terminar, você vê o desempenho por área e a correção.</p>' +
        '<div class="simulado-acoes">' +
          '<button class="botao principal" type="submit">Iniciar simulado ' + ICONES.setaDireita + "</button>" +
          (historico.length ? '<a class="botao secundario" href="#/progresso">Ver histórico</a>' : "") +
        "</div>" +
      "</form>";

    var form = document.getElementById("form-simulado");
    if (form) {
      form.addEventListener("submit", function (evento) {
        evento.preventDefault();
        var dadosForm = new FormData(form);
        var quantidade = Number(dadosForm.get("quantidade")) || Math.min(20, total);
        var segundos = Number(dadosForm.get("tempo")) || 0;
        var itens = montarSimulado(Math.min(quantidade, total));
        iniciarSimulado(itens, segundos);
      });
    }
  }

  function iniciarSimulado(itens, segundosPorQuestao) {
    var respostas = new Array(itens.length).fill(null);
    var atual = 0;
    var inicio = Date.now();
    var limite = segundosPorQuestao > 0 ? itens.length * segundosPorQuestao * 1000 : 0;
    var finalizado = false;

    main.innerHTML =
      '<header class="cabecalho-ferramenta">' +
        '<nav class="migalhas" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span><span>Simulado</span></nav>' +
        '<div><p class="olho">Simulado em andamento</p><h1 class="titulo-pagina">Simulado PSS 1</h1><p class="ferramenta-info">' + itens.length + " questões · " + (limite ? "tempo total de " + formatarTempo(limite / 1000) : "sem limite de tempo") + "</p></div>" +
        '<span class="cronometro" id="cronometro-simulado">' + ICONES.relogio + " <span>00:00</span></span>" +
      "</header>" +
      '<div class="quiz-area" id="simulado-area"></div>';

    var area = document.getElementById("simulado-area");

    function render() {
      var item = itens[atual];
      var q = item.questao;
      var escolhida = respostas[atual];
      var respondidas = respostas.filter(function (r) { return r !== null; }).length;

      var alternativas = (q.alternativas || []).map(function (alt, i) {
        return '<button class="alternativa' + (escolhida === i ? " selecionada" : "") + '" type="button" data-sim-alt="' + i + '">' +
          '<span class="letra">' + LETRAS[i] + "</span><span>" + esc(alt) + "</span>" +
        "</button>";
      }).join("");

      area.innerHTML =
        '<div class="quiz-topo"><span>Questão <strong>' + (atual + 1) + "</strong> de " + itens.length + "</span><span>" + esc(item.materia.nome) + " · " + respondidas + " respondidas</span></div>" +
        '<div class="barra-progresso" aria-hidden="true"><span style="width:' + pct(atual, itens.length) + '%"></span></div>' +
        '<div class="quiz-cartao" style="margin-top:14px">' +
          '<p class="quiz-enunciado">' + esc(q.enunciado) + "</p>" +
          '<div class="quiz-alternativas">' + alternativas + "</div>" +
          '<div class="quiz-acoes">' +
            '<button class="botao secundario" type="button" data-sim="anterior"' + (atual === 0 ? " disabled" : "") + ">" + ICONES.setaEsquerda + " Anterior</button>" +
            '<div class="lista-acoes">' +
              (atual === itens.length - 1
                ? '<button class="botao principal" type="button" data-sim="finalizar">Finalizar simulado</button>'
                : '<button class="botao principal" type="button" data-sim="proxima">Próxima ' + ICONES.setaDireita + "</button>") +
            "</div>" +
          "</div>" +
        "</div>" +
        '<div class="flash-rodape" style="margin-top:18px"><button class="botao secundario pequeno" type="button" data-sim="encerrar">Encerrar simulado</button></div>';
    }

    function atualizarCronometro() {
      var el = document.getElementById("cronometro-simulado");
      if (!el || finalizado) return;
      var decorrido = (Date.now() - inicio) / 1000;
      if (limite) {
        var restante = limite / 1000 - decorrido;
        el.classList.toggle("urgente", restante <= 60);
        el.innerHTML = ICONES.relogio + " <span>" + formatarTempo(Math.max(0, restante)) + "</span>";
        if (restante <= 0) {
          finalizar(true);
        }
      } else {
        el.innerHTML = ICONES.relogio + " <span>" + formatarTempo(decorrido) + "</span>";
      }
    }

    timerSimulado = setInterval(atualizarCronometro, 1000);
    atualizarCronometro();

    function finalizar(porTempo) {
      if (finalizado) return;
      finalizado = true;
      clearInterval(timerSimulado);
      timerSimulado = null;

      var acertos = 0;
      var porMateria = {};
      var naoRespondidas = 0;

      itens.forEach(function (item, i) {
        var idMat = item.materia.id;
        if (!porMateria[idMat]) {
          porMateria[idMat] = { nome: item.materia.nome, cor: item.materia.cor, acertos: 0, total: 0 };
        }
        porMateria[idMat].total++;
        if (respostas[i] === null) naoRespondidas++;
        if (respostas[i] === item.questao.correta) {
          acertos++;
          porMateria[idMat].acertos++;
        }
      });

      var porcento = pct(acertos, itens.length);
      var tempoGastoSeg = Math.round((Date.now() - inicio) / 1000);

      estado.simulados = estado.simulados || [];
      estado.simulados.unshift({
        data: new Date().toISOString(),
        acertos: acertos,
        total: itens.length,
        porcento: porcento,
        tempo: tempoGastoSeg,
        porMateria: porMateria
      });
      estado.simulados = estado.simulados.slice(0, 8);
      registrarDia();
      salvar();

      var erros = [];
      itens.forEach(function (item, i) {
        if (respostas[i] !== item.questao.correta) {
          erros.push({ item: item, escolha: respostas[i] });
        }
      });

      var revisao = erros.length
        ? '<section class="revisao"><h2>Questões para revisar</h2>' + erros.map(function (erro) {
            var q = erro.item.questao;
            var sua = erro.escolha === null
              ? "Não respondida"
              : LETRAS[erro.escolha] + " — " + esc(q.alternativas[erro.escolha]);
            return '<div class="revisao-item">' +
              '<p class="olho" style="margin-bottom:6px">' + esc(erro.item.materia.nome) + "</p>" +
              "<h3>" + esc(q.enunciado) + "</h3>" +
              '<p class="sua">Sua resposta: ' + sua + "</p>" +
              '<p class="certa">Correta: ' + LETRAS[q.correta] + " — " + esc(q.alternativas[q.correta]) + "</p>" +
              "<p>" + esc(q.explicacao || "") + "</p>" +
            "</div>";
          }).join("") + "</section>"
        : '<p class="nota-rodape" style="margin-top:28px">Sem erros. Excelente desempenho!</p>';

      var desempenho = Object.keys(porMateria).map(function (idMat) {
        var d = porMateria[idMat];
        var p = pct(d.acertos, d.total);
        return '<div class="resultado-item">' +
          '<div class="resultado-item-topo"><strong>' + esc(d.nome) + "</strong><span>" + d.acertos + "/" + d.total + " · " + p + "%</span></div>" +
          '<div class="barra-progresso" aria-hidden="true"><span style="width:' + p + '%;background:' + esc(d.cor || "#335c4b") + '"></span></div>' +
        "</div>";
      }).join("");

      area.innerHTML =
        '<div class="resultado-hero">' +
          '<p class="olho">' + (porTempo ? "Tempo encerrado" : "Simulado concluído") + "</p>" +
          '<span class="resultado-numero">' + porcento + "<small>%</small></span>" +
          "<p>" + acertos + " de " + itens.length + " acertos · " + formatarTempo(tempoGastoSeg) + " de estudo" + (naoRespondidas ? " · " + naoRespondidas + " em branco" : "") + "</p>" +
          '<div class="barra-progresso" style="max-width:340px;margin:0 auto 20px" aria-hidden="true"><span style="width:' + porcento + '%"></span></div>' +
          '<div class="lista-acoes" style="justify-content:center">' +
            '<button class="botao principal" type="button" data-sim="novo">Novo simulado</button>' +
            '<a class="botao" href="#/progresso">Ver progresso</a>' +
          "</div>" +
        "</div>" +
        '<div class="resultado-grade">' + desempenho + "</div>" +
        revisao;

      window.scrollTo({ top: 0, behavior: "auto" });
    }

    area.addEventListener("click", function (evento) {
      var alvo = evento.target.closest("[data-sim-alt], [data-sim]");
      if (!alvo) return;

      if (alvo.hasAttribute("data-sim-alt") && !finalizado) {
        respostas[atual] = Number(alvo.getAttribute("data-sim-alt"));
        render();
        return;
      }

      var acao = alvo.getAttribute("data-sim");
      if (acao === "anterior" && atual > 0) {
        atual--;
        render();
      } else if (acao === "proxima" && atual < itens.length - 1) {
        atual++;
        render();
      } else if (acao === "finalizar") {
        var emBranco = respostas.filter(function (r) { return r === null; }).length;
        if (!emBranco || window.confirm("Ainda há " + emBranco + " " + plural(emBranco, "questão em branco", "questões em branco") + ". Finalizar mesmo assim?")) {
          finalizar(false);
        }
      } else if (acao === "encerrar") {
        if (window.confirm("Encerrar o simulado e ver o resultado parcial?")) {
          finalizar(false);
        }
      } else if (acao === "novo") {
        viewSimulado();
      }
    });

    render();
  }

  /* ---------- Progresso ---------- */

  function viewProgresso() {
    marcarNav("progresso");
    atualizarTitulo("Meu progresso");

    var geral = progressoGeral();
    var cards = totalFlashcards();
    var media = mediaQuizzes();
    var seq = calcularSequencia();

    var linhas = MATERIAS.map(function (m) {
      var p = progressoMateria(m);
      var quiz = estado.quizzes[m.id];
      var qtdCards = (m.flashcards || []).length;
      var conhecidos = (estado.flashcards[m.id] && Array.isArray(estado.flashcards[m.id].conhecidos))
        ? estado.flashcards[m.id].conhecidos.length
        : 0;
      return '<div class="linha-progresso">' +
        '<span class="linha-materia"><span class="nav-ponto" style="--cor:' + esc(m.cor || "#335c4b") + '"></span>' + esc(m.nome) + "</span>" +
        '<div class="barra-progresso" aria-hidden="true"><span style="width:' + p.porcento + '%"></span></div>' +
        '<span class="linha-num">' + p.feitos + "/" + p.total + " tópicos</span>" +
        '<span class="linha-num oculto-mobile">' + (quiz && typeof quiz.melhor === "number" ? quiz.melhor + "% quiz" : "—") + "</span>" +
        '<span class="linha-num">' + (qtdCards ? conhecidos + "/" + qtdCards : "—") + "</span>" +
      "</div>";
    }).join("");

    var historico = (estado.simulados || []).length
      ? '<section class="secao"><div class="secao-cabecalho"><h2 class="titulo-secao">Simulados recentes</h2><a class="link-seta" href="#/simulado">Novo simulado ' + ICONES.setaDireita + "</a></div>" +
        '<div class="historico-simulados">' + estado.simulados.slice(0, 5).map(function (s) {
          return '<div class="item-historico">' +
            "<strong>" + s.acertos + "/" + s.total + " · " + s.porcento + "%</strong>" +
            "<span>" + formatarData(s.data) + " · " + formatarTempo(s.tempo || 0) + "</span>" +
          "</div>";
        }).join("") + "</div></section>"
      : "";

    main.innerHTML =
      '<header class="cabecalho-ferramenta">' +
        '<nav class="migalhas" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span><span>Meu progresso</span></nav>' +
        '<div><p class="olho">Seu percurso</p><h1 class="titulo-pagina">Meu progresso</h1><p class="ferramenta-info">Dados salvos neste navegador, sem cadastro.</p></div>' +
        '<a class="botao" href="#/simulado">' + ICONES.relogio + " Fazer simulado</a>" +
      "</header>" +
      '<div class="stats">' +
        '<div class="stat"><span class="stat-numero">' + geral.porcento + '%</span><span class="stat-rotulo">do conteúdo estudado · ' + geral.feitos + " de " + geral.total + " tópicos</span></div>" +
        '<div class="stat"><span class="stat-numero">' + seq + "</span><span class=\"stat-rotulo\">" + plural(seq, "dia de sequência", "dias de sequência") + " de estudo</span></div>" +
        '<div class="stat"><span class="stat-numero">' + (media === null ? "—" : media + "%") + '</span><span class="stat-rotulo">média dos melhores resultados nos quizzes</span></div>' +
        '<div class="stat"><span class="stat-numero">' + cards.conhecidos + "/" + cards.total + '</span><span class="stat-rotulo">flashcards dominados</span></div>' +
      "</div>" +
      '<section class="secao">' +
        '<div class="secao-cabecalho"><h2 class="titulo-secao">Por matéria</h2></div>' +
        '<div class="tabela-progresso">' +
          '<div class="linha-progresso cabecalho"><span>Matéria</span><span>Progresso</span><span>Tópicos</span><span>Quiz</span><span>Cards</span></div>' +
          linhas +
        "</div>" +
      "</section>" +
      historico +
      '<section class="secao">' +
        '<div class="secao-cabecalho"><h2 class="titulo-secao">Seus dados</h2></div>' +
        '<p class="subtitulo" style="font-size:14px">Exporte um arquivo para guardar seu progresso ou levar para outro navegador. A importação substitui os dados atuais.</p>' +
        '<div class="dados-acoes">' +
          '<button class="botao" type="button" data-dados="exportar">' + ICONES.download + " Exportar progresso</button>" +
          '<button class="botao" type="button" data-dados="importar">' + ICONES.upload + " Importar progresso</button>" +
          '<button class="botao perigo" type="button" data-dados="resetar">' + ICONES.lixo + " Apagar tudo</button>" +
          '<input type="file" id="arquivo-importado" accept="application/json,.json" hidden>' +
        "</div>" +
      "</section>" +
      '<p class="nota-rodape">Seu progresso é local: não é enviado para nenhum servidor. Limpar os dados do navegador apaga o histórico, por isso vale exportar de vez em quando.</p>';

    main.querySelectorAll("[data-dados]").forEach(function (botao) {
      botao.addEventListener("click", function () {
        var acao = botao.getAttribute("data-dados");
        if (acao === "exportar") {
          var conteudo = JSON.stringify(estado, null, 2);
          var blob = new Blob([conteudo], { type: "application/json" });
          var url = URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = url;
          a.download = "pss1-progresso-" + dataISO() + ".json";
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          mostrarAviso("Progresso exportado.");
        } else if (acao === "importar") {
          var input = document.getElementById("arquivo-importado");
          if (input) input.click();
        } else if (acao === "resetar") {
          if (window.confirm("Apagar todo o progresso, anotações e resultados? Esta ação não pode ser desfeita.")) {
            estado = estadoInicial();
            salvar();
            mostrarAviso("Progresso apagado.");
            viewProgresso();
          }
        }
      });
    });

    var inputArquivo = document.getElementById("arquivo-importado");
    if (inputArquivo) {
      inputArquivo.addEventListener("change", function () {
        var arquivo = inputArquivo.files && inputArquivo.files[0];
        if (!arquivo) return;
        var leitor = new FileReader();
        leitor.onload = function () {
          try {
            var dados = JSON.parse(String(leitor.result || ""));
            if (!dados || typeof dados !== "object" || !dados.estudados) {
              throw new Error("Formato inválido");
            }
            if (!window.confirm("Importar este arquivo? O progresso atual será substituído.")) return;
            estado = carregarEstadoDeObjeto(dados);
            salvar();
            mostrarAviso("Progresso importado.");
            viewProgresso();
          } catch (erro) {
            window.alert("Arquivo inválido. Escolha um arquivo de progresso exportado pelo site.");
          }
        };
        leitor.readAsText(arquivo);
        inputArquivo.value = "";
      });
    }
  }

  function carregarEstadoDeObjeto(dados) {
    var base = estadoInicial();
    return {
      estudados: dados.estudados && typeof dados.estudados === "object" ? dados.estudados : base.estudados,
      anotacoes: dados.anotacoes && typeof dados.anotacoes === "object" ? dados.anotacoes : base.anotacoes,
      quizzes: dados.quizzes && typeof dados.quizzes === "object" ? dados.quizzes : base.quizzes,
      flashcards: dados.flashcards && typeof dados.flashcards === "object" ? dados.flashcards : base.flashcards,
      dias: Array.isArray(dados.dias) ? dados.dias : base.dias,
      ultimoTopico: dados.ultimoTopico && typeof dados.ultimoTopico === "object" ? dados.ultimoTopico : base.ultimoTopico,
      simulados: Array.isArray(dados.simulados) ? dados.simulados : base.simulados
    };
  }

  function viewNaoEncontrado() {
    marcarNav("");
    atualizarTitulo("Não encontrado");
    main.innerHTML =
      '<div class="vazio" style="margin-top:40px">' +
        '<p class="olho">Erro 404</p>' +
        "<h2>Página não encontrada</h2>" +
        "<p>O conteúdo que você tentou abrir não existe ou foi movido.</p>" +
        '<p style="margin-top:20px"><a class="botao principal" href="#/">Voltar ao início</a></p>' +
      "</div>";
  }

  /* ---------- Inicialização ---------- */

  function iniciar() {
    renderizarNav();

    if (botaoMenu) botaoMenu.addEventListener("click", abrirMenu);
    if (botaoFechar) botaoFechar.addEventListener("click", fecharMenu);
    if (sobreposicao) sobreposicao.addEventListener("click", fecharMenu);

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape") fecharMenu();
    });

    document.addEventListener("click", function (evento) {
      if (evento.target.closest(".nav-item") && window.innerWidth <= 860) {
        fecharMenu();
      }
    });

    window.addEventListener("hashchange", rotear);

    if (!location.hash) {
      history.replaceState(null, "", "#/");
    }

    rotear();
  }

  iniciar();
})();
