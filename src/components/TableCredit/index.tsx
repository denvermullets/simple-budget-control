import { Box, HStack, Icon, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { CreditCard } from "../../models/localStorage.model";
import CreditRow from "./CreditRow";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

type TableCreditProps = {
  data: CreditCard[];
};

type SortTypes = "source" | "balance" | "dueDate" | "minimumPayment";

const TableCredit: React.FC<TableCreditProps> = ({ data }) => {
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [sortType, setSortType] = useState<SortTypes | null>(null);
  const [sortedData, setSortedData] = useState<CreditCard[]>(data);

  useEffect(() => {
    switch (sortType) {
      case "balance":
        setSortedData(
          [...data].sort((a, b) => (sortAscending ? a.balance - b.balance : b.balance - a.balance))
        );
        break;
      case "dueDate":
        setSortedData(
          [...data].sort((a, b) => (sortAscending ? a.dueDate - b.dueDate : b.dueDate - a.dueDate))
        );
        break;
      case "minimumPayment":
        setSortedData(
          [...data].sort((a, b) =>
            sortAscending
              ? a.minimumPayment - b.minimumPayment
              : b.minimumPayment - a.minimumPayment
          )
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
        setSortedData(
          [...data].sort((a, b) => (sortAscending ? a.dueDate - b.dueDate : b.dueDate - a.dueDate))
        );
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
                setSortType("balance");
                setSortAscending(!sortAscending);
              }}
            >
              <HStack>
                <Text>Balance</Text>
                {sortType === "balance" && (
                  <Icon as={sortAscending ? IoMdArrowUp : IoMdArrowDown} boxSize={4} />
                )}
              </HStack>
            </Th>
            <Th
              style={{ cursor: "pointer" }}
              textTransform="none"
              maxWidth="10px"
              onClick={() => {
                setSortType("minimumPayment");
                setSortAscending(!sortAscending);
              }}
            >
              <HStack>
                <Text>Payment</Text>
                {sortType === "minimumPayment" && (
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
