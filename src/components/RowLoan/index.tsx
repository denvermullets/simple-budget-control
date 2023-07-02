import { Flex } from "@chakra-ui/react";
import InputText from "../InputText";
import { Loan } from "../../models/localStorage.model";
import InputCurrency from "../InputCurrency";
import InputPercentage from "../InputPercentage";

type RowLoanProps = {
  loan: Loan;
  actionType: "EDIT_LOAN";
};

const RowLoan: React.FC<RowLoanProps> = ({ loan, actionType }) => {
  const {
    id,
    source,
    balance,
    originalAmount,
    remainingPayments,
    estimatedPayments,
    dueDate,
    endDate,
    interest,
    minimumPayment,
  } = loan;
  const additionalProps = { id, actionType };

  // TODO: not all of these columns are editable

  return (
    <Flex gap={6}>
      <InputText initialValue={source} {...additionalProps} columnType="source" />
      <InputCurrency initialValue={balance} columnType="balance" {...additionalProps} />
      <InputCurrency
        initialValue={originalAmount}
        columnType="originalAmount"
        {...additionalProps}
      />
      <InputText
        initialValue={estimatedPayments.toString()}
        {...additionalProps}
        columnType="source"
      />
      <InputCurrency
        initialValue={minimumPayment}
        columnType="minimumPayment"
        {...additionalProps}
      />
      <InputText initialValue={dueDate.toString()} {...additionalProps} columnType="source" />

      {remainingPayments && (
        <InputText
          initialValue={remainingPayments.toString()}
          {...additionalProps}
          columnType="source"
        />
      )}

      {endDate && (
        <InputText initialValue={endDate.toString()} {...additionalProps} columnType="endDate" />
      )}
      {interest && (
        <InputPercentage
          initialValue={interest.toString()}
          columnType="interest"
          {...additionalProps}
        />
      )}
    </Flex>
  );
};

export default RowLoan;
