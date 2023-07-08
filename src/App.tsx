import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { UserContext } from "./providers/UserContext";
import MainBudget from "./components/mainBudget";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  if (UserContext === null) {
    // this should honestly never be null but idk
    return <div>Loading data</div>;
  }

  return (
    <BrowserRouter>
      <Box minH="100vh">
        <NavBar />
        <Routes>
          <Route path="/about" element={<div style={{ color: "white" }}>HI HI</div>} />
          <Route path="/monthly-recurring" element={<MainBudget initialTab={1} />} />
          <Route path="/credit-cards" element={<MainBudget initialTab={2} />} />
          <Route path="/loans" element={<MainBudget initialTab={3} />} />
          <Route path="/" element={<MainBudget initialTab={0} />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
