import { Td, Text, Tr } from "@chakra-ui/react";
import { Loan } from "../../models/localStorage.model";
import InputText from "../InputText";
import InputCurrency from "../InputCurrency";
import InputPercentage from "../InputPercentage";

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
    interest,
  } = loan;
  const additionalProps = { id, actionType };
  // TODO: not all columns are editable

  return (
    <Tr>
      <Td>
        <InputText initialValue={source} {...additionalProps} columnType="source" />
      </Td>
      <Td>
        <InputCurrency
          initialValue={balance.toString()}
          columnType="balance"
          {...additionalProps}
        />
      </Td>
      <Td>
        <InputCurrency
          initialValue={originalAmount.toString()}
          columnType="originalAmount"
          {...additionalProps}
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
        <InputText
          initialValue={remainingPayments.toString()}
          {...additionalProps}
          columnType="source"
        />
      </Td>
      <Td>
        <InputText initialValue={endDate.toString()} {...additionalProps} columnType="endDate" />
      </Td>
      <Td>
        <InputPercentage
          initialValue={interest.toString()}
          columnType="interest"
          {...additionalProps}
        />
      </Td>
      <Td>
        <Text>del</Text>
      </Td>
    </Tr>
  );
};

export default LoanRow;
