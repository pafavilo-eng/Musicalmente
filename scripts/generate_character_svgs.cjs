const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '../public/assets/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const characters = [
  {
    id: 'fox_violinist',
    bg: ['#fb923c', '#ea580c'],
    accent: '#ffedd5',
    faceColor: '#f97316',
    innerEar: '#fed7aa',
    accessory: '🎻',
    title: 'Raposa',
    instrument: 'Violino',
    svgArt: `
      <!-- Fox ears -->
      <polygon points="56,60 88,110 30,100" fill="#ea580c" />
      <polygon points="56,68 80,105 38,100" fill="#fed7aa" />
      <polygon points="200,60 226,100 168,110" fill="#ea580c" />
      <polygon points="200,68 218,100 176,105" fill="#fed7aa" />
      <!-- Fox Head -->
      <ellipse cx="128" cy="138" rx="66" ry="58" fill="#f97316" />
      <path d="M 80 146 Q 128 190 176 146 Q 128 178 80 146 Z" fill="#ffffff" />
      <!-- Eyes -->
      <ellipse cx="104" cy="132" rx="9" ry="12" fill="#1e293b" />
      <ellipse cx="152" cy="132" rx="9" ry="12" fill="#1e293b" />
      <circle cx="107" cy="128" r="3.5" fill="#ffffff" />
      <circle cx="155" cy="128" r="3.5" fill="#ffffff" />
      <!-- Cheeks -->
      <circle cx="86" cy="144" r="8" fill="#fda4af" opacity="0.6" />
      <circle cx="170" cy="144" r="8" fill="#fda4af" opacity="0.6" />
      <!-- Nose & Mouth -->
      <ellipse cx="128" cy="154" rx="7" ry="5" fill="#0f172a" />
      <path d="M 124 162 Q 128 168 132 162" stroke="#0f172a" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Violin -->
      <g transform="translate(142, 142) rotate(15) scale(0.65)">
        <path d="M 40 20 C 15 10 15 60 30 75 C 20 85 15 110 35 130 C 55 150 75 140 80 120 C 85 140 105 150 125 130 C 145 110 140 85 130 75 C 145 60 145 10 120 20 C 100 10 90 35 80 35 C 70 35 60 10 40 20 Z" fill="#92400e" stroke="#78350f" stroke-width="4" />
        <rect x="74" y="-30" width="12" height="60" fill="#1f2937" rx="3" />
        <circle cx="80" cy="-40" r="14" fill="#78350f" />
        <line x1="77" y1="-30" x2="77" y2="120" stroke="#fef08a" stroke-width="1.5" />
        <line x1="83" y1="-30" x2="83" y2="120" stroke="#fef08a" stroke-width="1.5" />
      </g>
    `
  },
  {
    id: 'panda_organist',
    bg: ['#64748b', '#334155'],
    accent: '#f8fafc',
    faceColor: '#ffffff',
    innerEar: '#1e293b',
    accessory: '🎹',
    title: 'Panda',
    instrument: 'Órgão de Tubos',
    svgArt: `
      <!-- Ears -->
      <circle cx="76" cy="80" r="28" fill="#1e293b" />
      <circle cx="180" cy="80" r="28" fill="#1e293b" />
      <!-- Head -->
      <ellipse cx="128" cy="138" rx="66" ry="60" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
      <!-- Eye patches -->
      <ellipse cx="98" cy="130" rx="19" ry="24" fill="#1e293b" transform="rotate(-15 98 130)" />
      <ellipse cx="158" cy="130" rx="19" ry="24" fill="#1e293b" transform="rotate(15 158 130)" />
      <!-- Eyes -->
      <circle cx="102" cy="128" r="6" fill="#ffffff" />
      <circle cx="154" cy="128" r="6" fill="#ffffff" />
      <circle cx="104" cy="126" r="2.5" fill="#0f172a" />
      <circle cx="156" cy="126" r="2.5" fill="#0f172a" />
      <!-- Nose & Mouth -->
      <ellipse cx="128" cy="150" rx="10" ry="7" fill="#1e293b" />
      <path d="M 122 160 Q 128 168 134 160" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Organ Pipes behind -->
      <g transform="translate(10, 160)">
        <rect x="25" y="10" width="8" height="50" fill="#cbd5e1" rx="3" />
        <rect x="37" y="-5" width="8" height="65" fill="#e2e8f0" rx="3" />
        <rect x="49" y="-20" width="8" height="80" fill="#f8fafc" rx="3" />
        <rect x="179" y="-20" width="8" height="80" fill="#f8fafc" rx="3" />
        <rect x="191" y="-5" width="8" height="65" fill="#e2e8f0" rx="3" />
        <rect x="203" y="10" width="8" height="50" fill="#cbd5e1" rx="3" />
      </g>
    `
  },
  {
    id: 'cat_violinist',
    bg: ['#f472b6', '#db2777'],
    accent: '#fdf2f8',
    faceColor: '#fff1f2',
    innerEar: '#f43f5e',
    accessory: '🎻',
    title: 'Gato',
    instrument: 'Violino Solista',
    svgArt: `
      <!-- Cat Ears -->
      <polygon points="68,55 98,105 48,100" fill="#fff1f2" stroke="#fda4af" stroke-width="2" />
      <polygon points="70,65 92,100 56,98" fill="#fb7185" />
      <polygon points="188,55 208,100 158,105" fill="#fff1f2" stroke="#fda4af" stroke-width="2" />
      <polygon points="186,65 200,98 164,100" fill="#fb7185" />
      <!-- Head -->
      <ellipse cx="128" cy="138" rx="64" ry="56" fill="#fff1f2" stroke="#fbcfe8" stroke-width="2" />
      <!-- Eyes -->
      <ellipse cx="102" cy="130" rx="8" ry="12" fill="#0284c7" />
      <ellipse cx="154" cy="130" rx="8" ry="12" fill="#0284c7" />
      <circle cx="105" cy="126" r="3.5" fill="#ffffff" />
      <circle cx="157" cy="126" r="3.5" fill="#ffffff" />
      <!-- Whiskers -->
      <line x1="62" y1="140" x2="88" y2="142" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
      <line x1="60" y1="150" x2="88" y2="148" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
      <line x1="168" y1="142" x2="194" y2="140" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
      <line x1="168" y1="148" x2="196" y2="150" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
      <!-- Nose & Smile -->
      <polygon points="128,145 123,140 133,140" fill="#f43f5e" />
      <path d="M 124 150 Q 128 156 132 150" stroke="#475569" stroke-width="2" fill="none" stroke-linecap="round" />
    `
  },
  {
    id: 'dog_trumpeter',
    bg: ['#eab308', '#ca8a04'],
    accent: '#fef9c3',
    faceColor: '#fef08a',
    innerEar: '#ca8a04',
    accessory: '🎺',
    title: 'Cachorro',
    instrument: 'Trompete Alegre',
    svgArt: `
      <!-- Floppy Ears -->
      <ellipse cx="64" cy="125" rx="20" ry="46" fill="#b45309" transform="rotate(20 64 125)" />
      <ellipse cx="192" cy="125" rx="20" ry="46" fill="#b45309" transform="rotate(-20 192 125)" />
      <!-- Head -->
      <ellipse cx="128" cy="134" rx="64" ry="58" fill="#fef08a" />
      <!-- Snout -->
      <ellipse cx="128" cy="152" rx="34" ry="24" fill="#ffffff" />
      <!-- Eyes -->
      <ellipse cx="106" cy="122" rx="8" ry="11" fill="#1e293b" />
      <ellipse cx="150" cy="122" rx="8" ry="11" fill="#1e293b" />
      <circle cx="108" cy="119" r="3" fill="#ffffff" />
      <circle cx="152" cy="119" r="3" fill="#ffffff" />
      <!-- Nose & Tongue -->
      <ellipse cx="128" cy="146" rx="11" ry="8" fill="#1e293b" />
      <path d="M 125 158 Q 128 170 131 158" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />
      <!-- Trumpet -->
      <g transform="translate(136, 140) rotate(-15) scale(0.6)">
        <polygon points="100,5 150,-15 150,55 100,35" fill="#f59e0b" stroke="#b45309" stroke-width="3" />
        <rect x="20" y="15" width="80" height="10" fill="#f59e0b" stroke="#b45309" stroke-width="2" rx="3" />
        <rect x="50" y="5" width="6" height="30" fill="#fcd34d" stroke="#b45309" stroke-width="1.5" />
        <rect x="62" y="5" width="6" height="30" fill="#fcd34d" stroke="#b45309" stroke-width="1.5" />
        <rect x="74" y="5" width="6" height="30" fill="#fcd34d" stroke="#b45309" stroke-width="1.5" />
      </g>
    `
  },
  {
    id: 'lion_conductor',
    bg: ['#f97316', '#c2410c'],
    accent: '#ffedd5',
    faceColor: '#fde047',
    innerEar: '#b45309',
    accessory: '🦁',
    title: 'Leão',
    instrument: 'Grande Orquestra',
    svgArt: `
      <!-- Lion Mane -->
      <circle cx="128" cy="136" r="76" fill="#ea580c" />
      <!-- Mane tufts -->
      <circle cx="70" cy="90" r="24" fill="#c2410c" />
      <circle cx="186" cy="90" r="24" fill="#c2410c" />
      <circle cx="60" cy="150" r="24" fill="#c2410c" />
      <circle cx="196" cy="150" r="24" fill="#c2410c" />
      <circle cx="90" cy="200" r="24" fill="#c2410c" />
      <circle cx="166" cy="200" r="24" fill="#c2410c" />
      <!-- Head -->
      <circle cx="128" cy="136" r="54" fill="#fde047" />
      <!-- Ears -->
      <circle cx="88" cy="88" r="16" fill="#fde047" />
      <circle cx="88" cy="88" r="9" fill="#f59e0b" />
      <circle cx="168" cy="88" r="16" fill="#fde047" />
      <circle cx="168" cy="88" r="9" fill="#f59e0b" />
      <!-- Snout -->
      <ellipse cx="128" cy="150" rx="26" ry="18" fill="#fef08a" />
      <!-- Eyes -->
      <ellipse cx="108" cy="126" rx="7" ry="10" fill="#1e293b" />
      <ellipse cx="148" cy="126" rx="7" ry="10" fill="#1e293b" />
      <circle cx="110" cy="123" r="2.5" fill="#ffffff" />
      <circle cx="150" cy="123" r="2.5" fill="#ffffff" />
      <!-- Nose & Smile -->
      <polygon points="128,145 120,138 136,138" fill="#78350f" />
      <path d="M 122 154 Q 128 160 134 154" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Conductor Baton -->
      <line x1="140" y1="180" x2="200" y2="120" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
      <circle cx="202" cy="118" r="5" fill="#f59e0b" />
    `
  },
  {
    id: 'monkey_percussionist',
    bg: ['#10b981', '#047857'],
    accent: '#d1fae5',
    faceColor: '#92400e',
    innerEar: '#fed7aa',
    accessory: '🥁',
    title: 'Macaco',
    instrument: 'Bateria & Ritmo',
    svgArt: `
      <!-- Ears -->
      <circle cx="62" cy="136" r="26" fill="#92400e" />
      <circle cx="62" cy="136" r="16" fill="#fed7aa" />
      <circle cx="194" cy="136" r="26" fill="#92400e" />
      <circle cx="194" cy="136" r="16" fill="#fed7aa" />
      <!-- Head -->
      <circle cx="128" cy="136" r="58" fill="#92400e" />
      <!-- Face Mask -->
      <path d="M 94 115 C 80 115 80 165 128 172 C 176 165 176 115 162 115 C 146 115 138 128 128 128 C 118 128 110 115 94 115 Z" fill="#fed7aa" />
      <!-- Eyes -->
      <circle cx="110" cy="130" r="7" fill="#1e293b" />
      <circle cx="146" cy="130" r="7" fill="#1e293b" />
      <circle cx="112" cy="127" r="2.5" fill="#ffffff" />
      <circle cx="148" cy="127" r="2.5" fill="#ffffff" />
      <!-- Nose & Smile -->
      <circle cx="124" cy="144" r="2" fill="#78350f" />
      <circle cx="132" cy="144" r="2" fill="#78350f" />
      <path d="M 118 154 Q 128 162 138 154" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round" />
      <!-- Drum Sticks -->
      <line x1="80" y1="185" x2="110" y2="160" stroke="#fcd34d" stroke-width="4" stroke-linecap="round" />
      <line x1="176" y1="185" x2="146" y2="160" stroke="#fcd34d" stroke-width="4" stroke-linecap="round" />
    `
  },
  {
    id: 'frog_singer',
    bg: ['#84cc16', '#4d7c0f'],
    accent: '#ecfccb',
    faceColor: '#65a30d',
    innerEar: '#d9f99d',
    accessory: '🎤',
    title: 'Sapo',
    instrument: 'Canto & Melodia',
    svgArt: `
      <!-- Big Eyes Bulges -->
      <circle cx="86" cy="94" r="28" fill="#65a30d" />
      <circle cx="170" cy="94" r="28" fill="#65a30d" />
      <circle cx="86" cy="94" r="18" fill="#ffffff" />
      <circle cx="170" cy="94" r="18" fill="#ffffff" />
      <circle cx="88" cy="94" r="10" fill="#1e293b" />
      <circle cx="168" cy="94" r="10" fill="#1e293b" />
      <circle cx="91" cy="91" r="4" fill="#ffffff" />
      <circle cx="171" cy="91" r="4" fill="#ffffff" />
      <!-- Head Body -->
      <ellipse cx="128" cy="146" rx="72" ry="50" fill="#65a30d" />
      <ellipse cx="128" cy="160" rx="46" ry="30" fill="#bef264" />
      <!-- Cheeks -->
      <circle cx="72" cy="146" r="10" fill="#f87171" opacity="0.6" />
      <circle cx="184" cy="146" r="10" fill="#f87171" opacity="0.6" />
      <!-- Wide Singing Mouth -->
      <path d="M 88 144 Q 128 174 168 144" stroke="#166534" stroke-width="4" fill="#b91c1c" />
      <!-- Microphone -->
      <g transform="translate(135, 130) rotate(-15)">
        <rect x="20" y="30" width="10" height="35" fill="#334155" rx="3" />
        <ellipse cx="25" cy="22" rx="12" ry="15" fill="#94a3b8" stroke="#475569" stroke-width="2" />
      </g>
    `
  },
  {
    id: 'penguin_musician',
    bg: ['#06b6d4', '#0e7490'],
    accent: '#cffafe',
    faceColor: '#0f172a',
    innerEar: '#fbbf24',
    accessory: '🎶',
    title: 'Pinguim',
    instrument: 'Clarinete Doce',
    svgArt: `
      <!-- Penguin Body/Head -->
      <ellipse cx="128" cy="140" rx="64" ry="68" fill="#0f172a" />
      <!-- White Belly/Face -->
      <ellipse cx="128" cy="146" rx="42" ry="54" fill="#ffffff" />
      <!-- Cheeks -->
      <circle cx="94" cy="144" r="8" fill="#fda4af" opacity="0.7" />
      <circle cx="162" cy="144" r="8" fill="#fda4af" opacity="0.7" />
      <!-- Eyes -->
      <circle cx="110" cy="126" r="6" fill="#0f172a" />
      <circle cx="146" cy="126" r="6" fill="#0f172a" />
      <circle cx="112" cy="124" r="2" fill="#ffffff" />
      <circle cx="148" cy="124" r="2" fill="#ffffff" />
      <!-- Beak -->
      <polygon points="128,144 116,132 140,132" fill="#f59e0b" />
      <!-- Red Bow Tie -->
      <polygon points="112,168 128,174 112,180" fill="#ef4444" />
      <polygon points="144,168 128,174 144,180" fill="#ef4444" />
      <circle cx="128" cy="174" r="4" fill="#b91c1c" />
    `
  },
  {
    id: 'esther',
    bg: ['#ec4899', '#be185d'],
    accent: '#fce7f3',
    faceColor: '#fed7aa',
    innerEar: '#f43f5e',
    accessory: '👑',
    title: 'Ester',
    instrument: 'Canto de Louvor',
    svgArt: `
      <!-- Hair -->
      <path d="M 64 140 C 60 70 196 70 192 140 C 196 185 186 210 178 215 C 168 190 170 160 170 140 C 170 85 86 85 86 140 C 86 160 88 190 78 215 C 70 210 60 185 64 140 Z" fill="#78350f" />
      <!-- Face -->
      <ellipse cx="128" cy="138" rx="46" ry="50" fill="#fed7aa" />
      <!-- Crown -->
      <polygon points="86,95 98,68 116,85 128,60 140,85 158,68 170,95" fill="#facc15" stroke="#ca8a04" stroke-width="2" />
      <circle cx="128" cy="72" r="3.5" fill="#ef4444" />
      <circle cx="98" cy="80" r="3" fill="#3b82f6" />
      <circle cx="158" cy="80" r="3" fill="#3b82f6" />
      <!-- Eyes -->
      <ellipse cx="110" cy="132" rx="6" ry="9" fill="#3f2e18" />
      <ellipse cx="146" cy="132" rx="6" ry="9" fill="#3f2e18" />
      <circle cx="112" cy="129" r="2.5" fill="#ffffff" />
      <circle cx="148" cy="129" r="2.5" fill="#ffffff" />
      <!-- Cheeks -->
      <circle cx="98" cy="145" r="7" fill="#fb7185" opacity="0.6" />
      <circle cx="158" cy="145" r="7" fill="#fb7185" opacity="0.6" />
      <!-- Smile -->
      <path d="M 120 156 Q 128 164 136 156" stroke="#b91c1c" stroke-width="2.5" fill="none" stroke-linecap="round" />
    `
  },
  {
    id: 'samuel',
    bg: ['#8b5cf6', '#6d28d9'],
    accent: '#ede9fe',
    faceColor: '#fed7aa',
    innerEar: '#6d28d9',
    accessory: '📜',
    title: 'Samuel',
    instrument: 'Ouvinte Atento',
    svgArt: `
      <!-- Hair -->
      <ellipse cx="128" cy="116" rx="48" ry="42" fill="#451a03" />
      <!-- Face -->
      <ellipse cx="128" cy="136" rx="44" ry="46" fill="#fed7aa" />
      <!-- Eyes (Attentive) -->
      <ellipse cx="112" cy="130" rx="6" ry="8" fill="#1e293b" />
      <ellipse cx="144" cy="130" rx="6" ry="8" fill="#1e293b" />
      <circle cx="114" cy="128" r="2.5" fill="#ffffff" />
      <circle cx="146" cy="128" r="2.5" fill="#ffffff" />
      <!-- Smile -->
      <path d="M 121 150 Q 128 157 135 150" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Tunic collar -->
      <polygon points="100,182 128,162 156,182" fill="#c084fc" />
      <!-- Scroll -->
      <g transform="translate(130, 140) rotate(-10) scale(0.6)">
        <rect x="20" y="20" width="40" height="60" fill="#fef3c7" stroke="#b45309" stroke-width="3" rx="4" />
        <line x1="28" y1="35" x2="52" y2="35" stroke="#78350f" stroke-width="2" />
        <line x1="28" y1="48" x2="52" y2="48" stroke="#78350f" stroke-width="2" />
        <line x1="28" y1="61" x2="46" y2="61" stroke="#78350f" stroke-width="2" />
      </g>
    `
  },
  {
    id: 'daniel',
    bg: ['#0ea5e9', '#0369a1'],
    accent: '#e0f2fe',
    faceColor: '#fed7aa',
    innerEar: '#0369a1',
    accessory: '🦁',
    title: 'Daniel',
    instrument: 'Sábio e Fiel',
    svgArt: `
      <!-- Hair -->
      <path d="M 80 130 C 80 80 176 80 176 130 Z" fill="#292524" />
      <!-- Face -->
      <ellipse cx="128" cy="136" rx="46" ry="48" fill="#fed7aa" />
      <!-- Eyes -->
      <circle cx="112" cy="130" r="6" fill="#1e293b" />
      <circle cx="144" cy="130" r="6" fill="#1e293b" />
      <circle cx="114" cy="128" r="2" fill="#ffffff" />
      <circle cx="146" cy="128" r="2" fill="#ffffff" />
      <!-- Friendly Smile -->
      <path d="M 120 152 Q 128 160 136 152" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Little Lion buddy beside -->
      <g transform="translate(42, 126) scale(0.48)">
        <circle cx="50" cy="50" r="36" fill="#f59e0b" />
        <circle cx="50" cy="50" r="26" fill="#fde047" />
        <circle cx="42" cy="45" r="4" fill="#000" />
        <circle cx="58" cy="45" r="4" fill="#000" />
        <polygon points="50,54 46,49 54,49" fill="#78350f" />
      </g>
    `
  },
  {
    id: 'moses',
    bg: ['#d97706', '#b45309'],
    accent: '#fef3c7',
    faceColor: '#fed7aa',
    innerEar: '#78350f',
    accessory: '🌿',
    title: 'Moisés',
    instrument: 'Cântico do Mar',
    svgArt: `
      <!-- Headwrap / Hair -->
      <path d="M 76 130 C 76 70 180 70 180 130 Z" fill="#78350f" />
      <ellipse cx="128" cy="94" rx="48" ry="16" fill="#fef08a" />
      <!-- Face -->
      <ellipse cx="128" cy="134" rx="44" ry="46" fill="#fed7aa" />
      <!-- Beard -->
      <path d="M 88 140 C 90 190 166 190 168 140 Z" fill="#78350f" />
      <!-- Eyes -->
      <circle cx="112" cy="126" r="5" fill="#1e293b" />
      <circle cx="144" cy="126" r="5" fill="#1e293b" />
      <circle cx="114" cy="124" r="2" fill="#ffffff" />
      <circle cx="146" cy="124" r="2" fill="#ffffff" />
      <!-- Friendly Smile -->
      <path d="M 121 146 Q 128 152 135 146" stroke="#fef08a" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Wooden Staff -->
      <line x1="184" y1="60" x2="194" y2="210" stroke="#78350f" stroke-width="6" stroke-linecap="round" />
    `
  },
  {
    id: 'joseph',
    bg: ['#14b8a6', '#0f766e'],
    accent: '#ccfbf1',
    faceColor: '#fed7aa',
    innerEar: '#0f766e',
    accessory: '🌈',
    title: 'José',
    instrument: 'Túnica Colorida',
    svgArt: `
      <!-- Hair -->
      <path d="M 82 125 C 82 80 174 80 174 125 Z" fill="#451a03" />
      <!-- Face -->
      <ellipse cx="128" cy="134" rx="44" ry="46" fill="#fed7aa" />
      <!-- Eyes -->
      <circle cx="112" cy="128" r="5.5" fill="#1e293b" />
      <circle cx="144" cy="128" r="5.5" fill="#1e293b" />
      <circle cx="114" cy="126" r="2" fill="#ffffff" />
      <circle cx="146" cy="126" r="2" fill="#ffffff" />
      <!-- Cheeks -->
      <circle cx="102" cy="140" r="6" fill="#fda4af" opacity="0.6" />
      <circle cx="154" cy="140" r="6" fill="#fda4af" opacity="0.6" />
      <!-- Smile -->
      <path d="M 121 148 Q 128 156 135 148" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Coat of Many Colors Striped Collar -->
      <g transform="translate(68, 172)">
        <rect x="0" y="0" width="24" height="40" fill="#f43f5e" />
        <rect x="24" y="0" width="24" height="40" fill="#3b82f6" />
        <rect x="48" y="0" width="24" height="40" fill="#eab308" />
        <rect x="72" y="0" width="24" height="40" fill="#10b981" />
        <rect x="96" y="0" width="24" height="40" fill="#a855f7" />
      </g>
    `
  },
  {
    id: 'noah',
    bg: ['#10b981', '#047857'],
    accent: '#d1fae5',
    faceColor: '#fed7aa',
    innerEar: '#047857',
    accessory: '🕊️',
    title: 'Noé',
    instrument: 'Amigo dos Animais',
    svgArt: `
      <!-- Hair & Beard -->
      <ellipse cx="128" cy="118" rx="48" ry="40" fill="#64748b" />
      <ellipse cx="128" cy="136" rx="44" ry="46" fill="#fed7aa" />
      <path d="M 88 140 C 90 195 166 195 168 140 Z" fill="#e2e8f0" />
      <!-- Eyes -->
      <circle cx="112" cy="128" r="5.5" fill="#1e293b" />
      <circle cx="144" cy="128" r="5.5" fill="#1e293b" />
      <circle cx="114" cy="126" r="2" fill="#ffffff" />
      <circle cx="146" cy="126" r="2" fill="#ffffff" />
      <!-- Smile -->
      <path d="M 121 146 Q 128 153 135 146" stroke="#475569" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Dove on Shoulder -->
      <g transform="translate(150, 95) scale(0.65)">
        <ellipse cx="40" cy="40" rx="16" ry="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="34" r="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="53" cy="32" r="1.5" fill="#000" />
        <polygon points="58,34 64,36 58,38" fill="#f59e0b" />
        <!-- Olive leaf -->
        <ellipse cx="68" cy="36" rx="6" ry="3" fill="#22c55e" />
      </g>
    `
  },
  {
    id: 'abraham',
    bg: ['#4f46e5', '#3730a3'],
    accent: '#e0e7ff',
    faceColor: '#fed7aa',
    innerEar: '#3730a3',
    accessory: '⭐',
    title: 'Abraão',
    instrument: 'Fé e Estrelas',
    svgArt: `
      <!-- Hair & Beard -->
      <ellipse cx="128" cy="116" rx="48" ry="42" fill="#cbd5e1" />
      <ellipse cx="128" cy="136" rx="44" ry="46" fill="#fed7aa" />
      <path d="M 86 142 C 88 198 168 198 170 142 Z" fill="#f1f5f9" />
      <!-- Eyes -->
      <circle cx="112" cy="128" r="5.5" fill="#1e293b" />
      <circle cx="144" cy="128" r="5.5" fill="#1e293b" />
      <circle cx="114" cy="126" r="2" fill="#ffffff" />
      <circle cx="146" cy="126" r="2" fill="#ffffff" />
      <!-- Smile -->
      <path d="M 121 146 Q 128 153 135 146" stroke="#475569" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <!-- Shining Star above -->
      <g transform="translate(116, 44) scale(0.65)">
        <polygon points="20,0 26,14 40,14 28,24 33,38 20,28 7,38 12,24 0,14 14,14" fill="#facc15" stroke="#eab308" stroke-width="1.5" />
      </g>
    `
  }
];

characters.forEach(c => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <defs>
    <radialGradient id="bg_${c.id}" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="${c.bg[0]}" />
      <stop offset="100%" stop-color="${c.bg[1]}" />
    </radialGradient>
    <filter id="shadow_${c.id}" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>
  <!-- Background circle with smooth 3D gradient -->
  <rect width="256" height="256" rx="64" fill="url(#bg_${c.id})" />
  <circle cx="128" cy="128" r="105" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="6" />
  
  <!-- Floating musical note decoration -->
  <text x="32" y="58" font-size="28" opacity="0.3" fill="#ffffff">🎵</text>
  <text x="202" y="68" font-size="24" opacity="0.3" fill="#ffffff">🎶</text>

  <!-- Main 3D Character Art -->
  <g filter="url(#shadow_${c.id})">
    ${c.svgArt}
  </g>
</svg>`;

  fs.writeFileSync(path.join(targetDir, `avatar_${c.id}.svg`), svg, 'utf-8');
  console.log(`Generated avatar_${c.id}.svg`);
});
