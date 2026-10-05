import { Question } from '../types';

export const questionsPart1: Question[] = [
  {
    id: 1,
    category: 'musica_e_som',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Segundo o MSA, o que é Música?',
        options: ['A arte dos sons', 'Apenas o som da natureza', 'Qualquer barulho forte', 'A escrita das letras'],
        explanation: 'O MSA define expressamente na Fase 1 que a Música é a arte dos sons.'
      },
      'fr-CA': {
        question: 'Selon la méthode MSA, qu’est-ce que la Musique?',
        options: ['L’art des sons', 'Seulement les bruits de la nature', 'Tout bruit puissant', 'L’écriture des lettres'],
        explanation: 'Le MSA définit dans sa Phase 1 que la Musique est l’art des sons.'
      },
      'en-CA': {
        question: 'According to MSA, what is Music?',
        options: ['The art of sounds', 'Only sounds from nature', 'Any loud noise', 'The writing of letters'],
        explanation: 'MSA Phase 1 expressly defines Music as the art of sounds.'
      }
    }
  },
  {
    id: 2,
    category: 'musica_e_som',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'O que é Som, conforme estudado no MSA?',
        options: ['Apenas aquilo que podemos ver', 'Tudo o que ouvimos', 'Apenas a voz humana cantando', 'Um instrumento desligado'],
        explanation: 'No MSA, som é tudo aquilo que impressiona o ouvido (tudo o que ouvimos).'
      },
      'fr-CA': {
        question: 'Qu’est-ce que le Son selon le MSA?',
        options: ['Ce que nous pouvons voir', 'Tout ce que nous entendons', 'Seulement la voix chantée', 'Un instrument éteint'],
        explanation: 'Dans le MSA, le son est tout ce que nos oreilles perçoivent (tout ce qu’on entend).'
      },
      'en-CA': {
        question: 'What is Sound according to the MSA method?',
        options: ['Only what we can see', 'Everything that we hear', 'Only the human singing voice', 'A turned-off instrument'],
        explanation: 'In MSA, sound is everything perceived by our hearing (everything we hear).'
      }
    }
  },
  {
    id: 3,
    category: 'musica_e_som',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Qual dos seguintes é um exemplo de som natural?',
        options: ['Buzina de carro', 'Violão elétrico', 'O canto dos pássaros', 'Motor de avião'],
        explanation: 'Os sons naturais são emitidos pela própria natureza, como o canto dos pássaros, o vento e a chuva.'
      },
      'fr-CA': {
        question: 'Lequel est un exemple de son naturel?',
        options: ['Un klaxon d’auto', 'Une guitare électrique', 'Le chant des oiseaux', 'Un moteur d’avion'],
        explanation: 'Les sons naturels sont émis par la nature, comme le chant des oiseaux ou le vent.'
      },
      'en-CA': {
        question: 'Which of the following is an example of a natural sound?',
        options: ['Car horn', 'Electric guitar', 'Birds singing', 'Airplane engine'],
        explanation: 'Natural sounds are produced by nature, such as bird songs, wind, and rain.'
      }
    }
  },
  {
    id: 4,
    category: 'musica_e_som',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Qual dos seguintes é um som produzido (artificial)?',
        options: ['O trovão', 'O barulho da chuva', 'O som do mar', 'O toque de um trompete'],
        explanation: 'Sons produzidos (ou artificiais) são gerados pela ação humana ou instrumentos criados pelo homem.'
      },
      'fr-CA': {
        question: 'Lequel est un son produit (artificiel)?',
        options: ['Le tonnerre', 'La pluie qui tombe', 'Le bruit des vagues', 'Le son d’une trompette'],
        explanation: 'Les sons produits (artificiels) sont créés par l’action humaine ou des instruments.'
      },
      'en-CA': {
        question: 'Which of the following is a man-made (artificial) sound?',
        options: ['Thunder', 'Rain falling', 'Ocean waves', 'Sound of a trumpet'],
        explanation: 'Man-made sounds are produced by human action or musical instruments.'
      }
    }
  },
  {
    id: 5,
    category: 'musica_e_som',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Como são caracterizados os sons musicais em relação às suas vibrações?',
        options: ['Possuem vibrações regulares', 'Possuem vibrações irregulares', 'Não possuem vibrações', 'Possuem vibrações caóticas'],
        explanation: 'Os sons musicais resultam de vibrações regulares e periódicas, permitindo identificar com precisão sua altura.'
      },
      'fr-CA': {
        question: 'Comment caractérise-t-on les sons musicaux?',
        options: ['Vibrations régulières', 'Vibrations irrégulières', 'Aucune vibration', 'Vibrations chaotiques'],
        explanation: 'Les sons musicaux proviennent de vibrations régulières, ce qui permet de définir une hauteur précise.'
      },
      'en-CA': {
        question: 'How are musical sounds characterized regarding their vibrations?',
        options: ['They have regular vibrations', 'They have irregular vibrations', 'They have no vibrations', 'They have chaotic vibrations'],
        explanation: 'Musical sounds are produced by regular vibrations, allowing precise pitch recognition.'
      }
    }
  },
  {
    id: 6,
    category: 'musica_e_som',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'O que caracteriza um ruído ou som não musical?',
        options: ['Vibrações perfeitamente afinadas', 'Vibrações irregulares', 'Vibrações que formam uma melodia', 'Vibrações suaves de um violino'],
        explanation: 'O ruído é produzido por vibrações irregulares, não permitindo afinação definida.'
      },
      'fr-CA': {
        question: 'Qu’est-ce qui caractérise un bruit ou son non musical?',
        options: ['Vibrations parfaitement accordées', 'Vibrations irrégulières', 'Vibrations créant une mélodie', 'Vibrations douces d’un violon'],
        explanation: 'Le bruit est engendré par des vibrations irrégulières ne donnant pas de hauteur musicale distincte.'
      },
      'en-CA': {
        question: 'What characterizes noise (non-musical sound)?',
        options: ['Perfect musical tune', 'Irregular vibrations', 'Vibrations that make a tune', 'Soft violin vibrations'],
        explanation: 'Noise is formed by irregular vibrations without a definite musical pitch.'
      }
    }
  },
  {
    id: 7,
    category: 'elementos_da_musica',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Quais são os 3 elementos fundamentais da música segundo o MSA?',
        options: ['Linhas, Espaços e Claves', 'Violino, Piano e Flauta', 'Melodia, Harmonia e Ritmo', 'Volume, Eco e Ruído'],
        explanation: 'O MSA estabelece que os três elementos essenciais da música são: Melodia, Harmonia e Ritmo.'
      },
      'fr-CA': {
        question: 'Quels sont les 3 éléments fondamentaux de la musique?',
        options: ['Lignes, Espaces et Clefs', 'Violon, Piano et Flûte', 'Mélodie, Harmonie et Rythme', 'Volume, Écho et Bruit'],
        explanation: 'Le MSA enseigne les 3 éléments essentiels : la Mélodie, l’Harmonie et le Rythme.'
      },
      'en-CA': {
        question: 'What are the 3 fundamental elements of music in MSA?',
        options: ['Lines, Spaces, and Clefs', 'Violin, Piano, and Flute', 'Melody, Harmony, and Rhythm', 'Volume, Echo, and Noise'],
        explanation: 'MSA states the 3 fundamental elements of music are Melody, Harmony, and Rhythm.'
      }
    }
  },
  {
    id: 8,
    category: 'elementos_da_musica',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'O que é a Melodia?',
        options: ['Sons ouvidos sucessivamente (um após o outro)', 'Sons ouvidos simultaneamente (ao mesmo tempo)', 'Apenas o barulho de palmas', 'A força com que tocamos'],
        explanation: 'Melodia é a emissão de sons sucessivos, isto é, ouvidos um após o outro.'
      },
      'fr-CA': {
        question: 'Qu’est-ce que la Mélodie?',
        options: ['Des sons émis successivement (l’un après l’autre)', 'Des sons émis simultanément (en même temps)', 'Des battements de mains seuls', 'La puissance du coup'],
        explanation: 'La mélodie est une suite de sons successifs entendus l’un après l’autre.'
      },
      'en-CA': {
        question: 'What is Melody?',
        options: ['Sounds heard successively (one after another)', 'Sounds heard simultaneously (at the same time)', 'Only clapping sounds', 'The volume of a note'],
        explanation: 'Melody consists of successive sounds heard one after another.'
      }
    }
  },
  {
    id: 9,
    category: 'elementos_da_musica',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'O que é a Harmonia?',
        options: ['Sons ouvidos um após o outro', 'Sons ouvidos simultaneamente (ao mesmo tempo)', 'O som emitido por um apito', 'A velocidade da música'],
        explanation: 'Harmonia é a produção de sons simultâneos, ou seja, ouvidos ao mesmo tempo.'
      },
      'fr-CA': {
        question: 'Qu’est-ce que l’Harmonie?',
        options: ['Des sons l’un après l’autre', 'Des sons émis simultanément (au même moment)', 'Le son d’un sifflet', 'La vitesse de la pièce'],
        explanation: 'L’harmonie correspond à des sons simultanés entendus au même moment.'
      },
      'en-CA': {
        question: 'What is Harmony?',
        options: ['Sounds played one after another', 'Sounds heard simultaneously (at the same time)', 'The sound of a whistle', 'The speed of music'],
        explanation: 'Harmony is the combination of sounds heard simultaneously.'
      }
    }
  },
  {
    id: 10,
    category: 'elementos_da_musica',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'O que é o Ritmo?',
        options: ['A altura das notas no pentagrama', 'O nome dos instrumentos de corda', 'A ordenação do tempo e duração dos sons', 'O volume máximo de um instrumento'],
        explanation: 'Ritmo é a organização e ordenação dos tempos e durações dos sons e pausas.'
      },
      'fr-CA': {
        question: 'Qu’est-ce que le Rythme?',
        options: ['La hauteur sur la portée', 'Le nom des instruments à cordes', 'L’agencement du temps et de la durée des sons', 'Le volume maximal'],
        explanation: 'Le rythme est l’organisation du temps et de la durée des sons.'
      },
      'en-CA': {
        question: 'What is Rhythm?',
        options: ['The pitch on the staff', 'The name of string instruments', 'The ordering of time and sound durations', 'The maximum volume'],
        explanation: 'Rhythm is the organization and flow of time and sound durations.'
      }
    }
  },
  {
    id: 11,
    category: 'propriedades_do_som',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Quantas e quais são as 4 propriedades do som no MSA?',
        options: ['Agudo, Médio, Grave e Eco', 'Melodia, Harmonia, Ritmo e Pausa', 'Sol, Ré, Mi e Fá', 'Timbre, Duração, Intensidade e Altura'],
        explanation: 'O som possui quatro propriedades essenciais: Timbre, Duração, Intensidade e Altura.'
      },
      'fr-CA': {
        question: 'Quelles sont les 4 propriétés du son selon le MSA?',
        options: ['Aigu, Moyen, Grave et Écho', 'Mélodie, Harmonie, Rythme et Silence', 'Sol, Ré, Mi et Fa', 'Timbre, Durée, Intensité et Hauteur'],
        explanation: 'Les quatre propriétés du son sont le Timbre, la Durée, l’Intensité et la Hauteur.'
      },
      'en-CA': {
        question: 'What are the 4 properties of sound in MSA?',
        options: ['High, Medium, Low, and Echo', 'Melody, Harmony, Rhythm, and Rest', 'G, D, E, and F', 'Timbre, Duration, Intensity, and Pitch'],
        explanation: 'The 4 essential properties of sound are Timbre, Duration, Intensity, and Pitch.'
      }
    }
  },
  {
    id: 12,
    category: 'propriedades_do_som',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Qual propriedade nos permite reconhecer a fonte sonora (diferenciar um piano de um violino)?',
        options: ['Timbre', 'Altura', 'Duração', 'Intensidade'],
        explanation: 'O Timbre é a "cor" ou identidade do som que nos permite saber quem ou o que o está emitindo.'
      },
      'fr-CA': {
        question: 'Quelle propriété permet de reconnaître la source sonore (distinguer un violon d’un piano)?',
        options: ['Le Timbre', 'La Hauteur', 'La Durée', 'L’Intensité'],
        explanation: 'Le timbre est la couleur propre du son qui révèle quel instrument ou voix le produit.'
      },
      'en-CA': {
        question: 'Which property allows us to identify the sound source (e.g. telling a piano apart from a violin)?',
        options: ['Timbre', 'Pitch', 'Duration', 'Intensity'],
        explanation: 'Timbre is the unique sound quality or color that identifies its source.'
      }
    }
  },
  {
    id: 13,
    category: 'propriedades_do_som',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'A propriedade que define se um som é curto ou longo é a:',
        options: ['Altura', 'Duração', 'Intensidade', 'Timbre'],
        explanation: 'A Duração é o tempo de emissão do som (se ele dura muito ou pouco tempo).'
      },
      'fr-CA': {
        question: 'La propriété qui détermine si un son est court ou long est :',
        options: ['La Hauteur', 'La Durée', 'L’Intensité', 'Le Timbre'],
        explanation: 'La Durée correspond au temps pendant lequel le son se prolonge.'
      },
      'en-CA': {
        question: 'The property determining whether a sound is short or long is:',
        options: ['Pitch', 'Duration', 'Intensity', 'Timbre'],
        explanation: 'Duration is the length of time that a sound continues.'
      }
    }
  },
  {
    id: 14,
    category: 'propriedades_do_som',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'A propriedade que classifica o som em GRAVE, MÉDIO ou AGUDO é a:',
        options: ['Intensidade', 'Duração', 'Altura', 'Timbre'],
        explanation: 'Altura é a frequência das vibrações, determinando se o som é grave (baixo) ou agudo (alto). Atenção: não confundir com volume!'
      },
      'fr-CA': {
        question: 'La propriété classant le son en GRAVE, MOYEN ou AIGU est :',
        options: ['L’Intensité', 'La Durée', 'La Hauteur', 'Le Timbre'],
        explanation: 'La Hauteur détermine si le son est grave ou aigu (à ne pas confondre avec le volume).'
      },
      'en-CA': {
        question: 'The property classifying sound into LOW (grave), MEDIUM, or HIGH (acute) is:',
        options: ['Intensity', 'Duration', 'Pitch (Height)', 'Timbre'],
        explanation: 'Pitch (Altura) determines how low or high a sound is. Do not confuse pitch with loudness!'
      }
    }
  },
  {
    id: 15,
    category: 'propriedades_do_som',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'A propriedade relacionada à força ou volume do som (FORTE ou FRACO) é a:',
        options: ['Altura', 'Timbre', 'Duração', 'Intensidade'],
        explanation: 'Intensidade é a força com que o som é emitido, tornando-o forte ou fraco.'
      },
      'fr-CA': {
        question: 'La propriété liée au volume sonore (FORT ou DOUX/FAIBLE) est :',
        options: ['La Hauteur', 'Le Timbre', 'La Durée', 'L’Intensité'],
        explanation: 'L’Intensité est la force de l’émission sonore, déterminant si elle est forte ou faible.'
      },
      'en-CA': {
        question: 'The property related to the volume or force of sound (LOUD/STRONG or SOFT/WEAK) is:',
        options: ['Pitch', 'Timbre', 'Duration', 'Intensity'],
        explanation: 'Intensity refers to sound loudness or power (strong/forte or weak/piano).'
      }
    }
  },
  {
    id: 16,
    category: 'notas_musicais',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Quantas são as notas musicais naturais?',
        options: ['7 notas', '5 notas', '10 notas', '12 notas'],
        explanation: 'As notas musicais naturais são sete: Dó, Ré, Mi, Fá, Sol, Lá e Si.'
      },
      'fr-CA': {
        question: 'Combien y a-t-il de notes de musique naturelles?',
        options: ['7 notes', '5 notes', '10 notes', '12 notes'],
        explanation: 'Il y a sept notes de musique naturelles : Do, Ré, Mi, Fa, Sol, La et Si.'
      },
      'en-CA': {
        question: 'How many natural musical notes are there?',
        options: ['7 notes', '5 notes', '10 notes', '12 notes'],
        explanation: 'There are seven natural notes: Do, Re, Mi, Fa, Sol, La, and Si (C, D, E, F, G, A, B).'
      }
    }
  },
  {
    id: 17,
    category: 'notas_musicais',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Qual é a ordem correta ascendente (do grave para o agudo) das 7 notas?',
        options: ['Dó, Mi, Sol, Si, Ré, Fá, Lá', 'Dó, Ré, Mi, Fá, Sol, Lá, Si', 'Si, Lá, Sol, Fá, Mi, Ré, Dó', 'Dó, Ré, Fá, Mi, Sol, Si, Lá'],
        explanation: 'A ordem natural e ascendente é: Dó, Ré, Mi, Fá, Sol, Lá, Si.'
      },
      'fr-CA': {
        question: 'Quel est l’ordre ascendant correct des 7 notes naturelles?',
        options: ['Do, Mi, Sol, Si, Ré, Fa, La', 'Do, Ré, Mi, Fa, Sol, La, Si', 'Si, La, Sol, Fa, Mi, Ré, Do', 'Do, Ré, Fa, Mi, Sol, Si, La'],
        explanation: 'L’ordre ascendant est : Do, Ré, Mi, Fa, Sol, La, Si.'
      },
      'en-CA': {
        question: 'What is the correct ascending order of the 7 natural notes?',
        options: ['Do, Mi, Sol, Si, Re, Fa, La', 'Do, Re, Mi, Fa, Sol, La, Si', 'Si, La, Sol, Fa, Mi, Re, Do', 'Do, Re, Fa, Mi, Sol, Si, La'],
        explanation: 'The natural ascending order is Do, Re, Mi, Fa, Sol, La, Si.'
      }
    }
  },
  {
    id: 18,
    category: 'notas_musicais',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Qual é a ordem descendente (do agudo para o grave) das notas a partir do Si?',
        options: ['Dó, Ré, Mi, Fá, Sol, Lá, Si', 'Si, Dó, Ré, Mi, Fá, Sol, Lá', 'Si, Lá, Sol, Fá, Mi, Ré, Dó', 'Lá, Si, Dó, Ré, Mi, Fá, Sol'],
        explanation: 'A ordem descendente direta é: Si, Lá, Sol, Fá, Mi, Ré, Dó.'
      },
      'fr-CA': {
        question: 'Quel est l’ordre descendant à partir du Si?',
        options: ['Do, Ré, Mi, Fa, Sol, La, Si', 'Si, Do, Ré, Mi, Fa, Sol, La', 'Si, La, Sol, Fa, Mi, Ré, Do', 'La, Si, Do, Ré, Mi, Fa, Sol'],
        explanation: 'L’ordre descendant est : Si, La, Sol, Fa, Mi, Ré, Do.'
      },
      'en-CA': {
        question: 'What is the descending order of notes starting from Si (B)?',
        options: ['Do, Re, Mi, Fa, Sol, La, Si', 'Si, Do, Re, Mi, Fa, Sol, La', 'Si, La, Sol, Fa, Mi, Re, Do', 'La, Si, Do, Re, Mi, Fa, Sol'],
        explanation: 'The descending order is Si, La, Sol, Fa, Mi, Re, Do.'
      }
    }
  },
  {
    id: 19,
    category: 'notas_musicais',
    difficulty: 'medio',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Qual nota vem imediatamente depois de Sol na ordem ascendente?',
        options: ['Fá', 'Mi', 'Si', 'Lá'],
        explanation: 'Na ordem ascendente (Dó, Ré, Mi, Fá, Sol, Lá, Si), após a nota Sol vem a nota Lá.'
      },
      'fr-CA': {
        question: 'Quelle note vient immédiatement après le Sol dans l’ordre ascendant?',
        options: ['Fa', 'Mi', 'Si', 'La'],
        explanation: 'Après le Sol, on trouve la note La dans l’ordre ascendant.'
      },
      'en-CA': {
        question: 'Which note comes immediately after Sol (G) in ascending order?',
        options: ['Fa', 'Mi', 'Si', 'La (A)'],
        explanation: 'In ascending order, Sol is immediately followed by La.'
      }
    }
  },
  {
    id: 20,
    category: 'notas_musicais',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Qual nota vem imediatamente antes de Mi na ordem descendente?',
        options: ['Fá', 'Ré', 'Dó', 'Sol'],
        explanation: 'Descendo a escala (Sol, Fá, Mi...), a nota imediatamente anterior ao Mi é o Fá.'
      },
      'fr-CA': {
        question: 'En descendant, quelle note précède immédiatement le Mi?',
        options: ['Fa', 'Ré', 'Do', 'Sol'],
        explanation: 'En ordre descendant (...Sol, Fa, Mi...), le Fa vient juste avant le Mi.'
      },
      'en-CA': {
        question: 'In descending order, which note comes immediately before Mi (E)?',
        options: ['Fa (F)', 'Re', 'Do', 'Sol'],
        explanation: 'Descending from above (...Sol, Fa, Mi), Fa precedes Mi.'
      }
    }
  },
  {
    id: 21,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'O Pentagrama (ou Pauta Musical) é formado por:',
        options: ['4 linhas e 5 espaços', '5 linhas e 4 espaços', '6 linhas e 5 espaços', '7 linhas e 6 espaços'],
        explanation: 'O Pentagrama é composto por exatamente 5 linhas paralelas e 4 espaços.'
      },
      'fr-CA': {
        question: 'La portée musicale est composée de :',
        options: ['4 lignes et 5 espaces', '5 lignes et 4 espaces', '6 lignes et 5 espaces', '7 lignes et 6 espaces'],
        explanation: 'La portée est formée d’exactement 5 lignes parallèles et 4 espaces.'
      },
      'en-CA': {
        question: 'The musical staff (pentagram) is composed of:',
        options: ['4 lines and 5 spaces', '5 lines and 4 spaces', '6 lines and 5 spaces', '7 lines and 6 spaces'],
        explanation: 'The musical staff has exactly 5 parallel horizontal lines and 4 spaces.'
      }
    }
  },
  {
    id: 22,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Como são contadas as linhas e os espaços da pauta musical?',
        options: ['De cima para baixo', 'Da direita para a esquerda', 'De baixo para cima', 'Do meio para as pontas'],
        explanation: 'Tanto as linhas quanto os espaços do pentagrama são contados sempre de baixo para cima.'
      },
      'fr-CA': {
        question: 'Comment compte-t-on les lignes et les espaces de la portée?',
        options: ['De haut en bas', 'De droite à gauche', 'De bas en haut', 'Du centre vers l’extérieur'],
        explanation: 'Les lignes et les espaces se comptent toujours de bas en haut.'
      },
      'en-CA': {
        question: 'How are the lines and spaces of the staff numbered?',
        options: ['From top to bottom', 'From right to left', 'From bottom to top', 'From the middle outward'],
        explanation: 'Lines and spaces of the staff are always counted from bottom to top.'
      }
    }
  },
  {
    id: 23,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Quando as 5 linhas e 4 espaços não são suficientes para escrever notas muito graves ou muito agudas, o que usamos?',
        options: ['Aumentamos o tamanho da letra', 'Mudamos a cor da tinta', 'Tocamos mais rápido', 'Linhas e espaços suplementares'],
        explanation: 'Usam-se linhas e espaços suplementares (superiores para notas agudas e inferiores para notas graves).'
      },
      'fr-CA': {
        question: 'Lorsque la portée ne suffit pas pour écrire des notes très aiguës ou très graves, on utilise :',
        options: ['Des lettres plus grosses', 'Une autre couleur', 'Un tempo plus rapide', 'Des lignes et espaces supplémentaires'],
        explanation: 'On utilise des lignes et espaces supplémentaires supérieurs ou inférieurs.'
      },
      'en-CA': {
        question: 'When the 5 lines and 4 spaces are not enough for very high or very low notes, we use:',
        options: ['Larger font size', 'Different ink color', 'Faster tempo', 'Ledger lines and spaces (supplementary)'],
        explanation: 'We use supplementary (ledger) lines and spaces above or below the staff.'
      }
    }
  },
  {
    id: 24,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'As linhas suplementares colocadas ACIMA da pauta são chamadas de:',
        options: ['Suplementares superiores', 'Suplementares inferiores', 'Linhas centrais', 'Linhas invisíveis'],
        explanation: 'Linhas situadas acima do pentagrama são as linhas suplementares superiores (para sons agudos).'
      },
      'fr-CA': {
        question: 'Les lignes supplémentaires placées AU-DESSUS de la portée sont nommées :',
        options: ['Supplémentaires supérieures', 'Supplémentaires inférieures', 'Lignes médianes', 'Lignes invisibles'],
        explanation: 'Elles sont appelées lignes supplémentaires supérieures pour les sons aigus.'
      },
      'en-CA': {
        question: 'Ledger lines placed ABOVE the staff are called:',
        options: ['Upper supplementary lines', 'Lower supplementary lines', 'Middle lines', 'Hidden lines'],
        explanation: 'Lines above the staff are upper supplementary lines, used for higher pitches.'
      }
    }
  },
  {
    id: 25,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'As linhas suplementares colocadas ABAIXO da pauta são chamadas de:',
        options: ['Suplementares superiores', 'Suplementares inferiores', 'Linhas de clave', 'Linhas de compasso'],
        explanation: 'Linhas situadas abaixo do pentagrama são as linhas suplementares inferiores (para sons graves).'
      },
      'fr-CA': {
        question: 'Les lignes supplémentaires placées EN DESSOUS de la portée sont nommées :',
        options: ['Supplémentaires supérieures', 'Supplémentaires inférieures', 'Lignes de clef', 'Barres de mesure'],
        explanation: 'Ce sont les lignes supplémentaires inférieures pour les notes graves.'
      },
      'en-CA': {
        question: 'Ledger lines placed BELOW the staff are called:',
        options: ['Upper supplementary lines', 'Lower supplementary lines', 'Clef lines', 'Bar lines'],
        explanation: 'Lines below the staff are lower supplementary lines, used for lower pitches.'
      }
    }
  }
];
