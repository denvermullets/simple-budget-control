import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import InputSimple from "./components/NavBar/InputSimple";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "./providers/UserContext";

function App() {
  const { localBudgetData, dispatch } = useContext<CurrentUserContext>(UserContext);

  if (UserContext === null) {
    // this should honestly never be null but idk
    return <div>Loading data</div>;
  }

  console.log("this is local", localBudgetData);
  return (
    <Box minH="100vh">
      <NavBar />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" bg="blue.500">
          <Flex gap={6}>
            <Text
              onClick={() =>
                dispatch({
                  type: "ADD_LOAN",
                  payload: {
                    source: "Bankzzzzzzy of America",
                    balance: 4323.97,
                    originalAmount: 23231195.45,
                    estimatedPayments: 13,
                    dueDate: 23,
                    endDate: "8/19/24",
                    interest: 20.74,
                  },
                })
              }
            >
              add loan
            </Text>
            <InputSimple initialValue="$23.04" />
          </Flex>
          <Flex gap={6}>
            <Text
              onClick={() =>
                dispatch({
                  type: "EDIT_LOAN",
                  payload: {
                    source: "Bank of America",
                    balance: 4.97,
                    originalAmount: 5.45,
                    estimatedPayments: 1,
                    dueDate: 2,
                    endDate: "8/19/24",
                    interest: 0.74,
                  },
                })
              }
            >
              edit loan
            </Text>
            <InputSimple initialValue="$23.04" />
          </Flex>
          <Flex gap={6}>
            <Text
              onClick={() =>
                dispatch({
                  type: "DELETE_LOAN",
                  payload: {
                    source: "Bank of America",
                    balance: 4.97,
                    originalAmount: 5.45,
                    estimatedPayments: 1,
                    dueDate: 2,
                    endDate: "8/19/24",
                    interest: 0.74,
                  },
                })
              }
            >
              delete loan
            </Text>
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
