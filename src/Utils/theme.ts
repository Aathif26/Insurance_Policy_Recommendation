import { extendTheme, defineStyleConfig, createStandaloneToast } from "@chakra-ui/react";
const { ToastContainer, toast } = createStandaloneToast();

export {
  ToastContainer,
  toast
};
export const colors = {
  brand: {
    grey: "#999",
    orange: "#F7A200",
    blue: "#2351C9",
    green: "#2ea01b",
    greyborder: "#fafafa",
  },
};
const FormLabel = defineStyleConfig({
  baseStyle: {
    color: "black",
    fontSize: "xs",
    fontWeight: "normal",
    mb: "1"
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "none",
  },
});

const FormErrorMessage = defineStyleConfig({
  baseStyle: {
    fontSize: "xs",
  },
});
export const BaseStyle = {
  borderRadius: "none",
  borderColor: "brand.grey",
  borderWidth: "1px",
  variant: "filled",
  bg: "brand.greyborder",
  fontSize : ["xs", "sm", "sm"]
};

// add style for tabs hover selected and unselected
const Tabs = defineStyleConfig({
  baseStyle: {
    tab: {
      _selected: {
        color: "white",
        bg: "brand.blue",
      },
      _hover: {
        color: "white",
        bg: "brand.blue",
      },
      color: "black",
      bg: "gray.300",
    },
  },
}); 


export const theme = extendTheme({
  components: {
    FormLabel,
    Button,
    FormErrorMessage,
    Tabs
  },
  colors,
  styles: {
    global: {
      body: {
        fontFamily: "Montserrat, sans-serif",
      },
    },
  },
});
