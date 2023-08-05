import { BackButton } from '@/components/BackButton'
import Card from '@/components/Card'
import Container from '@/components/Container'
import Text from '@/components/Text'
import { Result } from '@/models/apiInterface'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { getCharacterById } from './api/getCharacterById'

interface CharacterProps {
  character: Result
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string
  const character = await getCharacterById(id)
  return { props: { character } }
}

const Character: NextPage<CharacterProps> = ({ character }) => {
  const router = useRouter()

  return (
    <Container>
      <Text>Taller Women Who Code Santiago</Text>
      <Card
        key={character?.id}
        imageSrc={character?.image}
        title={character?.name}
        species={character?.species}
      />
      <BackButton
        onClick={() => {
          router.back()
        }}
      />
    </Container>
  )
}

export default Character
