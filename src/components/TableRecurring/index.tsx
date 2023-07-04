import { Box, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { MonthlyRecurring } from "../../models/localStorage.model";
import RecurringRow from "./RecurringRow";

type TableRecurringProps = {
  data: MonthlyRecurring[];
};

const TableRecurring: React.FC<TableRecurringProps> = ({ data }) => {
  return (
    <Box
      marginTop={4}
      border="0.5px solid"
      borderColor="gray.600"
      borderRadius={8}
      sx={{ overflow: "hidden" }}
      maxWidth="800px"
    >
      <Table variant="simpleTable">
        <Thead>
          <Tr>
            <Th textTransform="none">
              <Text>Source</Text>
            </Th>
            <Th textTransform="none" maxWidth="10px">
              Amount
            </Th>
            <Th textTransform="none">Due</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((monthlyRecurring) => (
            <RecurringRow
              key={monthlyRecurring.id}
              monthlyRecurring={monthlyRecurring}
              actionType="EDIT_RECURRING"
            />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableRecurring;
