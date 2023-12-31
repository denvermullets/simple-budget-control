import { Box, Progress, Stack, Text } from "@chakra-ui/react";
import InputCurrency from "../InputCurrency";

type BalanceProps = {
  id: number;
  limit: number;
  balance: number;
  columnType: "originalAmount" | "limit";
  actionType: "EDIT_CREDIT_CARD" | "EDIT_LOAN";
};

const Balance: React.FC<BalanceProps> = ({ limit, balance, id, actionType, columnType }) => {
  return (
    <Box width="100%">
      <Stack direction="row" align="baseline">
        <InputCurrency
          initialValue={balance.toString()}
          id={id}
          columnType="balance"
          actionType={actionType}
        />
        <Text> / </Text>
        <InputCurrency
          initialValue={limit.toString()}
          id={id}
          columnType={columnType}
          actionType={actionType}
        />
      </Stack>
      <Progress
        marginTop={2}
        value={(balance / limit) * 100}
        size="xs"
        borderRadius={2}
        variant="simpleDefault"
      />
    </Box>
  );
};

export default Balance;
