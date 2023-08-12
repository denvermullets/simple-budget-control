import { Box, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Loan } from "../../models/localStorage.model";
import LoanRow from "./LoanRow";

type TableLoanProps = {
  data: Loan[];
};

const TableLoan: React.FC<TableLoanProps> = ({ data }) => {
  const sortedData = data.sort((a, b) => a.dueDate - b.dueDate);

  return (
    <Box
      marginTop={4}
      border="0.5px solid"
      borderColor="gray.600"
      borderRadius={8}
      sx={{ overflow: "hidden" }}
    >
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
            <Th textTransform="none">Payment</Th>
            <Th textTransform="none">Due</Th>
            <Th textTransform="none">Est.</Th>
            <Th textTransform="none">Months</Th>
            <Th textTransform="none">End Date</Th>
            {/* optional Interest? */}
            {/* <Th>Interest</Th> */}
            <Th textTransform="none"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((loan) => (
            <LoanRow key={loan.id} loan={loan} actionType="EDIT_LOAN" />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableLoan;
