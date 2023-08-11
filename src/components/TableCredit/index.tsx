import { Box, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { CreditCard } from "../../models/localStorage.model";
import CreditRow from "./CreditRow";

type TableCreditProps = {
  data: CreditCard[];
};

const TableCredit: React.FC<TableCreditProps> = ({ data }) => {
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
          <Tr backgroundColor="#242636">
            <Th textTransform="none">
              {/* <HStack spacing="3"> */}
              {/* <Checkbox /> */}
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
          {sortedData.map((creditCard) => (
            <CreditRow key={creditCard.id} creditCard={creditCard} actionType="EDIT_CREDIT_CARD" />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableCredit;
