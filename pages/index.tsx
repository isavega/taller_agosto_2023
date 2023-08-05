import Card from '@/components/Card'
import Container from '@/components/Container'
import Grid from '@/components/Grid'
import Text from '@/components/Text'
import { Result } from '@/models/apiInterface'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { getAllCharacters } from './api/getAllCharacters'

interface HomeProps {
  characters: Result[]
}

export const getStaticProps: GetStaticProps = async () => {
  const characters = await getAllCharacters()

  return { props: { characters } }
}

const Home: NextPage<HomeProps> = ({ characters }) => {
  const router = useRouter()
  const onClickHandler = (id: number) => {
    router.push(`/${id}`)
  }

  return (
    <Container>
      <Text>Taller Women Who Code Santiago</Text>
      <Grid>
        {characters?.map((character) => (
          <Card
            key={character.id}
            imageSrc={character.image}
            title={character.name}
            species={character.species}
            onClick={() => onClickHandler(character.id)}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default Home
