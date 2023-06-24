import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import InputSimple from "./components/NavBar/InputSimple";

function App() {
  return (
    <Box minH="100vh">
      <NavBar />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" bg="blue.500">
          <Flex gap={6}>
            <Text>boxy</Text>
            <InputSimple initialValue="$23.04" />
          </Flex>
          <Flex gap={6}>
            <Text>boxy</Text>
            <InputSimple initialValue="$23.04" />
          </Flex>
          <Flex gap={6}>
            <Text>boxy</Text>
            <InputSimple initialValue="$23.04" />
          </Flex>
          <Flex gap={6}>
            <Text>boxy</Text>
            <InputSimple initialValue="$23.04" />
          </Flex>
          <Flex gap={6}>
            <Text>boxy</Text>
            <InputSimple initialValue="$23.04" />
          </Flex>
        </GridItem>
        <GridItem w="100%" bg="blue.500" />
        <GridItem w="100%" bg="blue.500" />
        <GridItem w="100%" bg="blue.500" />
        <GridItem w="100%" bg="blue.500" />
      </Grid>
      <Box padding={8}>
        <Text>Some other information</Text>
      </Box>
    </Box>
  );
}

export default App;
