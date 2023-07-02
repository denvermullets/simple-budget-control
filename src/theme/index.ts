import { extendTheme, theme as base } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { simpleText } from "./components/text";
import { simpleTable } from "./components/table";

const customTheme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  components: {
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
