export const getProgressColor = (value: number) => {
  if (value >= 120) return '#30c750' // Vert fluo
  if (value >= 100) return '#4ee44e' // Vert
  if (value >= 60) return '#ffeb3b' // Jaune
  if (value >= 1) return '#ff9800' // Orange
  return '#f44336' // Rouge (pour les stats nulles)
}

export const calculateMaxStatValue = (baseValue: number, statName: string) => {
  return statName === 'hp'
    ? Math.floor(31 + 2 * baseValue + (252 / 4) * 1 + 110)
    : Math.floor((31 + 2 * baseValue + (252 / 4) * 1 + 5) * 1.1)
}

export const calculateMinStatValue = (baseValue: number, statName: string) => {
  return statName === 'hp'
    ? Math.floor(2 * baseValue + 110)
    : Math.floor((2 * baseValue + 5) * 0.9)
}

export const extractPokemonIdFromUrl = (url: string): number | null => {
  const match = url.match(/\/(\d+)\/?$/)
  return match ? parseInt(match[1], 10) : null
}

export const normalizePokemonName = (name: string) => {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/♀/g, '-f')
    .replace(/♂/g, '-m')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const beautifyPokemonName = (name: string) => {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/♀/g, '-f')
    .replace(/♂/g, '-m')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
    .replace(/\b\w/g, char => char.toUpperCase())
}