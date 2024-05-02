import { Box, Button, Flex, Grid, Spinner, Textarea } from "@chakra-ui/react";
import { DisabilityFormKeys } from "./formkeys";
import { Formik } from "formik";
import { PostDisability } from "../../../Api/disability";
import { useState } from "react";
import {
  InputFormControl,
  SelectFormControl,
} from "../../../Components/FormComponent";
import formLabels from "../../../Components/UI/labels";
import { DatePickerFormControl } from "../../../Components/FormComponent/datePicker";
import FormMultiSelect from "../../../Components/FormComponent/MultiSelect";

interface disabilityResponse {
  result: string;
}
export default function DiabilityInsurance() {
  const [disabilityResponse, setDisabilityResponse] =
    useState<disabilityResponse | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  return (
    <>
      <Box>
        <Formik
          initialValues={{
            [DisabilityFormKeys.NAME]: "",
            [DisabilityFormKeys.ADDRESS]: "",
            [DisabilityFormKeys.DOB]: "",
            [DisabilityFormKeys.AGE]: 0,
            [DisabilityFormKeys.SECURITY_NUM]: "",
            [DisabilityFormKeys.JOB_TITLE]: "",
            [DisabilityFormKeys.COMPANY]: "",
            [DisabilityFormKeys.INDUSTRY]: "",
            [DisabilityFormKeys.DURATION]: "",
            [DisabilityFormKeys.JOB_DUTIES]: "",
            [DisabilityFormKeys.ANNUAL_INCOME]: 0,
            [DisabilityFormKeys.EDUCATION]: "",
            [DisabilityFormKeys.CLG]: "",
            [DisabilityFormKeys.PAST_ILLNESS]: "",
            [DisabilityFormKeys.INJURIES]: "",
            [DisabilityFormKeys.CURRENT_HEALTH_STATUS]: "",
            [DisabilityFormKeys.FAM_ILLNESS_HISTORY]: "",
            [DisabilityFormKeys.CURRENT_TREATMENT]: "",
            [DisabilityFormKeys.DISABILITY_INFO]: "",
            [DisabilityFormKeys.DISABILITY_DURATION]: "",
            [DisabilityFormKeys.DAILY_IMPACT]: "",
            [DisabilityFormKeys.DOCTOR_NAME]: "",
            [DisabilityFormKeys.DOCTOR_ADDRESS]: "",
            [DisabilityFormKeys.DOCTOR_CONTACT_INFO]: "",
            [DisabilityFormKeys.SERVICE_PERIOD]: 0,
            [DisabilityFormKeys.INCOME]: 0,
            [DisabilityFormKeys.OTHER_INCOME]: "",
            [DisabilityFormKeys.DEPENDENTS]: "",
            [DisabilityFormKeys.SPOUSE_NAME]: "",
            [DisabilityFormKeys.SPOUSE_AGE]: 0,
            [DisabilityFormKeys.CHILDREN_CNT]: 0,
            [DisabilityFormKeys.CHILDREN_NAME_AGE]: "",
            [DisabilityFormKeys.MILITARY_SERVICE_DATE]: "",
            [DisabilityFormKeys.LIFE_INSURANCE]: "",
            [DisabilityFormKeys.HEALTH_INSURANCE]: "",
            [DisabilityFormKeys.LONG_TERM_CARE_INSURANCE]: "",
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
                    name={DisabilityFormKeys.NAME}
                    required={true}
                    label={formLabels[DisabilityFormKeys.NAME]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.ADDRESS}
                    required={true}
                    label={formLabels[DisabilityFormKeys.ADDRESS]}
                  />
                  <DatePickerFormControl
                    name={DisabilityFormKeys.DOB}
                    required={true}
                    label={formLabels[DisabilityFormKeys.DOB]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.AGE}
                    required={true}
                    label={formLabels[DisabilityFormKeys.AGE]}
                    type="Age"
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.SECURITY_NUM}
                    required={true}
                    label={formLabels[DisabilityFormKeys.SECURITY_NUM]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.JOB_TITLE}
                    required={true}
                    label={formLabels[DisabilityFormKeys.JOB_TITLE]}
                    options={[
                      {
                        label: "Software Engineer",
                        value: "Software Engineer",
                      },
                      { label: "Project Manager", value: "Project Manager" },
                      { label: "Teacher", value: "Teacher" },
                      { label: "Nurse", value: "Nurse" },
                      { label: "Sales Associate", value: "Sales Associate" },
                      { label: "Others", value: "Others" },
                    ]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.COMPANY}
                    required={true}
                    label={formLabels[DisabilityFormKeys.COMPANY]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.INDUSTRY}
                    required={true}
                    label={formLabels[DisabilityFormKeys.INDUSTRY]}
                    options={[
                      { label: "Healthcare", value: "Healthcare" },
                      { label: "Technology", value: "Technology" },
                      { label: "Finance", value: "Finance" },
                      { label: "Retail", value: "Retail" },
                      { label: "Manufacturing", value: "Manufacturing" },
                    ]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.DURATION}
                    required={true}
                    label={formLabels[DisabilityFormKeys.DURATION]}
                    options={[
                      { label: "Less than 1 year", value: "Less than 1 year" },
                      { label: "1-3 years", value: "1-3 years" },
                      { label: "3-5 years", value: "3-5 years" },
                      { label: "5+ year", value: "5+ year" },
                    ]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.JOB_DUTIES}
                    required={true}
                    label={formLabels[DisabilityFormKeys.JOB_DUTIES]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.ANNUAL_INCOME}
                    required={true}
                    label={formLabels[DisabilityFormKeys.ANNUAL_INCOME]}
                    type="Age"
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.EDUCATION}
                    required={true}
                    label={formLabels[DisabilityFormKeys.EDUCATION]}
                    options={[
                      {
                        label: "High School Diploma",
                        value: "High School Diploma",
                      },
                      {
                        label: "Associate's Degree",
                        value: "Associate's Degree",
                      },
                      {
                        label: "Bachelor's Degree",
                        value: "Bachelor's Degree",
                      },
                      { label: "Master's Degree", value: "Master's Degree" },
                      { label: "Doctorate (PhD)", value: "Doctorate (PhD)" },
                    ]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.CLG}
                    required={true}
                    label={formLabels[DisabilityFormKeys.CLG]}
                  />
                  <FormMultiSelect
                    name={DisabilityFormKeys.PAST_ILLNESS}
                    required={true}
                    label={formLabels[DisabilityFormKeys.PAST_ILLNESS]}
                    options={[
                      { label: "Diabetes", value: "Diabetes" },
                      { label: "Heart Disease", value: "Heart Disease" },
                      { label: "Asthma", value: "Asthma" },
                      { label: "Cancer", value: "Cancer" },
                      { label: "Others", value: "Others" },
                    ]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.INJURIES}
                    required={true}
                    label={formLabels[DisabilityFormKeys.INJURIES]}
                    options={[
                      { label: "Broken Bone", value: "Broken Bone" },
                      { label: "Back Injury", value: "Back Injury" },
                      { label: "Concussion", value: "Concussion" },
                      { label: "Others", value: "Others" },
                    ]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.CURRENT_HEALTH_STATUS}
                    required={true}
                    label={formLabels[DisabilityFormKeys.CURRENT_HEALTH_STATUS]}
                    options={[
                      { label: "Good", value: "Good" },
                      { label: "Fair", value: "Fair" },
                      { label: "Poor", value: "Poor" },
                      { label: "Under Treatment", value: "Under Treatment" },
                    ]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.FAM_ILLNESS_HISTORY}
                    required={true}
                    label={formLabels[DisabilityFormKeys.FAM_ILLNESS_HISTORY]}
                    options={[
                      { label: "Diabetes", value: "Diabetes" },
                      { label: "Hypertension", value: "Hypertension" },
                      { label: "Heart Disease", value: "Heart Disease" },
                      { label: "Cancer", value: "Cancer" },
                      { label: "Others", value: "others" },
                    ]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.CURRENT_TREATMENT}
                    required={true}
                    label={formLabels[DisabilityFormKeys.CURRENT_TREATMENT]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.DISABILITY_INFO}
                    required={true}
                    label={formLabels[DisabilityFormKeys.DISABILITY_INFO]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.DISABILITY_DURATION}
                    required={true}
                    label={formLabels[DisabilityFormKeys.DISABILITY_DURATION]}
                    options={[
                      { label: "Less than 1 year", value: "Less than 1 year" },
                      { label: "1-3 years", value: "1-3 years" },
                      { label: "3-5 years", value: "3-5 years" },
                      { label: "5+ years", value: "5+ years" },
                    ]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.DAILY_IMPACT}
                    required={true}
                    label={formLabels[DisabilityFormKeys.DAILY_IMPACT]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.DOCTOR_NAME}
                    required={true}
                    label={formLabels[DisabilityFormKeys.DOCTOR_NAME]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.DOCTOR_ADDRESS}
                    required={true}
                    label={formLabels[DisabilityFormKeys.DOCTOR_ADDRESS]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.DOCTOR_CONTACT_INFO}
                    required={true}
                    label={formLabels[DisabilityFormKeys.DOCTOR_CONTACT_INFO]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.SERVICE_PERIOD}
                    required={true}
                    label={formLabels[DisabilityFormKeys.SERVICE_PERIOD]}
                    type="number"
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.INCOME}
                    required={true}
                    label={formLabels[DisabilityFormKeys.INCOME]}
                    type="Age"
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.OTHER_INCOME}
                    required={true}
                    label={formLabels[DisabilityFormKeys.OTHER_INCOME]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.DEPENDENTS}
                    required={true}
                    label={formLabels[DisabilityFormKeys.DEPENDENTS]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.SPOUSE_NAME}
                    required={true}
                    label={formLabels[DisabilityFormKeys.SPOUSE_NAME]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.SPOUSE_AGE}
                    required={true}
                    label={formLabels[DisabilityFormKeys.SPOUSE_AGE]}
                    type="Age"
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.CHILDREN_CNT}
                    required={true}
                    label={formLabels[DisabilityFormKeys.CHILDREN_CNT]}
                    type="number"
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.CHILDREN_NAME_AGE}
                    required={true}
                    label={formLabels[DisabilityFormKeys.CHILDREN_NAME_AGE]}
                  />
                  <InputFormControl
                    name={DisabilityFormKeys.MILITARY_SERVICE_DATE}
                    required={true}
                    label={formLabels[DisabilityFormKeys.MILITARY_SERVICE_DATE]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.LIFE_INSURANCE}
                    required={true}
                    label={formLabels[DisabilityFormKeys.LIFE_INSURANCE]}
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.HEALTH_INSURANCE}
                    required={false}
                    label={formLabels[DisabilityFormKeys.HEALTH_INSURANCE]}
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
                  />
                  <SelectFormControl
                    name={DisabilityFormKeys.LONG_TERM_CARE_INSURANCE}
                    required={false}
                    label={
                      formLabels[DisabilityFormKeys.LONG_TERM_CARE_INSURANCE]
                    }
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
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
                      const res = await PostDisability(values);
                      if (res) {
                        setDisabilityResponse(res);
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
          disabilityResponse && (
            <Box
              width={"full"}
              height={"md"}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              borderColor={"black"}
            >
              <Textarea
                value={disabilityResponse.result}
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
