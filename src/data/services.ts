export type ServiceGroup = 'desentupimento' | 'limpeza';

export interface Service {
  slug: string;
  name: string; // nome curto usado em menus e cards
  keyword: string; // termo principal de busca
  group: ServiceGroup;
  icon: string;
  short: string;
  intro: string[];
  signs: string[];
  process: { title: string; text: string }[];
  causes: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'desentupimento-de-ralo',
    name: 'Desentupimento de Ralo',
    keyword: 'desentupimento de ralo',
    group: 'desentupimento',
    icon: 'drain',
    short: 'Ralos de banheiro, box, área de serviço e áreas externas liberados sem quebrar piso.',
    intro: [
      'Ralo entupido é um dos chamados mais comuns do dia a dia: a água do banho começa a acumular no box, a área de serviço alaga quando a máquina esvazia ou o ralo externo transborda na primeira chuva. Na maioria dos casos o problema é um acúmulo de cabelo, sabão, areia e resíduos que vai estreitando a tubulação até travar o escoamento.',
      'A equipe da Desentupidora Braga usa máquinas rotativas com molas de diferentes espessuras e, quando necessário, hidrojateamento para limpar o ralo e o trecho de cano até a caixa de inspeção. O serviço é feito sem quebrar piso e sem produtos químicos que corroem a tubulação.',
    ],
    signs: [
      'Água acumulando no box ou na área de serviço',
      'Escoamento lento mesmo depois de limpar a grelha',
      'Cheiro de esgoto subindo pelo ralo',
      'Barulho de borbulhas quando outra pia ou vaso é usado',
      'Ralo externo transbordando em dia de chuva',
    ],
    process: [
      { title: 'Avaliação', text: 'Identificamos se o entupimento está no sifão do ralo, no cano ou na caixa sifonada.' },
      { title: 'Desobstrução', text: 'Máquina rotativa com mola adequada ao diâmetro do cano remove cabelo, sabão e detritos.' },
      { title: 'Limpeza', text: 'Lavagem do trecho e da caixa sifonada para retirar os resíduos que sobraram.' },
      { title: 'Teste', text: 'Testamos o escoamento com água corrente antes de liberar o local.' },
    ],
    causes: ['Cabelo e pelos de animais', 'Acúmulo de sabão e amaciante', 'Areia e terra em áreas externas', 'Folhas e galhos em ralos de pátio', 'Objetos pequenos que caem na grelha'],
    faq: [
      { q: 'Precisa quebrar o piso para desentupir o ralo?', a: 'Na grande maioria dos casos, não. O acesso é feito pelo próprio ralo ou pela caixa sifonada, usando máquina rotativa ou hidrojato.' },
      { q: 'Soda cáustica resolve ralo entupido?', a: 'Pode até aliviar no começo, mas danifica canos de PVC, é perigosa para quem manuseia e não remove cabelo compactado. O ideal é a desobstrução mecânica.' },
      { q: 'Por que o ralo volta a entupir?', a: 'Normalmente porque só a ponta do entupimento foi removida. Limpamos o trecho completo até a caixa de inspeção para evitar o retorno.' },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    name: 'Desentupimento de Vaso Sanitário',
    keyword: 'desentupimento de vaso sanitário',
    group: 'desentupimento',
    icon: 'toilet',
    short: 'Vaso entupido ou transbordando? Desentupimos sem retirar a louça e sem sujeira.',
    intro: [
      'Vaso sanitário entupido é uma emergência de verdade, principalmente quando a casa tem só um banheiro. O entupimento pode estar na própria louça, no ramal que liga o vaso à coluna ou já na rede de esgoto, e cada caso pede uma ferramenta diferente.',
      'Nossos técnicos chegam com equipamento específico para vasos, como sondas manuais e máquinas com mola flexível que não riscam a louça. Na maioria dos atendimentos não é preciso retirar o vaso do lugar, e o banheiro fica limpo no final do serviço.',
    ],
    signs: [
      'Água subindo ao dar descarga',
      'Descarga fraca ou demorando a esvaziar',
      'Gorgolejo (barulho de ar) no vaso ao usar a pia ou o chuveiro',
      'Cheiro forte de esgoto no banheiro',
      'Água retornando pelo ralo do box quando dá descarga',
    ],
    process: [
      { title: 'Diagnóstico', text: 'Verificamos se a obstrução está na louça, no ramal ou na rede principal.' },
      { title: 'Desentupimento', text: 'Sonda ou máquina com mola flexível remove o material sem danificar o vaso.' },
      { title: 'Rede', text: 'Se o problema estiver adiante, limpamos até a caixa de inspeção ou a coluna.' },
      { title: 'Teste e limpeza', text: 'Testamos várias descargas e deixamos o banheiro higienizado.' },
    ],
    causes: ['Papel higiênico em excesso', 'Lenço umedecido e absorvente', 'Fio dental e cotonete', 'Objetos que caem no vaso (brinquedos, escovas)', 'Problemas na rede de esgoto ou na fossa'],
    faq: [
      { q: 'Precisa tirar o vaso do lugar?', a: 'Raramente. Só retiramos a louça quando há um objeto preso que não sai pela sonda; nesse caso avisamos antes.' },
      { q: 'Lenço umedecido pode ir no vaso?', a: 'Não. Mesmo os que dizem ser "descartáveis" não se desfazem na água e são uma das principais causas de entupimento.' },
      { q: 'O vaso entupiu e a água está no limite, o que faço?', a: 'Pare de dar descarga, feche o registro atrás do vaso e chame a equipe. Evite usar produtos químicos.' },
    ],
  },
  {
    slug: 'desentupimento-de-cano',
    name: 'Desentupimento de Cano',
    keyword: 'desentupimento de cano',
    group: 'desentupimento',
    icon: 'pipe',
    short: 'Canos de pia, tanque e ramais internos desobstruídos com máquina rotativa.',
    intro: [
      'Cano entupido costuma dar sinais antes de travar de vez: a pia demora a escoar, o tanque acumula água ou aparece aquele cheiro ruim que não sai com limpeza. Na cozinha, o vilão quase sempre é a gordura que endurece nas paredes do cano; no banheiro, cabelo e sabão.',
      'Desentupimos canos de pia, tanque, lavatório e ramais internos com máquinas rotativas, sondas e, quando a crosta de gordura é grande, hidrojateamento. Tudo pelo acesso existente, sem abrir parede ou quebrar azulejo.',
    ],
    signs: [
      'Pia ou tanque escoando devagar',
      'Água voltando pelo ralo quando outra torneira é usada',
      'Mau cheiro saindo do cano',
      'Barulho de borbulhas na tubulação',
      'Entupimentos que voltam poucos dias depois',
    ],
    process: [
      { title: 'Localização', text: 'Identificamos o trecho obstruído pelo comportamento da água e pelos pontos de acesso.' },
      { title: 'Desobstrução', text: 'Máquina rotativa ou sonda abre passagem e raspa a crosta das paredes do cano.' },
      { title: 'Hidrojato (se preciso)', text: 'Em gordura endurecida usamos água em alta pressão para limpar o cano por inteiro.' },
      { title: 'Teste', text: 'Escoamento testado com água quente e corrente antes de finalizar.' },
    ],
    causes: ['Gordura e óleo de cozinha', 'Restos de comida e borra de café', 'Cabelo e sabão', 'Acúmulo de calcário', 'Canos antigos com caimento errado'],
    faq: [
      { q: 'Jogar água quente resolve cano entupido?', a: 'Ajuda a prevenir em pias de cozinha, mas não resolve um cano já obstruído. Óleo derretido endurece de novo mais adiante na tubulação.' },
      { q: 'Vocês quebram parede para desentupir?', a: 'Não é necessário na maioria dos casos. Usamos os pontos de acesso existentes, como sifão, ralo ou caixa de inspeção.' },
      { q: 'Atendem canos de comércio e restaurantes?', a: 'Sim. Atendemos residências, condomínios, comércios, restaurantes e indústrias.' },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    name: 'Desentupimento de Esgoto',
    keyword: 'desentupimento de esgoto',
    group: 'desentupimento',
    icon: 'sewer',
    short: 'Esgoto retornando ou transbordando? Atendimento emergencial 24 horas.',
    intro: [
      'Quando o esgoto entope, o problema aparece em vários pontos ao mesmo tempo: vasos que não descem, ralos que devolvem água suja e caixas de inspeção transbordando no pátio. É uma situação que exige atendimento rápido, tanto pelo cheiro quanto pelo risco à saúde.',
      'A Desentupidora Braga atende chamados de esgoto 24 horas em Porto Alegre e região. Fazemos a desobstrução com máquinas rotativas de grande porte e hidrojateamento, limpando a rede desde as caixas de inspeção até a ligação com a rede pública ou a fossa.',
    ],
    signs: [
      'Esgoto voltando pelos ralos e vasos',
      'Caixa de inspeção cheia ou transbordando',
      'Mau cheiro forte na casa ou no pátio',
      'Vários pontos da casa entupidos ao mesmo tempo',
      'Umidade ou afundamento no piso perto da tubulação',
    ],
    process: [
      { title: 'Atendimento emergencial', text: 'Equipe de plantão a caminho em cerca de 20 minutos.' },
      { title: 'Abertura das caixas', text: 'Localizamos em qual trecho entre as caixas de inspeção está a obstrução.' },
      { title: 'Desobstrução e hidrojato', text: 'Máquina rotativa abre a passagem e o hidrojato limpa as paredes da rede.' },
      { title: 'Higienização', text: 'Limpamos as caixas e o local atingido e testamos o escoamento.' },
    ],
    causes: ['Gordura vinda da cozinha', 'Raízes de árvores invadindo a tubulação', 'Lenços, absorventes e fraldas', 'Tubulação quebrada ou com caimento errado', 'Fossa ou caixa de gordura cheia'],
    faq: [
      { q: 'Vocês atendem esgoto de madrugada?', a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive fins de semana e feriados.' },
      { q: 'O problema é meu ou da companhia de saneamento?', a: 'Se o entupimento está dentro do terreno, até a caixa de ligação, a responsabilidade é do imóvel. Fazemos o diagnóstico e explicamos onde está a obstrução.' },
      { q: 'Raiz de árvore entope esgoto?', a: 'Sim, e é bem comum. As raízes entram pelas juntas do cano. Removemos com máquina rotativa e hidrojato e indicamos o reparo quando necessário.' },
    ],
  },
  {
    slug: 'desentupimento-de-rede',
    name: 'Desentupimento de Rede',
    keyword: 'desentupimento de rede de esgoto',
    group: 'desentupimento',
    icon: 'network',
    short: 'Redes de esgoto e pluviais de casas, condomínios e empresas limpas por completo.',
    intro: [
      'A rede é o conjunto de tubulações e caixas que leva o esgoto e a água da chuva para fora do imóvel. Em condomínios, comércios e indústrias ela é extensa, recebe muito volume e acumula gordura, areia e sedimentos com o tempo, o que leva a entupimentos que param o funcionamento do prédio inteiro.',
      'Fazemos o desentupimento de redes de esgoto e pluviais com máquinas de alto torque e hidrojateamento de alta pressão. Também atendemos contratos de manutenção preventiva para condomínios e empresas, que evitam emergências e reduzem custos.',
    ],
    signs: [
      'Caixas de inspeção ou de passagem transbordando',
      'Pátio ou garagem alagando em dias de chuva',
      'Entupimentos frequentes em vários apartamentos ou salas',
      'Cheiro de esgoto em áreas comuns',
      'Bueiros e grelhas pluviais com água parada',
    ],
    process: [
      { title: 'Mapeamento', text: 'Identificamos as caixas de inspeção e o sentido da rede.' },
      { title: 'Desobstrução', text: 'Máquinas rotativas de alto torque abrem os trechos travados.' },
      { title: 'Hidrojateamento', text: 'Água em alta pressão retira gordura, areia e sedimentos das paredes.' },
      { title: 'Relatório', text: 'Informamos o estado da rede e indicamos a frequência ideal de manutenção.' },
    ],
    causes: ['Acúmulo de gordura e sedimentos', 'Areia e terra na rede pluvial', 'Raízes nas juntas dos tubos', 'Falta de manutenção preventiva', 'Tubulação subdimensionada para o volume'],
    faq: [
      { q: 'Fazem manutenção preventiva de rede para condomínios?', a: 'Sim. Montamos uma rotina de limpeza conforme o porte do condomínio, o que evita emergências e entupimentos em apartamentos.' },
      { q: 'Atendem rede pluvial?', a: 'Sim. Limpamos redes pluviais, grelhas, bocas de lobo internas e caixas de areia.' },
      { q: 'Quanto tempo leva para limpar uma rede?', a: 'Depende da extensão e do nível de obstrução. Em residências costuma levar de uma a duas horas.' },
    ],
  },
  {
    slug: 'desentupimento-de-coluna',
    name: 'Desentupimento de Coluna',
    keyword: 'desentupimento de coluna de prédio',
    group: 'desentupimento',
    icon: 'building',
    short: 'Colunas de esgoto e de gordura de prédios desobstruídas sem abrir paredes.',
    intro: [
      'A coluna é a tubulação vertical que recebe o esgoto de todos os andares de um prédio. Quando ela entope, os apartamentos dos andares mais baixos são os primeiros a sofrer, com esgoto voltando por ralos, pias e vasos, e o problema afeta todo o condomínio.',
      'A Desentupidora Braga tem experiência em colunas de esgoto, de gordura (cozinhas) e pluviais. Fazemos a desobstrução pelos pontos de inspeção, sem quebrar paredes, e usamos hidrojateamento para remover a gordura acumulada ao longo dos andares.',
    ],
    signs: [
      'Esgoto retornando nos apartamentos dos primeiros andares',
      'Pia da cozinha transbordando com água de outros andares',
      'Barulho de água e ar descendo pela parede',
      'Mau cheiro em shafts e áreas de serviço',
      'Vários moradores reclamando do mesmo problema',
    ],
    process: [
      { title: 'Vistoria', text: 'Identificamos qual coluna está obstruída e a altura aproximada do entupimento.' },
      { title: 'Acesso', text: 'Trabalhamos pelos pontos de inspeção, pelo topo da coluna ou pelo térreo.' },
      { title: 'Desobstrução', text: 'Máquina rotativa e hidrojato limpam a coluna de ponta a ponta.' },
      { title: 'Orientação', text: 'Indicamos ao síndico a frequência ideal de limpeza preventiva.' },
    ],
    causes: ['Gordura vinda das cozinhas dos apartamentos', 'Objetos descartados no vaso', 'Restos de obra e reforma', 'Falta de manutenção preventiva', 'Desvios e curvas mal executados na coluna'],
    faq: [
      { q: 'Quem paga o desentupimento da coluna, o condomínio ou o morador?', a: 'A coluna é área comum, então normalmente o custo é do condomínio. Se a causa for de uma unidade específica, a convenção pode prever o repasse.' },
      { q: 'É preciso entrar em todos os apartamentos?', a: 'Não. Na maioria dos casos acessamos pela inspeção da coluna, pelo telhado ou pelo térreo.' },
      { q: 'De quanto em quanto tempo limpar a coluna de gordura?', a: 'Em geral uma vez por ano, ou a cada seis meses em prédios com muitas unidades.' },
    ],
  },
  {
    slug: 'limpeza-de-fossa',
    name: 'Limpeza de Fossa',
    keyword: 'limpa fossa',
    group: 'limpeza',
    icon: 'tank',
    short: 'Caminhão limpa fossa para fossas sépticas, sumidouros e filtros, com descarte correto.',
    intro: [
      'Em muitos bairros e cidades da Grande Porto Alegre o esgoto ainda vai para fossa séptica e sumidouro. Com o tempo, o lodo ocupa o espaço da fossa e ela deixa de tratar o esgoto: começa o mau cheiro, os vasos ficam lentos e, em casos mais graves, a fossa transborda no pátio.',
      'Fazemos a limpeza de fossa com caminhão limpa fossa (sucção a vácuo), retirando todo o lodo e os resíduos. O material é transportado e descartado em local licenciado, como determina a legislação ambiental.',
    ],
    signs: [
      'Mau cheiro forte no pátio ou perto da tampa da fossa',
      'Vasos e ralos escoando devagar em toda a casa',
      'Grama mais verde ou terreno encharcado sobre a fossa',
      'Esgoto voltando pelos pontos mais baixos da casa',
      'Muito tempo sem limpeza (mais de um ou dois anos)',
    ],
    process: [
      { title: 'Localização da fossa', text: 'Encontramos e abrimos a tampa da fossa e do sumidouro.' },
      { title: 'Sucção a vácuo', text: 'O caminhão limpa fossa retira o lodo e o líquido acumulado.' },
      { title: 'Limpeza e vistoria', text: 'Verificamos entrada, saída e as condições das paredes da fossa.' },
      { title: 'Descarte correto', text: 'Resíduo levado para destinação licenciada.' },
    ],
    causes: ['Acúmulo natural de lodo com o uso', 'Fossa subdimensionada para o número de moradores', 'Entrada de gordura sem caixa de gordura', 'Sumidouro saturado', 'Excesso de produtos químicos que matam as bactérias'],
    faq: [
      { q: 'De quanto em quanto tempo limpar a fossa?', a: 'Em geral a cada um ou dois anos em residências. Depende do tamanho da fossa e do número de pessoas na casa.' },
      { q: 'Vocês têm caminhão limpa fossa?', a: 'Sim. A limpeza é feita com caminhão de sucção a vácuo, que retira todo o lodo sem contato manual.' },
      { q: 'Para onde vai o resíduo da fossa?', a: 'É levado para destinação licenciada, conforme as normas ambientais.' },
      { q: 'Precisa estar em casa durante a limpeza?', a: 'É bom ter alguém para liberar o acesso à fossa. O serviço costuma levar menos de uma hora.' },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    name: 'Limpeza de Caixa de Gordura',
    keyword: 'limpeza de caixa de gordura',
    group: 'limpeza',
    icon: 'grease',
    short: 'Limpeza de caixa de gordura para casas, condomínios, restaurantes e cozinhas industriais.',
    intro: [
      'A caixa de gordura segura o óleo e os restos de comida que saem da pia da cozinha, evitando que eles cheguem à rede de esgoto. Quando ela enche, a gordura passa adiante, entope a rede e o cheiro fica insuportável, especialmente em restaurantes e condomínios.',
      'Fazemos a limpeza completa da caixa de gordura, com retirada da gordura sólida, sucção do líquido e lavagem das paredes e da tubulação de entrada e saída. Atendemos chamados avulsos e contratos periódicos para comércios.',
    ],
    signs: [
      'Cheiro de gordura rançosa ou esgoto na cozinha ou no pátio',
      'Pia da cozinha escoando devagar',
      'Camada grossa de gordura visível ao abrir a tampa',
      'Caixa transbordando',
      'Entupimentos frequentes na rede logo após a caixa',
    ],
    process: [
      { title: 'Abertura', text: 'Abrimos a caixa e avaliamos o volume de gordura acumulada.' },
      { title: 'Retirada', text: 'Removemos a gordura sólida e fazemos a sucção do líquido.' },
      { title: 'Lavagem', text: 'Lavamos as paredes e desobstruímos a entrada e a saída da caixa.' },
      { title: 'Descarte', text: 'Resíduos embalados e encaminhados para descarte adequado.' },
    ],
    causes: ['Óleo de fritura descartado na pia', 'Restos de comida sem peneira no ralo', 'Intervalo longo entre limpezas', 'Caixa pequena para o volume da cozinha', 'Uso intenso em restaurantes e lanchonetes'],
    faq: [
      { q: 'De quanto em quanto tempo limpar a caixa de gordura?', a: 'Em residências, a cada três a seis meses. Em restaurantes, pode ser necessário mensal ou até quinzenal.' },
      { q: 'Fazem contrato para restaurantes?', a: 'Sim. Montamos uma rotina de limpeza conforme o volume da cozinha, com dia e horário que não atrapalham o funcionamento.' },
      { q: 'A limpeza deixa cheiro?', a: 'Durante a abertura há odor, mas ao final a caixa fica limpa e o cheiro diminui bastante.' },
    ],
  },
  {
    slug: 'hidrojateamento',
    name: 'Hidrojateamento',
    keyword: 'hidrojateamento',
    group: 'limpeza',
    icon: 'jet',
    short: 'Jato de água em alta pressão para limpar redes, colunas e tubulações por inteiro.',
    intro: [
      'O hidrojateamento usa um jato de água em alta pressão, aplicado por uma mangueira com bico especial, para limpar o interior das tubulações. Diferente da máquina rotativa, que abre passagem, o hidrojato lava as paredes do cano e remove gordura, areia, raízes finas e incrustações.',
      'É a técnica indicada para redes de esgoto, colunas de prédios, redes pluviais e tubulações industriais com entupimentos recorrentes. Não usa produtos químicos e é seguro para canos de PVC, ferro fundido e concreto.',
    ],
    signs: [
      'Entupimentos que voltam com frequência',
      'Gordura endurecida em redes de cozinha e colunas',
      'Redes pluviais com areia e sedimentos',
      'Manutenção preventiva de condomínios e empresas',
      'Preparação para inspeção ou reforma da tubulação',
    ],
    process: [
      { title: 'Avaliação', text: 'Definimos a pressão e o bico adequados ao material e ao diâmetro do cano.' },
      { title: 'Hidrojateamento', text: 'O jato avança pela tubulação e arrasta os resíduos até a caixa de inspeção.' },
      { title: 'Retirada', text: 'Os resíduos são removidos das caixas para não voltarem à rede.' },
      { title: 'Teste', text: 'Verificamos o escoamento em toda a extensão limpa.' },
    ],
    causes: ['Crosta de gordura em redes de cozinha', 'Areia e lama em redes pluviais', 'Incrustações em tubulações antigas', 'Raízes finas nas juntas', 'Resíduos industriais'],
    faq: [
      { q: 'Hidrojateamento estraga o cano?', a: 'Não, quando feito com a pressão correta. Ajustamos a pressão e o bico conforme o material e a idade da tubulação.' },
      { q: 'Qual a diferença entre hidrojato e máquina rotativa?', a: 'A máquina rotativa abre passagem no entupimento; o hidrojato lava a tubulação por inteiro, o que evita que o problema volte logo.' },
      { q: 'Hidrojateamento serve para condomínio?', a: 'Sim, é o método mais indicado para limpeza preventiva de colunas e redes de condomínios.' },
    ],
  },
];

export const groups: Record<ServiceGroup, { title: string; text: string }> = {
  desentupimento: {
    title: 'Desentupimento',
    text: 'Ralos, vasos, canos, esgoto, redes e colunas de prédios.',
  },
  limpeza: {
    title: 'Limpa Fossa e Limpeza',
    text: 'Fossa séptica, caixa de gordura e hidrojateamento.',
  },
};

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
