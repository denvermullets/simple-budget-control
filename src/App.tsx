import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "./providers/UserContext";
import MainBudget from "./components/mainBudget";

function App() {
  const { localBudgetData } = useContext<CurrentUserContext>(UserContext);

  if (UserContext === null) {
    // this should honestly never be null but idk
    return <div>Loading data</div>;
  }

  console.log("this is local", localBudgetData);
  return (
    <Box minH="100vh">
      <NavBar />
      <MainBudget />
    </Box>
  );
}

export default App;
