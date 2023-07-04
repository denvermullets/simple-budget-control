import { Flex, Td, Text, Tr } from "@chakra-ui/react";
import { MonthlyRecurring } from "../../models/localStorage.model";
import InputText from "../InputText";
import InputCurrency from "../InputCurrency";

type RecurringRowProps = {
  monthlyRecurring: MonthlyRecurring;
  actionType: "EDIT_RECURRING";
};

const RecurringRow: React.FC<RecurringRowProps> = ({ monthlyRecurring, actionType }) => {
  const { id, source, dueDate, amount } = monthlyRecurring;
  const additionalProps = { id, actionType };

  return (
    <Tr>
      <Td>
        <Flex minHeight="50px" align="center" minWidth="200px">
          <InputText initialValue={source} {...additionalProps} columnType="source" />
        </Flex>
      </Td>
      <Td>
        <Flex minHeight="50px" align="center" minWidth="20px">
          <InputCurrency
            initialValue={amount.toString()}
            columnType="amount"
            {...additionalProps}
          />
        </Flex>
      </Td>
      <Td>
        <InputText initialValue={dueDate.toString()} {...additionalProps} columnType="dueDate" />
      </Td>
      <Td>
        <Text>del</Text>
      </Td>
    </Tr>
  );
};

export default RecurringRow;
