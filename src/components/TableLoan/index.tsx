import { Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Loan } from "../../models/localStorage.model";
import LoanRow from "./LoanRow";

type TableLoanProps = {
  data: Loan[];
};

const TableLoan: React.FC<TableLoanProps> = ({ data }) => {
  return (
    <Table variant="simpleTable">
      <Thead>
        <Tr>
          <Th>
            {/* <HStack spacing="3"> */}
            {/* <HStack spacing="1"> */}
            <Text>Source</Text>
            {/* <Icon as={IoArrowDown} color="fg.muted" boxSize="4" /> */}
            {/* </HStack> */}
            {/* </HStack> */}
          </Th>
          <Th>Balance</Th>
          <Th>Full Amount</Th>
          <Th>Est. Months</Th>
          <Th>Payment</Th>
          <Th>Due</Th>
          <Th>Months</Th>
          <Th>End Date</Th>
          <Th>Interest</Th>
          <Th>del</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((loan) => (
          <LoanRow key={loan.id} loan={loan} actionType="EDIT_LOAN" />
        ))}
      </Tbody>
    </Table>
  );
};

export default TableLoan;
