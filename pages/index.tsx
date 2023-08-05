import { ICharacter } from "@/models";
import useSWR from "swr";
import { useRouter } from "next/router";
import { URL_API } from "@/helpers/api";
import { fetcher } from "@/helpers/fetcher";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Text from "@/components/Text";

function Home() {
  const { data } = useSWR(URL_API, fetcher);

  const characters: Array<ICharacter> = data?.results;

  const router = useRouter();

  const onClickHandler = (id: string) => {
    router.push(`/character?id=${id}`);
  };

  return (
    <Container>
      <Text>Taller Women Who Code Santiago</Text>
      <Grid>
        {characters?.map((character) => (
          <Card
            key={character.id}
            imageSrc={character.image}
            title={character.name}
            onClick={() => onClickHandler(character.id)}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
