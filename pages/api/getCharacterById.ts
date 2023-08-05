import { URL_API } from '@/helpers/api'
import { Result } from '@/models/apiInterface'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function getCharacterById(id: string) {
  try {
    const response = await fetch(`${URL_API}/${id}`)
    if (!response.ok) throw new Error('Error al consultar la API')
    const character: Result = await response.json()
    return character
  } catch (error) {
    console.log('Error en el fetch', error)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = req.query['id'] as string
    const data = await getCharacterById(id)
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}
