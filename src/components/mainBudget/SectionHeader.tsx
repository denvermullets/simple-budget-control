import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import { headerData } from "../../models/localStorage.model";
import { NewActions } from "../../reducers/simpleBudgetReducer";

type SectionHeaderProps = {
  currentTab: number;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ currentTab }) => {
  const { dispatch } = useContext<CurrentUserContext>(UserContext);

  // casting because it's kind of finicky. basically i know it'll always be defined and the 'type' is
  // always going to be correct. perhaps an enum would've been better? will have to reflect
  const action: NewActions | undefined = headerData[currentTab]?.action as NewActions | undefined;

  return (
    <Flex justify="space-between" align="center">
      <VStack color="white" align="left">
        <Heading as="h3" size="lg">
          {headerData[currentTab].heading}
        </Heading>
        <Text>{headerData[currentTab].subHeading}</Text>
      </VStack>
      {action && currentTab !== 0 && <Button onClick={() => dispatch(action)}>+ Add</Button>}
    </Flex>
  );
};

export default SectionHeader;
