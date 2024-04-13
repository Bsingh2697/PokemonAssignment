import { extendTheme } from "native-base";

export const theme = extendTheme({
  fontConfig: {
    Orbitron: {
      400: {
        normal: "Orbitron-Regular",
      },
      500: {
        normal: "Orbitron-Medium",
      },
      600: {
        normal: "Orbitron-Bold",
      },
      800: {
        normal: 'Orbitron-ExtraBold',
      },
    },
    Poppins:{
      300: {
        normal: "Poppins-Light",
      },
      500: {
        normal: "Poppins-Regular",
      },
      600: {
        normal: "Poppins-Medium",
      },
      700: {
        normal: "Poppins-SemiBold",
      },
      800: {
        normal: 'Poppins-Bold',
      },
    }
  },

  fonts: {
    primary: "Orbitron",
    secondary: "Poppins",
  },
});