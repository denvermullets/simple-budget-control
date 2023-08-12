import { StyleConfig } from "@chakra-ui/theme-tools";

export const simpleProgress: StyleConfig = {
  variants: {
    simpleDefault: () => ({
      filledTrack: {
        bgColor: "#2ed3b7",
      },
      track: {
        bgColor: "gray",
      },
    }),
  },
};
