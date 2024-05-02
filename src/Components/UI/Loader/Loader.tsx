import { VStack, Text } from "@chakra-ui/react";
import "./loader.css";

export function Loader() {
  return (
    <VStack alignItems={"center"} justifyContent={"center"}>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Text color={"white"} fontSize={"lg"} fontWeight={"bold"}>Loading</Text>
    </VStack>
  );
}
