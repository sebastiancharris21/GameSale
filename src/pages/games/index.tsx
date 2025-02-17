import { SimpleGrid } from "@chakra-ui/react";
import GamesCard from "./GamesCard";
import useGames from "./useGames";

export default function Games() {
  const { data, isLoading } = useGames();
  return (
    <SimpleGrid p={"20px"} columns={[2, null, 3]} spacing={"40px"}>
      {isLoading && "Cargando..."}
      {data?.map((game) => (
        <GamesCard key={game.gameID} game={game} />
      ))}
    </SimpleGrid>
  );
}
