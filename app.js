const nodes = [
  {
    id: "learner_profile",
    label: "Learner Profile",
    layer: "Learner Intelligence",
    x: 100,
    y: 130,
    description:
      "Captures learner identity, accessibility needs, motivation signals, mastery trajectory, and preferred modalities.",
    aiUse:
      "Drives personalized pathways, intervention timing, and culturally responsive content generation.",
  },
  {
    id: "competency",
    label: "Competency",
    layer: "Knowledge Model",
    x: 260,
    y: 90,
    description:
      "Canonical competency objects with prerequisite graph, complexity level, evidence expectations, and domain taxonomy.",
    aiUse:
      "Powers mastery prediction and coherent concept sequencing across grades.",
  },
  {
    id: "standard",
    label: "Standard",
    layer: "Policy & Compliance",
    x: 420,
    y: 70,
    description:
      "Maps national, state, district, and accreditation standards with version control and regional variants.",
    aiUse:
      "Automatically generates and validates alignment claims for every published asset.",
  },
  {
    id: "learning_object",
    label: "Learning Object",
    layer: "Content Graph",
    x: 380,
    y: 220,
    description:
      "A reusable content unit: explanation, activity, media, simulation, or project with rich pedagogic metadata.",
    aiUse:
      "Creates modality variants (text, audio, interactive) while preserving intent and rigor.",
  },
  {
    id: "assessment_item",
    label: "Assessment Item",
    layer: "Measurement",
    x: 570,
    y: 220,
    description:
      "Formative and summative items with cognitive demand, psychometric properties, and anti-bias checks.",
    aiUse:
      "Generates adaptive test forms and detects low-validity items before release.",
  },
  {
    id: "evidence",
    label: "Evidence Artifact",
    layer: "Measurement",
    x: 740,
    y: 250,
    description:
      "Observations, scores, rubric traces, and interaction logs linked to competency evidence statements.",
    aiUse:
      "Supports explainable mastery decisions and audit-ready learner progression reports.",
  },
  {
    id: "pedagogy_strategy",
    label: "Pedagogy Strategy",
    layer: "Instructional Design",
    x: 230,
    y: 300,
    description:
      "Instructional approaches (inquiry, direct instruction, project-based, blended) with context constraints.",
    aiUse:
      "Recommends method shifts based on classroom dynamics and learning science evidence.",
  },
  {
    id: "intervention",
    label: "Intervention Protocol",
    layer: "Learner Intelligence",
    x: 120,
    y: 430,
    description:
      "Targeted remediation or enrichment plans with trigger thresholds and duration guidance.",
    aiUse:
      "Launches coordinated support plans via tutoring agents and educator notifications.",
  },
  {
    id: "resource",
    label: "Resource Constraints",
    layer: "Operations",
    x: 360,
    y: 430,
    description:
      "Represents classroom, institution, and infrastructure limits: time, devices, staffing, budget.",
    aiUse:
      "Optimizes feasible instructional plans under real-world constraints.",
  },
  {
    id: "governance",
    label: "Governance Rule",
    layer: "Policy & Compliance",
    x: 550,
    y: 430,
    description:
      "Editorial, legal, safety, privacy, and age-appropriateness constraints with automated policy checks.",
    aiUse:
      "Prevents unsafe or noncompliant outputs in generation and recommendation systems.",
  },
  {
    id: "publisher_workflow",
    label: "Publisher Workflow",
    layer: "Operations",
    x: 730,
    y: 430,
    description:
      "End-to-end lifecycle object for drafting, review, localization, release, and post-market optimization.",
    aiUse:
      "Coordinates multi-agent production with human approvals and rollback paths.",
  },
];

const edges = [
  ["learner_profile", "intervention"],
  ["learner_profile", "pedagogy_strategy"],
  ["competency", "standard"],
  ["competency", "learning_object"],
  ["standard", "governance"],
  ["learning_object", "assessment_item"],
  ["assessment_item", "evidence"],
  ["evidence", "intervention"],
  ["pedagogy_strategy", "learning_object"],
  ["resource", "pedagogy_strategy"],
  ["resource", "publisher_workflow"],
  ["governance", "publisher_workflow"],
  ["publisher_workflow", "learning_object"],
  ["standard", "publisher_workflow"],
  ["competency", "assessment_item"],
];

