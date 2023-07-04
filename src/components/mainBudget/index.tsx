import { Box, Divider, Grid, VStack } from "@chakra-ui/react";
import SideBar from "./SideBar";
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import TableCredit from "../TableCredit";
import SectionHeader from "./SectionHeader";
import TableLoan from "../TableLoan";
import TableRecurring from "../TableRecurring";

type MainBudgetProps = {
  initialTab: number;
};

const MainBudget: React.FC<MainBudgetProps> = ({ initialTab }) => {
  const { localBudgetData } = useContext<CurrentUserContext>(UserContext);
  const [currentTab, setCurrentTab] = useState<number>(initialTab || 0);

  useEffect(() => {
    setCurrentTab(initialTab);
  }, [initialTab]);

  const renderComponent = (tab: number) => {
    switch (tab) {
      case 0:
        // overview
        return (
          <>
            <TableRecurring data={localBudgetData.monthlyRecurring} />
            <TableCredit data={localBudgetData.creditCards} />
            <TableLoan data={localBudgetData.loans} />
          </>
        );
      case 1:
        // monthly recurring
        return <TableRecurring data={localBudgetData.monthlyRecurring} />;
      case 2:
        // credit cards
        return <TableCredit data={localBudgetData.creditCards} />;
      case 3:
        // loans
        return <TableLoan data={localBudgetData.loans} />;
      default:
        return <TableCredit data={localBudgetData.creditCards} />;
    }
  };

  return (
    <Grid templateColumns="400px 1px 1fr" gap={8} color="white" marginTop={8} marginLeft={8}>
      <SideBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Divider orientation="vertical" />
      <Box maxWidth="100%" paddingRight={12}>
        <VStack color="white" align="left">
          <SectionHeader currentTab={currentTab} />
          <Divider marginTop={2} />
          {renderComponent(currentTab)}
        </VStack>
      </Box>
    </Grid>
  );
};

export default MainBudget;
