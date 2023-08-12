import { extendTheme, theme as base } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { simpleText } from "./components/text";
import { simpleTable } from "./components/table";
import { simpleHeading } from "./components/heading";
import { simpleTabs } from "./components/tabs";
import { simpleButton } from "./components/button";
import { simpleCheckBox } from "./components/checkbox";
import { simpleProgress } from "./components/progress";
import { simpleInput } from "./components/input";

const customTheme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  components: {
    Button: { ...simpleButton },
    Checkbox: { ...simpleCheckBox },
    Heading: { ...simpleHeading },
    Input: { ...simpleInput },
    Progress: { ...simpleProgress },
    Table: { ...simpleTable },
    Tabs: { ...simpleTabs },
    Text: { ...simpleText },
  },
  ...globalStyles,
});

export default customTheme;
