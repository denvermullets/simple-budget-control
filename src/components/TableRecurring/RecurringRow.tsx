import { Flex, HStack, IconButton, Td, Tr } from "@chakra-ui/react";
import { MonthlyRecurring } from "../../models/localStorage.model";
import InputText from "../InputText";
import InputCurrency from "../InputCurrency";
import CheckboxPending from "../CheckboxPending";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import { FiTrash2 } from "react-icons/fi";

type RecurringRowProps = {
  monthlyRecurring: MonthlyRecurring;
  actionType: "EDIT_RECURRING";
};

const RecurringRow: React.FC<RecurringRowProps> = ({ monthlyRecurring, actionType }) => {
  const { dispatch } = useContext<CurrentUserContext>(UserContext);
  const { id, source, dueDate, amount, pending } = monthlyRecurring;
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
        <Flex align="center" minWidth="20px">
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
        <IconButton
          icon={<FiTrash2 />}
          variant="tertiary"
          aria-label="Delete credit card"
          onClick={() =>
            dispatch({
              type: "DELETE_RECURRING",
              payload: monthlyRecurring,
            })
          }
        />
      </Td>
    </Tr>
  );
};

export default RecurringRow;
