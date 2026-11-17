import { mkdir, readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const publicDir = new URL('../public/', import.meta.url)
const archiveDir = 'images/woodblocks/archive'
const galleryWidths = [320, 640]
const sources = [
  { path: 'images/woodblocks/storms-passing.webp', widths: [384, 600] },
  { path: 'images/woodblocks/warm-evening-9x6.jpg', widths: galleryWidths },
  ...(await readdir(new URL(archiveDir, publicDir), { recursive: true }))
    .filter(path => /\.(avif|jpe?g|png|webp)$/i.test(path))
    .map(path => ({ path: join(archiveDir, path), widths: galleryWidths })),
]

for (const { path, widths } of sources) {
  const output = 'images/woodblock-previews/' + path.replace('images/woodblocks/', '')
  await mkdir(new URL(dirname(output), publicDir), { recursive: true })

  const input = new URL(path, publicDir)
  const image = sharp(fileURLToPath(input)).rotate()
  await Promise.all(widths.map(width =>
    image.clone().resize({ width }).webp({ quality: 74 })
      .toFile(fileURLToPath(new URL(`${output}-${width}.webp`, publicDir))),
  ))
}
