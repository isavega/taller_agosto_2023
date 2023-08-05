import useSWR from "swr";
import { useRouter } from "next/router";
import { URL_API } from "@/helpers/api";
import { fetcher } from "@/helpers/fetcher";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Text from "@/components/Text";

function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data: character } = useSWR(`${URL_API}/${id}`, fetcher);

  return (
    <Container>
      <Text>Taller Women Who Code Santiago</Text>
      <Card
        key={character?.id}
        imageSrc={character?.image}
        title={character?.name}
      />
    </Container>
  );
}

export default Character;
