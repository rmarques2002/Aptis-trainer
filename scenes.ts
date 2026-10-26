// Original flat SVG illustrations used as "photos" in Speaking Parts 2 and 3.
// Each scene is a 320×200 SVG string built from simple shapes.

const SKIN = ['#f1c27d', '#e0ac69', '#c68642', '#8d5524', '#ffdbac'];
const HAIR = ['#2b1d14', '#5a3825', '#d6b370', '#1b1b1b', '#8c4a2f'];

function person(
  x: number, y: number, shirt: string, i = 0,
  o: { sit?: boolean; scale?: number; child?: boolean; armUp?: boolean } = {},
): string {
  // (x, y) = feet on the ground. Drawn upwards from there.
  const s = (o.scale ?? 1) * (o.child ? 0.72 : 1);
  const skin = SKIN[i % SKIN.length];
  const hair = HAIR[i % HAIR.length];
  const legs = o.sit
    ? `<rect x="-7" y="-16" width="18" height="6" rx="3" fill="#34495e"/><rect x="6" y="-14" width="5" height="14" rx="2" fill="#34495e"/>`
    : `<rect x="-6" y="-24" width="5" height="24" rx="2" fill="#34495e"/><rect x="1" y="-24" width="5" height="24" rx="2" fill="#34495e"/>`;
  const top = o.sit ? -46 : -54; // top of torso
  const torso = `<rect x="-8" y="${top}" width="16" height="32" rx="6" fill="${shirt}"/>`;
  const armL = `<rect x="-12" y="${top + 3}" width="4" height="20" rx="2" fill="${skin}"/>`;
  const armR = o.armUp
    ? `<rect x="8" y="${top - 16}" width="4" height="20" rx="2" fill="${skin}"/>`
    : `<rect x="8" y="${top + 3}" width="4" height="20" rx="2" fill="${skin}"/>`;
  const hy = top - 10;
  const head = `<circle cx="0" cy="${hy}" r="9" fill="${skin}"/><path d="M-9 ${hy - 1} Q-9 ${hy - 12} 0 ${hy - 11} Q9 ${hy - 12} 9 ${hy - 1} Q5 ${hy - 7} -9 ${hy - 1}Z" fill="${hair}"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s})">${legs}${torso}${armL}${armR}${head}</g>`;
}

const svg = (body: string, bg = '#dff1ff') =>
  `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img"><rect width="320" height="200" fill="${bg}"/>${body}</svg>`;
const ground = (c: string, y = 150) => `<rect y="${y}" width="320" height="${200 - y}" fill="${c}"/>`;
const sun = (x = 270, y = 35) => `<circle cx="${x}" cy="${y}" r="16" fill="#ffd54a"/>`;
const cloud = (x: number, y: number) =>
  `<g fill="#fff" opacity=".9"><ellipse cx="${x}" cy="${y}" rx="18" ry="9"/><ellipse cx="${x + 14}" cy="${y - 5}" rx="13" ry="9"/><ellipse cx="${x + 26}" cy="${y}" rx="14" ry="8"/></g>`;