const scenarios = {
  2030: {
    publisher: [
      ["Autonomous Alignment Assistant", "AI maps every new chapter to 50+ standards frameworks in minutes."],
      ["Rapid Localization", "Regional variants are generated and validated from ontology constraints."],
      ["Quality Forecasting", "Pre-release simulation predicts learning gains and equity risk."],
    ],
    district: [
      ["District Curriculum Twin", "A live model monitors standards fit and implementation fidelity."],
      ["Targeted Support Routing", "Interventions are orchestrated across schools based on semantic evidence."],
      ["Procurement Intelligence", "Content selection tools compare resources against ontology-based goals."],
    ],
    university: [
      ["Program Coherence Engine", "Course outcomes stay coherent across departments and credential pathways."],
      ["Assessment Integrity Layer", "AI audits item pools for validity and bias before deployment."],
      ["Student Success Graph", "Advising systems reason over concept-level mastery and engagement."],
    ],
    government: [
      ["National Standards Observatory", "Policy teams model the impact of proposed standards changes."],
      ["Equity Early Warning", "Population-level evidence graph flags underserved clusters."],
      ["Publisher Certification API", "Automatic compliance checks before market approval."],
    ],
  },
  2035: {
    publisher: [
      ["Self-Optimizing Curriculum", "Content continuously improves from real-world evidence without losing governance control."],
      ["Multimodal Knowledge Fabric", "Every concept ships as text, simulation, AR, tutor dialogue, and performance task."],
      ["Agentic Production Studio", "Specialized AI agents negotiate pedagogy, accessibility, and profitability goals."],
    ],
    district: [
      ["Citywide Learning Orchestration", "Curriculum, staffing, and interventions coordinate as one adaptive system."],
      ["Competency Passport", "Portable learner records support seamless transitions across schools."],
      ["Community Signal Fusion", "Non-academic factors integrate with safeguards to drive holistic support."],
    ],
    university: [
      ["Dynamic Degree Architect", "Programs evolve monthly as labor market and research signals shift."],
      ["Research-to-Classroom Pipeline", "New scientific findings become ontology-linked learning modules rapidly."],
      ["AI Mentor Constellations", "Domain-specific mentors guide students through personalized knowledge maps."],
    ],
    government: [
      ["Living National Curriculum", "Standards become updateable semantic policies rather than static documents."],
      ["Public Learning ROI Lens", "Policy decisions tie directly to long-term capability and economic outcomes."],
      ["Cross-Border Credential Graph", "Mutual recognition of skills and credentials across countries."],
    ],
  },
  2040: {
    publisher: [
      ["Knowledge OS Marketplace", "Publishers distribute ontology-native capabilities, not just textbooks."],
      ["Outcome-Backed Licensing", "Commercial models link pricing to verified learning impact."],
      ["Autonomous Content Stewardship", "Always-on agents maintain freshness, compliance, and efficacy."],
    ],
    district: [
      ["Personalized Public Education at Scale", "Every learner receives continuously adaptive plans with human oversight."],
      ["Resource Equity Optimizer", "Funds, teachers, and technology are allocated by predictive need models."],
      ["Family Co-Pilot Interfaces", "Transparent AI systems communicate progress and recommended actions."],
    ],
    university: [
      ["Lifelong Competency Cloud", "University learning graphs persist across careers and reskilling cycles."],
      ["Autonomous Lab-to-Learning", "Research systems auto-convert validated findings into curriculum assets."],
      ["Global Scholarly Interop", "Inter-institution ontology protocols enable universal credit portability."],
    ],
    government: [
      ["National Human Capability Digital Twin", "Education policy co-optimizes with workforce and health systems."],
      ["Regulation as Code", "Education laws are machine-readable and auto-enforced across platforms."],
      ["Planetary Learning Commons", "Global open ontology aligns climate, health, and civic education missions."],
    ],
  },
};

const layers = [...new Set(nodes.map((node) => node.layer))];
const activeLayers = new Set(layers);
let selectedNode = null;

const graph = document.getElementById("graph");
const layerFilters = document.getElementById("layerFilters");
const nodeList = document.getElementById("nodeList");
const detailsPanel = document.getElementById("detailsPanel");
const horizonSelect = document.getElementById("horizonSelect");
const personaSelect = document.getElementById("personaSelect");
const scenarioCards = document.getElementById("scenarioCards");

function createEl(type, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", type);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  return el;
}

function renderLayerFilters() {
  layers.forEach((layer) => {
    const btn = document.createElement("button");
    btn.className = "layer-pill active";
    btn.textContent = layer;
    btn.addEventListener("click", () => {
      if (activeLayers.has(layer) && activeLayers.size > 1) {
        activeLayers.delete(layer);
        btn.classList.remove("active");
      } else {
        activeLayers.add(layer);
        btn.classList.add("active");
      }
      if (selectedNode && !activeLayers.has(getNodeById(selectedNode).layer)) {
        selectedNode = null;
      }
      renderGraph();
      renderNodeList();
      renderDetails();
    });
    layerFilters.appendChild(btn);
  });
}

