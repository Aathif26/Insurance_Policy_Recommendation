import {
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Flex,
  InputGroup,
  Input,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useField } from "formik";
import { InputFieldType } from "./FormComponent";
import { BaseStyle } from "../../Utils/theme";

export default function FormInput({
  label,
  name,
  error,
  touched,
  placeholder,
  maxLength,
  value,
  required,
  labelStyle,
  disabled,
  fieldType,
  showLength = false,
  labelInfo = () => null,
  precision,
  step,
  ...rest
}: InputFieldType) {
  return (
    <FormControl
      isInvalid={error && touched ? true : false}
      isRequired={required}
    >
      <Flex justifyContent="space-between">
        {label && (
          <FormLabel {...labelStyle} htmlFor={name}>
            {label}
            {labelInfo()}
          </FormLabel>
        )}{" "}
        {maxLength && showLength && (
          <Text color="brand.primaryBrand">
            {value?.length || 0}/{maxLength} Characters
          </Text>
        )}
      </Flex>
      {rest.isView ? (
        <Text p={1} fontSize={"sm"}>
          {value ?? "-"}
        </Text>
      ) : rest.type === "number" ? (
        <NumberInput
          id={name}
          onChange={(e) => {
            if (rest.onChange) {
              rest.onChange(e);
            }
          }}
          value={value ?? (placeholder ? "" : 0)}
          isDisabled={disabled}
          min={0}
          precision={precision}
          step={step}
        >
          <NumberInputField
            {...BaseStyle}
            placeholder={placeholder}
            _invalid={{ boxShadow: "none", borderColor: "red" }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ) : fieldType === "Age" ? (
        <NumberInput
          id={name}
          onChange={(e) => {
            if (rest.onChange) {
              rest.onChange(e);
            }
          }}
          value={value ?? (placeholder ? "" : 0)}
          isDisabled={disabled}
          min={0}
          precision={precision}
          step={step}
        >
          <NumberInputField
            {...BaseStyle}
            placeholder={placeholder}
            _invalid={{ boxShadow: "none", borderColor: "red" }}
          />
        </NumberInput>
      ) : (
        <InputGroup>
          <Input
            type={fieldType}
            disabled={disabled}
            placeholder={placeholder ?? "Enter " + label}
            maxLength={maxLength ?? 500}
            id={name}
            value={value ?? ""}
            {...BaseStyle}
            {...rest}
            onChange={(e) => {
              if (rest.onChange) {
                rest.onChange(e.target.value);
              }
            }}
          />
        </InputGroup>
      )}
      <FormErrorMessage fontSize={"xs"}>{error}</FormErrorMessage>
    </FormControl>
  );
}

export function InputFormControl({ name, ...rest }: InputFieldType) {
  const [field, { error, touched }, helper] = useField(name);

  return (
    <FormInput
      {...rest}
      {...field}
      value={field.value}
      error={error}
      touched={touched}
      onChange={(e) => {
        if (rest.onChange) {
          rest.onChange(e);
        }
        helper.setValue(e);
      }}
    />
  );
}
