import { Question } from '../types';

export const questionsPart3: Question[] = [
  {
    id: 51,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual nota fica no 2º ESPAÇO?',
        options: ['Lá', 'Mi', 'Dó', 'Sol'],
        explanation: 'O 2º espaço da Clave de Fá na 4ª linha é a nota Dó.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle note occupe le 2e ESPACE?',
        options: ['La', 'Mi', 'Do', 'Sol'],
        explanation: 'Le 2e espace en clef de Fa est le Do.'
      },
      'en-CA': {
        question: 'In Bass Clef (4th line), which note is in the 2nd SPACE?',
        options: ['La (A)', 'Mi (E)', 'Do (C)', 'Sol (G)'],
        explanation: 'The 2nd space in Bass Clef is Do (C).'
      }
    }
  },
  {
    id: 52,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual nota fica no 3º ESPAÇO?',
        options: ['Lá', 'Dó', 'Sol', 'Mi'],
        explanation: 'O 3º espaço da Clave de Fá corresponde à nota Mi.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle note est dans le 3e ESPACE?',
        options: ['La', 'Do', 'Sol', 'Mi'],
        explanation: 'Le 3e espace en clef de Fa est la note Mi.'
      },
      'en-CA': {
        question: 'In Bass Clef, which note is in the 3rd SPACE?',
        options: ['La (A)', 'Do (C)', 'Sol (G)', 'Mi (E)'],
        explanation: 'The 3rd space in Bass Clef is Mi (E).'
      }
    }
  },
  {
    id: 53,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual nota fica no 4º ESPAÇO?',
        options: ['Sol', 'Mi', 'Dó', 'Lá'],
        explanation: 'O 4º e último espaço na Clave de Fá é a nota Sol.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle note se situe dans le 4e ESPACE?',
        options: ['Sol', 'Mi', 'Do', 'La'],
        explanation: 'Le 4e espace en clef de Fa est la note Sol.'
      },
      'en-CA': {
        question: 'In Bass Clef, which note is in the 4th SPACE?',
        options: ['Sol (G)', 'Mi (E)', 'Do (C)', 'La (A)'],
        explanation: 'The 4th space in Bass Clef is Sol (G).'
      }
    }
  },
  {
    id: 54,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Onde fica localizado o Dó Central na Clave de Fá na 4ª linha?',
        options: ['Na 1ª linha suplementar inferior', 'Na 1ª linha suplementar superior', 'No 2º espaço da pauta', 'Na 3ª linha da pauta'],
        explanation: 'Na Clave de Fá, o Dó Central situa-se na 1ª linha suplementar superior (acima da pauta).'
      },
      'fr-CA': {
        question: 'Où se situe le Do Central en Clef de Fa sur la 4e ligne?',
        options: ['Sur la 1re ligne supplémentaire inférieure', 'Sur la 1re ligne supplémentaire supérieure', 'Dans le 2e espace', 'Sur la 3e ligne'],
        explanation: 'En clef de Fa, le Do Central est sur la 1re ligne supplémentaire supérieure.'
      },
      'en-CA': {
        question: 'Where is Middle C (Dó Central) located in Bass Clef (4th line)?',
        options: ['On the 1st lower ledger line', 'On the 1st upper ledger line', 'In the 2nd space', 'On the 3rd line'],
        explanation: 'In Bass Clef, Middle C is located on the 1st upper ledger line.'
      }
    }
  },
  {
    id: 55,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Qual é o ponto comum que une o sistema da Clave de Sol e da Clave de Fá no piano e no órgão?',
        options: ['A nota Fá da 4ª linha', 'A nota Sol da 2ª linha', 'O Dó Central (Dó3)', 'A nota Lá do diapasão'],
        explanation: 'O Dó Central fica exatamente entre as duas claves (1ª linha suplementar inferior na Clave de Sol e 1ª linha suplementar superior na Clave de Fá).'
      },
      'fr-CA': {
        question: 'Quel point de repère unit le système de la Clef de Sol et de la Clef de Fa?',
        options: ['La note Fa', 'La note Sol', 'Le Do Central (Do 3)', 'Le La du diapason'],
        explanation: 'Le Do Central se situe précisément entre les deux portées.'
      },
      'en-CA': {
        question: 'What central reference connects the Treble Clef and Bass Clef systems together?',
        options: ['Note Fa on line 4', 'Note Sol on line 2', 'Middle C (Dó Central / C4)', 'Tuning fork A'],
        explanation: 'Middle C links the two staves: 1st line below Treble and 1st line above Bass.'
      }
    }
  },
  {
    id: 56,
    category: 'propriedades_do_som',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Quando um cantor canta a mesma nota com volume suave e depois bem forte, qual propriedade variou?',
        options: ['O Timbre', 'A Altura', 'A Afinação', 'A Intensidade'],
        explanation: 'Variar entre som suave (fraco) e som forte é uma mudança na propriedade Intensidade.'
      },
      'fr-CA': {
        question: 'Si un chanteur chante la même note doucement puis très fort, quelle propriété a changé?',
        options: ['Le Timbre', 'La Hauteur', 'L’Accord', 'L’Intensité'],
        explanation: 'Passer du doux au fort relève de la propriété d’Intensité sonore.'
      },
      'en-CA': {
        question: 'When a singer sings the same pitch quietly then very loudly, which property changed?',
        options: ['Timbre', 'Pitch', 'Tuning', 'Intensity'],
        explanation: 'Changing from soft (piano) to loud (forte) is a change in sound Intensity.'
      }
    }
  },
  {
    id: 57,
    category: 'propriedades_do_som',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Se tocamos a nota Dó no violino e a mesma nota Dó no clarinete, qual propriedade nos faz distingui-los?',
        options: ['Timbre', 'Intensidade', 'Duração', 'Volume'],
        explanation: 'Mesmo tocando a mesma nota na mesma intensidade, o timbre característico de cada instrumento permite reconhecê-los.'
      },
      'fr-CA': {
        question: 'Si l’on joue un Do au violon puis à la clarinette, quelle propriété permet de les distinguer?',
        options: ['Le Timbre', 'L’Intensité', 'La Durée', 'Le Volume'],
        explanation: 'Le timbre propre à chaque instrument permet de les distinguer.'
      },
      'en-CA': {
        question: 'If Middle C is played on a violin and on a clarinet, which property distinguishes them?',
        options: ['Timbre', 'Intensity', 'Duration', 'Volume'],
        explanation: 'The unique timbre of each instrument allows our ears to distinguish them.'
      }
    }
  },
  {
    id: 58,
    category: 'propriedades_do_som',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'O som da voz de uma criança é geralmente agudo e a voz de um adulto homem é grave. Isso se refere à:',
        options: ['Duração', 'Altura', 'Intensidade', 'Velocidade'],
        explanation: 'A distinção entre sons graves e agudos é a propriedade Altura.'
      },
      'fr-CA': {
        question: 'La voix aiguë d’un enfant comparée à la voix grave d’un homme illustre :',
        options: ['La Durée', 'La Hauteur', 'L’Intensité', 'La Vitesse'],
        explanation: 'La différence entre grave et aigu relève de la Hauteur.'
      },
      'en-CA': {
        question: 'A child high-pitched voice compared to an adult male deep voice illustrates which property?',
        options: ['Duration', 'Pitch (Height)', 'Intensity', 'Speed'],
        explanation: 'The distinction between high and low sounds is the property of Pitch (Altura).'
      }
    }
  },
  {
    id: 59,
    category: 'propriedades_do_som',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Um toque curto de buzina comparado a uma nota longa sustentada no órgão exemplifica qual propriedade?',
        options: ['Altura', 'Intensidade', 'Duração', 'Timbre'],
        explanation: 'Sons curtos ou sustentados por longo tempo exemplificam a propriedade Duração.'
      },
      'fr-CA': {
        question: 'Un coup de klaxon bref comparé à une longue note d’orgue illustre :',
        options: ['La Hauteur', 'L’Intensité', 'La Durée', 'Le Timbre'],
        explanation: 'La différence entre son court et long est la Durée.'
      },
      'en-CA': {
        question: 'A quick short horn tap compared to a long organ chord illustrates:',
        options: ['Pitch', 'Intensity', 'Duration', 'Timbre'],
        explanation: 'Differences between short and sustained sounds demonstrate Duration.'
      }
    }
  },
  {
    id: 60,
    category: 'musica_e_som',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Uma batida de martelo em uma chapa de ferro produz um som com vibrações irregulares. Esse som é um:',
        options: ['Som harmônico', 'Acorde perfeito', 'Som musical', 'Ruído (som não musical)'],
        explanation: 'Sons produzidos por vibrações irregulares são ruídos (sons não musicais).'
      },
      'fr-CA': {
        question: 'Un coup de marteau sur une tôle produit des vibrations irrégulières. C’est un :',
        options: ['Son harmonique', 'Accord parfait', 'Son musical', 'Bruit (son non musical)'],
        explanation: 'Des vibrations irrégulières constituent un bruit.'
      },
      'en-CA': {
        question: 'A hammer blow on a metal sheet produces irregular vibrations. This is a:',
        options: ['Harmonic sound', 'Perfect chord', 'Musical sound', 'Noise (non-musical sound)'],
        explanation: 'Sounds with irregular vibrations are classified as noise.'
      }
    }
  },
  {
    id: 61,
    category: 'elementos_da_musica',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Quando tocamos um acorde no piano com três teclas ao mesmo tempo, estamos produzindo:',
        options: ['Harmonia', 'Apenas melodia', 'Ruído', 'Silêncio'],
        explanation: 'Sons emitidos simultaneamente formam Harmonia.'
      },
      'fr-CA': {
        question: 'Jouer un accord de trois touches en même temps au piano produit :',
        options: ['De l’Harmonie', 'Seulement une mélodie', 'Du bruit', 'Du silence'],
        explanation: 'L’émission simultanée de sons constitue l’harmonie.'
      },
      'en-CA': {
        question: 'When 3 piano keys are pressed down together at the same time, we produce:',
        options: ['Harmony', 'Only melody', 'Noise', 'Silence'],
        explanation: 'Sounds sounded simultaneously create Harmony.'
      }
    }
  },
  {
    id: 62,
    category: 'elementos_da_musica',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Uma pessoa assobiando uma canção nota por nota, uma de cada vez, está produzindo:',
        options: ['Harmonia', 'Melodia', 'Ruído desordenado', 'Compasso composto'],
        explanation: 'A sucessão de notas uma após a outra forma a Melodia.'
      },
      'fr-CA': {
        question: 'Une personne qui siffle une chanson note après note produit :',
        options: ['De l’harmonie', 'Une mélodie', 'Un bruit désordonné', 'Une mesure composée'],
        explanation: 'La suite de notes successives forme la mélodie.'
      },
      'en-CA': {
        question: 'Someone whistling a tune note by note, one after another, is creating a:',
        options: ['Harmony', 'Melody', 'Disordered noise', 'Compound meter'],
        explanation: 'A succession of single notes one after another forms a Melody.'
      }
    }
  },
  {
    id: 63,
    category: 'elementos_da_musica',
    difficulty: 'medio',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'O bater regular de palmas marcando o tempo da música representa qual elemento musical?',
        options: ['Melodia', 'Harmonia', 'Ritmo', 'Timbre'],
        explanation: 'A pulsação e divisão do tempo representam o Ritmo.'
      },
      'fr-CA': {
        question: 'Battre des mains en cadence pour marquer la pulsation représente :',
        options: ['La Mélodie', 'L’Harmonie', 'Le Rythme', 'Le Timbre'],
        explanation: 'Marquer la pulsation du temps relève du Rythme.'
      },
      'en-CA': {
        question: 'Rhythmic clapping marking the pulse of the song represents which element?',
        options: ['Melody', 'Harmony', 'Rhythm', 'Timbre'],
        explanation: 'The regular marking of time and pulse embodies Rhythm.'
      }
    }
  },
  {
    id: 64,
    category: 'notas_musicais',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Qual é a nota que fica entre Fá e Lá na ordem natural das notas?',
        options: ['Ré', 'Mi', 'Si', 'Sol'],
        explanation: 'Na sequência Dó, Ré, Mi, Fá, Sol, Lá, Si, a nota situada entre Fá e Lá é o Sol.'
      },
      'fr-CA': {
        question: 'Quelle note se trouve entre le Fa et le La dans l’ordre naturel?',
        options: ['Ré', 'Mi', 'Si', 'Sol'],
        explanation: 'Entre le Fa et le La se trouve le Sol.'
      },
      'en-CA': {
        question: 'Which note sits between Fa (F) and La (A) in the natural sequence?',
        options: ['Re (D)', 'Mi (E)', 'Si (B)', 'Sol (G)'],
        explanation: 'In the sequence Do-Re-Mi-Fa-Sol-La-Si, Sol is between Fa and La.'
      }
    }
  },
  {
    id: 65,
    category: 'notas_musicais',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Qual é a nota que fica entre Ré e Fá na ordem natural das notas?',
        options: ['Mi', 'Dó', 'Sol', 'Lá'],
        explanation: 'Entre as notas Ré e Fá encontra-se a nota Mi.'
      },
      'fr-CA': {
        question: 'Quelle note se situe entre le Ré et le Fa?',
        options: ['Mi', 'Do', 'Sol', 'La'],
        explanation: 'Entre le Ré et le Fa se trouve la note Mi.'
      },
      'en-CA': {
        question: 'Which note sits between Re (D) and Fa (F)?',
        options: ['Mi (E)', 'Do (C)', 'Sol (G)', 'La (A)'],
        explanation: 'Between Re and Fa is the note Mi (E).'
      }
    }
  },
  {
    id: 66,
    category: 'notas_musicais',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Se cantarmos a nota Si e quisermos a próxima nota mais aguda da escala, qual cantaremos?',
        options: ['Lá', 'Dó', 'Sol', 'Fá'],
        explanation: 'Após o Si, o ciclo das 7 notas recomeça na nota Dó em uma oitava mais aguda.'
      },
      'fr-CA': {
        question: 'Après le Si, en continuant vers l’aigu, quelle note vient ensuite?',
        options: ['La', 'Do', 'Sol', 'Fa'],
        explanation: 'Après le Si, le cycle des sept notes recommence par le Do.'
      },
      'en-CA': {
        question: 'Singing upwards past Si (B), which note comes next in the scale?',
        options: ['La (A)', 'Do (C)', 'Sol (G)', 'Fa (F)'],
        explanation: 'Above Si (B), the 7-note cycle repeats with Do (C).'
      }
    }
  },
  {
    id: 67,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Se uma nota está na 2ª linha (Sol na Clave de Sol), a nota no 2º espaço imediatamente acima é:',
        options: ['Fá', 'Si', 'Lá', 'Dó'],
        explanation: 'A nota na 2ª linha é Sol; o espaço imediatamente acima (2º espaço) é a nota Lá.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, si une note est sur la 2e ligne (Sol), celle dans le 2e espace juste au-dessus est :',
        options: ['Fa', 'Si', 'La', 'Do'],
        explanation: 'Sur la 2e ligne se trouve le Sol, et dans le 2e espace juste au-dessus se trouve le La.'
      },
      'en-CA': {
        question: 'In Treble Clef, if a note is on the 2nd line (Sol), the note in the 2nd space right above is:',
        options: ['Fa (F)', 'Si (B)', 'La (A)', 'Do (C)'],
        explanation: 'The 2nd line is Sol (G); the 2nd space immediately above is La (A).'
      }
    }
  },
  {
    id: 68,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, se uma nota está no 2º espaço (Lá), a nota na 3ª linha imediatamente acima é:',
        options: ['Dó', 'Sol', 'Fá', 'Si'],
        explanation: 'Do 2º espaço (Lá), a linha seguinte superior (3ª linha) é a nota Si.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, au-dessus du 2e espace (La), la 3e ligne correspond à :',
        options: ['Do', 'Sol', 'Fa', 'Si'],
        explanation: 'Du 2e espace (La), la ligne suivante au-dessus est le Si.'
      },
      'en-CA': {
        question: 'In Treble Clef, directly above the 2nd space (La), which note is on the 3rd line?',
        options: ['Do (C)', 'Sol (G)', 'Fa (F)', 'Si (B)'],
        explanation: 'Above the 2nd space (La/A), the 3rd line is Si (B).'
      }
    }
  },
  {
    id: 69,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual é a nota na 3ª linha e no 3º espaço, respectivamente?',
        options: ['Si e Dó', 'Sol e Lá', 'Mi e Fá', 'Ré e Mi'],
        explanation: 'Na Clave de Sol, a 3ª linha é Si e o 3º espaço é Dó.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelles sont les notes de la 3e ligne et du 3e espace?',
        options: ['Si et Do', 'Sol et La', 'Mi et Fa', 'Ré et Mi'],
        explanation: 'La 3e ligne est le Si et le 3e espace est le Do.'
      },
      'en-CA': {
        question: 'In Treble Clef, what are the notes on the 3rd line and in the 3rd space?',
        options: ['Si and Do (B and C)', 'Sol and La (G and A)', 'Mi and Fa (E and F)', 'Re and Mi (D and E)'],
        explanation: 'The 3rd line is Si (B) and the 3rd space is Do (C).'
      }
    }
  },
  {
    id: 70,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual é a nota na 4ª linha e no 4º espaço, respectivamente?',
        options: ['Si e Dó', 'Ré e Mi', 'Fá e Sol', 'Lá e Si'],
        explanation: 'Na Clave de Sol, a 4ª linha é Ré e o 4º espaço é Mi.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelles notes trouve-t-on sur la 4e ligne et dans le 4e espace?',
        options: ['Si et Do', 'Ré et Mi', 'Fa et Sol', 'La et Si'],
        explanation: 'La 4e ligne est Ré et le 4e espace est Mi.'
      },
      'en-CA': {
        question: 'In Treble Clef, what notes are on the 4th line and in the 4th space?',
        options: ['Si and Do', 'Re and Mi (D and E)', 'Fa and Sol', 'La and Si'],
        explanation: 'The 4th line is Re (D) and the 4th space is Mi (E).'
      }
    }
  },
  {
    id: 71,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual é a nota na 1ª linha e no 1º espaço, respectivamente?',
        options: ['Mi e Fá', 'Ré e Mi', 'Sol e Lá', 'Si e Dó'],
        explanation: 'Na Clave de Fá na 4ª linha, a 1ª linha é Sol e o 1º espaço é Lá.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelles sont la 1re ligne et le 1er espace?',
        options: ['Mi et Fa', 'Ré et Mi', 'Sol et La', 'Si et Do'],
        explanation: 'En clef de Fa, la 1re ligne est Sol et le 1er espace est La.'
      },
      'en-CA': {
        question: 'In Bass Clef (4th line), what are the 1st line and 1st space notes?',
        options: ['Mi and Fa', 'Re and Mi', 'Sol and La (G and A)', 'Si and Do'],
        explanation: 'In Bass Clef, the 1st line is Sol (G) and the 1st space is La (A).'
      }
    }
  },
  {
    id: 72,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual é a nota na 2ª linha e no 2º espaço, respectivamente?',
        options: ['Sol e Lá', 'Ré e Mi', 'Fá e Sol', 'Si e Dó'],
        explanation: 'Na Clave de Fá, a 2ª linha é Si e o 2º espaço é Dó.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelles sont la 2e ligne et le 2e espace?',
        options: ['Sol et La', 'Ré et Mi', 'Fa et Sol', 'Si et Do'],
        explanation: 'La 2e ligne est Si et le 2e espace est Do.'
      },
      'en-CA': {
        question: 'In Bass Clef, what are the notes on the 2nd line and 2nd space?',
        options: ['Sol and La', 'Re and Mi', 'Fa and Sol', 'Si and Do (B and C)'],
        explanation: 'The 2nd line in Bass Clef is Si (B) and the 2nd space is Do (C).'
      }
    }
  },
  {
    id: 73,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual é a nota na 3ª linha e no 3º espaço, respectivamente?',
        options: ['Ré e Mi', 'Si e Dó', 'Fá e Sol', 'Sol e Lá'],
        explanation: 'Na Clave de Fá, a 3ª linha é Ré e o 3º espaço é Mi.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelles sont la 3e ligne et le 3e espace?',
        options: ['Ré et Mi', 'Si et Do', 'Fa et Sol', 'Sol et La'],
        explanation: 'La 3e ligne est Ré et le 3e espace est Mi.'
      },
      'en-CA': {
        question: 'In Bass Clef, what are the notes on the 3rd line and 3rd space?',
        options: ['Re and Mi (D and E)', 'Si and Do', 'Fa and Sol', 'Sol and La'],
        explanation: 'The 3rd line in Bass Clef is Re (D) and the 3rd space is Mi (E).'
      }
    }
  },
  {
    id: 74,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual é a nota na 4ª linha e no 4º espaço, respectivamente?',
        options: ['Ré e Mi', 'Fá e Sol', 'Lá e Si', 'Dó e Ré'],
        explanation: 'A 4ª linha é Fá (linha de referência da clave) e o 4º espaço é Sol.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelles sont la 4e ligne et le 4e espace?',
        options: ['Ré et Mi', 'Fa et Sol', 'La et Si', 'Do et Ré'],
        explanation: 'La 4e ligne est Fa et le 4e espace est Sol.'
      },
      'en-CA': {
        question: 'In Bass Clef, what are the notes on the 4th line and in the 4th space?',
        options: ['Re and Mi', 'Fa and Sol (F and G)', 'La and Si', 'Do and Re'],
        explanation: 'The 4th line is Fa (reference line) and the 4th space is Sol (G).'
      }
    }
  },
  {
    id: 75,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual nota fica no espaço imediatamente acima da 5ª linha?',
        options: ['Sol', 'Fá', 'Si', 'Lá'],
        explanation: 'A 5ª linha na Clave de Fá é Lá; o espaço imediatamente acima dela é o Si.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle note repose juste au-dessus de la 5e ligne?',
        options: ['Sol', 'Fa', 'Si', 'La'],
        explanation: 'La 5e ligne est La; l’espace juste au-dessus est le Si.'
      },
      'en-CA': {
        question: 'In Bass Clef, which note sits directly above the 5th line?',
        options: ['Sol (G)', 'Fa (F)', 'Si (B)', 'La (A)'],
        explanation: 'The 5th line is La (A); the space sitting directly above it is Si (B).'
      }
    }
  }
];