function getNodeById(id) {
  return nodes.find((node) => node.id === id);
}

function nodeIsVisible(node) {
  return activeLayers.has(node.layer);
}

function renderNodeList() {
  nodeList.innerHTML = "";
  nodes
    .filter(nodeIsVisible)
    .forEach((node) => {
      const btn = document.createElement("button");
      btn.className = "node-item";
      btn.textContent = `${node.label} · ${node.layer}`;
      btn.addEventListener("click", () => {
        selectedNode = node.id;
        renderGraph();
        renderDetails();
      });
      nodeList.appendChild(btn);
    });
}

function relatedNodeIds(nodeId) {
  const linked = new Set([nodeId]);
  edges.forEach(([a, b]) => {
    if (a === nodeId) linked.add(b);
    if (b === nodeId) linked.add(a);
  });
  return linked;
}

function renderGraph() {
  graph.innerHTML = "";
  const visibleNodes = nodes.filter(nodeIsVisible);
  const visibleIds = new Set(visibleNodes.map((n) => n.id));

  edges.forEach(([a, b]) => {
    if (!visibleIds.has(a) || !visibleIds.has(b)) return;
    const nodeA = getNodeById(a);
    const nodeB = getNodeById(b);
    const line = createEl("line", {
      x1: nodeA.x,
      y1: nodeA.y,
      x2: nodeB.x,
      y2: nodeB.y,
      class: `edge ${
        selectedNode && (a === selectedNode || b === selectedNode) ? "active" : ""
      }`,
    });
    graph.appendChild(line);
  });

  const linkedSet = selectedNode ? relatedNodeIds(selectedNode) : null;

  visibleNodes.forEach((node) => {
    const group = createEl("g", {
      class: `node ${
        selectedNode
          ? linkedSet.has(node.id)
            ? node.id === selectedNode
              ? "highlight"
              : ""
            : "dim"
          : ""
      }`,
      role: "button",
      tabindex: "0",
    });

    const circle = createEl("circle", {
      cx: node.x,
      cy: node.y,
      r: 23,
    });

    const label = createEl("text", {
      x: node.x,
      y: node.y + 40,
      "text-anchor": "middle",
    });
    label.textContent = node.label;

    const layerLabel = createEl("text", {
      x: node.x,
      y: node.y + 54,
      "text-anchor": "middle",
      fill: "#9db2ce",
      "font-size": "10",
    });
    layerLabel.textContent = node.layer;

    group.append(circle, label, layerLabel);
    group.addEventListener("click", () => {
      selectedNode = node.id;
      renderGraph();
      renderDetails();
    });
    group.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        selectedNode = node.id;
        renderGraph();
        renderDetails();
      }
    });

    graph.appendChild(group);
  });
}

function renderDetails() {
  if (!selectedNode) {
    detailsPanel.innerHTML = `
      <h3>Node Details</h3>
      <p class="muted">Select a node to inspect schema role and AI usage.</p>
      <p class="muted">Tip: Use layer filters to see how policy, pedagogy, measurement, and operations connect.</p>
    `;
    return;
  }

  const node = getNodeById(selectedNode);
  const connections = edges
    .filter(([a, b]) => a === node.id || b === node.id)
    .map(([a, b]) => (a === node.id ? getNodeById(b).label : getNodeById(a).label));

  detailsPanel.innerHTML = `
    <h3>${node.label}</h3>
    <p><strong>Layer:</strong> ${node.layer}</p>
    <p>${node.description}</p>
    <p><strong>AI Leverage:</strong> ${node.aiUse}</p>
    <p><strong>Connected Objects:</strong></p>
    <ul>${connections.map((name) => `<li>${name}</li>`).join("")}</ul>
  `;
}

function renderScenarios() {
  const horizon = horizonSelect.value;
  const persona = personaSelect.value;
  const cards = scenarios[horizon][persona];

  scenarioCards.innerHTML = cards
    .map(
      ([title, body]) => `
      <article class="panel">
        <h3>${title}</h3>
        <p>${body}</p>
      </article>
    `
    )
    .join("");
}

horizonSelect.addEventListener("change", renderScenarios);
personaSelect.addEventListener("change", renderScenarios);

renderLayerFilters();
renderNodeList();
renderGraph();
renderDetails();
renderScenarios();