const tree = (x: number, y: number, c = '#3fa34d', s = 1) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="-30" width="8" height="30" fill="#7a5230"/><circle cx="0" cy="-42" r="20" fill="${c}"/></g>`;
const table = (x: number, y: number, w: number, c = '#b07d4f') =>
  `<rect x="${x}" y="${y}" width="${w}" height="6" fill="${c}"/><rect x="${x + 4}" y="${y + 6}" width="4" height="${150 - y - 6}" fill="${c}"/><rect x="${x + w - 8}" y="${y + 6}" width="4" height="${150 - y - 6}" fill="${c}"/>`;
const laptop = (x: number, y: number) =>
  `<rect x="${x}" y="${y - 14}" width="22" height="14" rx="1" fill="#37474f"/><rect x="${x + 2}" y="${y - 12}" width="18" height="10" fill="#90caf9"/><rect x="${x - 3}" y="${y - 1}" width="28" height="2" fill="#263238"/>`;
const building = (x: number, w: number, h: number, c: string, base = 150) => {
  let win = '';
  for (let yy = base - h + 8; yy < base - 12; yy += 16)
    for (let xx = x + 6; xx < x + w - 8; xx += 14) win += `<rect x="${xx}" y="${yy}" width="7" height="9" fill="#fff6c7" opacity=".85"/>`;
  return `<rect x="${x}" y="${base - h}" width="${w}" height="${h}" fill="${c}"/>${win}`;
};
const book = (x: number, y: number, c = '#e53935') => `<rect x="${x}" y="${y}" width="14" height="10" rx="1" fill="${c}"/><rect x="${x + 6.5}" y="${y}" width="1" height="10" fill="#fff"/>`;

export const SCENES: Record<string, { label: string; svg: string }> = {
  office: {
    label: 'Compañeros trabajando juntos en una oficina',
    svg: svg(
      `${ground('#c9b79c')}<rect x="20" y="20" width="90" height="55" fill="#fff" stroke="#90a4ae" stroke-width="3"/><path d="M30 65 L50 45 L65 55 L95 30" stroke="#3d5afe" stroke-width="3" fill="none"/>${table(70, 112, 180)}${laptop(110, 112)}${laptop(190, 112)}${person(95, 150, '#3d5afe', 0, { sit: true })}${person(235, 150, '#e57373', 2, { sit: true })}${person(160, 150, '#26a69a', 3, { armUp: true })}<rect x="260" y="40" width="40" height="70" fill="#a5d6a7"/>`,
      '#eef3f8',
    ),
  },
  market: {
    label: 'Un mercado callejero con mucha gente',
    svg: svg(
      `${ground('#bdbdbd')}${sun()}${['#e53935', '#43a047', '#fb8c00'].map((c, k) => `<g transform="translate(${20 + k * 100} 0)"><path d="M0 70 L90 70 L80 55 L10 55Z" fill="${c}"/><rect x="5" y="70" width="80" height="6" fill="#fff" opacity=".6"/><rect x="5" y="105" width="80" height="20" fill="#8d6e63"/>${[0, 1, 2, 3, 4].map((j) => `<circle cx="${14 + j * 15}" cy="102" r="6" fill="${['#ff7043', '#ffee58', '#66bb6a', '#ab47bc', '#ef5350'][(j + k) % 5]}"/>`).join('')}<rect x="8" y="76" width="3" height="50" fill="#5d4037"/><rect x="79" y="76" width="3" height="50" fill="#5d4037"/></g>`).join('')}${person(60, 170, '#7e57c2', 1)}${person(150, 172, '#ffb300', 4)}${person(250, 168, '#29b6f6', 2)}${person(185, 172, '#ec407a', 0, { child: true })}`,
    ),
  },
  dinner: {
    label: 'Una familia cenando en casa',
    svg: svg(
      `${ground('#a1887f', 160)}<rect x="230" y="25" width="60" height="45" fill="#263238"/><circle cx="270" cy="40" r="7" fill="#fff59d"/><rect x="40" y="10" width="2" height="30" fill="#555"/><circle cx="41" cy="44" r="8" fill="#ffe082"/>${table(70, 118, 180, '#8d6e63')}<ellipse cx="120" cy="115" rx="14" ry="4" fill="#fff"/><ellipse cx="200" cy="115" rx="14" ry="4" fill="#fff"/><ellipse cx="160" cy="112" rx="18" ry="7" fill="#ff8a65"/>${person(85, 160, '#5c6bc0', 0, { sit: true })}${person(235, 160, '#ef5350', 4, { sit: true })}${person(130, 160, '#66bb6a', 1, { sit: true, child: true })}${person(190, 160, '#ffca28', 2, { sit: true, child: true })}`,
      '#fff3e0',
    ),
  },
  park: {
    label: 'Una persona haciendo ejercicio al aire libre',
    svg: svg(
      `${ground('#8bc34a')}${sun(60)}${cloud(200, 40)}${tree(40, 150)}${tree(280, 150, '#2e7d32', 1.2)}<path d="M0 175 Q160 140 320 170" stroke="#d7ccc8" stroke-width="18" fill="none"/>${person(150, 160, '#ff5722', 2, { armUp: true })}${person(230, 150, '#03a9f4', 1, { scale: 0.7 })}`,
    ),
  },
  classroom: {
    label: 'Estudiantes en un aula',
    svg: svg(
      `${ground('#bcaaa4', 160)}<rect x="40" y="20" width="200" height="70" fill="#2e7d32" stroke="#795548" stroke-width="5"/><text x="60" y="55" fill="#fff" font-size="14" font-family="sans-serif">Present perfect</text>${person(270, 150, '#8e24aa', 3, { armUp: true })}${[50, 130, 210].map((x, k) => `${table(x, 128, 60)}${book(x + 22, 120, ['#1e88e5', '#e53935', '#fdd835'][k])}${person(x + 30, 165, ['#26a69a', '#ff7043', '#5c6bc0'][k], k, { sit: true, scale: 0.85 })}`).join('')}`,
      '#f5f0e6',
    ),
  },
  beach: {
    label: 'Una playa en un día de verano',
    svg: svg(
      `<rect y="95" width="320" height="40" fill="#29b6f6"/><rect y="130" width="320" height="70" fill="#ffe0a3"/>${sun()}${cloud(60, 35)}<path d="M80 135 L80 95" stroke="#795548" stroke-width="3"/><path d="M50 100 Q80 75 110 100Z" fill="#e53935"/><rect x="60" y="150" width="40" height="12" rx="3" fill="#7e57c2"/>${person(170, 175, '#ff4081', 0)}${person(200, 178, '#00e676', 1, { child: true })}${person(260, 120, '#ffee58', 2, { scale: 0.6 })}<circle cx="230" cy="168" r="7" fill="#fff"/><path d="M223 168 H237" stroke="#e53935" stroke-width="2"/>`,
      '#bfe8ff',
    ),
  },
  station: {
    label: 'Viajeros en una estación de tren',
    svg: svg(
      `${ground('#9e9e9e', 160)}<rect y="0" width="320" height="22" fill="#546e7a"/><rect x="20" y="70" width="230" height="60" rx="10" fill="#c62828"/>${[0, 1, 2, 3, 4].map((k) => `<rect x="${35 + k * 42}" y="82" width="28" height="20" rx="3" fill="#bbdefb"/>`).join('')}<rect x="20" y="128" width="230" height="6" fill="#424242"/><rect x="255" y="35" width="50" height="22" fill="#212121"/><text x="262" y="50" fill="#ffeb3b" font-size="10" font-family="monospace">10:45</text>${person(270, 175, '#3949ab', 0)}<rect x="282" y="155" width="14" height="18" rx="2" fill="#6d4c41"/>${person(110, 178, '#fb8c00', 3)}${person(140, 178, '#00897b', 4)}`,
      '#cfd8dc',
    ),
  },
  garden: {
    label: 'Un jardín en primavera',
    svg: svg(
      `${ground('#7cb342')}${sun(50, 40)}${cloud(220, 30)}${tree(270, 150, '#f8bbd0', 1.1)}${[...Array(12)].map((_, k) => `<g transform="translate(${20 + k * 22} ${160 + (k % 3) * 9})"><rect x="-1" y="0" width="2" height="12" fill="#33691e"/><circle r="5" fill="${['#ff4081', '#ffeb3b', '#7c4dff', '#ff7043'][k % 4]}"/></g>`).join('')}${person(140, 150, '#8d6e63', 1)}<rect x="152" y="132" width="16" height="12" fill="#90a4ae"/>${person(200, 150, '#ffb74d', 0, { child: true })}`,
    ),
  },
  studyAlone: {
    label: 'Una persona estudiando sola en su habitación',
    svg: svg(
      `${ground('#a1887f', 160)}<rect x="220" y="25" width="70" height="55" fill="#90caf9" stroke="#fff" stroke-width="4"/><circle cx="270" cy="45" r="8" fill="#fff9c4"/>${table(60, 118, 150)}<path d="M80 118 L80 85 L95 80" stroke="#455a64" stroke-width="3" fill="none"/><path d="M90 76 L104 82 L96 90Z" fill="#ffca28"/>${book(120, 108)}${book(140, 108, '#43a047')}${laptop(165, 118)}${person(150, 160, '#5e35b1', 2, { sit: true })}`,
      '#ede7f6',
    ),
  },
  studyGroup: {
    label: 'Un grupo de estudiantes trabajando juntos',
    svg: svg(
      `${ground('#bcaaa4', 160)}${table(50, 118, 220)}${book(90, 108)}${book(150, 108, '#1e88e5')}${laptop(200, 118)}${person(70, 160, '#e53935', 0, { sit: true })}${person(120, 160, '#43a047', 1, { sit: true })}${person(200, 160, '#fbc02d', 3, { sit: true })}${person(250, 160, '#3949ab', 4, { sit: true, armUp: true })}`,
      '#fff8e1',
    ),
  },
  plane: {
    label: 'Un avión despegando',
    svg: svg(
      `${ground('#9e9e9e', 165)}${cloud(40, 50)}${cloud(220, 30)}<g transform="translate(150 95) rotate(-15)"><ellipse cx="0" cy="0" rx="70" ry="12" fill="#eceff1"/><path d="M-10 0 L-35 40 L-15 40 L20 0Z" fill="#b0bec5"/><path d="M-55 -5 L-70 -28 L-58 -28 L-40 -5Z" fill="#3d5afe"/>${[0, 1, 2, 3, 4, 5].map((k) => `<circle cx="${-30 + k * 12}" cy="-3" r="2.5" fill="#455a64"/>`).join('')}</g><rect x="0" y="175" width="320" height="4" fill="#fff" opacity=".7"/>`,
      '#b3e5fc',
    ),
  },
  train: {
    label: 'Un tren de alta velocidad en el campo',
    svg: svg(
      `${ground('#9ccc65', 140)}<path d="M0 140 L60 80 L120 140Z" fill="#81c784"/><path d="M100 140 L180 70 L260 140Z" fill="#66bb6a"/>${sun(280, 40)}<rect y="160" width="320" height="4" fill="#5d4037"/><path d="M20 158 L250 158 Q300 158 305 140 L290 125 L20 125Z" fill="#fafafa" stroke="#3d5afe" stroke-width="3"/>${[0, 1, 2, 3, 4, 5].map((k) => `<rect x="${35 + k * 38}" y="132" width="24" height="12" rx="2" fill="#263238"/>`).join('')}`,
      '#c8e6ff',
    ),
  },
  city: {
    label: 'Una calle de una gran ciudad',
    svg: svg(
      `${ground('#757575', 165)}${building(0, 60, 130, '#78909c', 165)}${building(65, 50, 90, '#a1887f', 165)}${building(120, 70, 150, '#5c6bc0', 165)}${building(195, 55, 110, '#8d6e63', 165)}${building(255, 65, 140, '#607d8b', 165)}<rect x="40" y="175" width="40" height="14" rx="4" fill="#fdd835"/><rect x="200" y="175" width="44" height="14" rx="4" fill="#e53935"/>${person(140, 190, '#26a69a', 0, { scale: 0.8 })}${person(160, 190, '#ff7043', 2, { scale: 0.8 })}`,
      '#cfd8dc',
    ),
  },
  countryside: {
    label: 'Un pueblo en el campo',
    svg: svg(
      `${ground('#8bc34a', 130)}<path d="M0 130 Q80 80 160 130 Q240 70 320 130Z" fill="#7cb342"/>${sun(60, 40)}${cloud(180, 30)}<rect x="130" y="100" width="50" height="40" fill="#fff3e0"/><path d="M125 100 L155 78 L185 100Z" fill="#d84315"/><rect x="150" y="118" width="10" height="22" fill="#6d4c41"/>${tree(60, 160)}${tree(250, 165, '#558b2f', 1.2)}<g transform="translate(210 170)"><ellipse rx="14" ry="8" fill="#fff"/><circle cx="12" cy="-6" r="5" fill="#fff"/><rect x="-10" y="5" width="2" height="8" fill="#333"/><rect x="8" y="5" width="2" height="8" fill="#333"/></g>`,
    ),
  },
  onlineShop: {
    label: 'Una persona comprando por internet desde casa',
    svg: svg(
      `${ground('#a1887f', 160)}<rect x="30" y="80" width="140" height="50" rx="10" fill="#5c6bc0"/><rect x="30" y="120" width="140" height="20" rx="6" fill="#3949ab"/>${person(100, 135, '#ffb300', 1, { sit: true })}<rect x="112" y="98" width="24" height="16" rx="2" fill="#37474f"/><rect x="114" y="100" width="20" height="11" fill="#a5d6a7"/><rect x="220" y="125" width="50" height="35" fill="#c8a165"/><rect x="220" y="138" width="50" height="5" fill="#a1887f"/><rect x="230" y="105" width="34" height="22" fill="#d7b98a"/>`,
      '#f3e5f5',
    ),
  },
  shop: {
    label: 'Clientes en una tienda de ropa',
    svg: svg(
      `${ground('#e0e0e0', 165)}<rect x="0" y="0" width="320" height="22" fill="#00897b"/><text x="120" y="16" fill="#fff" font-size="13" font-family="sans-serif">SALE −30%</text><rect x="20" y="50" width="120" height="3" fill="#616161"/>${['#e53935', '#1e88e5', '#fdd835', '#43a047', '#8e24aa', '#fb8c00'].map((c, k) => `<path d="M${28 + k * 19} 53 l7 0 l3 6 l-2 22 l-9 0 l-2 -22z" fill="${c}"/>`).join('')}<rect x="200" y="40" width="40" height="100" fill="#cfd8dc" stroke="#90a4ae" stroke-width="3"/>${person(80, 180, '#ec407a', 0)}${person(170, 180, '#26c6da', 3)}<rect x="185" y="150" width="16" height="16" fill="#ffca28"/>${person(275, 180, '#5d4037', 2)}`,
      '#fafafa',
    ),
  },
  reading: {
    label: 'Una persona leyendo un libro en el sofá',
    svg: svg(
      `${ground('#8d6e63', 165)}<rect x="40" y="95" width="180" height="50" rx="12" fill="#26a69a"/><rect x="40" y="135" width="180" height="22" rx="6" fill="#00897b"/>${person(130, 150, '#ff7043', 4, { sit: true })}<path d="M118 112 L132 108 L146 112 L146 124 L132 120 L118 124Z" fill="#fff" stroke="#795548"/><rect x="250" y="40" width="50" height="110" fill="#795548"/>${[0, 1, 2, 3].map((k) => [0, 1, 2, 3].map((j) => `<rect x="${254 + j * 11}" y="${46 + k * 26}" width="8" height="20" fill="${['#e53935', '#1e88e5', '#fdd835', '#43a047'][(k + j) % 4]}"/>`).join('')).join('')}<rect x="20" y="20" width="3" height="80" fill="#424242"/><path d="M8 20 L35 20 L28 8 L15 8Z" fill="#ffe082"/>`,
      '#fff8e1',
    ),
  },
  cinema: {
    label: 'Público en una sala de cine',
    svg: svg(
      `<rect x="30" y="15" width="260" height="95" fill="#e3f2fd"/><path d="M60 95 L120 45 L160 75 L200 35 L260 95Z" fill="#90caf9"/>${[0, 1].map((r) => [...Array(8)].map((_, k) => `<g transform="translate(${30 + k * 37} ${150 + r * 30})"><rect x="-14" y="-10" width="28" height="30" rx="4" fill="#b71c1c"/><circle cy="-18" r="9" fill="#212121"/></g>`).join('')).join('')}`,
      '#1a1a2e',
    ),
  },
  homeOffice: {
    label: 'Una persona trabajando desde casa',
    svg: svg(
      `${ground('#bcaaa4', 160)}<rect x="230" y="25" width="70" height="55" fill="#b3e5fc" stroke="#fff" stroke-width="4"/>${tree(265, 80, '#66bb6a', 0.5)}${table(60, 118, 150, '#d7ccc8')}${laptop(120, 118)}<rect x="170" y="108" width="10" height="10" rx="2" fill="#fff"/><path d="M180 111 q5 3 0 6" stroke="#fff" fill="none"/>${person(130, 160, '#7e57c2', 0, { sit: true })}<g transform="translate(40 150)"><ellipse rx="16" ry="9" fill="#ff8a65"/><circle cx="14" cy="-6" r="6" fill="#ff8a65"/></g>`,
      '#f1f8e9',
    ),
  },
  cafeAbroad: {
    label: 'Turistas charlando con gente local en una terraza',
    svg: svg(
      `${ground('#d7ccc8', 160)}${building(0, 120, 140, '#ffcc80', 160)}${building(200, 120, 120, '#ef9a9a', 160)}<path d="M120 60 L200 60 L190 45 L130 45Z" fill="#1e88e5"/>${table(125, 125, 70, '#fff')}<rect x="145" y="117" width="8" height="8" fill="#6d4c41"/><rect x="165" y="117" width="8" height="8" fill="#6d4c41"/>${person(115, 160, '#43a047', 1, { sit: true })}${person(205, 160, '#fdd835', 2, { sit: true, armUp: true })}${person(160, 175, '#e91e63', 3, { scale: 0.6 })}`,
      '#bbdefb',
    ),
  },
  hiking: {
    label: 'Amigos haciendo senderismo en la montaña',
    svg: svg(
      `<path d="M0 160 L90 50 L170 140 L240 70 L320 160Z" fill="#78909c"/><path d="M75 68 L90 50 L105 68 L95 64 L88 70Z" fill="#fff"/><path d="M228 84 L240 70 L252 84 L244 80Z" fill="#fff"/>${ground('#8bc34a', 160)}${sun(280, 35)}${person(120, 185, '#ff5722', 0)}<rect x="104" y="150" width="10" height="16" rx="3" fill="#33691e"/>${person(160, 188, '#1e88e5', 3, { armUp: true })}<rect x="144" y="153" width="10" height="16" rx="3" fill="#bf360c"/>${person(200, 186, '#ffc107', 4)}`,
      '#b3e5fc',
    ),
  },
  shopping: {
    label: 'Una persona con muchas bolsas de compras',
    svg: svg(
      `${ground('#bdbdbd', 165)}${building(0, 320, 140, '#eceff1', 165)}<rect x="20" y="60" width="120" height="80" fill="#90caf9" opacity=".7"/><rect x="180" y="60" width="120" height="80" fill="#f8bbd0" opacity=".7"/>${person(160, 190, '#212121', 1)}<rect x="128" y="160" width="20" height="24" fill="#e91e63"/><rect x="172" y="160" width="20" height="24" fill="#3d5afe"/><rect x="190" y="166" width="16" height="20" fill="#ffc107"/><rect x="112" y="166" width="16" height="20" fill="#26a69a"/>`,
      '#fafafa',
    ),
  },
};
