import { Divider, Heading, VStack, Image, Tabs, TabList, Tab, Text } from "@chakra-ui/react";
import creditImage from "../../assets/stack.png";
import { Link } from "react-router-dom";
import SideBarTop from "./SideBarTop";
import SideBarBottom from "./SideBarBottom";
import PayPeriod from "../PayPeriod";

type SideBarProps = {
  currentTab: number;
  setCurrentTab: (currentTab: number) => void;
};

// active color: color="#2ed3b7"

const SideBar: React.FC<SideBarProps> = ({ currentTab, setCurrentTab }) => {
  return (
    <VStack color="white" align="left" marginBottom={20} marginLeft={4}>
      <Heading as="h1" variant="sidebar">
        Simple Budget Control
      </Heading>
      <Text variant="sidebar">Manage your monthly spending.</Text>
      <Divider marginTop={2} />
      <Image src={creditImage} objectFit="cover" alt="Devin Booker's Credit Cards" marginTop={4} />
      <Tabs index={currentTab} onChange={(index) => setCurrentTab(index)} size="sm" marginTop={2}>
        <TabList>
          <Tab fontSize="0.8rem">
            <Link to="/">Overview</Link>
          </Tab>
          <Tab fontSize="0.8rem">
            <Link to="/monthly-recurring">Recurring</Link>
          </Tab>
          <Tab fontSize="0.8rem">
            <Link to="/credit-cards">Credit Cards</Link>
          </Tab>
          <Tab fontSize="0.8rem">
            <Link to="/loans">Loans</Link>
          </Tab>
        </TabList>
      </Tabs>
      <SideBarTop />
      <Divider marginTop={2} />
      <SideBarBottom />
      <Divider marginTop={2} />
      <PayPeriod />
    </VStack>
  );
};

export default SideBar;
