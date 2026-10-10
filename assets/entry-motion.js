(() => {
  "use strict";
  if (document.getElementById("pf-entry-intro")) return;
  const intro = document.createElement("div");
  intro.id = "pf-entry-intro";
  intro.className = "pf-entry pf-entry-logo";
  intro.setAttribute("role", "status");
  intro.setAttribute("aria-label", "PROTOFLOW 3D logo assembling");
  intro.innerHTML = `
    <div class="pf-entry-stage">
      <div class="pf-entry-ring" aria-hidden="true"></div>
      <svg class="pf-logo-build" viewBox="0 0 420 410" role="img" aria-label="Proto Flow 3D">
        <defs>
          <linearGradient id="pfGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe5a0"/><stop offset=".55" stop-color="#dba64e"/><stop offset="1" stop-color="#a86b25"/></linearGradient>
          <linearGradient id="pfSteel" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#d9e9f8"/><stop offset=".5" stop-color="#759ec4"/><stop offset="1" stop-color="#b9d5ee"/></linearGradient>
        </defs>
        <g class="pf-part pf-rail-top"><path d="M54 72H365Q382 72 382 89Q382 106 365 106H54Q37 106 37 89Q37 72 54 72Z" fill="url(#pfSteel)" stroke="#101114" stroke-width="8" stroke-linejoin="round"/><path d="M99 72V44Q99 30 114 30H194Q211 30 211 47V72" fill="none" stroke="#101114" stroke-width="8" stroke-linecap="round"/></g>
        <g class="pf-part pf-print-head"><path d="M191 62H250Q260 62 260 73V112Q260 122 250 122H191Q181 122 181 112V73Q181 62 191 62Z" fill="url(#pfSteel)" stroke="#101114" stroke-width="8"/><path d="M192 122H249L236 148H205Z" fill="#6e97bd" stroke="#101114" stroke-width="8" stroke-linejoin="round"/><path d="M221 148V160" stroke="#101114" stroke-width="7" stroke-linecap="round"/></g>
        <g class="pf-part pf-letter-three"><path d="M112 191C119 165 148 158 169 170C190 182 189 207 168 219C194 229 197 260 177 278C155 298 117 285 110 260C105 243 119 231 132 238C140 243 138 256 148 259C162 264 173 249 165 239C158 230 144 236 139 226C132 212 148 204 160 205C173 206 179 193 166 188C155 183 145 190 140 201C133 216 106 211 112 191Z" fill="url(#pfGold)" stroke="#101114" stroke-width="8" stroke-linejoin="round"/></g>
        <g class="pf-part pf-letter-d"><path d="M224 170H266C302 170 322 194 322 230C322 267 300 288 266 288H224Z" fill="url(#pfGold)" stroke="#101114" stroke-width="8" stroke-linejoin="round"/><path d="M246 193V266H264C286 266 299 252 299 230C299 208 286 193 264 193Z" fill="#f8f7f4" stroke="#101114" stroke-width="7" stroke-linejoin="round"/></g>
        <g class="pf-part pf-rail-base"><path d="M55 293H365Q382 293 382 310Q382 327 365 327H55Q37 327 37 310Q37 293 55 293Z" fill="url(#pfSteel)" stroke="#101114" stroke-width="8" stroke-linejoin="round"/></g>
      </svg>
      <div class="pf-entry-brand">PROTO_FLOW_3D</div>
      <div class="pf-entry-caption">ART, SHAPED IN ANOTHER DIMENSION</div>
      <div class="pf-entry-line"><span></span></div>
    </div>`;
  document.body.appendChild(intro);
  document.body.classList.add("pf-entering");
  const leave = () => {
    intro.classList.add("is-leaving");
    document.body.classList.remove("pf-entering");
    window.setTimeout(() => intro.remove(), 950);
  };
  window.setTimeout(leave, 5600);
  intro.addEventListener("click", leave, { once: true });
})();