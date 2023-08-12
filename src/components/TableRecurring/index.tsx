import { Box, HStack, Icon, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { MonthlyRecurring } from "../../models/localStorage.model";
import RecurringRow from "./RecurringRow";
import { useEffect, useState } from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

type TableRecurringProps = {
  data: MonthlyRecurring[];
};

type SortTypes = "source" | "amount" | "dueDate";

const TableRecurring: React.FC<TableRecurringProps> = ({ data }) => {
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [sortType, setSortType] = useState<SortTypes | null>(null);
  const [sortedData, setSortedData] = useState<MonthlyRecurring[]>(data);

  useEffect(() => {
    switch (sortType) {
      case "dueDate":
        setSortedData(
          [...data].sort((a, b) => (sortAscending ? a.dueDate - b.dueDate : b.dueDate - a.dueDate))
        );
        break;
      case "amount":
        setSortedData(
          [...data].sort((a, b) => (sortAscending ? a.amount - b.amount : b.amount - a.amount))
        );
        break;
      case "source":
        setSortedData(
          [...data].sort((a, b) =>
            sortAscending ? a.source.localeCompare(b.source) : b.source.localeCompare(a.source)
          )
        );
        break;
      default:
        break;
    }
  }, [sortType, sortAscending, data]);

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
            <Th
              style={{ cursor: "pointer" }}
              textTransform="none"
              onClick={() => {
                setSortType("source");
                setSortAscending(!sortAscending);
              }}
            >
              <HStack>
                <Text>Source</Text>
                {sortType === "source" && (
                  <Icon as={sortAscending ? IoMdArrowUp : IoMdArrowDown} boxSize={4} />
                )}
              </HStack>
            </Th>
            <Th
              style={{ cursor: "pointer" }}
              textTransform="none"
              onClick={() => {
                setSortType("amount");
                setSortAscending(!sortAscending);
              }}
            >
              <HStack>
                <Text>Amount</Text>
                {sortType === "amount" && (
                  <Icon as={sortAscending ? IoMdArrowUp : IoMdArrowDown} boxSize={4} />
                )}
              </HStack>
            </Th>
            <Th
              style={{ cursor: "pointer" }}
              textTransform="none"
              onClick={() => {
                setSortType("dueDate");
                setSortAscending(!sortAscending);
              }}
            >
              <HStack>
                <Text>Due</Text>
                {sortType === "dueDate" && (
                  <Icon as={sortAscending ? IoMdArrowUp : IoMdArrowDown} boxSize={4} />
                )}
              </HStack>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((monthlyRecurring) => (
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
