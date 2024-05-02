import { Formik } from "formik";
import { TermFormKeys } from "./formkeys";
import { Box, Button, Flex, Grid, Spinner, Textarea } from "@chakra-ui/react";
import {
  InputFormControl,
  SelectFormControl,
} from "../../../Components/FormComponent";
import formLabels from "../../../Components/UI/labels";
import { PostTerm } from "../../../Api/term";
import { useState } from "react";
import * as yup from "yup";

interface TermResponse {
  result: string;
}

export default function TermInsurance() {
  const [termResponse, setTermResponse] = useState<TermResponse | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  return (
    <>
      <Box>
        <Formik
          initialValues={{
            [TermFormKeys.NAME]: "",
            [TermFormKeys.AGE]: 0,
            [TermFormKeys.GENDER]: "",
            [TermFormKeys.HEALTH_CONDITION]: "",
            [TermFormKeys.SMOKING]: "",
            [TermFormKeys.ALCOHOLIC]: "",
            [TermFormKeys.NOMINES]: 0,
            [TermFormKeys.PROFESSION]: "",
            [TermFormKeys.LPA]: 0,
            [TermFormKeys.CLAIM_AMT]: "",
            [TermFormKeys.PREMIUM_AMT]: "",
            [TermFormKeys.SUB_TYPE]: "",
            [TermFormKeys.POLICY_DURATION]: "",
          }}
          validationSchema={yup.object().shape({
            [TermFormKeys.NAME]: yup.string().required("Name is Required"),
            [TermFormKeys.AGE]: yup.string().required("Age is Required"),
            [TermFormKeys.GENDER]: yup.string().required("Gender is Required"),
            [TermFormKeys.HEALTH_CONDITION]: yup
              .string()
              .required("Health Condition is Required"),
            [TermFormKeys.SMOKING]: yup
              .string()
              .required("Smoking is Required"),
            [TermFormKeys.ALCOHOLIC]: yup
              .string()
              .required("Alcoholic Condition is Required"),
            [TermFormKeys.NOMINES]: yup
              .string()
              .required("Nominies is Required"),
            [TermFormKeys.PROFESSION]: yup
              .string()
              .required("Profession is Required"),
            [TermFormKeys.LPA]: yup
              .string()
              .required("Annual Income is Required"),
            [TermFormKeys.CLAIM_AMT]: yup
              .string()
              .required("Claim Amount is Required"),
            [TermFormKeys.PREMIUM_AMT]: yup
              .string()
              .required("Premium Amount is Required"),
            [TermFormKeys.SUB_TYPE]: yup
              .string()
              .required("Subscription Type is Required"),
            [TermFormKeys.POLICY_DURATION]: yup
              .string()
              .required("Policy Duration is Required"),
          })}
          onSubmit={() => {}}
        >
          {({ handleSubmit, values, validateForm }) => (
            <Box position={"relative"}>
              <Flex px={[2, 4]} flexDirection={"column"} gap={[1, 3]}>
                <Grid
                  gridTemplateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
                  gap={[4, 5]}
                >
                  <InputFormControl
                    name={TermFormKeys.NAME}
                    required={true}
                    label={formLabels[TermFormKeys.NAME]}
                  />
                  <InputFormControl
                    name={TermFormKeys.AGE}
                    required={true}
                    label={formLabels[TermFormKeys.AGE]}
                    type="Age"
                  />
                  <SelectFormControl
                    name={TermFormKeys.GENDER}
                    required={true}
                    options={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                      { label: "others", value: "Other" },
                    ]}
                    label={formLabels[TermFormKeys.GENDER]}
                  />
                  <SelectFormControl
                    name={TermFormKeys.HEALTH_CONDITION}
                    required={true}
                    label={formLabels[TermFormKeys.HEALTH_CONDITION]}
                    options={[
                      { label: "Diabetes", value: "Diabetes" },
                      { label: "Hypertension", value: "Hypertension" },
                      { label: "Heart Disease", value: "Heart Disease" },
                      { label: "Asthma", value: "Asthma" },
                      { label: "Arthritis", value: "Arthritis" },
                      { label: "Others", value: "Other" },
                    ]}
                  />
                  <SelectFormControl
                    name={TermFormKeys.SMOKING}
                    required={true}
                    label={formLabels[TermFormKeys.SMOKING]}
                    options={[
                      { label: "Never Smoked", value: "Never Smoked" },
                      { label: "Former Smoked", value: "Former Smoked" },
                      { label: "Current Smoked", value: "Current Smoked" },
                    ]}
                  />
                  <SelectFormControl
                    name={TermFormKeys.ALCOHOLIC}
                    required={true}
                    label={formLabels[TermFormKeys.ALCOHOLIC]}
                    options={[
                      {
                        label: "Never Consumed Alcohol",
                        value: "Never Consumed Alcohol",
                      },
                      { label: "Social Drinker", value: "Social Drinker" },
                      { label: "Regular Drinker", value: "Regular Drinker" },
                      { label: "Former Alcoholic", value: "Former Alcoholic" },
                      {
                        label: "Current Alcoholic",
                        value: "Current Alcoholic",
                      },
                    ]}
                  />
                  <InputFormControl
                    name={TermFormKeys.NOMINES}
                    required={true}
                    label={formLabels[TermFormKeys.NOMINES]}
                    type="number"
                  />
                  <InputFormControl
                    name={TermFormKeys.PROFESSION}
                    required={true}
                    label={formLabels[TermFormKeys.PROFESSION]}
                  />
                  <InputFormControl
                    name={TermFormKeys.LPA}
                    required={true}
                    label={formLabels[TermFormKeys.LPA]}
                    type="Age"
                  />
                  <InputFormControl
                    name={TermFormKeys.CLAIM_AMT}
                    required={true}
                    label={formLabels[TermFormKeys.CLAIM_AMT]}
                  />
                  <InputFormControl
                    name={TermFormKeys.PREMIUM_AMT}
                    required={true}
                    label={formLabels[TermFormKeys.PREMIUM_AMT]}
                  />
                  <SelectFormControl
                    name={TermFormKeys.SUB_TYPE}
                    required={true}
                    label={formLabels[TermFormKeys.SUB_TYPE]}
                    options={[
                      { label: "Individual Plan", value: "Individual Plan" },
                      { label: "Family Plan", value: "Family Plan" },
                      { label: "Basic Plan", value: "Basic Plan" },
                      { label: "Standard Plan", value: "Standard Plan" },
                      { label: "Premium Plan", value: "Premium Plan" },
                      { label: "Corporate Plan", value: "Corporate Plan" },
                      { label: "Senior Plan", value: "Senior Plan" },
                    ]}
                  />
                  <SelectFormControl
                    name={TermFormKeys.POLICY_DURATION}
                    required={true}
                    label={formLabels[TermFormKeys.POLICY_DURATION]}
                    options={[
                      { label: "1 Year", value: "1 Year" },
                      { label: "5 Year", value: "5 Year" },
                      { label: "10 Year", value: "10 Year" },
                      { label: "20 Year", value: "20 Year" },
                    ]}
                  />
                </Grid>
              </Flex>
              <Flex
                mt={5}
                justifyContent={"flex-end"}
                position={"relative"}
                bottom={12}
                zIndex={1}
                px={[3, 4]}
              >
                <Button
                  onClick={async () => {
                    setloading(true);
                    const error = await validateForm();
                    handleSubmit();
                    if (Object.keys(error).length === 0) {
                      const res = await PostTerm(values);
                      if (res) {
                        setTermResponse(res);
                      }
                    }
                    setloading(false);
                  }}
                  bg={"green"}
                  color={"white"}
                  type="submit"
                  _hover={{
                    color: "black",
                    bg: "white",
                  }}
                  isDisabled={loading}
                >
                  {loading ? "Recommeding..." : "Recommend"}
                </Button>
              </Flex>
            </Box>
          )}
        </Formik>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" height="100px">
            <Spinner size="xl" />
          </Flex>
        ) : (
          termResponse && (
            <Box
              width={"full"}
              height={"md"}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              borderColor={"black"}
            >
              <Textarea value={termResponse.result} readOnly height={"full"} />
            </Box>
          )
        )}
      </Box>
    </>
  );
}
