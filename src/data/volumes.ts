export interface Encounter {
  id: string;
  title: string;
  baseText: string;
  lenses: {
    exegetical: string;
    biblicalRedemptive: string;
    systematic: string;
    practical: string;
  };
}

export interface Volume {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AT' | 'NT';
  section: string;
  encounters: Encounter[];
}

export const VOLUMES: Volume[] = [
  {
    id: 'pentateuco',
    title: 'Volume 1: Homens do Pentateuco',
    subtitle: 'As Origens da Aliança e a Promessa do Redentor',
    description: 'Uma jornada pelos primeiros cinco livros da Bíblia, observando como Deus forjou líderes e patriarcas para preparar o caminho para o Messias.',
    category: 'AT',
    section: 'Pentateuco',
    encounters: [
      {
        id: 'adao',
        title: 'Encontro 1 — Adão: Responsabilidade e a necessidade de Cristo',
        baseText: 'Gênesis 1–3',
        lenses: {
          exegetical: 'Análise do mandato cultural e a queda histórica.',
          biblicalRedemptive: 'Adão como tipo de Cristo; o primeiro Adão falhou, o Segundo Adão (Cristo) venceu.',
          systematic: 'Doutrina da Imago Dei e do Pecado Original.',
          practical: 'Assumindo a responsabilidade no lar e no trabalho diante de Deus.'
        }
      },
      {
        id: 'caim',
        title: 'Encontro 2 — Caim: O Perigo da Inveja e a Graça Comum',
        baseText: 'Gênesis 4',
        lenses: {
          exegetical: 'O sacrifício rejeitado e o primeiro fratricídio.',
          biblicalRedemptive: 'O sangue de Abel clama por justiça; o sangue de Cristo fala mais alto, clamando por misericórdia.',
          systematic: 'A depravação total e a soberania de Deus no julgamento.',
          practical: 'Lidando com a raiva e a inveja através do arrependimento.'
        }
      },
      {
        id: 'noe',
        title: 'Encontro 3 — Noé: Justiça em Meio à Corrupção',
        baseText: 'Gênesis 6–9',
        lenses: {
          exegetical: 'A construção da arca e a aliança pós-dilúvio.',
          biblicalRedemptive: 'A arca como refúgio da ira divina, apontando para a salvação em Cristo.',
          systematic: 'Doutrina do Julgamento e da Aliança (Covenant).',
          practical: 'Integridade masculina em uma cultura corrompida.'
        }
      },
      {
        id: 'abraao',
        title: 'Encontro 4 — Abraão: A Fé que Justifica',
        baseText: 'Gênesis 12; 15; 22',
        lenses: {
          exegetical: 'O chamado de Ur e o sacrifício de Isaque.',
          biblicalRedemptive: 'O cordeiro provido no monte aponta para o Cordeiro de Deus no Calvário.',
          systematic: 'Justificação pela fé e a eleição divina.',
          practical: 'Obediência radical e confiança nas promessas de Deus.'
        }
      },
      {
        id: 'moises-1',
        title: 'Encontro 5 — Moisés: O Mediador da Lei',
        baseText: 'Êxodo 3; 14; 20',
        lenses: {
          exegetical: 'A sarça ardente, a travessia do Mar Vermelho e o Sinai.',
          biblicalRedemptive: 'Moisés como mediador da Antiga Aliança, prefigurando Cristo, o Mediador da Nova Aliança.',
          systematic: 'A santidade de Deus e a função pedagógica da Lei.',
          practical: 'Liderança sob a autoridade da Palavra de Deus.'
        }
      },
      {
        id: 'arao',
        title: 'Encontro 6 — Arão: O Sacerdócio e a Fragilidade Humana',
        baseText: 'Êxodo 32; Levítico 8–10',
        lenses: {
          exegetical: 'A consagração sacerdotal e o episódio do bezerro de ouro.',
          biblicalRedemptive: 'A necessidade de um Sumo Sacerdote perfeito e sem pecado (Jesus).',
          systematic: 'Doutrina da Expiação e do Culto.',
          practical: 'Zelo pela adoração pura e os perigos da idolatria.'
        }
      },
      {
        id: 'josue-calebe',
        title: 'Encontro 7 — Josué e Calebe: Coragem e Fidelidade',
        baseText: 'Números 13–14',
        lenses: {
          exegetical: 'O relatório dos espias e a rebelião do povo.',
          biblicalRedemptive: 'A entrada na terra prometida como descanso, apontando para o descanso eterno em Cristo.',
          systematic: 'A perseverança dos santos e a incredulidade como pecado.',
          practical: 'Coragem masculina para enfrentar gigantes pela fé.'
        }
      },
      {
        id: 'moises-2',
        title: 'Encontro 8 — Moisés: O Legado e a Esperança',
        baseText: 'Deuteronômio 31–34',
        lenses: {
          exegetical: 'As últimas palavras de Moisés e sua morte no Monte Nebo.',
          biblicalRedemptive: 'A promessa de um profeta maior que Moisés (Jesus).',
          systematic: 'A sucessão na liderança e a fidelidade geracional.',
          practical: 'Preparando a próxima geração para a glória de Deus.'
        }
      }
    ]
  },
  {
    id: 'evangelhos',
    title: 'Volume 5: Homens dos Evangelhos',
    subtitle: 'O Encontro com o Verbo Encarnado',
    description: 'Análise de homens que tiveram suas vidas transformadas pelo encontro direto com Jesus Cristo, o Homem Perfeito.',
    category: 'NT',
    section: 'Evangelhos',
    encounters: [
      {
        id: 'jose',
        title: 'Encontro 1 — José: Justiça e Obediência Silenciosa',
        baseText: 'Mateus 1–2',
        lenses: {
          exegetical: 'A genealogia de Jesus e a resposta de José ao anjo.',
          biblicalRedemptive: 'José protege o herdeiro do trono de Davi, garantindo o cumprimento das profecias.',
          systematic: 'A encarnação e a providência divina.',
          practical: 'Proteção da família e obediência mesmo sem entender tudo.'
        }
      },
      {
        id: 'joao-batista',
        title: 'Encontro 2 — João Batista: A Voz no Deserto',
        baseText: 'Marcos 1; João 1',
        lenses: {
          exegetical: 'O ministério de arrependimento e o batismo de Jesus.',
          biblicalRedemptive: 'O precursor que aponta para o Cordeiro de Deus.',
          systematic: 'A doutrina do arrependimento e a transição das alianças.',
          practical: 'Humildade: "Convém que ele cresça e eu diminua".'
        }
      },
      {
        id: 'pedro',
        title: 'Encontro 3 — Pedro: Queda e Restauração',
        baseText: 'Lucas 5; Mateus 16; João 21',
        lenses: {
          exegetical: 'A confissão de Pedro e sua tripla negação/restauração.',
          biblicalRedemptive: 'A graça de Cristo que restaura o pecador para o serviço.',
          systematic: 'A natureza da Igreja e a perseverança pela graça.',
          practical: 'Lidando com o fracasso e encontrando identidade em Cristo.'
        }
      },
      {
        id: 'nicodemos',
        title: 'Encontro 4 — Nicodemos: Do Conhecimento ao Novo Nascimento',
        baseText: 'João 3; 7; 19',
        lenses: {
          exegetical: 'O diálogo noturno e o sepultamento de Jesus.',
          biblicalRedemptive: 'A serpente no deserto como tipo de Cristo levantado na cruz.',
          systematic: 'A doutrina da Regeneração (Novo Nascimento).',
          practical: 'Coragem para assumir a fé publicamente.'
        }
      },
      {
        id: 'centuriao',
        title: 'Encontro 5 — Centurião: Autoridade e Fé',
        baseText: 'Mateus 8; Lucas 7',
        lenses: {
          exegetical: 'O pedido de cura para o servo e a admiração de Jesus.',
          biblicalRedemptive: 'A inclusão dos gentios no Reino através da fé.',
          systematic: 'A natureza da fé salvífica e a autoridade de Cristo.',
          practical: 'Submissão à autoridade de Cristo como base para exercer autoridade.'
        }
      },
      {
        id: 'pilatos',
        title: 'Encontro 6 — Pilatos: A Covardia da Neutralidade',
        baseText: 'João 18–19',
        lenses: {
          exegetical: 'O julgamento de Jesus e a lavagem das mãos.',
          biblicalRedemptive: 'O julgamento injusto do Inocente para a justificação dos culpados.',
          systematic: 'A soberania de Deus sobre os governantes humanos.',
          practical: 'O perigo de temer os homens mais do que a Deus.'
        }
      }
    ]
  },
  {
    id: 'historicos',
    title: 'Volume 2: Homens dos Livros Históricos',
    subtitle: 'Reis, Juízes e a Luta pelo Reino',
    description: 'Explorando a história de Israel através de seus líderes e a busca pelo verdadeiro Rei.',
    category: 'AT',
    section: 'Históricos',
    encounters: []
  },
  {
    id: 'sabedoria',
    title: 'Volume 3: Homens da Sabedoria',
    subtitle: 'Poesia, Sofrimento e Temor do Senhor',
    description: 'A vida masculina diante da dor, do trabalho e da adoração.',
    category: 'AT',
    section: 'Poéticos',
    encounters: []
  },
  {
    id: 'profetas',
    title: 'Volume 4: Homens dos Profetas',
    subtitle: 'Sentinelas da Aliança e Mensageiros do Juízo',
    description: 'Homens que clamaram por arrependimento e apontaram para a glória futura.',
    category: 'AT',
    section: 'Profetas',
    encounters: []
  },
  {
    id: 'atos',
    title: 'Volume 6: Homens em Atos',
    subtitle: 'A Expansão do Reino pelo Espírito',
    description: 'A igreja primitiva e a coragem dos apóstolos.',
    category: 'NT',
    section: 'Atos',
    encounters: []
  },
  {
    id: 'paulinas',
    title: 'Volume 7: Homens nas Cartas Paulinas',
    subtitle: 'Doutrina e Vida no Corpo de Cristo',
    description: 'Instruções apostólicas para a maturidade masculina.',
    category: 'NT',
    section: 'Cartas Paulinas',
    encounters: []
  },
  {
    id: 'gerais',
    title: 'Volume 8: Homens nas Cartas Gerais',
    subtitle: 'Fé Provada e Esperança Viva',
    description: 'Perseverança em meio à provação e falsos ensinos.',
    category: 'NT',
    section: 'Cartas Gerais',
    encounters: []
  },
  {
    id: 'apocalipse',
    title: 'Volume 9: O Homem no Apocalipse',
    subtitle: 'A Vitória Final do Cordeiro',
    description: 'A consumação de todas as coisas e o destino eterno do homem.',
    category: 'NT',
    section: 'Apocalipse',
    encounters: []
  }
];
