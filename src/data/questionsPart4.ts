import { Question } from '../types';

export const questionsPart4: Question[] = [
  {
    id: 76,
    category: 'claves',
    difficulty: 'dificil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Quantos pontinhos acompanham o desenho clássico da Clave de Fá e onde eles ficam?',
        options: ['1 ponto na 3ª linha', '3 pontos acima da pauta', 'Nenhum ponto', '2 pontos, um acima e outro abaixo da 4ª linha'],
        explanation: 'A Clave de Fá possui dois pontos que delimitam a 4ª linha, confirmando que sobre ela fica a nota Fá.'
      },
      'fr-CA': {
        question: 'Combien de points accompagnent la Clef de Fa et où sont-ils?',
        options: ['1 point sur la 3e ligne', '3 points en haut', 'Aucun point', '2 points, de part et d’autre de la 4e ligne'],
        explanation: 'Deux points encadrent la 4e ligne pour désigner l’emplacement du Fa.'
      },
      'en-CA': {
        question: 'How many dots accompany the Bass Clef and where are they located?',
        options: ['1 dot on the 3rd line', '3 dots above the staff', 'No dots at all', '2 dots, one above and one below the 4th line'],
        explanation: 'The Bass Clef has two dots surrounding the 4th line, designating the note Fa (F).'
      }
    }
  },
  {
    id: 77,
    category: 'claves',
    difficulty: 'dificil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Por que o Dó central tem esse nome "central"?',
        options: [
          'Porque fica no centro do teclado e entre as pautas da Clave de Sol e de Fá',
          'Porque é a nota mais rápida da música',
          'Porque é a única nota que existe na música',
          'Porque só pode ser tocado com o dedo médio'
        ],
        explanation: 'Chama-se Dó central porque fica aproximadamente no meio do teclado e no centro visual entre as claves de Sol e Fá.'
      },
      'fr-CA': {
        question: 'Pourquoi le Do central est-il appelé « central »?',
        options: [
          'Il se situe au milieu du clavier et entre les portées de Sol et de Fa',
          'C’est la note la plus rapide',
          'C’est la seule note de la musique',
          'Il ne se joue qu’avec le majeur'
        ],
        explanation: 'Il se trouve au centre du piano et fait la liaison entre les clés de Sol et de Fa.'
      },
      'en-CA': {
        question: 'Why is Middle C called "middle / central"?',
        options: [
          'It is in the middle of the keyboard and between the Treble and Bass staves',
          'Because it is the fastest note',
          'Because it is the only note in music',
          'Because it is only played with the middle finger'
        ],
        explanation: 'It is named Middle C because it sits near the center of the keyboard and midway between the two staves.'
      }
    }
  },
  {
    id: 78,
    category: 'musica_e_som',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'O canto de um hino entoado por toda a congregação reúne quais elementos da música?',
        options: ['Apenas ruído', 'Melodia, Harmonia e Ritmo', 'Apenas timbre sem notas', 'Apenas silêncio'],
        explanation: 'O canto congregacional harmonioso une Melodia (as vozes), Harmonia (a união dos sons) e Ritmo (o andamento).'
      },
      'fr-CA': {
        question: 'Le chant d’un cantique par l’assemblée réunit quels éléments?',
        options: ['Seulement du bruit', 'Mélodie, Harmonie et Rythme', 'Seulement du timbre', 'Du silence'],
        explanation: 'Le chant réunit à la fois la mélodie, l’harmonie et le rythme.'
      },
      'en-CA': {
        question: 'Singing a hymn congregational style combines which musical elements?',
        options: ['Only noise', 'Melody, Harmony, and Rhythm', 'Only timbre without pitches', 'Only silence'],
        explanation: 'Congregational singing combines Melody, Harmony, and Rhythm together.'
      }
    }
  },
  {
    id: 79,
    category: 'propriedades_do_som',
    difficulty: 'medio',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Se um som vibra com frequência alta (muitas vibrações por segundo), o som resultante é:',
        options: ['Grave', 'Muito fraco', 'Agudo', 'Inaudível'],
        explanation: 'Maior número de vibrações por segundo produz um som mais agudo (propriedade Altura).'
      },
      'fr-CA': {
        question: 'Si un son vibre à haute fréquence (nombreuses vibrations par seconde), le son sera :',
        options: ['Grave', 'Très faible', 'Aigu', 'Inaudible'],
        explanation: 'Une fréquence de vibration élevée donne un son aigu.'
      },
      'en-CA': {
        question: 'If a sound vibrates at a high frequency (many vibrations per second), the sound is:',
        options: ['Low/Grave', 'Very weak', 'High-pitched (acute)', 'Inaudible'],
        explanation: 'Higher frequency vibrations produce higher pitched sounds.'
      }
    }
  },
  {
    id: 80,
    category: 'propriedades_do_som',
    difficulty: 'medio',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Se um som vibra com menor frequência (poucas vibrações por segundo), o som resultante é:',
        options: ['Agudo', 'Forte', 'Curto', 'Grave'],
        explanation: 'Menor frequência de vibrações gera sons mais graves (grossos/baixos).'
      },
      'fr-CA': {
        question: 'Une vibration à fréquence plus basse produit un son :',
        options: ['Aigu', 'Fort', 'Court', 'Grave'],
        explanation: 'Une basse fréquence produit un son grave.'
      },
      'en-CA': {
        question: 'A sound vibrating at a lower frequency produces a sound that is:',
        options: ['High-pitched', 'Loud', 'Short', 'Low-pitched (grave)'],
        explanation: 'Lower frequencies create lower pitched sounds.'
      }
    }
  },
  {
    id: 81,
    category: 'notas_musicais',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Qual é o nome da nota que vem duas posições após o Dó na ordem ascendente?',
        options: ['Mi', 'Ré', 'Fá', 'Sol'],
        explanation: 'Dó -> Ré (1ª após) -> Mi (2ª após).'
      },
      'fr-CA': {
        question: 'Quelle note vient deux rangs après le Do en montant?',
        options: ['Mi', 'Ré', 'Fa', 'Sol'],
        explanation: 'Do -> Ré (1re) -> Mi (2e).'
      },
      'en-CA': {
        question: 'Which note is 2 steps above Do (C) in ascending order?',
        options: ['Mi (E)', 'Re (D)', 'Fa (F)', 'Sol (G)'],
        explanation: 'Do -> Re -> Mi.'
      }
    }
  },
  {
    id: 82,
    category: 'notas_musicais',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Qual é o nome da nota que vem duas posições após o Fá na ordem ascendente?',
        options: ['Sol', 'Lá', 'Si', 'Dó'],
        explanation: 'Fá -> Sol (1ª após) -> Lá (2ª após).'
      },
      'fr-CA': {
        question: 'Quelle note se trouve deux crans au-dessus du Fa?',
        options: ['Sol', 'La', 'Si', 'Do'],
        explanation: 'Fa -> Sol -> La.'
      },
      'en-CA': {
        question: 'Which note is 2 steps above Fa (F) in ascending order?',
        options: ['Sol (G)', 'La (A)', 'Si (B)', 'Do (C)'],
        explanation: 'Fa -> Sol -> La.'
      }
    }
  },
  {
    id: 83,
    category: 'notas_musicais',
    difficulty: 'medio',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Na ordem descendente das notas, qual nota vem duas posições abaixo de Si?',
        options: ['Lá', 'Fá', 'Sol', 'Mi'],
        explanation: 'Descendo a partir do Si: Si -> Lá (1ª abaixo) -> Sol (2ª abaixo).'
      },
      'fr-CA': {
        question: 'En descendant, quelle note se trouve deux crans sous le Si?',
        options: ['La', 'Fa', 'Sol', 'Mi'],
        explanation: 'En descendant : Si -> La -> Sol.'
      },
      'en-CA': {
        question: 'In descending order, which note is 2 steps below Si (B)?',
        options: ['La (A)', 'Fa (F)', 'Sol (G)', 'Mi (E)'],
        explanation: 'Descending from Si: Si -> La -> Sol.'
      }
    }
  },
  {
    id: 84,
    category: 'pentagrama_e_pauta',
    difficulty: 'dificil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual é o nome da sequência das 5 linhas, da 1ª para a 5ª?',
        options: [
          'Dó, Ré, Mi, Fá, Sol',
          'Fá, Lá, Dó, Mi, Sol',
          'Sol, Si, Ré, Fá, Lá',
          'Mi, Sol, Si, Ré, Fá'
        ],
        explanation: 'As cinco linhas da Clave de Sol são exatamente: Mi, Sol, Si, Ré, Fá.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle est la suite des 5 lignes (de la 1re à la 5e)?',
        options: [
          'Do, Ré, Mi, Fa, Sol',
          'Fa, La, Do, Mi, Sol',
          'Sol, Si, Ré, Fa, La',
          'Mi, Sol, Si, Ré, Fa'
        ],
        explanation: 'Les lignes sont : Mi, Sol, Si, Ré, Fa.'
      },
      'en-CA': {
        question: 'In Treble Clef, what is the sequence of the 5 lines from 1st to 5th?',
        options: [
          'Do, Re, Mi, Fa, Sol',
          'Fa, La, Do, Mi, Sol',
          'Sol, Si, Re, Fa, La',
          'Mi, Sol, Si, Re, Fa (E, G, B, D, F)'
        ],
        explanation: 'The 5 lines in Treble Clef are: Mi, Sol, Si, Re, Fa (E, G, B, D, F).'
      }
    }
  },
  {
    id: 85,
    category: 'pentagrama_e_pauta',
    difficulty: 'dificil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual é a sequência dos 4 espaços, do 1º ao 4º?',
        options: [
          'Fá, Lá, Dó, Mi',
          'Mi, Sol, Si, Ré',
          'Dó, Mi, Sol, Si',
          'Ré, Fá, Lá, Dó'
        ],
        explanation: 'Os 4 espaços da Clave de Sol formam exatamente a palavra musical: Fá, Lá, Dó, Mi.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle est la suite des 4 espaces (du 1er au 4e)?',
        options: [
          'Fa, La, Do, Mi',
          'Mi, Sol, Si, Ré',
          'Do, Mi, Sol, Si',
          'Ré, Fa, La, Do'
        ],
        explanation: 'Les 4 espaces sont : Fa, La, Do, Mi.'
      },
      'en-CA': {
        question: 'In Treble Clef, what is the sequence of the 4 spaces from 1st to 4th?',
        options: [
          'Fa, La, Do, Mi (F, A, C, E)',
          'Mi, Sol, Si, Re',
          'Do, Mi, Sol, Si',
          'Re, Fa, La, Do'
        ],
        explanation: 'The 4 spaces in Treble Clef spell: Fa, La, Do, Mi (F-A-C-E).'
      }
    }
  },
  {
    id: 86,
    category: 'claves',
    difficulty: 'dificil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual é a sequência das 5 linhas, da 1ª à 5ª?',
        options: [
          'Mi, Sol, Si, Ré, Fá',
          'Sol, Si, Ré, Fá, Lá',
          'Lá, Dó, Mi, Sol, Si',
          'Fá, Lá, Dó, Mi, Sol'
        ],
        explanation: 'As cinco linhas da Clave de Fá na 4ª linha são: Sol, Si, Ré, Fá, Lá.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle est la suite des 5 lignes?',
        options: [
          'Mi, Sol, Si, Ré, Fa',
          'Sol, Si, Ré, Fa, La',
          'La, Do, Mi, Sol, Si',
          'Fa, La, Do, Mi, Sol'
        ],
        explanation: 'Les 5 lignes de la clef de Fa sont : Sol, Si, Ré, Fa, La.'
      },
      'en-CA': {
        question: 'In Bass Clef, what is the sequence of the 5 lines from 1st to 5th?',
        options: [
          'Mi, Sol, Si, Re, Fa',
          'Sol, Si, Re, Fa, La (G, B, D, F, A)',
          'La, Do, Mi, Sol, Si',
          'Fa, La, Do, Mi, Sol'
        ],
        explanation: 'The 5 lines in Bass Clef are: Sol, Si, Re, Fa, La (G, B, D, F, A).'
      }
    }
  },
  {
    id: 87,
    category: 'claves',
    difficulty: 'dificil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual é a sequência dos 4 espaços, do 1º ao 4º?',
        options: [
          'Fá, Lá, Dó, Mi',
          'Mi, Sol, Si, Ré',
          'Lá, Dó, Mi, Sol',
          'Dó, Mi, Sol, Si'
        ],
        explanation: 'Os 4 espaços da Clave de Fá na 4ª linha são: Lá, Dó, Mi, Sol.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle est la suite des 4 espaces?',
        options: [
          'Fa, La, Do, Mi',
          'Mi, Sol, Si, Ré',
          'La, Do, Mi, Sol',
          'Do, Mi, Sol, Si'
        ],
        explanation: 'Les 4 espaces en clef de Fa sont : La, Do, Mi, Sol.'
      },
      'en-CA': {
        question: 'In Bass Clef, what is the sequence of the 4 spaces from 1st to 4th?',
        options: [
          'Fa, La, Do, Mi',
          'Mi, Sol, Si, Re',
          'La, Do, Mi, Sol (A, C, E, G)',
          'Do, Mi, Sol, Si'
        ],
        explanation: 'The 4 spaces in Bass Clef are: La, Do, Mi, Sol (A, C, E, G).'
      }
    }
  },
  {
    id: 88,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Ao escrever notas musicais na pauta, as notas podem ser colocadas:',
        options: [
          'Somente fora da pauta',
          'Apenas na clave',
          'Apenas na 3ª linha',
          'Nas linhas e nos espaços (dentro e fora da pauta)'
        ],
        explanation: 'As notas são grafadas nas linhas e nos espaços da pauta, bem como nas linhas e espaços suplementares.'
      },
      'fr-CA': {
        question: 'Sur la portée, les notes musicales s’écrivent :',
        options: [
          'Seulement hors de la portée',
          'Uniquement sur la clef',
          'Uniquement sur la 3e ligne',
          'Sur les lignes et dans les espaces (à l’intérieur et à l’extérieur)'
        ],
        explanation: 'Les notes se placent sur les lignes et dans les espaces.'
      },
      'en-CA': {
        question: 'On the musical staff, musical notes can be positioned:',
        options: [
          'Only outside the staff',
          'Only on the clef symbol',
          'Only on the 3rd line',
          'On lines and in spaces (both inside and outside the staff)'
        ],
        explanation: 'Notes are written on lines and in spaces, including ledger lines.'
      }
    }
  },
  {
    id: 89,
    category: 'propriedades_do_som',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Qual das propriedades do som é representada graficamente pela posição mais alta ou mais baixa da nota na pauta?',
        options: ['Altura', 'Intensidade', 'Timbre', 'Velocidade'],
        explanation: 'Notas mais altas na pauta indicam sons mais agudos; notas mais baixas indicam sons mais graves (Altura).'
      },
      'fr-CA': {
        question: 'Quelle propriété du son est représentée par la position haute ou basse de la note sur la portée?',
        options: ['La Hauteur', 'L’Intensité', 'Le Timbre', 'La Vitesse'],
        explanation: 'La hauteur de la note sur la portée indique son registre aigu ou grave.'
      },
      'en-CA': {
        question: 'Which sound property is represented graphically by the higher or lower placement of a note on the staff?',
        options: ['Pitch (Altura)', 'Intensity', 'Timbre', 'Tempo'],
        explanation: 'A higher position on the staff indicates higher pitch (and vice versa).'
      }
    }
  },
  {
    id: 90,
    category: 'propriedades_do_som',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Qual propriedade nos impede de confundir o som de uma flauta com o de uma tuba, mesmo se tocarem com a mesma força?',
        options: ['Duração', 'Timbre', 'Intensidade', 'Andamento'],
        explanation: 'O Timbre é o que diferencia os instrumentos, mesmo tocando na mesma intensidade.'
      },
      'fr-CA': {
        question: 'Quelle propriété évite de confondre une flûte et un tuba joués au même volume?',
        options: ['La Durée', 'Le Timbre', 'L’Intensité', 'Le Tempo'],
        explanation: 'Le timbre permet d’identifier chaque instrument distinctement.'
      },
      'en-CA': {
        question: 'Which property prevents confusing a flute with a tuba, even if played at equal volume?',
        options: ['Duration', 'Timbre', 'Intensity', 'Tempo'],
        explanation: 'Timbre is the specific acoustic identity of each instrument.'
      }
    }
  },
  {
    id: 91,
    category: 'musica_e_som',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'O som da voz humana cantando uma melodia no culto é considerado um som:',
        options: ['Ruído aleatório', 'Apenas natural sem arte', 'Musical e produzido', 'Inaudível'],
        explanation: 'A voz humana cantando com altura definida e afinação produz som musical.'
      },
      'fr-CA': {
        question: 'La voix humaine chantant une mélodie est considérée comme :',
        options: ['Un bruit aléatoire', 'Un bruit sans art', 'Un son musical produit', 'Inaudible'],
        explanation: 'La voix humaine chantée avec justesse produit un son musical.'
      },
      'en-CA': {
        question: 'The human singing voice carrying a melody is considered a:',
        options: ['Random noise', 'Non-artistic noise', 'Musical sound (produced)', 'Inaudible noise'],
        explanation: 'The human voice singing definite pitches produces musical sounds.'
      }
    }
  },
  {
    id: 92,
    category: 'elementos_da_musica',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Se um trompete toca um solo sozinho, temos predominantemente:',
        options: ['Harmonia', 'Ruído', 'Apenas percussão', 'Melodia'],
        explanation: 'Um solo com notas sucessivas uma de cada vez constitui uma melodia.'
      },
      'fr-CA': {
        question: 'Si une trompette joue un solo seule, nous entendons principalement :',
        options: ['De l’harmonie', 'Du bruit', 'De la percussion seule', 'Une mélodie'],
        explanation: 'Un solo note après note constitue une mélodie.'
      },
      'en-CA': {
        question: 'If a trumpet plays a solo line alone, we are predominantly hearing:',
        options: ['Harmony', 'Noise', 'Only percussion', 'Melody'],
        explanation: 'A single instrument playing one note at a time creates a melody.'
      }
    }
  },
  {
    id: 93,
    category: 'elementos_da_musica',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Quando o coro canta com soprano, contralto, tenor e baixo ao mesmo tempo, temos:',
        options: ['Harmonia', 'Apenas ruído', 'Som monótono', 'Silêncio'],
        explanation: 'A sobreposição de vozes simultâneas forma harmonia musical.'
      },
      'fr-CA': {
        question: 'Lorsque le chœur chante à 4 voix en même temps, nous avons :',
        options: ['De l’harmonie', 'Du bruit', 'Un son monotone', 'Du silence'],
        explanation: 'L’union de voix simultanées produit de l’harmonie.'
      },
      'en-CA': {
        question: 'When a choir sings soprano, alto, tenor, and bass together, we have:',
        options: ['Harmony', 'Only noise', 'Monotone sound', 'Silence'],
        explanation: 'Multiple musical parts sounding together create Harmony.'
      }
    }
  },
  {
    id: 94,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'A 1ª linha da pauta é a linha que fica:',
        options: ['No topo da pauta', 'Na parte inferior (embaixo)', 'No meio da pauta', 'Fora da pauta'],
        explanation: 'A contagem das linhas é sempre de baixo para cima; portanto a 1ª linha é a inferior.'
      },
      'fr-CA': {
        question: 'La 1re ligne de la portée est celle qui se situe :',
        options: ['Tout en haut', 'Tout en bas (inférieure)', 'Au milieu', 'En dehors'],
        explanation: 'La 1re ligne est la ligne du bas, le comptage se faisant de bas en haut.'
      },
      'en-CA': {
        question: 'The 1st line of the staff is the line that is:',
        options: ['At the very top', 'At the very bottom', 'In the middle', 'Outside the staff'],
        explanation: 'Lines are counted from bottom to top, so the 1st line is at the bottom.'
      }
    }
  },
  {
    id: 95,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'O 1º espaço da pauta é o espaço que fica:',
        options: ['Entre a 4ª e 5ª linha', 'Acima da 5ª linha', 'Entre a 1ª e a 2ª linha', 'Abaixo da 1ª linha'],
        explanation: 'O 1º espaço fica compreendido entre a 1ª e a 2ª linha do pentagrama.'
      },
      'fr-CA': {
        question: 'Le 1er espace de la portée se trouve :',
        options: ['Entre la 4e et 5e ligne', 'Au-dessus de la 5e ligne', 'Entre la 1re et la 2e ligne', 'Sous la 1re ligne'],
        explanation: 'Le 1er interligne se situe entre la 1re et la 2e ligne.'
      },
      'en-CA': {
        question: 'The 1st space of the staff is located:',
        options: ['Between lines 4 and 5', 'Above line 5', 'Between the 1st and 2nd lines', 'Below the 1st line'],
        explanation: 'The 1st space sits between the 1st and 2nd lines.'
      }
    }
  },
  {
    id: 96,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'O 4º espaço da pauta é o espaço que fica:',
        options: ['Entre a 1ª e 2ª linha', 'Entre a 2ª e 3ª linha', 'Entre a 3ª e 4ª linha', 'Entre a 4ª e a 5ª linha'],
        explanation: 'O 4º espaço é o espaço superior compreendido entre a 4ª e a 5ª linha.'
      },
      'fr-CA': {
        question: 'Le 4e espace de la portée est situé :',
        options: ['Entre les 1re et 2e lignes', 'Entre les 2e et 3e lignes', 'Entre les 3e et 4e lignes', 'Entre les 4e et 5e lignes'],
        explanation: 'Le 4e espace se trouve entre la 4e et la 5e ligne.'
      },
      'en-CA': {
        question: 'The 4th space of the staff is located:',
        options: ['Between lines 1 and 2', 'Between lines 2 and 3', 'Between lines 3 and 4', 'Between lines 4 and 5'],
        explanation: 'The 4th space is situated between the 4th and 5th lines.'
      }
    }
  },
  {
    id: 97,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Qual é a nota da 2ª linha na Clave de Sol e a nota da 4ª linha na Clave de Fá, respectivamente?',
        options: ['Sol e Fá', 'Fá e Sol', 'Dó e Ré', 'Mi e Lá'],
        explanation: 'Na Clave de Sol a 2ª linha é Sol; na Clave de Fá a 4ª linha é Fá (as linhas de referência das claves!).'
      },
      'fr-CA': {
        question: 'Quelles sont la 2e ligne en Clé de Sol et la 4e ligne en Clé de Fa?',
        options: ['Sol et Fa', 'Fa et Sol', 'Do et Ré', 'Mi et La'],
        explanation: 'La 2e ligne en clé de Sol est Sol; la 4e ligne en clé de Fa est Fa.'
      },
      'en-CA': {
        question: 'What is the 2nd line note in Treble Clef and the 4th line note in Bass Clef?',
        options: ['Sol and Fa (G and F)', 'Fa and Sol', 'Do and Re', 'Mi and La'],
        explanation: 'The 2nd line in Treble is Sol (G) and the 4th line in Bass is Fa (F).'
      }
    }
  },
  {
    id: 98,
    category: 'notas_musicais',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Se tocarmos as notas Dó, Mi, Sol, Si, estamos tocando notas em sequência de:',
        options: ['Segundas (vizinhas)', 'Terças (uma linha sim, outra não)', 'Ruído', 'Mesma nota repetida'],
        explanation: 'Saltar uma nota (Dó pula Ré para Mi, Mi pula Fá para Sol) forma intervalos de terças, comum na leitura de linhas sucessivas.'
      },
      'fr-CA': {
        question: 'Jouer Do, Mi, Sol, Si correspond à un enchaînement par :',
        options: ['Secondes consécutives', 'Tierces (saut d’une note)', 'Bruit', 'Note répétée'],
        explanation: 'Ce sont des intervalles de tierces (une note sur deux).'
      },
      'en-CA': {
        question: 'Playing the notes Do, Mi, Sol, Si is a sequence of:',
        options: ['Seconds (steps)', 'Thirds (skips)', 'Noise', 'Repeated same pitch'],
        explanation: 'Skipping every other note produces intervals of thirds.'
      }
    }
  },
  {
    id: 99,
    category: 'musica_e_som',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Qual é o principal objetivo do estudo da Fase 1 do MSA?',
        options: [
          'Aprender a consertar instrumentos musicais',
          'Apenas decorar letras de poemas',
          'Compreender os fundamentos do som, elementos da música, notas, pauta e claves',
          'Construir um estúdio de gravação'
        ],
        explanation: 'A Fase 1 do MSA visa dar a base sólida: som, suas propriedades, elementos musicais, pentagrama e claves.'
      },
      'fr-CA': {
        question: 'Quel est l’objectif fondamental de la Phase 1 du MSA?',
        options: [
          'Réparer des instruments',
          'Apprendre des poèmes par cœur',
          'Comprendre les bases du son, de la musique, des notes, de la portée et des clefs',
          'Bâtir un studio d’enregistrement'
        ],
        explanation: 'La Phase 1 pose les fondations musicales : son, propriétés, éléments, portée et clefs.'
      },
      'en-CA': {
        question: 'What is the main goal of studying Phase 1 of the MSA method?',
        options: [
          'Learning to repair musical instruments',
          'Memorizing long poems',
          'Understanding fundamentals of sound, musical elements, notes, staff, and clefs',
          'Building a sound recording studio'
        ],
        explanation: 'MSA Phase 1 establishes the core foundation: sound, music elements, staff, notes, and clefs.'
      }
    }
  },
  {
    id: 100,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'O sinal da Fermata indica musicalmente:',
        options: [
          'Tocar a nota o mais rápido possível',
          'Silêncio absoluto para sempre',
          'Apagar a partitura',
          'A sustentação ou prolongamento do som além do seu valor normal'
        ],
        explanation: 'A fermata é o sinal colocado sobre ou sob uma nota indicando que seu som deve ser prolongado à vontade do regente ou intérprete!'
      },
      'fr-CA': {
        question: 'Le point d’orgue (fermata) indique en musique :',
        options: [
          'Jouer aussi vite que possible',
          'Un silence éternel',
          'Effacer la portée',
          'La prolongation de la note au-delà de sa durée normale'
        ],
        explanation: 'Le point d’orgue (fermata) prolonge le son selon l’expression de l’interprète.'
      },
      'en-CA': {
        question: 'The Fermata sign indicates in music:',
        options: [
          'Playing the note as fast as possible',
          'Total silence forever',
          'Erasing the score',
          'Holding or prolonging the note beyond its standard duration'
        ],
        explanation: 'A fermata indicates holding or sustaining the note longer than its written value!'
      }
    }
  }
];
