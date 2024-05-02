import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  css,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { TabLabel, InsuranceForm } from "./FindForm";
import { FORMS } from "../../Utils/Const";

function Insurance() {
  const [searchParams, setSearchParams] = useSearchParams();

  const SelectedTabColor = (id : number) => {
    if(id%2 == 0) {
      return "#86A7FC";
    } else return "#86A7FC";
  }
  return (
    <Box
      bg="gray.200"
      width="100%"
      height="100%"
      position="fixed"
      top="0"
      left="0" 
      overflowY={"auto"}
    >
      <VStack spacing={4} align="stretch" p={[3, 4]}>
        {/* Title Section */}
        <Flex
          justify="space-between"
          align="center"
          bg="white"
          p={4}
          rounded="md"
        >
          <Text fontWeight="bold" fontSize="xl" color="black">
            Insurance Forms
          </Text>
        </Flex>

        {/* Tabs Section */}
        <Box bg="white" rounded="md" boxShadow="md" overflow="hidden">
          <Tabs
            variant="enclosed"
            isLazy
            defaultIndex={parseInt(searchParams.get("form") ?? "0")}
            onChange={(index) => setSearchParams("?form=" + index)}
          >
            <TabList
              overflowX="auto"
              css={css({
                scrollbarWidth: "none",
                "::-webkit-scrollbar": { display: "none" },
                "-webkit-overflow-scrolling": "touch",
              })}
            >
              {Object.keys(TabLabel).map((key) => {
                const id = parseInt(key);
                return (
                  <Tab
                    key={id}
                    borderColor="gray.400"
                    _selected={{
                      textDecoration: "underline",
                      fontWeight: "bold",
                      borderColor: "black",
                      bg: SelectedTabColor(id),
                      textColor: "white"
                    }}
                    _hover={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    {TabLabel[id as FORMS]}
                  </Tab>
                );
              })}
            </TabList>
            <TabPanels>
              {Object.keys(TabLabel).map((key) => {
                const formid = parseInt(key) as FORMS;
                return (
                  <TabPanel key={formid} p={4}>
                    {InsuranceForm[formid] ? (
                      InsuranceForm[formid]
                    ) : (
                      <Text>No Form Available</Text>
                    )}
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </Box>
  );
}

export default Insurance;
