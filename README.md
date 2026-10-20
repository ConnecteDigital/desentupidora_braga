# Desentupidora Braga – site institucional

Site estático em [Astro](https://astro.build) para a Desentupidora Braga (Porto Alegre e região).

## Rodar e publicar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site em dist/
```

Na Vercel: importar o repositório, framework **Astro**, sem configuração extra.

## Onde editar

| O quê | Arquivo |
|---|---|
| Telefone, WhatsApp, e-mail, CNPJ, redes, GTM | `src/data/site.ts` |
| Serviços (textos, sinais, etapas, FAQ) | `src/data/services.ts` |
| Cidades e bairros de cada cidade | `src/data/cities.ts` |
| Bairros de Porto Alegre | `src/data/bairros.ts` |
| Posts do blog (Markdown) | `src/content/blog/*.md` |
| Fotos | `src/assets/fotos/` (veja o `LEIA-ME.md` da pasta) |

## Páginas geradas

- `/` início · `/sobre/` · `/contato/` · `/area-de-atendimento/` · `/blog/`
- `/servicos/` e `/servicos/{servico}/` – 9 serviços
- `/desentupidora-em-{cidade}/` – 13 cidades
- `/desentupidora-em-porto-alegre/{bairro}/` – 50 bairros
- `/{servico}-em-{cidade}/` – serviço + cidade (ex.: `/limpeza-de-fossa-em-canoas/`)
- `/blog/{post}/`

## SEO incluído

- Título, descrição e canonical únicos por página; Open Graph
- Schema.org: `Plumber` (empresa), `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`
- `sitemap-index.xml` automático e `robots.txt`
- HTML estático (o Google lê o conteúdo sem depender de JavaScript)
- Imagens convertidas para WebP em vários tamanhos

## Rastreamento

Preencha `gtmId` em `src/data/site.ts`. O site envia para o `dataLayer`:
- `clique_contato` (`tipo_contato`: `whatsapp` ou `telefone`)
- `envio_formulario` (formulário de contato, que abre o WhatsApp)
