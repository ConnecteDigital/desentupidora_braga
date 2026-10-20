// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.
export const site = {
  name: 'Desentupidora Braga',
  shortName: 'Braga',
  domain: 'desentupidorabraga.com.br',
  url: 'https://desentupidorabraga.com.br',
  phone: '5551985515822',
  phoneDisplay: '(51) 98551-5822',
  phoneHref: 'tel:+5551985515822',
  // Preencher quando o cliente enviar
  email: '',
  cnpj: '',
  instagram: '',
  facebook: '',
  googleBusiness: '',
  city: 'Porto Alegre',
  state: 'RS',
  region: 'Porto Alegre e Região Metropolitana',
  arrival: '20 minutos',
  // IDs de rastreamento (deixe vazio para desativar)
  gtmId: '',
};

export function whatsappLink(message?: string) {
  const text =
    message ?? `Olá! Vim pelo site da ${site.name} e preciso de um atendimento.`;
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(text)}`;
}

export const highlights = [
  { icon: 'clock', title: 'Atendimento 24 horas', text: 'Todos os dias, inclusive fins de semana e feriados.' },
  { icon: 'bolt', title: `Chegamos em ${site.arrival}`, text: 'Equipes de plantão espalhadas pela região.' },
  { icon: 'siren', title: 'Atendimento emergencial', text: 'Prioridade para vazamentos e transbordamentos.' },
  { icon: 'truck', title: 'Equipamento profissional', text: 'Máquinas rotativas, hidrojato e caminhão limpa fossa.' },
];
