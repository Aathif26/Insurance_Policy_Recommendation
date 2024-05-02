import { Box, Button, Flex, Grid, Spinner, Textarea } from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";
import { FireFormKeys } from "./formkeys";
import { PostFire } from "../../../Api/fire";
import {
  InputFormControl,
  SelectFormControl,
} from "../../../Components/FormComponent";
import formLabels from "../../../Components/UI/labels";
import * as yup from "yup";

interface fireResponse {
  result: string;
}

export default function FireInsurance() {
  const [fireResponse, setFireResponse] = useState<fireResponse | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  return (
    <>
      <Box>
        <Formik
          initialValues={{
            [FireFormKeys.FIRST_NAME]: "",
            [FireFormKeys.LAST_NAME]: "",
            [FireFormKeys.ADDRESS]: "",
            [FireFormKeys.CITY]: "",
            [FireFormKeys.STATE]: "",
            [FireFormKeys.ZIPCODE]: "",
            [FireFormKeys.PROPERTY_TYPE]: "",
            [FireFormKeys.YEAR_BUILT]: "",
            [FireFormKeys.SQUARE_FEET]: "",
            [FireFormKeys.NUM_STOREIS]: 0,
            [FireFormKeys.CONSTRUCTION_TYPE]: "",
            [FireFormKeys.WORKING_SMOKE_DECTORS]: Boolean,
            [FireFormKeys.FIRE_EXTINGUISHERS]: Boolean,
            [FireFormKeys.SPRINKLE_SYSTEM]: Boolean,
            [FireFormKeys.FIRE_ALARM_SYSTEM]: Boolean,
            [FireFormKeys.DISTANCE_TO_FIRESTATION]: "",
            [FireFormKeys.DISTANCE_TO_FIREHYDRANT]: "",
            [FireFormKeys.PREV_FIRE_LOSS]: Boolean,
            [FireFormKeys.PREV_FIRE_LOSS_DETAIL]: "",
          }}
          validationSchema={yup.object().shape({
            [FireFormKeys.FIRST_NAME]: yup
              .string()
              .required("First Name is required"),
            [FireFormKeys.LAST_NAME]: yup
              .string()
              .required("Last Name is required"),
            [FireFormKeys.ADDRESS]: yup
              .string()
              .required("Address is required"),
            [FireFormKeys.CITY]: yup.string().required("City name is required"),
            [FireFormKeys.STATE]: yup.string().required("State is required"),
            [FireFormKeys.ZIPCODE]: yup
              .string()
              .required("Zip code is required"),
            [FireFormKeys.PROPERTY_TYPE]: yup
              .string()
              .required("Property Type is required"),
            [FireFormKeys.YEAR_BUILT]: yup
              .string()
              .required("Year Built is reqired"),
            [FireFormKeys.SQUARE_FEET]: yup
              .string()
              .required("Square Feet is required"),
            [FireFormKeys.NUM_STOREIS]: yup
              .string()
              .required("Number of stories is required"),
            [FireFormKeys.CONSTRUCTION_TYPE]: yup
              .string()
              .required("Construction Type is required"),
            [FireFormKeys.DISTANCE_TO_FIRESTATION]: yup
              .string()
              .required("Distance to Fire Station is required"),
            [FireFormKeys.DISTANCE_TO_FIREHYDRANT]: yup
              .string()
              .required("Distance to Fire Hydrant is required"),
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
                    name={FireFormKeys.FIRST_NAME}
                    required={true}
                    label={formLabels[FireFormKeys.FIRST_NAME]}
                  />
                  <InputFormControl
                    name={FireFormKeys.LAST_NAME}
                    required={true}
                    label={formLabels[FireFormKeys.LAST_NAME]}
                  />
                  <InputFormControl
                    name={FireFormKeys.ADDRESS}
                    required={true}
                    label={formLabels[FireFormKeys.ADDRESS]}
                  />
                  <InputFormControl
                    name={FireFormKeys.CITY}
                    required={true}
                    label={formLabels[FireFormKeys.CITY]}
                  />
                  <InputFormControl
                    name={FireFormKeys.STATE}
                    required={true}
                    label={formLabels[FireFormKeys.STATE]}
                  />
                  <InputFormControl
                    name={FireFormKeys.ZIPCODE}
                    required={true}
                    label={formLabels[FireFormKeys.ZIPCODE]}
                  />
                  <SelectFormControl
                    name={FireFormKeys.PROPERTY_TYPE}
                    required={true}
                    label={formLabels[FireFormKeys.PROPERTY_TYPE]}
                    options={[
                      {
                        label: "Single-family home",
                        value: "Single-family home",
                      },
                      {
                        label: "Multi-family home",
                        value: "Multi-family home",
                      },
                      { label: "Apartment", value: "Apartment" },
                      { label: "Condominium", value: "Condominium" },
                      {
                        label: "Commercial property",
                        value: "Commercial property",
                      },
                      {
                        label: "Industrial property",
                        value: "Industrial property",
                      },
                    ]}
                  />
                  <InputFormControl
                    name={FireFormKeys.YEAR_BUILT}
                    required={true}
                    label={formLabels[FireFormKeys.YEAR_BUILT]}
                  />
                  <InputFormControl
                    name={FireFormKeys.SQUARE_FEET}
                    required={true}
                    label={formLabels[FireFormKeys.SQUARE_FEET]}
                  />
                  <InputFormControl
                    name={FireFormKeys.NUM_STOREIS}
                    required={true}
                    label={formLabels[FireFormKeys.NUM_STOREIS]}
                    type="number"
                  />
                  <SelectFormControl
                    name={FireFormKeys.CONSTRUCTION_TYPE}
                    required={true}
                    label={formLabels[FireFormKeys.CONSTRUCTION_TYPE]}
                    options={[
                      { label: "Wood", value: "Wood" },
                      { label: "Brick", value: "Brick" },
                      { label: "Concrete", value: "Concrete" },
                      { label: "Steel", value: "Steel" },
                      { label: "Composite", value: "Composite" },
                    ]}
                  />
                  <SelectFormControl
                    name={FireFormKeys.WORKING_SMOKE_DECTORS}
                    required={true}
                    label={formLabels[FireFormKeys.WORKING_SMOKE_DECTORS]}
                    options={[
                      { label: "Yes", value: "true" },
                      { label: "No", value: "false" },
                    ]}
                  />
                  <SelectFormControl
                    name={FireFormKeys.FIRE_EXTINGUISHERS}
                    required={true}
                    label={formLabels[FireFormKeys.FIRE_EXTINGUISHERS]}
                    options={[
                      { label: "Yes", value: "true" },
                      { label: "No", value: "false" },
                    ]}
                  />
                  <SelectFormControl
                    name={FireFormKeys.SPRINKLE_SYSTEM}
                    required={true}
                    label={formLabels[FireFormKeys.SPRINKLE_SYSTEM]}
                    options={[
                      { label: "Yes", value: "true" },
                      { label: "No", value: "false" },
                    ]}
                  />
                  <SelectFormControl
                    name={FireFormKeys.FIRE_ALARM_SYSTEM}
                    required={true}
                    label={formLabels[FireFormKeys.FIRE_ALARM_SYSTEM]}
                    options={[
                      { label: "Yes", value: "true" },
                      { label: "No", value: "false" },
                    ]}
                  />
                  <InputFormControl
                    name={FireFormKeys.DISTANCE_TO_FIRESTATION}
                    required={true}
                    label={formLabels[FireFormKeys.DISTANCE_TO_FIRESTATION]}
                  />
                  <InputFormControl
                    name={FireFormKeys.DISTANCE_TO_FIREHYDRANT}
                    required={true}
                    label={formLabels[FireFormKeys.DISTANCE_TO_FIREHYDRANT]}
                  />
                  <SelectFormControl
                    name={FireFormKeys.PREV_FIRE_LOSS}
                    required={true}
                    label={formLabels[FireFormKeys.PREV_FIRE_LOSS]}
                    options={[
                      { label: "Yes", value: "true" },
                      { label: "No", value: "false" },
                    ]}
                  />
                  <InputFormControl
                    name={FireFormKeys.PREV_FIRE_LOSS_DETAIL}
                    required={false}
                    label={formLabels[FireFormKeys.PREV_FIRE_LOSS_DETAIL]}
                  />
                </Grid>
              </Flex>
              <Flex
                mt={5}
                justifyContent={"flex-end"}
                position={"relative"}
                bottom={1}
                zIndex={1}
                px={[3, 4]}
              >
                <Button
                  onClick={async () => {
                    setloading(true);
                    const error = await validateForm();
                    handleSubmit();
                    if (Object.keys(error).length === 0) {
                      const res = await PostFire(values);
                      if (res) {
                        setFireResponse(res);
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
          fireResponse && (
            <Box
              width={"full"}
              height={"md"}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              borderColor={"black"}
            >
              <Textarea value={fireResponse.result} readOnly height={"full"} />
            </Box>
          )
        )}
      </Box>
    </>
  );
}
