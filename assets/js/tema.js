/* =========================================================
   Caderno PSS 1 2026 — tema claro/escuro
   ========================================================= */
(function () {
  "use strict";

  var CHAVE = "pss1-tema";
  var raiz = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  var ICONE_SOL = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var ICONE_LUA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/></svg>';

  function preferenciaSalva() {
    try {
      var valor = localStorage.getItem(CHAVE);
      return valor === "claro" || valor === "escuro" ? valor : null;
    } catch (erro) {
      return null;
    }
  }

  function temaAtual() {
    return raiz.getAttribute("data-tema") === "escuro" ? "escuro" : "claro";
  }

  function temaDoSistema() {
    return media && media.matches ? "escuro" : "claro";
  }

  function rotuloAcao(tema) {
    return tema === "escuro" ? "Ativar tema claro" : "Ativar tema escuro";
  }

  function atualizarBotoes() {
    var tema = temaAtual();
    document.querySelectorAll("[data-tema-toggle]").forEach(function (botao) {
      botao.setAttribute("aria-label", rotuloAcao(tema));
      botao.setAttribute("title", rotuloAcao(tema));
      botao.setAttribute("aria-pressed", tema === "escuro" ? "true" : "false");

      var icone = botao.querySelector("[data-tema-icone]");
      if (icone) icone.innerHTML = tema === "escuro" ? ICONE_SOL : ICONE_LUA;

      var texto = botao.querySelector("[data-tema-texto]");
      if (texto) texto.textContent = tema === "escuro" ? "Tema claro" : "Tema escuro";
    });
  }

  function aplicar(tema) {
    raiz.setAttribute("data-tema", tema);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", tema === "escuro" ? "#111512" : "#f6f5f1");
    atualizarBotoes();
  }

  function alternar() {
    var novo = temaAtual() === "escuro" ? "claro" : "escuro";
    aplicar(novo);
    try {
      localStorage.setItem(CHAVE, novo);
    } catch (erro) {
      /* O tema continua funcionando durante a sessão mesmo sem armazenamento. */
    }
  }

  function ligarBotoes() {
    document.querySelectorAll("[data-tema-toggle]").forEach(function (botao) {
      botao.addEventListener("click", alternar);
    });
    atualizarBotoes();
  }

  aplicar(preferenciaSalva() || temaDoSistema());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ligarBotoes);
  } else {
    ligarBotoes();
  }

  if (media) {
    var aoMudarSistema = function () {
      if (!preferenciaSalva()) aplicar(temaDoSistema());
    };
    if (media.addEventListener) {
      media.addEventListener("change", aoMudarSistema);
    } else if (media.addListener) {
      media.addListener(aoMudarSistema);
    }
  }

  window.addEventListener("storage", function (evento) {
    if (evento.key === CHAVE) {
      aplicar(preferenciaSalva() || temaDoSistema());
    }
  });
})();
