import { StyleConfig } from "@chakra-ui/theme-tools";

export const simpleTable: StyleConfig = {
  baseStyle: () => ({}),

  variants: {
    simpleTable: () => ({
      tbody: {
        color: "grey",
        // backgroundColor: "#1e1e2c",
        backgroundColor: "#242636",
      },
      th: {
        color: "grey",
        fontSize: 12,
        // backgroundColor: "#1e1e2c",
        backgroundColor: "#242636",
        fontWeight: "normal",
      },
    }),
  },
};
