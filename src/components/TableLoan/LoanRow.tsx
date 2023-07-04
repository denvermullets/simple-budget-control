import { Td, Text, Tr } from "@chakra-ui/react";
import { Loan } from "../../models/localStorage.model";
import InputText from "../InputText";
import InputCurrency from "../InputCurrency";
import Balance from "../Balance";

type LoanRowProps = {
  loan: Loan;
  actionType: "EDIT_LOAN";
};

const LoanRow: React.FC<LoanRowProps> = ({ loan, actionType }) => {
  const {
    id,
    source,
    balance,
    originalAmount,
    minimumPayment,
    dueDate,
    remainingPayments,
    endDate,
  } = loan;
  const additionalProps = { id, actionType };

  return (
    <Tr>
      <Td>
        <InputText initialValue={source} {...additionalProps} columnType="source" />
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
        <InputText initialValue={dueDate.toString()} {...additionalProps} columnType="source" />
      </Td>
      <Td>
        <Text>{Math.round(originalAmount / balance)}</Text>
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
        <Text>del</Text>
      </Td>
    </Tr>
  );
};

export default LoanRow;
