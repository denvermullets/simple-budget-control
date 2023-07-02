import { Box, Progress, Stack, Text } from "@chakra-ui/react";
import InputCurrency from "../InputCurrency";

type BalanceProps = {
  id: string;
  limit: number;
  balance: number;
};

const Balance: React.FC<BalanceProps> = ({ limit, balance, id }) => {
  return (
    <Box width="100%">
      <Stack direction="row" align="baseline">
        <InputCurrency
          initialValue={balance}
          id={id}
          columnType="balance"
          actionType="EDIT_CREDIT_CARD"
        />
        <Text> / </Text>
        <InputCurrency
          initialValue={limit}
          id={id}
          columnType="limit"
          actionType="EDIT_CREDIT_CARD"
        />
      </Stack>
      <Progress
        marginTop={2}
        value={(balance / limit) * 100}
        size="xs"
        borderRadius={2}
        bg="grey"
      />
    </Box>
  );
};

export default Balance;
