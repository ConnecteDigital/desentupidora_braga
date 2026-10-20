import type { ImageMetadata } from 'astro';

// Todas as fotos em src/assets/fotos são encontradas automaticamente.
// Chave = caminho sem extensão, ex.: "servicos/limpeza-de-fossa".
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/fotos/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const fotos = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const key = path.replace('/src/assets/fotos/', '').replace(/\.[a-z]+$/i, '');
  fotos.set(key, mod.default);
}

/** Retorna a primeira foto existente entre as chaves informadas. */
export function getFoto(...keys: (string | undefined)[]): ImageMetadata | undefined {
  for (const key of keys) {
    if (key && fotos.has(key)) return fotos.get(key);
  }
  return undefined;
}
