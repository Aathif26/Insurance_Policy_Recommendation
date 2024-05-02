import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Textarea,
    Text,
    Flex,
  } from "@chakra-ui/react";
  import { useField } from "formik";
  import { textAreaType } from "./FormComponent";
  import { useState } from "react";
  import { BaseStyle } from "../../Utils/theme";
  
  export default function TextArea({
    label,
    name,
    error,
    touched,
    maxLength,
    value,
    required,
    labelStyle,
    disabled,
    onChange,
    ...rest
  }: textAreaType) {
    const [textareaHeight, setTextareaHeight] = useState('auto');
  
    return (
      <FormControl
        isInvalid={error && touched ? true : false}
        isRequired={required}
      >
        <Flex justifyContent="space-between">
          {label && (
            <FormLabel {...labelStyle} htmlFor={name}>
              {label}
            </FormLabel>
          )}{" "}
          {maxLength && (
            <Text color="brand.primaryBrand">
              {value?.length || 0}/{maxLength} Characters
            </Text>
          )}
        </Flex>
        <Textarea
          id={name}
          disabled={disabled}
          value={value ?? ""}
          style={{ height: `0px` }}
          overflow={"hidden"}
          overflowY="hidden"
          minH="unset"
          resize="none"
          onChange={(event) => {
            if(onChange) onChange(event.target.value);
            setTextareaHeight('auto'); // Reset height to auto before calculating the new height
            setTextareaHeight(`${event.target.scrollHeight}px`);
          }}
          height={textareaHeight}
          {...rest}
          maxLength={maxLength ?? 1000}
          {...BaseStyle}
        />
        <FormErrorMessage fontSize={"xs"} >{error}</FormErrorMessage>
      </FormControl>
    );
  }
  
  export function TextAreaFormControl({ name, ...rest }: textAreaType) {
    const [field, { error, touched }] = useField(name);
    return <TextArea {...rest} {...field} error={error} touched={touched} />;
  }
  