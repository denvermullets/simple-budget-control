import { extendTheme, theme as base } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { simpleText } from "./components/text";
import { simpleTable } from "./components/table";
import { simpleHeading } from "./components/heading";

const customTheme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  components: {
    Heading: { ...simpleHeading },
    Text: {
      ...simpleText,
    },
    Table: {
      ...simpleTable,
    },
  },
  ...globalStyles,
});

export default customTheme;
