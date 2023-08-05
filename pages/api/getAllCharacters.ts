import { URL_API } from '@/helpers/api'
import { Result } from '@/models/apiInterface'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function getAllCharacters() {
  try {
    const response = await fetch(URL_API)
    if (!response.ok) throw new Error('Error al consultar la API')
    const data = await response.json()
    const characters: Result[] = data.results
    return characters
  } catch (error) {
    console.log('Error en el fetch', error)
  }
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getAllCharacters()
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}
