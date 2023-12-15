import { extendTheme } from "@chakra-ui/react";
import Input from "./Input/Input";

const theme = extendTheme({
  colors: {
    bodyBackgroundColor: "#E8E8E8",
    bodyBackgroundSecondaryColor: "#6B7378",
    primaryColor : "#F15078"
  },
  styles: {
    global: {
      body: {
        bg: "bodyBackgroundColor",
      },
    },
  },
  components: {
    Input,
  },
});

export default theme;
