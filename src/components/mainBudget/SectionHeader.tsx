import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const SectionHeader: React.FC = () => {
  return (
    <Flex justify="space-between" align="center">
      <VStack color="white" align="left">
        <Heading as="h3" size="lg">
          Credit Cards
        </Heading>
        <Text>Overall Credit Card Balances.</Text>
      </VStack>
      <Button>+ Add</Button>
    </Flex>
  );
};

export default SectionHeader;
