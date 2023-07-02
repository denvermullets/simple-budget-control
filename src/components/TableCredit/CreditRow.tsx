import { Flex, Td, Text, Tr } from "@chakra-ui/react";
import { CreditCard } from "../../models/localStorage.model";
import InputText from "../InputText";
import InputCurrency from "../InputCurrency";
import Balance from "../Balance";

type CreditRowProps = {
  creditCard: CreditCard;
  actionType: "EDIT_CREDIT_CARD";
};

const CreditRow: React.FC<CreditRowProps> = ({ creditCard, actionType }) => {
  const {
    id,
    source,
    balance,
    limit,
    // availableBalance,
    // utilization,
    timeToPayOff,
    minimumPayment,
    dueDate,
    // interest,
  } = creditCard;

  const additionalProps = { id, actionType };
  // TODO: not all columns are editable

  return (
    <Tr>
      <Td>
        <Flex minHeight="50px" align="center" minWidth="200px">
          <InputText initialValue={source} {...additionalProps} columnType="source" />
        </Flex>
      </Td>
      <Td>
        {/* add limit, can probably drop utilization */}
        <Flex minHeight="50px" align="center" minWidth="200px">
          <Balance balance={balance} limit={limit} />
        </Flex>
        {/* <InputCurrency
          initialValue={balance.toString()}
          columnType="balance"
          {...additionalProps}
        /> */}
      </Td>
      <Td>
        <Flex minHeight="50px" align="center" minWidth="20px">
          <InputCurrency
            initialValue={minimumPayment.toString()}
            columnType="originalAmount"
            {...additionalProps}
          />
        </Flex>
      </Td>

      <Td>
        <InputText initialValue={dueDate.toString()} {...additionalProps} columnType="source" />
      </Td>
      <Td>
        <InputText
          initialValue={timeToPayOff.toString()}
          {...additionalProps}
          columnType="source"
        />
      </Td>
      <Td>
        <Text>del</Text>
      </Td>
    </Tr>
  );
};

export default CreditRow;
