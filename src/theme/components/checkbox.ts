import { StyleConfig } from "@chakra-ui/theme-tools";

export const simpleCheckBox: StyleConfig = {
  baseStyle: {
    control: {
      borderRadius: "sm",
      _focus: {
        boxShadow: "none",
      },
    },
  },
  variants: {
    simple: () => ({
      control: {
        _hover: {
          _notChecked: {
            bg: "#5fe9d0",
          },
          _checked: {
            bg: "#5fe9d0",
            borderColor: "#2ed3b7",
          },
        },
        _checked: {
          bg: "#2ed3b7",
          borderColor: "#2ed3b7",
        },
      },
    }),
  },
};
