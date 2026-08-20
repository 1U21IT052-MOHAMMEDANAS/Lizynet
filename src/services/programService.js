import { programs } from '../data/programs.js'

export async function getPrograms() {
  return Promise.resolve(programs)
}

export async function getProgramBySlug(slug) {
  return Promise.resolve(programs.find((p) => p.slug === slug) ?? null)
}
