import { Box, Flex, Grid, Button, Textarea, Spinner } from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";
import { PetFormKeys } from "./formkeys";
import { PostPet } from "../../../Api/pet";
import {
  InputFormControl,
  SelectFormControl,
} from "../../../Components/FormComponent";
import formLabels from "./../../../Components/UI/labels";
import * as yup from "yup";

interface PetResponse {
  result: string;
}

export default function PetInsurance() {
  const [PetResponse, setPetResponse] = useState<PetResponse | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  return (
    <>
      <Box>
        <Formik
          initialValues={{
            [PetFormKeys.FULL_NAME]: "",
            [PetFormKeys.ADDRESS]: "",
            [PetFormKeys.CITY]: "",
            [PetFormKeys.STATE]: "",
            [PetFormKeys.ZIP_CODE]: "",
            [PetFormKeys.PHONE_NO]: "",
            [PetFormKeys.EMAIL]: "",
            [PetFormKeys.PET_NAME]: "",
            [PetFormKeys.SPECIES]: "",
            [PetFormKeys.BREED]: "",
            [PetFormKeys.AGE]: 0,
            [PetFormKeys.GENDER]: "",
            [PetFormKeys.SPAYED_NEUTERED]: "",
            [PetFormKeys.MICROCHIPPED]: "",
            [PetFormKeys.MICROCHIP_NO]: "",
            [PetFormKeys.ACCIDENT_COVERAGE]: Boolean,
            [PetFormKeys.ILLNESS_COVERAGE]: Boolean,
            [PetFormKeys.ROUTINE_CARE]: Boolean,
            [PetFormKeys.OTHER]: "",
            [PetFormKeys.MEDICAL_CONDITION]: "",
            [PetFormKeys.PREV_INJURIES_ILLNESS]: "",
            [PetFormKeys.CUR_MEDICATION]: "",
            [PetFormKeys.COMMENT_REQ]: "",
          }}
          validationSchema={yup.object().shape({
            [PetFormKeys.FULL_NAME]: yup
              .string()
              .required("Full Name is required"),
            [PetFormKeys.ADDRESS]: yup.string().required("Address is required"),
            [PetFormKeys.CITY]: yup.string().required("City Name is required"),
            [PetFormKeys.STATE]: yup.string().required("State is required"),
            [PetFormKeys.ZIP_CODE]: yup
              .string()
              .required("Zip Code is required"),
            [PetFormKeys.PHONE_NO]: yup
              .string()
              .required("Phone number is required"),
            [PetFormKeys.EMAIL]: yup.string().required("Email is required"),
            [PetFormKeys.PET_NAME]: yup
              .string()
              .required("Pet Name is required"),
            [PetFormKeys.SPECIES]: yup.string().required("Species is required"),
            [PetFormKeys.BREED]: yup.string().required("Breed is required"),
            [PetFormKeys.AGE]: yup.string().required("Age is required"),
            [PetFormKeys.GENDER]: yup.string().required("Gender is required"),
            [PetFormKeys.SPAYED_NEUTERED]: yup
              .string()
              .required("Spayed Neutered is required"),
            [PetFormKeys.MICROCHIPPED]: yup
              .string()
              .required("Microchipped is required"),
            [PetFormKeys.MICROCHIP_NO]: yup
              .string()
              .required("Microchipped number is required"),
            [PetFormKeys.ACCIDENT_COVERAGE]: yup
              .string()
              .required("Accident Coverage is required"),
            [PetFormKeys.ILLNESS_COVERAGE]: yup
              .string()
              .required("Illness coverage is required"),
            [PetFormKeys.ROUTINE_CARE]: yup
              .string()
              .required("Routine Care is required"),
            [PetFormKeys.MEDICAL_CONDITION]: yup
              .string()
              .required("Medical Condition is required"),
            [PetFormKeys.PREV_INJURIES_ILLNESS]: yup
              .string()
              .required("Pet injuries & illness is required"),
            [PetFormKeys.CUR_MEDICATION]: yup
              .string()
              .required("Current Medication is required"),
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
                    name={PetFormKeys.FULL_NAME}
                    required={true}
                    label={formLabels[PetFormKeys.FULL_NAME]}
                  />
                  <InputFormControl
                    name={PetFormKeys.ADDRESS}
                    required={true}
                    label={formLabels[PetFormKeys.ADDRESS]}
                  />
                  <InputFormControl
                    name={PetFormKeys.CITY}
                    required={true}
                    label={formLabels[PetFormKeys.CITY]}
                  />
                  <InputFormControl
                    name={PetFormKeys.STATE}
                    required={true}
                    label={formLabels[PetFormKeys.STATE]}
                  />
                  <InputFormControl
                    name={PetFormKeys.ZIP_CODE}
                    required={true}
                    label={formLabels[PetFormKeys.ZIP_CODE]}
                  />
                  <InputFormControl
                    name={PetFormKeys.PHONE_NO}
                    required={true}
                    label={formLabels[PetFormKeys.PHONE_NO]}
                  />
                  <InputFormControl
                    name={PetFormKeys.EMAIL}
                    required={true}
                    label={formLabels[PetFormKeys.EMAIL]}
                  />
                  <InputFormControl
                    name={PetFormKeys.PET_NAME}
                    required={true}
                    label={formLabels[PetFormKeys.PET_NAME]}
                  />
                  <SelectFormControl
                    name={PetFormKeys.SPECIES}
                    required={true}
                    label={formLabels[PetFormKeys.SPECIES]}
                    options={[
                      { label: "Dog", value: "Dog" },
                      { label: "Cat", value: "Cat" },
                      { label: "Bird", value: "Bird" },
                      { label: "Reptile", value: "Reptile" },
                      { label: "Small Mammal", value: "Small Mammal" },
                      { label: "Fish", value: "Fish" },
                      { label: "Other", value: "Other" },
                    ]}
                  />
                  <InputFormControl
                    name={PetFormKeys.BREED}
                    required={true}
                    label={formLabels[PetFormKeys.BREED]}
                  />
                  <InputFormControl
                    name={PetFormKeys.AGE}
                    required={true}
                    label={formLabels[PetFormKeys.AGE]}
                    type="Age"
                  />
                  <SelectFormControl
                    name={PetFormKeys.GENDER}
                    required={true}
                    label={formLabels[PetFormKeys.GENDER]}
                    options={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                    ]}
                  />
                  <SelectFormControl
                    name={PetFormKeys.SPAYED_NEUTERED}
                    required={true}
                    label={formLabels[PetFormKeys.SPAYED_NEUTERED]}
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                      { label: "Unknown", value: "Unknown" },
                    ]}
                  />
                  <SelectFormControl
                    name={PetFormKeys.MICROCHIPPED}
                    required={true}
                    label={formLabels[PetFormKeys.MICROCHIPPED]}
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                      { label: "Unknown", value: "Unknown" },
                    ]}
                  />
                  <InputFormControl
                    name={PetFormKeys.MICROCHIP_NO}
                    required={true}
                    label={formLabels[PetFormKeys.MICROCHIP_NO]}
                  />
                  <SelectFormControl
                    name={PetFormKeys.ACCIDENT_COVERAGE}
                    required={true}
                    label={formLabels[PetFormKeys.ACCIDENT_COVERAGE]}
                    options={[
                      { label: "Yes", value: "true" },
                      { label: "No", value: "false" },
                    ]}
                  />
                  <SelectFormControl
                    name={PetFormKeys.ILLNESS_COVERAGE}
                    required={true}
                    label={formLabels[PetFormKeys.ILLNESS_COVERAGE]}
                    options={[
                      { label: "Yes", value: "true" },
                      { label: "No", value: "false" },
                    ]}
                  />
                  <SelectFormControl
                    name={PetFormKeys.ROUTINE_CARE}
                    required={true}
                    label={formLabels[PetFormKeys.ROUTINE_CARE]}
                    options={[
                      { label: "Yes", value: "true" },
                      { label: "No", value: "false" },
                    ]}
                  />
                  <InputFormControl
                    name={PetFormKeys.OTHER}
                    required={false}
                    label={formLabels[PetFormKeys.OTHER]}
                  />
                  <InputFormControl
                    name={PetFormKeys.MEDICAL_CONDITION}
                    required={true}
                    label={formLabels[PetFormKeys.MEDICAL_CONDITION]}
                  />
                  <InputFormControl
                    name={PetFormKeys.PREV_INJURIES_ILLNESS}
                    required={true}
                    label={formLabels[PetFormKeys.PREV_INJURIES_ILLNESS]}
                  />
                  <InputFormControl
                    name={PetFormKeys.CUR_MEDICATION}
                    required={true}
                    label={formLabels[PetFormKeys.CUR_MEDICATION]}
                  />
                  <InputFormControl
                    name={PetFormKeys.COMMENT_REQ}
                    required={false}
                    label={formLabels[PetFormKeys.COMMENT_REQ]}
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
                      const res = await PostPet(values);
                      if (res) {
                        setPetResponse(res);
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
          PetResponse && (
            <Box
              width={"full"}
              height={"md"}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              borderColor={"black"}
            >
              <Textarea value={PetResponse.result} readOnly height={"full"} />
            </Box>
          )
        )}
      </Box>
    </>
  );
}
