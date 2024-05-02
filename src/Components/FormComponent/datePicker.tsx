import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Text
  } from "@chakra-ui/react";
  import { useField } from "formik";
  import { dateFieldType } from "./FormComponent";
  import { BaseStyle } from "../../Utils/theme";
  import dayjs from "dayjs";
  import { DateLocalToUtc, DateUTCtoLocal, UTCDateToReadableFormat } from "../../Utils/helper";
  
  export default function DatePicker({
    label,
    disabled,
    name,
    error,
    touched,
    placeholder,
    onChange = () => {},
    required,
    fieldType,
    value,
    ...rest
  }: dateFieldType) {
    
    return (
      <FormControl
        isInvalid={error && touched ? true : false}
        isRequired={required}
        isDisabled={disabled}
      >
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        {rest.isView ?  <Text p={1} fontSize={"sm"}>{UTCDateToReadableFormat(value ?? "")}</Text> : <Input
          placeholder={placeholder}
          id={name}
          {...rest}
          type={fieldType ?? "date"}
          p={1}
          value={dayjs(value).isValid() ? DateUTCtoLocal(value as string)?.split('T')[0] :  ""}
          onChange={(e) => {
            // const selectedDate = e.target.value;
            // const currentDate = dayjs();
            // const currentTime = currentDate.format('HH:mm'); // Get current time
            // const formattedDateTime = `${selectedDate}T${currentTime}`;
            onChange(DateLocalToUtc(e.target.value) as string);
          }}
          {...BaseStyle}
        />}
        {/* {value ? <Text fontSize={"10px"} >At : {dayjs(value).format("hh:mm A")}</Text> : null} */}
        <FormErrorMessage fontSize={"xs"} >{error}</FormErrorMessage>
      </FormControl>
    );
  }
  
  export function DatePickerFormControl({
    name,
    ...rest
  }: dateFieldType) {
    const [field, { error, touched }, helper] = useField(name);
  
    return (
      <DatePicker
        {...rest}
        {...field}
        error={error}
        value={field.value}
        touched={touched}
        onChange={(date) => {
          // the rest has also a onChange function, so we need to call it
          if (rest.onChange) {
            rest.onChange(date);
          }
  
          helper.setValue(date);
        }}
      />
    );
  }
  