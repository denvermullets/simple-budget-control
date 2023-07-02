import { Box, Heading, Progress, Stack, Text } from "@chakra-ui/react";

type BalanceProps = {
  limit: number;
  balance: number;
};

const Balance: React.FC<BalanceProps> = ({ limit, balance }) => {
  return (
    <Box width="100%">
      <Stack direction="row" align="baseline">
        <Heading size={{ base: "sm", md: "md" }}>{balance}</Heading>
        <Text fontWeight="semibold" color="fg.muted">
          / {limit}
        </Text>
      </Stack>
      <Progress
        marginTop={2}
        value={(balance / limit) * 100}
        size="xs"
        borderRadius={2}
        bg="grey"
        color="white"
      />
    </Box>
  );
};

export default Balance;
