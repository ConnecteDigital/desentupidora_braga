// Bairros de Porto Alegre com página própria.
export type Zona = 'centro' | 'norte' | 'sul' | 'leste';

export interface Bairro {
  slug: string;
  name: string;
  zona: Zona;
  em: string; // "no Menino Deus", "na Cidade Baixa", "em Ipanema"
}

export const zonas: Record<Zona, { name: string; text: string }> = {
  centro: {
    name: 'Região Central',
    text: 'Na região central predominam prédios antigos e comerciais, com colunas e redes de esgoto que recebem muito volume e acumulam gordura ao longo das décadas. Desentupimento de coluna, limpeza de caixa de gordura e hidrojateamento estão entre os chamados mais comuns.',
  },
  norte: {
    name: 'Zona Norte',
    text: 'A Zona Norte mistura condomínios, casas com pátio, comércio e galpões próximos ao aeroporto e às saídas da cidade. As demandas vão do desentupimento de esgoto residencial à limpeza de redes e caixas de gordura de empresas.',
  },
  sul: {
    name: 'Zona Sul',
    text: 'Na Zona Sul e no Extremo Sul há muitas casas com terreno amplo e regiões onde o esgoto ainda vai para fossa séptica e sumidouro. Limpeza de fossa com caminhão e desentupimento de rede são serviços frequentes por aqui.',
  },
  leste: {
    name: 'Zona Leste',
    text: 'A Zona Leste reúne bairros residenciais tradicionais, áreas de expansão e regiões mais altas da cidade. Atendemos desde apartamentos e condomínios até casas com fossa, com desentupimento e limpeza 24 horas.',
  },
};

const list: [string, Zona][] = [
  ['Centro Histórico', 'centro'],
  ['Cidade Baixa', 'centro'],
  ['Bom Fim', 'centro'],
  ['Farroupilha', 'centro'],
  ['Floresta', 'centro'],
  ['Independência', 'centro'],
  ['Moinhos de Vento', 'centro'],
  ['Menino Deus', 'centro'],
  ['Praia de Belas', 'centro'],
  ['Azenha', 'centro'],
  ['Santana', 'centro'],
  ['Rio Branco', 'centro'],
  ['Mont\'Serrat', 'centro'],
  ['Bela Vista', 'centro'],
  ['Petrópolis', 'centro'],
  ['Auxiliadora', 'norte'],
  ['Higienópolis', 'norte'],
  ['São João', 'norte'],
  ['Navegantes', 'norte'],
  ['Passo d\'Areia', 'norte'],
  ['Jardim Lindóia', 'norte'],
  ['Cristo Redentor', 'norte'],
  ['Sarandi', 'norte'],
  ['Rubem Berta', 'norte'],
  ['Jardim Itu', 'norte'],
  ['Humaitá', 'norte'],
  ['Anchieta', 'norte'],
  ['Três Figueiras', 'leste'],
  ['Chácara das Pedras', 'leste'],
  ['Jardim Botânico', 'leste'],
  ['Partenon', 'leste'],
  ['Jardim Carvalho', 'leste'],
  ['Protásio Alves', 'leste'],
  ['Agronomia', 'leste'],
  ['Lomba do Pinheiro', 'leste'],
  ['Glória', 'sul'],
  ['Medianeira', 'sul'],
  ['Teresópolis', 'sul'],
  ['Nonoai', 'sul'],
  ['Cristal', 'sul'],
  ['Camaquã', 'sul'],
  ['Cavalhada', 'sul'],
  ['Vila Nova', 'sul'],
  ['Tristeza', 'sul'],
  ['Ipanema', 'sul'],
  ['Espírito Santo', 'sul'],
  ['Hípica', 'sul'],
  ['Restinga', 'sul'],
  ['Belém Novo', 'sul'],
  ['Lami', 'sul'],
];

export const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const feminino = new Set([
  'Cidade Baixa', 'Floresta', 'Independência', 'Praia de Belas', 'Azenha', 'Bela Vista', 'Auxiliadora',
  'Chácara das Pedras', 'Agronomia', 'Lomba do Pinheiro', 'Glória', 'Medianeira', 'Cavalhada',
  'Vila Nova', 'Tristeza', 'Hípica', 'Restinga',
]);
const semArtigo = new Set(['Ipanema', 'Petrópolis', 'Higienópolis']);
const prep = (name: string) => (semArtigo.has(name) ? 'em' : feminino.has(name) ? 'na' : 'no');

export const bairros: Bairro[] = list.map(([name, zona]) => ({
  slug: slugify(name),
  name,
  zona,
  em: `${prep(name)} ${name}`,
}));

export const bairrosDaZona = (zona: Zona) => bairros.filter((b) => b.zona === zona);
