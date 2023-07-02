import { Box, Divider, Grid, VStack } from "@chakra-ui/react";
import SideBar from "./SideBar";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

import TableCredit from "../TableCredit";
import SectionHeader from "./SectionHeader";

const MainBudget = () => {
  const { localBudgetData } = useContext<CurrentUserContext>(UserContext);

  return (
    <Grid templateColumns="400px 1px 1fr" gap={8} color="white" marginTop={8} marginLeft={8}>
      <SideBar />
      <Divider orientation="vertical" />
      <Box maxWidth="100%" paddingRight={12}>
        <VStack color="white" align="left">
          <SectionHeader />
          <Divider marginTop={2} />
          <Box
            marginTop={4}
            // margin={12}
            border="0.5px solid"
            borderColor="gray.600"
            borderRadius={8}
            sx={{ overflow: "hidden" }}
          >
            <TableCredit data={localBudgetData.creditCards} />
            {/* <TableLoan data={localBudgetData.loans} /> */}
          </Box>
        </VStack>
      </Box>
    </Grid>
  );
};

export default MainBudget;
