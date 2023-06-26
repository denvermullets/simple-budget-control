import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "./providers/UserContext";
import RowRecurring from "./components/RowRecurring";

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
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" bg="blue.500">
          {localBudgetData.monthlyRecurring.map((monthly) => (
            <RowRecurring
              key={monthly.id}
              id={monthly.id}
              amount={monthly.amount}
              dueDate={monthly.dueDate}
              source={monthly.source}
            />
          ))}
          {/* <Flex gap={6}>
            <Text>add loan</Text>
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
          </Flex> */}
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_RECURRING",
                payload: {
                  id: "monthlyRecurring_00002",
                  source: "Netflix",
                  dueDate: 23,
                  amount: 19.99,
                },
              })
            }
          >
            +
          </Button>
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
