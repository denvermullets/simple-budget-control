import { StyleConfig } from "@chakra-ui/theme-tools";

export const simpleTable: StyleConfig = {
  baseStyle: () => ({}),

  variants: {
    simpleTable: () => ({
      tbody: {
        color: "grey",
        backgroundColor: "#242636",
      },
      th: {
        color: "grey",
        fontSize: "0.75rem",
        backgroundColor: "#242636",
        fontWeight: "normal",
      },
    }),
  },
};
