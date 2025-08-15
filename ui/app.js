// FPSS UI minimal client (no build tools)
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

const state = {
  defaults: { profile: 'HUMAN', energy: 'solar_peak', material: 'PETG', qa: 'scan_max_dev ≤ 0.5mm' },
  jobs: [],
  running: false,
  timer: null,
  progress: 0,
  materials: ["PETG", "PLA"],
  stations: [
    { id: "Printer-A1", status: "Stopped" },
    { id: "CNC-A1", status: "Idle" },
    { id: "Arm-A1", status: "Idle" },
    { id: "QA-Scan-A1", status: "Idle" }
  ]
};

function fmtDate(d=new Date()){
  return d.toLocaleString();
}


function rebuildDefaultTags(){
  const wrap = document.getElementById("defaults-tags");
  if (!wrap) return;
  wrap.innerHTML = "";
  const entries = [
    ["profile", state.defaults.profile],
    ["energy", "Energy: " + state.defaults.energy],
    ["material", "Material: " + state.defaults.material],
    ["qa", "QA: " + state.defaults.qa]
  ];
  for (const [key,label] of entries){
    const span = document.createElement("span");
    span.className = "pill meta";
    span.dataset.key = key;
    span.innerHTML = `${label} <span class="close" title="remove" aria-label="remove">×</span>`;
    wrap.appendChild(span);
    wrap.append(" ");
  }
}

function renderJobs() {
  const tbody = $("#jobs-body");
  const tbody2 = $("#jobs-body-2");
  const empty = $("#jobs-empty");

  const rows = state.jobs.map((j, idx) => {
    return `<tr class="${(state.running && idx===0)?'running':''}">\n      <td>
        <div class="name">${j.name}</div>
        <div class="subtle" style="font-size:.9em">HUMAN • Energy: solar_peak • Material: PETG • QA ≤ 0.5mm</div>
      </td>
      <td>${fmtDate(j.created)}</td>
      <td><span class="pill">${j.status}</span></td>
      <td>
        <button class="btn" data-action="edit" data-id="${j.id}">EDIT</button>
        <button class="btn" data-action="dup" data-id="${j.id}">DUPLICATE</button>
        <button class="btn" data-action="del" data-id="${j.id}">DELETE</button>
      </td>
    </tr>`;
  }).join("");

  if (state.jobs.length) {
    empty.classList.add("hidden");
    $("#jobs-table").classList.remove("hidden");
    tbody.innerHTML = rows;
    tbody2.innerHTML = rows;
  } else {
    $("#jobs-table").classList.add("hidden");
    empty.classList.remove("hidden");
    tbody.innerHTML = "";
    tbody2.innerHTML = "";
  }
}

function addJob(name) {
  const id = crypto.randomUUID();
  state.jobs.unshift({ id, name, created: new Date(), status: "New", steps: [] });
  renderJobs();
  rebuildDefaultTags();
}

function importFPJ(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      addJob(data.name || "Imported job");
      log(`Imported job '${data.name || "Imported job"}' (${file.name})`);
    } catch (e) {
      log("Import failed: " + e.message);
    }
  };
  reader.readAsText(file);
}

function log(msg) {
  const el = $("#logs");
  const time = new Date().toLocaleTimeString();
  el.textContent += `[${time}] ${msg}\n`;
  el.scrollTop = el.scrollHeight;
}

function setRunning(running) {
  state.running = running;
  $("#btn-run").disabled = running;
  $("#btn-stop").disabled = !running;
  $("#sim-status").textContent = running ? "Running" : "Stopped";
  $("#sim-status").classList.toggle("running", running);
}

function tick() {
  state.progress += Math.random() * 12;
  if (state.progress >= 100) {
    state.progress = 100;
    clearInterval(state.timer);
    setRunning(false);
    log("Simulation completed.");
  }
  $("#progress-bar").style.width = state.progress + "%";
}


// --- Enhanced Hello World storyboard ---
function storyboardHelloWorld() {
  const script = [
    { t: 0,   msg: "Simulation started." },
    { t: 600, msg: "Loading job plan (micro‑factory Hello World)..." },
    { t: 1400, msg: "Homing robotic arm..." },
    { t: 2400, msg: "Heating extruder & bed (simulated)..." },
    { t: 3600, msg: "Printing test coupon (A5 scale)..." },
    { t: 6200, msg: "Cooling & part release..." },
    { t: 7600, msg: "QA: scanning part..." },
    { t: 8800, msg: "QA: pass (max dev 0.32mm ≤ 0.50mm)" },
    { t: 9800, msg: "Simulation completed." }
  ];
  // Tie progress to final timestamp
  const total = script[script.length - 1].t;
  state.progress = 0;
  $("#progress-bar").style.width = "0%";
  setRunning(true);
  const t0 = Date.now();
  // Schedule messages
  script.forEach(step => {
    setTimeout(() => {
      log(step.msg);
      const pct = Math.min(100, Math.round((step.t / total) * 100));
      state.progress = pct;
      $("#progress-bar").style.width = pct + "%";
      if (step.msg.includes("completed")) {
        setRunning(false);
      }
    }, step.t);
  });
}

function startRun() {
  if (!state.jobs.length) {
    addJob("Untitled job");
  }
  storyboardHelloWorld();
}

function stopRun() {
  clearInterval(state.timer);
  setRunning(false);
  log("Simulation stopped.");
  state.progress = 0;
  $("#progress-bar").style.width = "0%";
}

