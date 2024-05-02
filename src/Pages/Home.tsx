import {
  Box,
  HStack,
  Heading,
  Image,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { lazy } from "react";
import { IMAGES } from "../assets";
import { GiChoice, GiThink } from "react-icons/gi";
import { FcViewDetails } from "react-icons/fc";
import { MdCompare } from "react-icons/md";

const Layout = lazy(() => import("../Components/UI/Layout"));
const homeimg = <Image alt={"Home_img"} src={IMAGES.img1} height={["md"]} />;

export default function Home() {
  return (
    <>
      <Layout />
      <Flex flexDir={"column"} alignItems="center">
        <Box mt={10} bgColor={"blue.500"} w={"full"} p={6}>
          <HStack alignItems="center" justifyContent="space-between" w={"100%"}>
            <Box>
              <Heading size="lg" color={"white"} textAlign="center">
                Get the right protection at the right price - compare insurance
                policies for personalized coverage.
              </Heading>
            </Box>
            <Box w={"50%"} display="flex" justifyContent="flex-end">
              {homeimg}
            </Box>
          </HStack>
        </Box>
        <Box>
          <HStack>
            <Box>{homeimg}</Box>
            <Box textAlign="center" py={10}>
              <Heading fontSize="4xl" fontWeight="bold" mb={6}>
                Discover the Perfect Insurance Policy with AI Technology
              </Heading>
              <Text fontSize="xl" mb={8}>
                Our AI-powered system provides accurate and customized policy
                recommendations to meet your unique needs.
              </Text>
              <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                <Box
                  bg="white"
                  rounded="lg"
                  p={6}
                  boxShadow="lg"
                  mx={4}
                  mb={8}
                  maxWidth="400px"
                >
                  <Text fontWeight="bold" color="blue.600" fontSize="xl" mb={4}>
                    Accurate
                  </Text>
                  <Text fontSize="lg">
                    Our AI system analyzes your data to provide accurate policy
                    recommendations tailored to you.
                  </Text>
                </Box>
                <Box
                  bg="white"
                  rounded="lg"
                  p={6}
                  boxShadow="lg"
                  mx={4}
                  mb={8}
                  maxWidth="400px"
                >
                  <Text fontWeight="bold" color="blue.600" fontSize="xl" mb={4}>
                    Customized
                  </Text>
                  <Text fontSize="lg">
                    We understand your specific requirements and offer
                    personalized policy recommendations just for you.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </HStack>
        </Box>
        <Box bgColor={"blue.500"} w={"full"} p={6} mb={10}>
          <Heading textAlign={"center"} color={"white"} fontSize="3xl" mb={8}>
            How the PlatForm Works
          </Heading>
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box
              bg="white"
              rounded="xl"
              p={8}
              boxShadow="lg"
              mx={4}
              mb={8}
              maxWidth="400px"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
            >
              <Icon as={GiThink} color={"blue"} fontSize={"3xl"} alignContent={"center"}/>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="blue.500"
                textAlign="center"
              >
                Step 1: Choose
              </Text>
              <Text fontSize="lg" textAlign="center">
                Select from a variety of insurance policies tailored to your
                needs.
              </Text>
            </Box>
            <Box
              bg="white"
              rounded="xl"
              p={8}
              boxShadow="lg"
              mx={4}
              mb={8}
              maxWidth="400px"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
            >
              <Icon as={FcViewDetails} color={"black"} fontSize={"3xl"}/>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="blue.500"
                textAlign="center"
              >
                Step 2: Information
              </Text>
              <Text fontSize="lg" textAlign="center">
                Provide necessary information to get personalized
                recommendations.
              </Text>
            </Box>
            <Box
              bg="white"
              rounded="xl"
              p={8}
              boxShadow="lg"
              mx={4}
              mb={8}
              maxWidth="400px"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
            >
              <Icon as={MdCompare} fontSize={"3xl"} color={"blue"}/>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="blue.500"
                textAlign="center"
              >
                Step 3: Compare
              </Text>
              <Text fontSize="lg" textAlign="center">
                Compare different policy options to find the best fit for you.
              </Text>
            </Box>
            <Box
              bg="white"
              rounded="xl"
              p={8}
              boxShadow="lg"
              mx={4}
              mb={8}
              maxWidth="400px"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
            >
              <Icon as={GiChoice} fontSize={"3xl"} color={"blue"} alignContent={"center"}/>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="blue.500"
                textAlign="center"
              >
                Step 4: Decide
              </Text>
              <Text fontSize="lg" textAlign="center">
                Make an informed decision and choose the policy that suits you
                best.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>{" "}
    </>
  );
}
