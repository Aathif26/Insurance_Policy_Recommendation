import { Box, Flex, Button, Image, Text, Heading } from "@chakra-ui/react";
import { IMAGES } from "../../assets";
import { Link } from "react-router-dom";

function NavBar() {
  const logo = <Image alt={"Logo"} maxHeight={50} src={IMAGES.Logo} />;
  return (
    <Flex
      w={"100%"}
      justifyContent={"space-between"}
      position={"fixed"}
      top={0}
      right={0}
      bg={"white"}
      borderBottom={"1px"}
      borderBottomColor={"gray.200"}
    >
      <Flex>
        <Box mt={1}>{logo}</Box>
        <Heading mt={2} mr={1} fontWeight={"bold"} fontSize={"25"}>
          Inc-Cover.AI
        </Heading>
      </Flex>
      <Button
        fontWeight={"bold"}
        mr={50}
        mt={2}
        bg={"red.600"}
        color={"white"}
        height={8}
        fontSize={"xs"}
        as={Link}
        to={"/insuranceform"}
      >
        <Text _hover={{ textColor: "black" }} textColor={"white"}>
          Get Recommendation
        </Text>
      </Button>
    </Flex>
  );
}

export default NavBar;
