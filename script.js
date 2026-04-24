const palette = {
  core: '#6f89ff',
  pedagogy: '#59e1da',
  policy: '#f6a5ff',
  assessment: '#f6d46f',
  intelligence: '#84f08a',
  delivery: '#ff9ca8'
};

const nodes = [
  {
    id: 'curriculum',
    label: 'Curriculum Blueprint',
    group: 'core',
    x: 500,
    y: 300,
    definition: 'Canonical representation of program goals, course architecture, and progression constraints.',
    schema: ['programId', 'pathways[]', 'prerequisiteRules[]', 'versionGraph'],
    ai: ['Generates pathway variants', 'Runs coherence checks', 'Forecasts update impact']
  },
  {
    id: 'standards',
    label: 'Standards & Frameworks',
    group: 'policy',
    x: 240,
    y: 130,
    definition: 'Jurisdictional standards, accreditation criteria, and competency frameworks.',
    schema: ['frameworkId', 'jurisdiction', 'gradeBand', 'statements[]'],
    ai: ['Auto-crosswalk frameworks', 'Detect standards drift', 'Compile compliance reports']
  },
  {
    id: 'concepts',
    label: 'Knowledge Concepts',
    group: 'core',
    x: 460,
    y: 120,
    definition: 'Concept graph of domain knowledge with dependencies and misconception patterns.',
    schema: ['conceptId', 'dependencies[]', 'misconceptions[]', 'difficultyModel'],
    ai: ['Map concept prerequisites', 'Detect missing concept coverage', 'Generate spiral review plans']
  },
  {
    id: 'pedagogy',
    label: 'Pedagogical Strategies',
    group: 'pedagogy',
    x: 730,
    y: 160,
    definition: 'Instructional methods indexed by learner profile, context, and concept type.',
    schema: ['strategyId', 'modality', 'supports[]', 'efficacyEvidence'],
    ai: ['Recommend methods by learner needs', 'Balance rigor and accessibility', 'Simulate classroom outcomes']
  },
  {
    id: 'content',
    label: 'Learning Content Objects',
    group: 'delivery',
    x: 800,
    y: 340,
    definition: 'Atomic reusable assets: lessons, media, activities, labs, and teacher guides.',
    schema: ['assetId', 'mediaType', 'license', 'alignmentClaims[]'],
    ai: ['Auto-tag and align assets', 'Generate derivative versions', 'Flag outdated references']
  },
  {
    id: 'assessment',
    label: 'Assessment Evidence',
    group: 'assessment',
    x: 650,
    y: 510,
    definition: 'Continuous evidence model spanning formative signals to summative performance.',
    schema: ['evidenceId', 'rubricLinks[]', 'validitySignal', 'masteryEstimate'],
    ai: ['Calibrate item difficulty', 'Infer latent mastery', 'Create adaptive assessment routes']
  },
  {
    id: 'learner',
    label: 'Learner Profiles',
    group: 'intelligence',
    x: 380,
    y: 540,
    definition: 'Dynamic profile containing goals, strengths, barriers, and mastery trajectories.',
    schema: ['learnerId', 'goals[]', 'supportNeeds[]', 'masteryVector'],
    ai: ['Generate personalized pathways', 'Trigger interventions', 'Predict persistence risk']
  },
  {
    id: 'workforce',
    label: 'Workforce & Future Skills',
    group: 'policy',
    x: 185,
    y: 360,
    definition: 'Labor-market and societal demand signals connected to educational outcomes.',
    schema: ['signalId', 'skillClusters[]', 'regionalDemand', 'horizonDate'],
    ai: ['Project emerging skill needs', 'Recommend credential updates', 'Align capstones to market shifts']
  },
  {
    id: 'governance',
    label: 'Governance & Provenance',
    group: 'intelligence',
    x: 500,
    y: 660,
    definition: 'Version control, evidence lineage, policy constraints, and ethical boundaries.',
    schema: ['changeId', 'sourceProvenance[]', 'approvalState', 'riskFlags[]'],
    ai: ['Explain every recommendation path', 'Audit model outputs', 'Enforce policy guardrails']
  }
];

const edges = [
  ['standards', 'curriculum', 'constrains'],
  ['concepts', 'curriculum', 'structures'],
  ['pedagogy', 'curriculum', 'operationalizes'],
  ['content', 'curriculum', 'implements'],
  ['assessment', 'curriculum', 'measures'],
  ['learner', 'assessment', 'produces'],
  ['assessment', 'learner', 'updates'],
  ['workforce', 'curriculum', 'informs'],
  ['governance', 'curriculum', 'version-controls'],
  ['governance', 'assessment', 'audits'],
  ['concepts', 'content', 'maps-to'],
  ['standards', 'assessment', 'anchors'],
  ['pedagogy', 'content', 'drives']
];

const svg = document.getElementById('ontologyGraph');
const inspector = document.getElementById('inspector');
const legend = document.getElementById('legendItems');

const ns = 'http://www.w3.org/2000/svg';

Object.entries(palette).forEach(([group, color]) => {
  const item = document.createElement('div');
  item.className = 'legend-item';
  item.innerHTML = `<span class="swatch" style="background:${color}"></span>${group}`;
  legend.appendChild(item);
});

function render() {
  edges.forEach(([from, to, rel]) => {
    const source = nodes.find((n) => n.id === from);
    const target = nodes.find((n) => n.id === to);

    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', source.x);
    line.setAttribute('y1', source.y);
    line.setAttribute('x2', target.x);
    line.setAttribute('y2', target.y);
    line.setAttribute('class', 'edge');
    svg.appendChild(line);

    const midX = (source.x + target.x) / 2;
    const midY = (source.y + target.y) / 2;
    const label = document.createElementNS(ns, 'text');
    label.setAttribute('x', midX + 8);
    label.setAttribute('y', midY - 4);
    label.setAttribute('class', 'edge-label');
    label.textContent = rel;
    svg.appendChild(label);
  });

  nodes.forEach((node) => {
    const g = document.createElementNS(ns, 'g');
    g.setAttribute('class', 'node');
    g.setAttribute('data-id', node.id);

    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', node.x);
    circle.setAttribute('cy', node.y);
    circle.setAttribute('r', 27);
    circle.setAttribute('fill', palette[node.group]);
    circle.setAttribute('fill-opacity', '0.9');

    const text = document.createElementNS(ns, 'text');
    text.setAttribute('x', node.x);
    text.setAttribute('y', node.y + 48);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', 'currentColor');
    text.setAttribute('font-size', '12');
    text.textContent = node.label;

    g.appendChild(circle);
    g.appendChild(text);
    svg.appendChild(g);

    g.addEventListener('click', () => selectNode(node.id));
  });
}

function selectNode(id) {
  const selected = nodes.find((node) => node.id === id);
  document.querySelectorAll('.node').forEach((el) => {
    el.classList.toggle('active', el.dataset.id === id);
  });

  inspector.innerHTML = `
    <h3>${selected.label}</h3>
    <p><strong>Definition:</strong> ${selected.definition}</p>
    <p><strong>Schema Objects</strong></p>
    <ul>${selected.schema.map((item) => `<li>${item}</li>`).join('')}</ul>
    <p><strong>AI Operations Enabled</strong></p>
    <ul>${selected.ai.map((item) => `<li>${item}</li>`).join('')}</ul>
  `;
}

render();
selectNode('curriculum');

document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});
