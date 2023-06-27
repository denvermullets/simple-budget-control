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

  return (
    <Flex gap={6}>
      <InputText initialValue={source} {...additionalProps} />
      <InputCurrency initialValue={balance.toString()} columnType="balance" {...additionalProps} />
      <InputCurrency
        initialValue={originalAmount.toString()}
        columnType="originalAmount"
        {...additionalProps}
      />
      <InputText initialValue={estimatedPayments.toString()} {...additionalProps} />
      <InputCurrency
        initialValue={minimumPayment.toString()}
        columnType="minimumPayment"
        {...additionalProps}
      />
      <InputText initialValue={dueDate.toString()} {...additionalProps} />

      {remainingPayments && (
        <InputText initialValue={remainingPayments.toString()} {...additionalProps} />
      )}

      {endDate && <InputText initialValue={endDate.toString()} {...additionalProps} />}
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
