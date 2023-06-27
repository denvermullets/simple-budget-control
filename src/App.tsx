import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "./providers/UserContext";
import RowRecurring from "./components/RowRecurring";
import RowCreditCard from "./components/RowCreditCard";
import RowLoan from "./components/RowLoan";

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
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_RECURRING",
                payload: {
                  id: new Date().toString(),
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
        <GridItem w="100%" bg="blue.500">
          {localBudgetData.creditCards.map((creditCard) => (
            <RowCreditCard
              creditCard={creditCard}
              actionType="EDIT_CREDIT_CARD"
              key={creditCard.id}
            />
          ))}
        </GridItem>
      </Grid>
      <br />
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%" bg="blue.500">
          {localBudgetData.loans.map((loan) => (
            <RowLoan loan={loan} actionType="EDIT_LOAN" key={loan.id} />
          ))}
        </GridItem>
      </Grid>
      <Box padding={8}>
        <Text>Some other information</Text>
      </Box>
    </Box>
  );
}

export default App;
