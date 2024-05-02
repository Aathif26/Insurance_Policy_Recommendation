import { optionType } from "./FormComponent";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Text,
} from "@chakra-ui/react";
import { useField } from "formik";
import { BaseStyle } from "../../Utils/theme";

export default function FormSelect({
  label,
  name,
  options,
  error,
  value,
  touched,
  placeholder,
  required,
  labelStyle,
  fieldStyle,
  disabled,
  ...rest
}: optionType) {
  
  return (
    <FormControl
      isInvalid={error && touched ? true : false}
      isRequired={required}
    >
      {label && <FormLabel {...labelStyle} htmlFor={name}>
        {label}
      </FormLabel>}
      {rest.isView ? <Text p={1} fontSize={"sm"}>{options?.find((val) => value == val.value)?.label ?? ""}</Text> : <Select
        id={name}
        {...fieldStyle}
        {...rest}
        placeholder={placeholder ?? "Select a " + label}
        disabled={disabled}
        value={value}
        color={value ? "black" : "grey"}
        {...BaseStyle}
      >
        {options?.map((option, index) => (
          <option
            style={{ color: "black" }}
            key={`${index}_${option.value}`}
            data-testid={`${name}_${option.value}`}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Select>}
      <FormErrorMessage fontSize={"xs"} >
        <>{error}</>
      </FormErrorMessage>
    </FormControl>
  );
}

export function SelectFormControl({
  options,
  name,
  handleSelect,
  ...rest
}: optionType & { handleSelect?: (e: string | number ) => void }) {
  const [field, { error, touched }, helper] = useField(name);
   
  return (
    <FormSelect
      {...rest}
      {...field}
      options={options}
      error={error}
      touched={touched}
      value={
        typeof field.value === "object"
          ? field?.value?.value
          : field?.value ?? 0
      }
      onChange={(e) => {
        helper.setValue(e.target.value);
        if (handleSelect) handleSelect(e.target.value);
      }}
    />
  );
}
