import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import useChuck from "./useChuck";
import { useNavigate } from "react-router-dom";

//h={calc(100vh-64px )}

export default function Hero() {
  const navigate = useNavigate();
  const { data, isLoading } = useChuck();
  //console.log("Data: ", data);
  return (
    <Flex
      background={`
        linear-gradient(rgba(0,0,0,0.7),
        rgba(0,0,0,0.7)),
        url(https://images.unsplash.com/photo-1529663297269-6d349ec39b57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
      w={"full"}
      backgroundSize={"cover"}
      h={"{calc(100vh-64px)}"}
    >
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 182 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={"white"}
          >
            Bienvenidos a <br />
            <Text as={"span"} color={"green.400"}>
              Game Sale
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Una web creada para encontrar ofertas y tambien contamos algunos
            chistes: {isLoading ? "Cargando.." : data?.value}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={() => navigate("/games")}
            >
              Comienza Ahora
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}
