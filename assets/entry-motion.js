(() => {
  "use strict";
  if (document.body.dataset.page !== "home" || sessionStorage.getItem("pf-entry-seen")) return;
  sessionStorage.setItem("pf-entry-seen", "1");
  const intro = document.createElement("div");
  intro.className = "pf-entry";
  intro.setAttribute("aria-label", "Entering PROTOFLOW 3D");
  intro.innerHTML = '<div class="pf-entry-orbit" aria-hidden="true"><i></i><i></i><i></i><span class="pf-entry-core">P</span></div><div class="pf-entry-brand">PROTOFLOW <b>3D</b></div><div class="pf-entry-line"><span></span></div><div class="pf-entry-caption">ART, SHAPED IN ANOTHER DIMENSION</div>';
  document.body.appendChild(intro);
  document.body.classList.add("pf-entering");
  window.setTimeout(() => {
    intro.classList.add("is-leaving");
    document.body.classList.remove("pf-entering");
    window.setTimeout(() => intro.remove(), 900);
  }, 2300);
})();
