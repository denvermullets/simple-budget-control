import { HStack, IconButton, Td, Text, Tr } from "@chakra-ui/react";
import { Loan } from "../../models/localStorage.model";
import InputText from "../InputText";
import InputCurrency from "../InputCurrency";
import Balance from "../Balance";
import CheckboxPending from "../CheckboxPending";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import { FiTrash2 } from "react-icons/fi";

type LoanRowProps = {
  loan: Loan;
  actionType: "EDIT_LOAN";
};

const LoanRow: React.FC<LoanRowProps> = ({ loan, actionType }) => {
  const { dispatch } = useContext<CurrentUserContext>(UserContext);
  const {
    id,
    source,
    balance,
    originalAmount,
    minimumPayment,
    dueDate,
    remainingPayments,
    endDate,
    pending,
  } = loan;
  const additionalProps = { id, actionType };

  return (
    <Tr>
      <Td>
        <HStack spacing="3">
          <CheckboxPending
            {...additionalProps}
            initialValue={pending}
            key={id.toString() + pending}
          />
          <InputText initialValue={source} {...additionalProps} columnType="source" />
        </HStack>
      </Td>
      <Td>
        <Balance
          {...additionalProps}
          balance={balance}
          columnType="originalAmount"
          limit={originalAmount}
        />
      </Td>
      <Td>
        <InputCurrency
          initialValue={minimumPayment.toString()}
          columnType="minimumPayment"
          {...additionalProps}
        />
      </Td>
      <Td>
        <InputText initialValue={dueDate.toString()} {...additionalProps} columnType="dueDate" />
      </Td>
      <Td>
        <Text>{Math.round(balance / minimumPayment) || 0}</Text>
      </Td>
      {/* this is Actual Payments remaining (optional?) */}
      <Td>
        <InputText
          initialValue={remainingPayments.toString()}
          {...additionalProps}
          columnType="remainingPayments"
        />
      </Td>
      <Td>
        <InputText initialValue={endDate.toString()} {...additionalProps} columnType="endDate" />
      </Td>
      <Td>
        <IconButton
          icon={<FiTrash2 />}
          variant="tertiary"
          aria-label="Delete credit card"
          onClick={() =>
            dispatch({
              type: "DELETE_LOAN",
              payload: loan,
            })
          }
        />
      </Td>
    </Tr>
  );
};

export default LoanRow;
