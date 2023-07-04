import { Divider, Heading, VStack, Image, Tabs, TabList, Tab, Text, Flex } from "@chakra-ui/react";
import creditImage from "../../assets/stack.png";
import { Link } from "react-router-dom";

type SideBarProps = {
  currentTab: number;
  setCurrentTab: (currentTab: number) => void;
};

const SideBar: React.FC<SideBarProps> = ({ currentTab, setCurrentTab }) => {
  return (
    <VStack color="white" align="left" marginBottom={20} marginLeft={4}>
      <Heading as="h3" size="lg">
        Simple Budget Control
      </Heading>
      <Text>Manage your monthly spending.</Text>
      <Divider marginTop={2} />
      <Image src={creditImage} objectFit="cover" alt="Devin Booker's Credit Cards" marginTop={4} />
      <Tabs index={currentTab} onChange={(index) => setCurrentTab(index)} size="sm" marginTop={12}>
        <TabList>
          <Tab fontSize="14">
            <Link to="/">Overview</Link>
          </Tab>
          <Tab fontSize="14">
            <Link to="/monthly-recurring">Recurring</Link>
          </Tab>
          <Tab fontSize="14">
            <Link to="/credit-cards">Credit Cards</Link>
          </Tab>
          <Tab fontSize="14">
            <Link to="/loans">Loans</Link>
          </Tab>
        </TabList>
      </Tabs>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text size="xs">Current amount free</Text>
        <Heading as="h3" size="md">
          $34,390.00
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text size="xs">Charges pending</Text>
        <Heading as="h3" size="md">
          $34,390.00
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text size="xs">Amount remaining</Text>
        <Heading as="h3" size="md">
          $34,390.00
        </Heading>
      </Flex>
      <Divider marginTop={2} />
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text size="xs">Recurring charges</Text>
        <Heading as="h3" size="md">
          $34,390.00
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text size="xs">Credit card payments</Text>
        <Heading as="h3" size="md">
          $34,390.00
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text size="xs">Loan payments</Text>
        <Heading as="h3" size="md">
          $34,390.00
        </Heading>
      </Flex>
    </VStack>
  );
};

export default SideBar;
