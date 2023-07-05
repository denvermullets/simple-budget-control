import { Flex, HStack, Td, Text, Tr } from "@chakra-ui/react";
import { CreditCard } from "../../models/localStorage.model";
import InputText from "../InputText";
import InputCurrency from "../InputCurrency";
import Balance from "../Balance";
import CheckboxPending from "../CheckboxPending";

type CreditRowProps = {
  creditCard: CreditCard;
  actionType: "EDIT_CREDIT_CARD";
};

const CreditRow: React.FC<CreditRowProps> = ({ creditCard, actionType }) => {
  const { id, source, balance, limit, minimumPayment, dueDate } = creditCard;
  const additionalProps = { id, actionType };

  return (
    <Tr>
      <Td>
        <Flex minHeight="50px" align="center" minWidth="200px">
          <HStack spacing="3">
            <CheckboxPending {...additionalProps} initialValue={creditCard.pending} />
            <InputText initialValue={source} {...additionalProps} columnType="source" />
          </HStack>
        </Flex>
      </Td>
      <Td>
        <Flex minHeight="50px" align="center" minWidth="200px">
          <Balance balance={balance} limit={limit} {...additionalProps} columnType="limit" />
        </Flex>
      </Td>
      <Td>
        <Flex minHeight="50px" align="center" minWidth="20px">
          <InputCurrency
            initialValue={minimumPayment.toString()}
            columnType="minimumPayment"
            {...additionalProps}
          />
        </Flex>
      </Td>
      <Td>
        <InputText initialValue={dueDate.toString()} {...additionalProps} columnType="dueDate" />
      </Td>
      <Td>
        <Text>{Math.round(limit / balance)}</Text>
      </Td>
      <Td>
        <Text>del</Text>
      </Td>
    </Tr>
  );
};

export default CreditRow;
