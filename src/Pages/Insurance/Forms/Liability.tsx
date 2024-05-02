import { Box, Button, Flex, Grid, Spinner, Textarea } from "@chakra-ui/react";
import { Formik } from "formik";
import { LiabilityFormKeys } from "./formkeys";
import {
  InputFormControl,
  SelectFormControl,
} from "../../../Components/FormComponent";
import formLabels from "../../../Components/UI/labels";
import { PostLiability } from "../../../Api/liability";
import { useState } from "react";
// import FormMultiSelect from "../../../Components/FormComponent/MultiSelect";

interface liabilityResponse {
  result: string;
}

export default function LiabilityInsurance() {
  const [liabilityResponse, setliabilityResponse] =
    useState<liabilityResponse | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  return (
    <>
      <Box>
        <Formik
          initialValues={{
            [LiabilityFormKeys.NAME]: "",
            [LiabilityFormKeys.ADDRESS]: "",
            [LiabilityFormKeys.LOCATION_TYPE]: "",
            [LiabilityFormKeys.MOBILE]: "",
            [LiabilityFormKeys.BUSINESS_TYPE]: "",
            [LiabilityFormKeys.BUSINESS_DESC]: "",
            [LiabilityFormKeys.SERVICES]: "",
            [LiabilityFormKeys.TARGET]: "",
            [LiabilityFormKeys.CLAIM_HISTORY]: "",
            [LiabilityFormKeys.CLAIM_TYPE]: "",
            [LiabilityFormKeys.CLAIM_AMT]: "",
            [LiabilityFormKeys.RISK_ASS]: "",
            [LiabilityFormKeys.RESPONSE_PLAN]: "",
            [LiabilityFormKeys.BUILDING_AGE]: "",
            [LiabilityFormKeys.CONSTRUCTION_MTRL]: "",
            [LiabilityFormKeys.PROTECTION]: "",
            [LiabilityFormKeys.CONTROL_MEASURES]: "",
            [LiabilityFormKeys.BUILDING_TYPE]: "",
            [LiabilityFormKeys.POLICY_TYPE]: "",
            [LiabilityFormKeys.POLICY_PERIOD]: "",
            [LiabilityFormKeys.LIMIT]: "",
            [LiabilityFormKeys.PROPERTY]: "",
            [LiabilityFormKeys.PROPERTY_VALUE]: "",
            [LiabilityFormKeys.LIABILITY_EXPOSURE]: "",
            [LiabilityFormKeys.REVENUE]: "",
            [LiabilityFormKeys.ENV_CONCERN]: "",
            [LiabilityFormKeys.REGULATORY_ISSUE]: "",
            [LiabilityFormKeys.SPECIFIC_RISK]: "",
          }}
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
                    name={LiabilityFormKeys.NAME}
                    required={true}
                    label={formLabels[LiabilityFormKeys.NAME]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.ADDRESS}
                    required={true}
                    label={formLabels[LiabilityFormKeys.ADDRESS]}
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.LOCATION_TYPE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.LOCATION_TYPE]}
                    options={[
                      { label: "Urban", value: "Urbaned" },
                      { label: "Suburban", value: "Suburban" },
                      { label: "Rural", value: "Rural" },
                    ]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.MOBILE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.MOBILE]}
                    type="Age"
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.BUSINESS_TYPE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.BUSINESS_TYPE]}
                    options={[
                      { label: "Retail", value: "Retail" },
                      { label: "Service Industry", value: "Service Industry" },
                      { label: "Manufacturing", value: "Manufacturing" },
                      { label: "Healthcare", value: "Healthcare" },
                      { label: "Hospitality", value: "Hospitality" },
                      { label: "Technology", value: "Technology" },
                      { label: "Construction", value: "Construction" },
                    ]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.BUSINESS_DESC}
                    required={true}
                    label={formLabels[LiabilityFormKeys.BUSINESS_DESC]}
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.SERVICES}
                    required={true}
                    label={formLabels[LiabilityFormKeys.SERVICES]}
                    options={[
                      { label: "Customer-facing", value: "Customer-facing" },
                      {
                        label: "Business-to-Business",
                        value: "Business-to-Business",
                      },
                      { label: "Manufacturing", value: "Manufacturing" },
                      { label: "Warehousing", value: "Warehousing" },
                    ]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.TARGET}
                    required={true}
                    label={formLabels[LiabilityFormKeys.TARGET]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.CLAIM_HISTORY}
                    required={true}
                    label={formLabels[LiabilityFormKeys.CLAIM_HISTORY]}
                    type="number"
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.CLAIM_TYPE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.CLAIM_TYPE]}
                    options={[
                      { label: "Property Damage", value: "Property Damage" },
                      { label: "Personal Injury", value: "Personal Injury" },
                      {
                        label: "Product Liability",
                        value: "Product Liability",
                      },
                      {
                        label: "Professional Liability",
                        value: "Professional Liability",
                      },
                      {
                        label: "Employer's Liability",
                        value: "Employer's Liability",
                      },
                      {
                        label: "General Liability",
                        value: "General Liability",
                      },
                    ]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.CLAIM_AMT}
                    required={true}
                    label={formLabels[LiabilityFormKeys.CLAIM_AMT]}
                    type="Age"
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.RISK_ASS}
                    required={true}
                    label={formLabels[LiabilityFormKeys.RISK_ASS]}
                    options={[
                      { label: "High Risk", value: "High Risk" },
                      { label: "Medium Risk", value: "Medium Risk" },
                      { label: "Low Risk", value: "Low Risk" },
                    ]}
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.RESPONSE_PLAN}
                    required={true}
                    label={formLabels[LiabilityFormKeys.RESPONSE_PLAN]}
                    options={[
                      {
                        label: "Immediate Response",
                        value: "Immediate Response",
                      },
                      {
                        label: "Standard Response",
                        value: "Standard Response",
                      },
                      { label: "No Defined Plan", value: "No Defined Plan" },
                    ]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.BUILDING_AGE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.BUILDING_AGE]}
                    type="number"
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.CONSTRUCTION_MTRL}
                    required={true}
                    label={formLabels[LiabilityFormKeys.CONSTRUCTION_MTRL]}
                    options={[
                      { label: "Wood", value: "Wood" },
                      { label: "Brick", value: "Brick" },
                      { label: "Concrete", value: "Concrete" },
                      { label: "Steel", value: "Steel" },
                      { label: "Composite", value: "Composite" },
                    ]}
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.PROTECTION}
                    required={true}
                    label={formLabels[LiabilityFormKeys.PROTECTION]}
                    options={[
                      { label: "Fire Protection", value: "Fire Protection" },
                      { label: "Security Systems", value: "Security Systems" },
                      {
                        label: "Security Personnel",
                        value: "Security Personnel",
                      },
                      {
                        label: "Surveillance Cameras",
                        value: "Surveillance Cameras",
                      },
                      { label: "Emergency Exits", value: "Emergency Exits" },
                    ]}
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.CONTROL_MEASURES}
                    required={true}
                    label={formLabels[LiabilityFormKeys.CONTROL_MEASURES]}
                    options={[
                      { label: "Safety Protocols", value: "Safety Protocols" },
                      {
                        label: "Employee Training",
                        value: "Employee Training",
                      },
                      {
                        label: "Compliance with Regulations",
                        value: "Compliance with Regulations",
                      },
                      {
                        label: "Equipment Maintenance",
                        value: "Equipment Maintenance",
                      },
                      {
                        label: "Hazard Identification",
                        value: "Hazard Identification",
                      },
                    ]}
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.BUILDING_TYPE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.BUILDING_TYPE]}
                    options={[
                      { label: "Single Story", value: "Single Story" },
                      { label: "Multi-story", value: "Multi-story" },
                      { label: "Warehouse", value: "Warehouse" },
                      { label: "Office Building", value: "Office Building" },
                      { label: "Mixed-use", value: "Mixed-use" },
                    ]}
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.POLICY_TYPE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.POLICY_TYPE]}
                    options={[
                      {
                        label: "General Liability",
                        value: "General Liability",
                      },
                      {
                        label: "Product Liability",
                        value: "Product Liability",
                      },
                      {
                        label: "Professional Liability",
                        value: "Professional Liability",
                      },
                      {
                        label: "Employer's Liability",
                        value: "Employer's Liability",
                      },
                    ]}
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.POLICY_PERIOD}
                    required={true}
                    label={formLabels[LiabilityFormKeys.POLICY_PERIOD]}
                    options={[
                      { label: "1 Year", value: "1 Year" },
                      { label: "2 Years", value: "2 Years" },
                      { label: "3 Years", value: "3 Years" },
                      { label: "5 Years", value: "5 Years" },
                    ]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.LIMIT}
                    required={true}
                    label={formLabels[LiabilityFormKeys.LIMIT]}
                    type="Age"
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.PROPERTY}
                    required={true}
                    label={formLabels[LiabilityFormKeys.PROPERTY]}
                    options={[
                      { label: "Owned", value: "Owned" },
                      { label: "rented", value: "rented" },
                    ]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.PROPERTY_VALUE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.PROPERTY_VALUE]}
                    type="Age"
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.LIABILITY_EXPOSURE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.LIABILITY_EXPOSURE]}
                    options={[
                      { label: "Low", value: "Low" },
                      { label: "Medium", value: "Medium" },
                      { label: "High", value: "High" },
                    ]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.REVENUE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.REVENUE]}
                    type="Age"
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.ENV_CONCERN}
                    required={true}
                    label={formLabels[LiabilityFormKeys.ENV_CONCERN]}
                    options={[
                      { label: "Low", value: "Low" },
                      { label: "Moderate", value: "Moderate" },
                      { label: "High", value: "High" },
                    ]}
                  />
                  <SelectFormControl
                    name={LiabilityFormKeys.REGULATORY_ISSUE}
                    required={true}
                    label={formLabels[LiabilityFormKeys.REGULATORY_ISSUE]}
                    options={[
                      { label: "None", value: "None" },
                      { label: "Minimal", value: "Minimal" },
                      { label: "Moderate", value: "Moderate" },
                      { label: "High", value: "High" },
                    ]}
                  />
                  <InputFormControl
                    name={LiabilityFormKeys.SPECIFIC_RISK}
                    required={true}
                    label={formLabels[LiabilityFormKeys.SPECIFIC_RISK]}
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
                    console.log("Button Clicked");
                    setloading(true);
                    const error = await validateForm();
                    console.log("Validation Errors");
                    handleSubmit();
                    if (Object.keys(error).length === 0) {
                      console.log("Submitting form...");
                      const res = await PostLiability(values);
                      if (res) {
                        setliabilityResponse(res);
                        console.log("API response", res);
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
          liabilityResponse && (
            <Box
              width={"full"}
              height={"md"}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              borderColor={"black"}
            >
              <Textarea
                value={liabilityResponse.result}
                readOnly
                height={"full"}
              />
            </Box>
          )
        )}
      </Box>
    </>
  );
}
