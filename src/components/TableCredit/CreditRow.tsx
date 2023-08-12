import { Flex, HStack, IconButton, Td, Text, Tr } from "@chakra-ui/react";
import { CreditCard } from "../../models/localStorage.model";
import InputText from "../InputText";
import InputCurrency from "../InputCurrency";
import Balance from "../Balance";
import CheckboxPending from "../CheckboxPending";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import { FiTrash2 } from "react-icons/fi";

type CreditRowProps = {
  creditCard: CreditCard;
  actionType: "EDIT_CREDIT_CARD";
};

const CreditRow: React.FC<CreditRowProps> = ({ creditCard, actionType }) => {
  const { dispatch } = useContext<CurrentUserContext>(UserContext);
  const { id, source, balance, limit, minimumPayment, dueDate, pending } = creditCard;
  const additionalProps = { id, actionType };

  return (
    <Tr>
      <Td>
        <Flex align="center" minWidth="200px">
          <HStack spacing="3">
            <CheckboxPending
              {...additionalProps}
              initialValue={pending}
              key={id.toString() + pending}
            />
            <InputText initialValue={source} {...additionalProps} columnType="source" />
          </HStack>
        </Flex>
      </Td>
      <Td>
        <Flex align="center" minWidth="200px">
          <Balance balance={balance} limit={limit} {...additionalProps} columnType="limit" />
        </Flex>
      </Td>
      <Td>
        <Flex align="center" minWidth="20px">
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
        <Text>{Math.round(balance / minimumPayment) || 0}</Text>
      </Td>
      <Td>
        <IconButton
          icon={<FiTrash2 />}
          variant="tertiary"
          aria-label="Delete credit card"
          onClick={() =>
            dispatch({
              type: "DELETE_CREDIT_CARD",
              payload: creditCard,
            })
          }
        />
      </Td>
    </Tr>
  );
};

export default CreditRow;
