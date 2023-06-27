import { Flex } from "@chakra-ui/react";
import InputText from "../InputText";
import { CreditCard } from "../../models/localStorage.model";
import InputCurrency from "../InputCurrency";
import InputPercentage from "../InputPercentage";

type RowCreditCardProps = {
  creditCard: CreditCard;
  actionType: "EDIT_CREDIT_CARD";
};

const RowCreditCard: React.FC<RowCreditCardProps> = ({ creditCard, actionType }) => {
  const {
    id,
    source,
    balance,
    limit,
    availableBalance,
    utilization,
    timeToPayOff,
    dueDate,
    minimumPayment,
    interest,
  } = creditCard;
  const additionalProps = { id, actionType };

  return (
    <Flex gap={6}>
      <InputText initialValue={source} {...additionalProps} />
      <InputCurrency initialValue={balance.toString()} columnType="balance" {...additionalProps} />
      <InputCurrency initialValue={limit.toString()} columnType="limit" {...additionalProps} />
      <InputCurrency
        initialValue={availableBalance.toString()}
        columnType="availableBalance"
        {...additionalProps}
      />
      <InputPercentage
        initialValue={utilization.toString()}
        columnType="utilization"
        {...additionalProps}
      />
      <InputText initialValue={timeToPayOff.toString()} {...additionalProps} />
      <InputText initialValue={dueDate.toString()} {...additionalProps} />
      <InputCurrency
        initialValue={minimumPayment.toString()}
        columnType="minimumPayment"
        {...additionalProps}
      />
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

export default RowCreditCard;
