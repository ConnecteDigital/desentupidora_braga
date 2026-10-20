export interface City {
  slug: string;
  name: string;
  intro: string;
  context: string;
  regions: string[]; // bairros e regiões citados na página
  nearby: string[]; // slugs de cidades vizinhas
  main?: boolean;
}

// Revisar os bairros com o cliente antes de publicar.
export const cities: City[] = [
  {
    slug: 'porto-alegre',
    name: 'Porto Alegre',
    main: true,
    intro:
      'Porto Alegre é a nossa base. Mantemos equipes de plantão em diferentes zonas da cidade para chegar rápido em chamados de desentupimento e limpa fossa, de dia, de noite e nos fins de semana.',
    context:
      'A capital tem desde prédios antigos no Centro Histórico e na Cidade Baixa, com colunas e redes de ferro fundido, até bairros da Zona Sul e do Extremo Sul onde muitas casas ainda dependem de fossa séptica. Atendemos os dois cenários com o equipamento certo para cada um.',
    regions: [],
    nearby: ['canoas', 'viamao', 'alvorada', 'cachoeirinha', 'guaiba', 'eldorado-do-sul'],
  },
  {
    slug: 'canoas',
    name: 'Canoas',
    intro:
      'Canoas fica colada à Zona Norte de Porto Alegre, o que permite atender a cidade com a mesma agilidade da capital. Fazemos desentupimento, limpeza de fossa e hidrojateamento em casas, condomínios e empresas.',
    context:
      'Com muitos condomínios residenciais e um polo industrial e logístico forte, Canoas tem grande demanda por limpeza de redes, colunas e caixas de gordura, além de residências que ainda usam fossa e sumidouro.',
    regions: ['Centro', 'Niterói', 'Mathias Velho', 'Harmonia', 'Igara', 'Marechal Rondon', 'Nossa Senhora das Graças', 'Estância Velha', 'São José', 'Guajuviras', 'Fátima', 'Rio Branco'],
    nearby: ['porto-alegre', 'esteio', 'cachoeirinha', 'nova-santa-rita'],
  },
  {
    slug: 'gravatai',
    name: 'Gravataí',
    intro:
      'Atendemos Gravataí com equipes que circulam pela região de Cachoeirinha e Alvorada, garantindo chegada rápida em emergências de esgoto, vasos e ralos entupidos e limpeza de fossa.',
    context:
      'Gravataí combina bairros residenciais em crescimento, áreas rurais e o distrito industrial. Em muitas regiões da cidade a fossa séptica ainda é comum, o que torna a limpeza periódica com caminhão limpa fossa um serviço essencial.',
    regions: ['Centro', 'Morada do Vale', 'Parque dos Anjos', 'São Geraldo', 'Bom Princípio', 'Salgado Filho', 'Distrito Industrial'],
    nearby: ['cachoeirinha', 'alvorada', 'viamao'],
  },
  {
    slug: 'cachoeirinha',
    name: 'Cachoeirinha',
    intro:
      'Cachoeirinha fica entre Porto Alegre e Gravataí, no caminho das nossas equipes. Isso garante atendimento rápido para desentupimento de esgoto, ralos, vasos e limpeza de caixa de gordura e fossa.',
    context:
      'A cidade tem muitas casas com pátio, condomínios horizontais e comércio movimentado na Avenida Flores da Cunha, situações em que redes de esgoto, caixas de gordura e fossas precisam de manutenção regular.',
    regions: ['Centro', 'Vila Imbuí', 'Parque da Matriz', 'Granja Esperança', 'Vista Alegre'],
    nearby: ['porto-alegre', 'gravatai', 'canoas', 'alvorada'],
  },
  {
    slug: 'alvorada',
    name: 'Alvorada',
    intro:
      'Atendemos Alvorada a partir da Zona Norte e Leste de Porto Alegre, com equipes prontas para desentupimento emergencial, limpa fossa e hidrojateamento 24 horas.',
    context:
      'Alvorada é uma cidade predominantemente residencial, com muitas casas que dependem de fossa séptica e sumidouro. Limpeza de fossa e desentupimento de esgoto estão entre os chamados mais frequentes na cidade.',
    regions: ['Centro', 'Jardim Algarve', 'Umbu', 'Piratini', 'Formosa', 'Intersul'],
    nearby: ['porto-alegre', 'viamao', 'gravatai', 'cachoeirinha'],
  },
  {
    slug: 'viamao',
    name: 'Viamão',
    intro:
      'Viamão é vizinha da Zona Leste de Porto Alegre e uma das cidades que mais atendemos para limpeza de fossa. Também fazemos desentupimento de esgoto, ralos, vasos e canos 24 horas.',
    context:
      'Com território grande, sítios, chácaras e muitos bairros sem rede de esgoto, Viamão tem forte demanda por caminhão limpa fossa e por desentupimento de redes residenciais.',
    regions: ['Centro', 'Viamópolis', 'Santa Isabel', 'São Lucas', 'Jardim Krahe', 'Itapuã'],
    nearby: ['porto-alegre', 'alvorada', 'gravatai'],
  },
  {
    slug: 'esteio',
    name: 'Esteio',
    intro:
      'Esteio fica no eixo da BR-116, entre Canoas e Sapucaia do Sul, o que facilita o deslocamento das nossas equipes para chamados de desentupimento e limpeza de fossa.',
    context:
      'A cidade tem bairros residenciais consolidados, comércio forte e empresas de médio porte, com demanda por limpeza de caixas de gordura, redes de esgoto e desentupimento de colunas.',
    regions: ['Centro', 'Parque Amador', 'Liberdade', 'Novo Esteio', 'Primavera', 'Três Marias'],
    nearby: ['canoas', 'sapucaia-do-sul', 'nova-santa-rita'],
  },
  {
    slug: 'sapucaia-do-sul',
    name: 'Sapucaia do Sul',
    intro:
      'Atendemos Sapucaia do Sul com equipes que percorrem o eixo Canoas–Esteio–São Leopoldo, prontas para desentupimento emergencial e limpa fossa.',
    context:
      'Sapucaia do Sul tem muitas residências com pátio e fossa séptica, além de comércio e indústrias ao longo da BR-116, onde redes de esgoto e caixas de gordura precisam de manutenção constante.',
    regions: ['Centro', 'Vargas', 'Capão da Cruz', 'Paraíso', 'Lomba da Palmeira', 'Primor'],
    nearby: ['esteio', 'sao-leopoldo', 'canoas'],
  },
  {
    slug: 'sao-leopoldo',
    name: 'São Leopoldo',
    intro:
      'Atendemos São Leopoldo com desentupimento de esgoto, ralos, vasos, canos e colunas, além de limpeza de fossa e caixa de gordura com caminhão próprio para o serviço.',
    context:
      'Cidade universitária e industrial do Vale do Sinos, São Leopoldo tem muitos prédios residenciais, repúblicas e comércios, além de bairros onde a fossa séptica ainda é a solução de esgoto.',
    regions: ['Centro', 'Scharlau', 'Feitoria', 'Rio dos Sinos', 'São Miguel', 'Santos Dumont', 'Cristo Rei', 'Campina', 'Morro do Espelho'],
    nearby: ['sapucaia-do-sul', 'novo-hamburgo', 'esteio'],
  },
  {
    slug: 'novo-hamburgo',
    name: 'Novo Hamburgo',
    intro:
      'Levamos o mesmo atendimento 24 horas de Porto Alegre até Novo Hamburgo: desentupimento de esgoto, redes e colunas, limpeza de fossa, caixa de gordura e hidrojateamento.',
    context:
      'Polo calçadista e comercial do Vale do Sinos, Novo Hamburgo tem indústrias, prédios residenciais e bairros afastados com fossa séptica, cada um com uma necessidade diferente de manutenção hidrossanitária.',
    regions: ['Centro', 'Hamburgo Velho', 'Canudos', 'Rondônia', 'Ouro Branco', 'Primavera', 'Liberdade', 'Santo Afonso', 'Operário', 'Lomba Grande'],
    nearby: ['sao-leopoldo', 'sapucaia-do-sul'],
  },
  {
    slug: 'guaiba',
    name: 'Guaíba',
    intro:
      'Do outro lado do lago, Guaíba é atendida pelas nossas equipes da Zona Sul de Porto Alegre, com desentupimento, limpa fossa e hidrojateamento 24 horas.',
    context:
      'Guaíba tem muitas casas com fossa séptica e sumidouro e terrenos próximos à orla, onde a manutenção da fossa e da rede pluvial evita transbordamentos em períodos de chuva.',
    regions: ['Centro', 'Colina', 'Jardim dos Lagos', 'Florida', 'Parque 35', 'Ermo'],
    nearby: ['eldorado-do-sul', 'porto-alegre'],
  },
  {
    slug: 'eldorado-do-sul',
    name: 'Eldorado do Sul',
    intro:
      'Eldorado do Sul fica a poucos quilômetros de Porto Alegre pela BR-290. Atendemos a cidade com desentupimento de esgoto, limpeza de fossa e caixa de gordura.',
    context:
      'Boa parte das residências de Eldorado do Sul usa fossa séptica, e a limpeza periódica é fundamental, principalmente nas áreas mais baixas da cidade, para evitar retorno de esgoto em épocas de chuva.',
    regions: ['Centro', 'Cidade Verde', 'Itaí', 'Bom Retiro', 'Medianeira'],
    nearby: ['guaiba', 'porto-alegre'],
  },
  {
    slug: 'nova-santa-rita',
    name: 'Nova Santa Rita',
    intro:
      'Atendemos Nova Santa Rita a partir de Canoas e Esteio, com caminhão limpa fossa, desentupimento de esgoto e hidrojateamento para casas, sítios e empresas.',
    context:
      'Com perfil residencial e rural e muitas propriedades sem rede pública de esgoto, Nova Santa Rita tem grande demanda por limpeza de fossa séptica e sumidouro.',
    regions: ['Centro', 'Berto Círio', 'Caju', 'Pedreira'],
    nearby: ['canoas', 'esteio'],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug)!;
