import { StyleConfig } from "@chakra-ui/theme-tools";

export const simpleNumberInput: StyleConfig = {
  baseStyle: {
    field: {
      border: "1px solid",
      borderRadius: "16px",
    },
  },

  variants: {
    numberInput: () => ({
      field: {
        backgroundColor: "#1e1e2c",
        borderColor: "#2ed3b7",
        _focus: {
          borderColor: "#2ed3b7",
        },
      },
    }),
  },
};
