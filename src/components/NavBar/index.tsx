import { Box, Flex, Text } from "@chakra-ui/react";

const NavBar: React.FC = () => {
  return (
    <Box
      // position="fixed"
      borderColor="black"
      borderWidth="1.5px"
      borderStyle="solid"
      alignItems={{ xl: "center" }}
      display="flex"
      minH="75px"
      paddingBottom="8px"
      paddingX={{
        sm: "15px",
        md: "10px",
      }}
      paddingTop="8px"
      width="100%"
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
        mb="0px"
      >
        <Box marginBottom={{ sm: "8px", md: "0px" }} marginRight={8}>
          <Text>Overview</Text>
        </Box>
        <Box marginBottom={{ sm: "8px", md: "0px" }} marginRight={8}>
          <Text>Recurring Charges</Text>
        </Box>
        <Box marginBottom={{ sm: "8px", md: "0px" }} marginRight={8}>
          <Text>Credit Cards</Text>
        </Box>
        <Box marginBottom={{ sm: "8px", md: "0px" }} marginRight={8}>
          <Text>Loans</Text>
        </Box>
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          Some other info
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
