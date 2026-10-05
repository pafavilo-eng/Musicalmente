import { Question } from '../types';

export const questionsPart2: Question[] = [
  {
    id: 26,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Para que serve a Clave colocada no início da pauta?',
        options: ['Apenas para decorar a partitura', 'Para indicar a velocidade da música', 'Para dar nome e altura às notas', 'Para indicar o volume do som'],
        explanation: 'A Clave é o sinal gráfico que dá nome e determina a altura das notas escritas na pauta musical.'
      },
      'fr-CA': {
        question: 'À quoi sert la Clef au début de la portée?',
        options: ['À décorer la page', 'À donner la vitesse', 'À nommer et situer la hauteur des notes', 'À régler le volume'],
        explanation: 'La clef donne son nom et sa hauteur à chaque note sur la portée.'
      },
      'en-CA': {
        question: 'What is the purpose of the Clef placed at the start of the staff?',
        options: ['Merely to decorate the score', 'To set the speed of the song', 'To give name and pitch to the notes', 'To set the sound volume'],
        explanation: 'The Clef gives names and determines the pitches of the notes written on the staff.'
      }
    }
  },
  {
    id: 27,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Em qual linha do pentagrama é escrita a Clave de Sol (utilizada no Hinário e no MSA)?',
        options: ['Na 2ª linha', 'Na 1ª linha', 'Na 3ª linha', 'Na 4ª linha'],
        explanation: 'A Clave de Sol é escrita e assinada na 2ª linha da pauta musical.'
      },
      'fr-CA': {
        question: 'Sur quelle ligne est tracée la Clef de Sol?',
        options: ['Sur la 2e ligne', 'Sur la 1re ligne', 'Sur la 3e ligne', 'Sur la 4e ligne'],
        explanation: 'La clef de Sol s’écrit sur la deuxième ligne de la portée.'
      },
      'en-CA': {
        question: 'On which line of the staff is the Treble Clef (Clef of G/Sol) written?',
        options: ['On the 2nd line', 'On the 1st line', 'On the 3rd line', 'On the 4th line'],
        explanation: 'The Treble Clef (Clave de Sol) is drawn starting on the 2nd line of the staff.'
      }
    }
  },
  {
    id: 28,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual é o nome da nota que fica exatamente sobre a 2ª linha?',
        options: ['Dó', 'Sol', 'Mi', 'Fá'],
        explanation: 'Como a Clave de Sol é escrita na 2ª linha, a nota sobre essa linha chama-se Sol.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quel est le nom de la note sur la 2e ligne?',
        options: ['Do', 'Sol', 'Mi', 'Fa'],
        explanation: 'Puisque la clef de Sol est sur la 2e ligne, la note sur cette ligne est le Sol.'
      },
      'en-CA': {
        question: 'In the Treble Clef, what is the name of the note placed on the 2nd line?',
        options: ['Do (C)', 'Sol (G)', 'Mi (E)', 'Fa (F)'],
        explanation: 'Because the Treble Clef is rooted on the 2nd line, the note on that line is Sol (G).'
      }
    }
  },
  {
    id: 29,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Em qual linha é assinada a Clave de Fá mais comum estudada na Fase 1 do MSA?',
        options: ['Na 1ª linha', 'Na 2ª linha', 'Na 3ª linha', 'Na 4ª linha'],
        explanation: 'No MSA e no Hinário, a Clave de Fá é escrita na 4ª linha do pentagrama.'
      },
      'fr-CA': {
        question: 'Sur quelle ligne la Clef de Fa est-elle écrite dans le MSA?',
        options: ['Sur la 1re ligne', 'Sur la 2e ligne', 'Sur la 3e ligne', 'Sur la 4e ligne'],
        explanation: 'Dans le MSA, la clef de Fa est tracée sur la 4e ligne.'
      },
      'en-CA': {
        question: 'On which line is the Bass Clef (Clef of F/Fa) drawn in MSA Phase 1?',
        options: ['On the 1st line', 'On the 2nd line', 'On the 3rd line', 'On the 4th line'],
        explanation: 'In MSA Phase 1 and standard hymnbooks, the Bass Clef is written on the 4th line.'
      }
    }
  },
  {
    id: 30,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual é o nome da nota que fica na 4ª linha?',
        options: ['Fá', 'Dó', 'Sol', 'Ré'],
        explanation: 'A Clave de Fá dá o seu próprio nome à nota situada na 4ª linha: a nota Fá.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quel est le nom de la note sur la 4e ligne?',
        options: ['Fa', 'Do', 'Sol', 'Ré'],
        explanation: 'La clef de Fa donne son nom à la note de la 4e ligne : le Fa.'
      },
      'en-CA': {
        question: 'In the Bass Clef on the 4th line, what note is on the 4th line?',
        options: ['Fa (F)', 'Do (C)', 'Sol (G)', 'Re (D)'],
        explanation: 'The Bass Clef gives its name to the note situated on the 4th line: Fa (F).'
      }
    }
  },
  {
    id: 31,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'A Clave de Sol é normalmente utilizada para a escrita de sons:',
        options: ['Muito graves', 'Apenas percussão sem afinação', 'Agudos e médios', 'Silenciosos'],
        explanation: 'A Clave de Sol é indicada para instrumentos agudos (como violino, flauta, clarinete, soprano).'
      },
      'fr-CA': {
        question: 'La Clef de Sol est principalement utilisée pour les registres :',
        options: ['Très graves', 'Percussions seules', 'Aigus et médiums', 'Silencieux'],
        explanation: 'La clef de Sol sert aux instruments aigus comme le violon, la flûte ou les voix de soprano.'
      },
      'en-CA': {
        question: 'The Treble Clef is typically used for recording pitches that are:',
        options: ['Very low and heavy', 'Untuned percussion only', 'High and medium pitches', 'Silent notes'],
        explanation: 'The Treble Clef is used for higher-pitched instruments such as violin, flute, and soprano voices.'
      }
    }
  },
  {
    id: 32,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'A Clave de Fá é indicada principalmente para instrumentos com registro:',
        options: ['Muito agudo como o flautim', 'Grave (como violoncelo, tuba, trombone e baixo)', 'Sem som audível', 'Apenas para triângulo'],
        explanation: 'A Clave de Fá é adotada para vozes e instrumentos de tessitura grave.'
      },
      'fr-CA': {
        question: 'La Clef de Fa est destinée aux instruments :',
        options: ['Très aigus', 'Graves (violoncelle, tuba, basse)', 'Inaudibles', 'Pour triangle uniquement'],
        explanation: 'La clef de Fa est dédiée aux registres graves comme le violoncelle ou le trombone.'
      },
      'en-CA': {
        question: 'The Bass Clef is primarily used for instruments in which register?',
        options: ['Ultra high like the piccolo', 'Low / bass register (cello, tuba, trombone, bass)', 'Inaudible sounds', 'Only triangle'],
        explanation: 'The Bass Clef is used for lower-pitched instruments like cello, tuba, bass, and tenor/bass voices.'
      }
    }
  },
  {
    id: 33,
    category: 'claves',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'No MSA Fase 1, a Clave de Dó utilizada para a viola é escrita em qual linha?',
        options: ['Na 3ª linha', 'Na 1ª linha', 'Na 5ª linha', 'No 2º espaço'],
        explanation: 'A Clave de Dó utilizada principalmente para a viola de arco é assinada na 3ª linha.'
      },
      'fr-CA': {
        question: 'Dans le MSA, sur quelle ligne la Clef d’Ut (Do) de l’alto est-elle notée?',
        options: ['Sur la 3e ligne', 'Sur la 1re ligne', 'Sur la 5e ligne', 'Dans le 2e espace'],
        explanation: 'La clef d’Ut sur la 3e ligne est traditionnellement utilisée pour l’alto.'
      },
      'en-CA': {
        question: 'In MSA Phase 1, the Alto Clef (C/Do Clef for viola) is written on which line?',
        options: ['On the 3rd line', 'On the 1st line', 'On the 5th line', 'In the 2nd space'],
        explanation: 'The Alto Clef (C Clef) used for the viola is centered on the 3rd line.'
      }
    }
  },
  {
    id: 34,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica localizada na 1ª LINHA?',
        options: ['Dó', 'Mi', 'Sol', 'Si'],
        explanation: 'Na Clave de Sol, as notas nas linhas (de baixo para cima) são: 1ª Mi, 2ª Sol, 3ª Si, 4ª Ré, 5ª Fá.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note se trouve sur la 1re LIGNE?',
        options: ['Do', 'Mi', 'Sol', 'Si'],
        explanation: 'En clef de Sol, la 1re ligne porte la note Mi.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note is placed on the 1st LINE?',
        options: ['Do (C)', 'Mi (E)', 'Sol (G)', 'Si (B)'],
        explanation: 'In Treble Clef, the lines from 1st to 5th are: Mi, Sol, Si, Re, Fa (E, G, B, D, F).'
      }
    }
  },
  {
    id: 35,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica na 3ª LINHA?',
        options: ['Mi', 'Sol', 'Si', 'Ré'],
        explanation: 'A 3ª linha na Clave de Sol corresponde à nota Si.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note se situe sur la 3e LIGNE?',
        options: ['Mi', 'Sol', 'Si', 'Ré'],
        explanation: 'La 3e ligne en clef de Sol correspond au Si.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note is on the 3rd LINE?',
        options: ['Mi (E)', 'Sol (G)', 'Si (B)', 'Re (D)'],
        explanation: 'The 3rd line in Treble Clef is Si (B).'
      }
    }
  },
  {
    id: 36,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica na 4ª LINHA?',
        options: ['Mi', 'Sol', 'Si', 'Ré'],
        explanation: 'A 4ª linha do pentagrama na Clave de Sol é a nota Ré.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note est sur la 4e LIGNE?',
        options: ['Mi', 'Sol', 'Si', 'Ré'],
        explanation: 'La 4e ligne en clef de Sol correspond au Ré.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note is on the 4th LINE?',
        options: ['Mi (E)', 'Sol (G)', 'Si (B)', 'Re (D)'],
        explanation: 'The 4th line in Treble Clef is Re (D).'
      }
    }
  },
  {
    id: 37,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica na 5ª LINHA (a mais alta da pauta)?',
        options: ['Fá', 'Lá', 'Dó', 'Mi'],
        explanation: 'A 5ª linha na Clave de Sol é a nota Fá.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note se situe sur la 5e LIGNE?',
        options: ['Fa', 'La', 'Do', 'Mi'],
        explanation: 'La 5e ligne en clef de Sol porte le Fa aigu.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note sits on the 5th LINE?',
        options: ['Fa (F)', 'La (A)', 'Do (C)', 'Mi (E)'],
        explanation: 'The 5th line in Treble Clef is Fa (F).'
      }
    }
  },
  {
    id: 38,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica no 1º ESPAÇO?',
        options: ['Dó', 'Fá', 'Lá', 'Mi'],
        explanation: 'Os 4 espaços da Clave de Sol (de baixo para cima) são: 1º Fá, 2º Lá, 3º Dó, 4º Mi.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note se trouve dans le 1er ESPACE?',
        options: ['Do', 'Fa', 'La', 'Mi'],
        explanation: 'Le premier interligne (espace) en clef de Sol contient la note Fa.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note is in the 1st SPACE?',
        options: ['Do (C)', 'Fa (F)', 'La (A)', 'Mi (E)'],
        explanation: 'The spaces in Treble Clef from bottom to top are: Fa, La, Do, Mi (F, A, C, E).'
      }
    }
  },
  {
    id: 39,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica no 2º ESPAÇO?',
        options: ['Fá', 'Dó', 'Lá', 'Sol'],
        explanation: 'O 2º espaço da Clave de Sol é a nota Lá.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note se trouve dans le 2e ESPACE?',
        options: ['Fa', 'Do', 'La', 'Sol'],
        explanation: 'Le 2e espace en clef de Sol est occupé par la note La.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note is in the 2nd SPACE?',
        options: ['Fa (F)', 'Do (C)', 'La (A)', 'Sol (G)'],
        explanation: 'The 2nd space in Treble Clef is La (A).'
      }
    }
  },
  {
    id: 40,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica no 3º ESPAÇO?',
        options: ['Fá', 'Lá', 'Mi', 'Dó'],
        explanation: 'O 3º espaço do pentagrama na Clave de Sol é a nota Dó.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note est dans le 3e ESPACE?',
        options: ['Fa', 'La', 'Mi', 'Do'],
        explanation: 'Le 3e espace en clef de Sol correspond à la note Do.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note is in the 3rd SPACE?',
        options: ['Fa (F)', 'La (A)', 'Mi (E)', 'Do (C)'],
        explanation: 'The 3rd space in Treble Clef is Do (C).'
      }
    }
  },
  {
    id: 41,
    category: 'pentagrama_e_pauta',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica no 4º ESPAÇO?',
        options: ['Mi', 'Fá', 'Sol', 'Lá'],
        explanation: 'O 4º e último espaço da pauta na Clave de Sol é a nota Mi.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note occupe le 4e ESPACE?',
        options: ['Mi', 'Fa', 'Sol', 'La'],
        explanation: 'Le 4e espace en clef de Sol est la note Mi.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note is in the 4th SPACE?',
        options: ['Mi (E)', 'Fa (F)', 'Sol (G)', 'La (A)'],
        explanation: 'The 4th space in Treble Clef is Mi (E).'
      }
    }
  },
  {
    id: 42,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica na 1ª linha suplementar INFERIOR (com um traço no meio)?',
        options: ['Ré', 'Dó central', 'Si', 'Lá'],
        explanation: 'O Dó central fica situado na 1ª linha suplementar inferior na Clave de Sol.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note se trouve sur la 1re ligne supplémentaire INFÉRIEURE?',
        options: ['Ré', 'Do central', 'Si', 'La'],
        explanation: 'Le Do central est placé sur la première ligne supplémentaire inférieure.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note is located on the 1st lower ledger line?',
        options: ['Re (D)', 'Middle Do (C4)', 'Si (B)', 'La (A)'],
        explanation: 'Middle C (Dó central) sits on the 1st lower ledger line below the treble staff.'
      }
    }
  },
  {
    id: 43,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica no espaço imediatamente abaixo da 1ª linha (sem linha que a corte)?',
        options: ['Dó', 'Mi', 'Ré', 'Si'],
        explanation: 'A nota que fica no espaço imediatamente abaixo da 1ª linha da Clave de Sol é o Ré.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note est posée juste sous la 1re ligne?',
        options: ['Do', 'Mi', 'Ré', 'Si'],
        explanation: 'La note suspendue immédiatement sous la 1re ligne est le Ré.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note sits in the space immediately below the 1st line?',
        options: ['Do (C)', 'Mi (E)', 'Re (D)', 'Si (B)'],
        explanation: 'The note sitting directly below the 1st line in Treble Clef is Re (D).'
      }
    }
  },
  {
    id: 44,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica no espaço imediatamente acima da 5ª linha?',
        options: ['Fá', 'Lá', 'Si', 'Sol'],
        explanation: 'A nota apoiada logo acima da 5ª linha da pauta é o Sol.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note se pose immédiatement au-dessus de la 5e ligne?',
        options: ['Fa', 'La', 'Si', 'Sol'],
        explanation: 'Au-dessus de la 5e ligne repose la note Sol.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note sits directly above the 5th line?',
        options: ['Fa (F)', 'La (A)', 'Si (B)', 'Sol (G)'],
        explanation: 'The note sitting right on top of the 5th line in Treble Clef is Sol (G).'
      }
    }
  },
  {
    id: 45,
    category: 'pentagrama_e_pauta',
    difficulty: 'medio',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Sol, qual nota fica cortada pela 1ª linha suplementar SUPERIOR?',
        options: ['Lá', 'Sol', 'Si', 'Dó'],
        explanation: 'A 1ª linha suplementar superior na Clave de Sol é a nota Lá.'
      },
      'fr-CA': {
        question: 'En Clef de Sol, quelle note est traversée par la 1re ligne supplémentaire SUPÉRIEURE?',
        options: ['La', 'Sol', 'Si', 'Do'],
        explanation: 'La note coupée par la première ligne supplémentaire supérieure est le La.'
      },
      'en-CA': {
        question: 'In Treble Clef, which note is crossed by the 1st upper ledger line?',
        options: ['La (A)', 'Sol (G)', 'Si (B)', 'Do (C)'],
        explanation: 'The 1st upper ledger line in Treble Clef is La (A).'
      }
    }
  },
  {
    id: 46,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual nota fica na 1ª LINHA da pauta?',
        options: ['Mi', 'Sol', 'Si', 'Ré'],
        explanation: 'Na Clave de Fá na 4ª linha, as linhas são: 1ª Sol, 2ª Si, 3ª Ré, 4ª Fá, 5ª Lá.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle note se trouve sur la 1re LIGNE?',
        options: ['Mi', 'Sol', 'Si', 'Ré'],
        explanation: 'En clef de Fa, la 1re ligne est la note Sol.'
      },
      'en-CA': {
        question: 'In Bass Clef (4th line), which note is on the 1st LINE?',
        options: ['Mi (E)', 'Sol (G)', 'Si (B)', 'Re (D)'],
        explanation: 'In Bass Clef, the lines from bottom to top are: Sol, Si, Re, Fa, La (G, B, D, F, A).'
      }
    }
  },
  {
    id: 47,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 2,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual nota fica na 2ª LINHA?',
        options: ['Sol', 'Ré', 'Si', 'Fá'],
        explanation: 'A 2ª linha na Clave de Fá é a nota Si.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle note est sur la 2e LIGNE?',
        options: ['Sol', 'Ré', 'Si', 'Fa'],
        explanation: 'La 2e ligne en clef de Fa porte le Si.'
      },
      'en-CA': {
        question: 'In Bass Clef, which note sits on the 2nd LINE?',
        options: ['Sol (G)', 'Re (D)', 'Si (B)', 'Fa (F)'],
        explanation: 'The 2nd line in Bass Clef is Si (B).'
      }
    }
  },
  {
    id: 48,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 3,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual nota fica na 3ª LINHA?',
        options: ['Sol', 'Si', 'Fá', 'Ré'],
        explanation: 'A 3ª linha na Clave de Fá corresponde à nota Ré.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle note est sur la 3e LIGNE?',
        options: ['Sol', 'Si', 'Fa', 'Ré'],
        explanation: 'La 3e ligne en clef de Fa est le Ré.'
      },
      'en-CA': {
        question: 'In Bass Clef, which note sits on the 3rd LINE?',
        options: ['Sol (G)', 'Si (B)', 'Fa (F)', 'Re (D)'],
        explanation: 'The 3rd line in Bass Clef is Re (D).'
      }
    }
  },
  {
    id: 49,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 0,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual nota fica na 5ª LINHA?',
        options: ['Lá', 'Fá', 'Dó', 'Sol'],
        explanation: 'A 5ª linha da pauta na Clave de Fá é a nota Lá.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle note est sur la 5e LIGNE?',
        options: ['La', 'Fa', 'Do', 'Sol'],
        explanation: 'La 5e ligne en clef de Fa correspond au La.'
      },
      'en-CA': {
        question: 'In Bass Clef, which note is on the 5th LINE?',
        options: ['La (A)', 'Fa (F)', 'Do (C)', 'Sol (G)'],
        explanation: 'The 5th line in Bass Clef is La (A).'
      }
    }
  },
  {
    id: 50,
    category: 'claves',
    difficulty: 'facil',
    correctIndex: 1,
    translations: {
      'pt-BR': {
        question: 'Na Clave de Fá na 4ª linha, qual nota fica no 1º ESPAÇO?',
        options: ['Fá', 'Lá', 'Dó', 'Mi'],
        explanation: 'Os 4 espaços da Clave de Fá (de baixo para cima) são: 1º Lá, 2º Dó, 3º Mi, 4º Sol.'
      },
      'fr-CA': {
        question: 'En Clef de Fa sur la 4e ligne, quelle note est dans le 1er ESPACE?',
        options: ['Fa', 'La', 'Do', 'Mi'],
        explanation: 'Le 1er espace en clef de Fa est la note La.'
      },
      'en-CA': {
        question: 'In Bass Clef, which note is in the 1st SPACE?',
        options: ['Fa (F)', 'La (A)', 'Do (C)', 'Mi (E)'],
        explanation: 'The 1st space in Bass Clef is La (A).'
      }
    }
  }
];
