import { Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { CreditCard } from "../../models/localStorage.model";
import CreditRow from "./CreditRow";

type TableCreditProps = {
  data: CreditCard[];
};

const TableCredit: React.FC<TableCreditProps> = ({ data }) => {
  return (
    <Table variant="simpleTable">
      <Thead>
        <Tr>
          <Th textTransform="none">
            {/* <HStack spacing="3"> */}
            {/* <HStack spacing="1"> */}
            <Text>Source</Text>
            {/* <Icon as={IoArrowDown} color="fg.muted" boxSize="4" /> */}
            {/* </HStack> */}
            {/* </HStack> */}
          </Th>
          <Th textTransform="none">Balance</Th>
          <Th textTransform="none" maxWidth="10px">
            Payment
          </Th>
          <Th textTransform="none">Due</Th>
          <Th textTransform="none">Est.</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((creditCard) => (
          <CreditRow key={creditCard.id} creditCard={creditCard} actionType="EDIT_CREDIT_CARD" />
        ))}
      </Tbody>
    </Table>
  );
};

export default TableCredit;
