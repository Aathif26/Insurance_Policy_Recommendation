import { Box, Button, Flex, Grid, Spinner, Textarea } from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";
import { AutomobileFormKeys } from "./formkeys";
import { PostAutomobile } from "../../../Api/automobile";
import {
  InputFormControl,
  SelectFormControl,
} from "../../../Components/FormComponent";
import formLabels from "./../../../Components/UI/labels";
import { DatePickerFormControl } from "../../../Components/FormComponent/datePicker";
import * as yup from "yup";

interface AutomobileResponse {
  result: string;
}

export default function AutomobileInsurance() {
  const [AutomobileResponse, setAutomobileResponse] =
    useState<AutomobileResponse | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  return (
    <>
      <Box>
        <Formik
          initialValues={{
            [AutomobileFormKeys.NAME]: "",
            [AutomobileFormKeys.ADDRESS]: "",
            [AutomobileFormKeys.DOB]: "",
            [AutomobileFormKeys.GENDER]: "",
            [AutomobileFormKeys.PHONE]: 0,
            [AutomobileFormKeys.EMAIL]: "",
            [AutomobileFormKeys.VEHICLE_MAKE]: "",
            [AutomobileFormKeys.VEHICLE_MODEL]: "",
            [AutomobileFormKeys.VEHICLE_YEAR]: 0,
            [AutomobileFormKeys.VIN]: "",
            [AutomobileFormKeys.VEHICLE_CLASS]: "",
            [AutomobileFormKeys.ENGINE_CAPACITY]: "",
            [AutomobileFormKeys.FUEL_TYPE]: "",
            [AutomobileFormKeys.VEHICLE_VALUE]: 0,
            [AutomobileFormKeys.DRIVER_LICENSE_NUM]: "",
            [AutomobileFormKeys.DRIVER_LINCENSE_CLASS]: "",
            [AutomobileFormKeys.DRIVING_EXPERIENCE]: 0,
            [AutomobileFormKeys.PREVIOUS_VIOLATION]: "",
            [AutomobileFormKeys.INSURANCE_TYPE]: "",
            [AutomobileFormKeys.POLICY_START]: "",
            [AutomobileFormKeys.POLICY_END]: "",
            [AutomobileFormKeys.COVERAGE_LIMIT]: 0,
            [AutomobileFormKeys.DEDUCTIBLE_AMT]: 0,
            [AutomobileFormKeys.PREMIUM_AMT]: 0,
            [AutomobileFormKeys.PAYMENT_FREQ]: "",
            [AutomobileFormKeys.PAYMENT_METHOD]: "",
            [AutomobileFormKeys.ADDITIONAL_DRIVER]: "",
            [AutomobileFormKeys.ADDITIONAL_FEATURE]: "",
          }}
          validationSchema={yup.object().shape({
            [AutomobileFormKeys.NAME]: yup
              .string()
              .required("Name is required"),
            [AutomobileFormKeys.ADDRESS]: yup
              .string()
              .required("Address is required"),
            [AutomobileFormKeys.DOB]: yup.string().required("DOB is required"),
            [AutomobileFormKeys.GENDER]: yup
              .string()
              .required("Gender is required"),
            [AutomobileFormKeys.PHONE]: yup
              .string()
              .required("Phone Number is required"),
            [AutomobileFormKeys.EMAIL]: yup
              .string()
              .required("Email is required"),
            [AutomobileFormKeys.VEHICLE_MAKE]: yup
              .string()
              .required("Vehicle Make is required"),
            [AutomobileFormKeys.VEHICLE_MODEL]: yup
              .string()
              .required("Vehicle Model is required"),
            [AutomobileFormKeys.VEHICLE_YEAR]: yup
              .string()
              .required("Vehicle Year is required"),
            [AutomobileFormKeys.VIN]: yup.string().required("VIN is required"),
            [AutomobileFormKeys.VEHICLE_CLASS]: yup
              .string()
              .required("Vehicle class is required"),
            [AutomobileFormKeys.ENGINE_CAPACITY]: yup
              .string()
              .required("Engine Capacity is required"),
            [AutomobileFormKeys.FUEL_TYPE]: yup
              .string()
              .required("Fuel Type is required"),
            [AutomobileFormKeys.VEHICLE_VALUE]: yup
              .string()
              .required("Vehicle Value is required"),
            [AutomobileFormKeys.DRIVER_LICENSE_NUM]: yup
              .string()
              .required("Licence Number is required"),
            [AutomobileFormKeys.DRIVER_LINCENSE_CLASS]: yup
              .string()
              .required("License Class is required"),
            [AutomobileFormKeys.DRIVING_EXPERIENCE]: yup
              .string()
              .required("Driving Experience is required"),
            [AutomobileFormKeys.PREVIOUS_VIOLATION]: yup
              .string()
              .required("Previous Viloation is required"),
            [AutomobileFormKeys.INSURANCE_TYPE]: yup
              .string()
              .required("Insurance Type is required"),
            [AutomobileFormKeys.POLICY_START]: yup
              .string()
              .required("Policy Start is required"),
            [AutomobileFormKeys.POLICY_END]: yup
              .string()
              .required("Policy End is required"),
            [AutomobileFormKeys.COVERAGE_LIMIT]: yup
              .string()
              .required("Coverage Limit is required"),
            [AutomobileFormKeys.DEDUCTIBLE_AMT]: yup
              .string()
              .required("Deductible Limit is required"),
            [AutomobileFormKeys.PREMIUM_AMT]: yup
              .string()
              .required("Premium Amount is required"),
            [AutomobileFormKeys.PAYMENT_FREQ]: yup
              .string()
              .required("Payment Frequency is required"),
            [AutomobileFormKeys.PAYMENT_METHOD]: yup
              .string()
              .required("Payment Method is required"),
            [AutomobileFormKeys.ADDITIONAL_DRIVER]: yup
              .string()
              .required("Addition Driver is required"),
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
                    name={AutomobileFormKeys.NAME}
                    required={true}
                    label={formLabels[AutomobileFormKeys.NAME]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.ADDRESS}
                    required={true}
                    label={formLabels[AutomobileFormKeys.ADDRESS]}
                  />
                  <DatePickerFormControl
                    name={AutomobileFormKeys.DOB}
                    required={true}
                    label={formLabels[AutomobileFormKeys.DOB]}
                  />
                  <SelectFormControl
                    name={AutomobileFormKeys.GENDER}
                    required={true}
                    label={formLabels[AutomobileFormKeys.GENDER]}
                    options={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                      { label: "Non-binary", value: "Non-binary" },
                      {
                        label: "Prefer not to say",
                        value: "Prefer not to say",
                      },
                    ]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.PHONE}
                    required={true}
                    label={formLabels[AutomobileFormKeys.PHONE]}
                    type="Age"
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.EMAIL}
                    required={true}
                    label={formLabels[AutomobileFormKeys.EMAIL]}
                  />
                  <SelectFormControl
                    name={AutomobileFormKeys.VEHICLE_MAKE}
                    required={true}
                    label={formLabels[AutomobileFormKeys.VEHICLE_MAKE]}
                    options={[
                      { label: "Toyota", value: "Toyota" },
                      { label: "Honda", value: "Honda" },
                      { label: "Ford", value: "Ford" },
                      { label: "Chevrolet", value: "Chevrolet" },
                      { label: "BMW", value: "BMW" },
                      { label: "Audi", value: "Audi" },
                      { label: "Hyundai", value: "Hyundai" },
                      { label: "Others ", value: "Others " },
                    ]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.VEHICLE_MODEL}
                    required={true}
                    label={formLabels[AutomobileFormKeys.VEHICLE_MODEL]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.VEHICLE_YEAR}
                    required={true}
                    label={formLabels[AutomobileFormKeys.VEHICLE_YEAR]}
                    type="Age"
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.VIN}
                    required={true}
                    label={formLabels[AutomobileFormKeys.VIN]}
                  />
                  <SelectFormControl
                    name={AutomobileFormKeys.VEHICLE_CLASS}
                    required={true}
                    label={formLabels[AutomobileFormKeys.VEHICLE_CLASS]}
                    options={[
                      { label: "Sedan", value: "Sedan" },
                      { label: "SUV", value: "SUV" },
                      { label: "Truck", value: "Truck" },
                      { label: "Coupe", value: "Coupe" },
                      { label: "Convertible", value: "Convertible" },
                      { label: "Minivan", value: "Minivan" },
                      { label: "Motorcycle", value: "Motorcycle" },
                    ]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.ENGINE_CAPACITY}
                    required={true}
                    label={formLabels[AutomobileFormKeys.ENGINE_CAPACITY]}
                  />
                  <SelectFormControl
                    name={AutomobileFormKeys.FUEL_TYPE}
                    required={true}
                    label={formLabels[AutomobileFormKeys.FUEL_TYPE]}
                    options={[
                      { label: "Gasoline", value: "Gasoline" },
                      { label: "Diesel", value: "Diesel" },
                      { label: "Electric", value: "Electric" },
                      { label: "Hybrid", value: "Hybrid" },
                    ]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.VEHICLE_VALUE}
                    required={true}
                    label={formLabels[AutomobileFormKeys.VEHICLE_VALUE]}
                    type="Age"
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.DRIVER_LICENSE_NUM}
                    required={true}
                    label={formLabels[AutomobileFormKeys.DRIVER_LICENSE_NUM]}
                  />
                  <SelectFormControl
                    name={AutomobileFormKeys.DRIVER_LINCENSE_CLASS}
                    required={true}
                    label={formLabels[AutomobileFormKeys.DRIVER_LINCENSE_CLASS]}
                    options={[
                      {
                        label: "Class A (Commercial)",
                        value: "Class A (Commercial)",
                      },
                      {
                        label: "Class B (Commercial)",
                        value: "Class B (Commercial)",
                      },
                      {
                        label: "Class C (Standard)",
                        value: "Class C (Standard)",
                      },
                      {
                        label: "Class M (Motorcycle)",
                        value: "Class M (Motorcycle)",
                      },
                    ]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.DRIVING_EXPERIENCE}
                    required={true}
                    label={formLabels[AutomobileFormKeys.DRIVING_EXPERIENCE]}
                    type="number"
                  />
                  <SelectFormControl
                    name={AutomobileFormKeys.PREVIOUS_VIOLATION}
                    required={true}
                    label={formLabels[AutomobileFormKeys.PREVIOUS_VIOLATION]}
                    options={[
                      { label: "None", value: "None" },
                      { label: "Speeding", value: "Speeding" },
                      { label: "Reckless Driving", value: "Reckless Driving" },
                      {
                        label: "Driving Under the Influence",
                        value: "Driving Under the Influence",
                      },
                      { label: "Others", value: "Others" },
                    ]}
                  />
                  <SelectFormControl
                    name={AutomobileFormKeys.INSURANCE_TYPE}
                    required={true}
                    label={formLabels[AutomobileFormKeys.INSURANCE_TYPE]}
                    options={[
                      {
                        label: "Liability Insurance",
                        value: "Liability Insurance",
                      },
                      {
                        label: "Collision Insurance",
                        value: "Collision Insurance",
                      },
                      {
                        label: "Comprehensive Insurance",
                        value: "Comprehensive Insurance",
                      },
                      {
                        label: "Uninsured Motorist Insurance",
                        value: "Uninsured Motorist Insurance",
                      },
                    ]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.POLICY_START}
                    required={true}
                    label={formLabels[AutomobileFormKeys.POLICY_START]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.POLICY_END}
                    required={true}
                    label={formLabels[AutomobileFormKeys.POLICY_END]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.COVERAGE_LIMIT}
                    required={true}
                    label={formLabels[AutomobileFormKeys.COVERAGE_LIMIT]}
                    type="Age"
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.DEDUCTIBLE_AMT}
                    required={true}
                    label={formLabels[AutomobileFormKeys.DEDUCTIBLE_AMT]}
                    type="Age"
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.PREMIUM_AMT}
                    required={true}
                    label={formLabels[AutomobileFormKeys.PREMIUM_AMT]}
                    type="Age"
                  />
                  <SelectFormControl
                    name={AutomobileFormKeys.PAYMENT_FREQ}
                    required={true}
                    label={formLabels[AutomobileFormKeys.PAYMENT_FREQ]}
                    options={[
                      { label: "Monthly", value: "Monthly" },
                      { label: "Quarterly", value: "Quarterly" },
                      { label: "Annually", value: "Annually" },
                    ]}
                  />
                  <SelectFormControl
                    name={AutomobileFormKeys.PAYMENT_METHOD}
                    required={true}
                    label={formLabels[AutomobileFormKeys.PAYMENT_METHOD]}
                    options={[
                      {
                        label: "Credit/Debit Card",
                        value: "Credit/Debit Card",
                      },
                      { label: "Bank Transfer", value: "Bank Transfer" },
                      { label: "Check", value: "Check" },
                      { label: "PayPal", value: "PayPal" },
                      { label: "Others ", value: "Others " },
                    ]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.ADDITIONAL_DRIVER}
                    required={true}
                    label={formLabels[AutomobileFormKeys.ADDITIONAL_DRIVER]}
                  />
                  <InputFormControl
                    name={AutomobileFormKeys.ADDITIONAL_FEATURE}
                    required={false}
                    label={formLabels[AutomobileFormKeys.ADDITIONAL_FEATURE]}
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
                      const res = await PostAutomobile(values);
                      if (res) {
                        setAutomobileResponse(res);
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
          AutomobileResponse && (
            <Box
              width={"full"}
              height={"md"}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              borderColor={"black"}
            >
              <Textarea
                value={AutomobileResponse.result}
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