function renderStations() {
  const body = $("#stations-body");
  body.innerHTML = state.stations.map(s => `
    <tr>
      <td><strong>${s.id}</strong></td>
      <td><span class="pill">${s.status}</span></td>
      <td>
        <button class="btn" data-station="${s.id}" data-ss="start">START</button>
        <button class="btn" data-station="${s.id}" data-ss="stop">STOP</button>
      </td>
    </tr>
  `).join("");
}

function renderMaterials() {
  const body = $("#materials-body");
  body.innerHTML = state.materials.map((m,i)=>`
    <tr>
      <td>${m}</td>
      <td>
        <button class="btn" data-m="${i}" data-ma="edit">EDIT</button>
        <button class="btn" data-m="${i}" data-ma="dup">DUPLICATE</button>
        <button class="btn" data-m="${i}" data-ma="del">DELETE</button>
      </td>
    </tr>
  `).join("");
}

// Event wiring
window.addEventListener("DOMContentLoaded", () => {
  // Tabs
  $$(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const view = btn.dataset.view;
      $$(".view").forEach(v => v.classList.remove("active"));
      $("#view-" + view).classList.add("active");
    });
  });
  $("#hamburger").addEventListener("click", () => {
    const tabs = $("#tabs");
    tabs.style.display = tabs.style.display === "flex" ? "none" : "flex";
  });

  // Jobs
  $("#btn-create").addEventListener("click", () => {
    const name = $("#job-name").value.trim() || "new job";
    addJob(name);
    $("#job-name").value = "";
  });
  $("#file-import").addEventListener("change", (e)=>{
    const f = e.target.files[0];
    if (f) importFPJ(f);
    e.target.value = "";
  });

  $("#jobs-body").addEventListener("click", onJobsAction);
  $("#jobs-body-2").addEventListener("click", onJobsAction);

  // Sim
  $("#btn-run").addEventListener("click", startRun);
  $("#btn-stop").addEventListener("click", stopRun);
  window.addEventListener("keydown", (e)=>{
    if (e.code === "Space") {
      e.preventDefault();
      state.running ? stopRun() : startRun();
    }
  });

  // Stations, Materials
  renderStations();
  $("#view-stations").addEventListener("click", (e)=>{
    const t = e.target;
    if (t.dataset.ss && t.dataset.station) {
      const s = state.stations.find(x=>x.id===t.dataset.station);
      s.status = t.dataset.ss === "start" ? "Running" : "Stopped";
      renderStations();
    }
  });

  renderMaterials();
  $("#btn-add-material").addEventListener("click", ()=>{
    const name = $("#material-name").value.trim();
    if (!name) return;
    state.materials.push(name);
    $("#material-name").value = "";
    renderMaterials();
  });
  $("#view-materials").addEventListener("click", (e)=>{
    const t = e.target;
    if (t.dataset.ma === "dup") {
      state.materials.splice(Number(t.dataset.m)+1, 0, state.materials[Number(t.dataset.m)]+" copy");
      renderMaterials();
    }
    if (t.dataset.ma === "del") {
      state.materials.splice(Number(t.dataset.m), 1);
      renderMaterials();
    }
  });

  renderJobs();
  rebuildDefaultTags();
});

// QA run and export
$("#btn-run-qa").addEventListener("click", ()=>{
  const metric = $("#qa-metric").value;
  const threshold = $("#qa-threshold").value;
  const result = { metric, threshold, value: metric==='max_dev' ? '0.32mm' : 'Ra 6.1µm', pass: true, time: new Date().toISOString() };
  $("#qa-output").textContent = JSON.stringify(result, null, 2);
  log(`QA run (${metric}) => pass`);
});
$("#btn-export-qa").addEventListener("click", ()=>{
  const data = $("#qa-output").textContent || JSON.stringify({ note: 'run QA first' }, null, 2);
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'qa_result.json';
  a.click();
  URL.revokeObjectURL(url);
});

// Defaults modal
const modal = $("#modal-defaults");
$("#btn-edit-defaults").addEventListener("click", ()=>{
  $("#def-profile").value = state.defaults.profile;
  $("#def-energy").value = state.defaults.energy;
  $("#def-material").value = state.defaults.material;
  $("#def-qa").value = state.defaults.qa;
  modal.classList.add("open");
});
$("#close-defaults").addEventListener("click", ()=> modal.classList.remove("open"));
$("#save-defaults").addEventListener("click", ()=>{
  state.defaults.profile = $("#def-profile").value;
  state.defaults.energy = $("#def-energy").value.trim();
  state.defaults.material = $("#def-material").value.trim();
  state.defaults.qa = $("#def-qa").value.trim();
  rebuildDefaultTags();
  log("Defaults saved.");
  modal.classList.remove("open");
});


// Closeable defaults (meta tags)
document.addEventListener("click", (e)=>{
  const close = e.target.closest(".close");
  if (close && close.parentElement && close.parentElement.classList.contains("meta")) {
    const pill = close.parentElement;
    const key = pill.dataset.key || "default";
    pill.remove();
    log("Default removed: " + key);
  }
});


function onJobsAction(e){
  const t = e.target;
  const id = t.dataset.id;
  const idx = state.jobs.findIndex(j => j.id === id);
  if (idx === -1) return;
  if (t.dataset.action === "del") {
    state.jobs.splice(idx,1);
    renderJobs();
  rebuildDefaultTags();
  }
  if (t.dataset.action === "dup") {
    const j = state.jobs[idx];
    addJob(j.name + " copy");
  }
  if (t.dataset.action === "edit") {
    const newName = prompt("Rename job:", state.jobs[idx].name);
    if (newName) {
      state.jobs[idx].name = newName;
      renderJobs();
  rebuildDefaultTags();
    }
  }
}
