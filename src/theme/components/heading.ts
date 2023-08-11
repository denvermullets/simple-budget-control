import { mode, StyleConfig, StyleFunctionProps } from "@chakra-ui/theme-tools";

// don't forget to update colors to ones you have defined in your color theme
export const simpleHeading: StyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode("purpleMoment.800", "darkMode.200")(props),
  }),

  variants: {
    sidebar: () => ({
      color: "white",
      size: "small",
    }),
  },
};
