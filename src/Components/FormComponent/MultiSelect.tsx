/* eslint-disable @typescript-eslint/no-explicit-any */
import { MultiSelectOption } from "./FormComponent";
import { Box, FormControl, FormErrorMessage, FormLabel, Text } from "@chakra-ui/react";
import { useField } from "formik";
// import { AsyncSelect, Select, components, CreatableSelect } from "chakra-react-select";
import { colors } from './../../Utils/theme';
import { AsyncSelect, Select, components, CreatableSelect  } from 'chakra-react-select';


const MultiValueLabel = ({ children, innerProps, ...props }:any) => (
  <components.MultiValueLabel  {...props}   {...innerProps}>
    <Text noOfLines={1} fontSize={"xs"} p={0} m={0} width={"55px"}>{children}</Text>
  </components.MultiValueLabel>
)

const MultiValueContainer = ({ children, selectProps, data} : any) =>{
  const allSelected = selectProps.value;
  const label = data.label;
  const index = allSelected.findIndex((selected: any) => selected.label === label);
  const isLastSelected = index === 0;
  
  return isLastSelected ? <> <Box  bg={"gray.100"} borderRadius={"md"} display={"flex"} p={1}>{ [allSelected[0]].map(() => children)}</Box> ...</> : "";
}

const chakraStyle = {
  dropdownIndicator: (provided: any) => ({
    ...provided,
    p: 1,
    bg: "white",
    borderRadius : "none" ,
    border : "1px solid red"
  }),
  control: (provided: any) => ({
    ...provided,
    width: "100%",
    transitionDuration: 0,
    textOverflow: "ellipsis",
    height: "10",
    overflow: "hidden",
    bg: colors.brand.greyborder,
    borderColor: "brand.grey",
    borderRadius: "none",
    _placeholder: {
      fontWeight: "none",
    },
    _invalid : { boxShadow : "none", borderColor : "red"}
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontWeight: 400,
    fontSize: "xs",
    margin: 0,
  }),

  menu: (provided: any) => ({
    ...provided,
    width:  "100%",
    my: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    shadow: `0 0 0 1px 1px`,
    borderWidth: "1px",
    borderColor: "brand.grey",
    borderBottomRadius: "md",
  }),
  menuList: (provided: any) => ({
    ...provided,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0,
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'red',
  })
}
export default function FormMultiSelect({
  label,
  name,
  options = [],
  error,
  value,
  touched,
  placeholder,
  required,
  labelStyle,
  disabled,
  isMulti = true,
  onChange,
  isAsyncSelect = false,
  asyncCallback,
  isCreatable = false,
  onCreateOption
}: MultiSelectOption) {
  const Component = isAsyncSelect ? AsyncSelect : isCreatable ? CreatableSelect : Select;


  
  return (
    <FormControl isInvalid={error && touched ? true : false} isRequired={required}>
      <FormLabel {...labelStyle} htmlFor={name}>
        {label}
      </FormLabel>
      <Component
        id={name}
        isMulti={isMulti}
        closeMenuOnSelect={isMulti ? false : true}
        hideSelectedOptions={isMulti ? false : true}
        onChange={(selected:any) => {
          if(onChange)
          isMulti && typeof selected === "object" && selected?.length && selected?.find((option:any) => option.value === "all")
            ? onChange(options)
            : onChange(selected);
        }}
        placeholder={placeholder ?? 'Select ' + label}
        isDisabled={disabled}
        loadOptions={asyncCallback}
        chakraStyles={chakraStyle}
        menuPortalTarget={document.body}
        onCreateOption={onCreateOption}
        styles={{ menuPortal: (base :any) => ({ ...base, zIndex: 9999 }) }}
        value={value}
        components={
          isMulti
            ? {
              MultiValueLabel: MultiValueLabel,
              MultiValueContainer
              }
            : {
            }
        }
        options={
          options?.length
          ? isMulti
            ? [
              options.find((a:any) => a?.isDisabled) ? {label: "Select All", value: "all" , isDisabled : true} :  { label: "Select All", value: "all" },
                ...options.map((i:any) => ({  ...i, label: i.label, value: i.value })),
              ]
            :options.map((i:any) => ({  ...i, label: i.label, value: i.value }))
          : []
        }
        selectedOptionStyle={isMulti ? "check" : "color"}
        defaultOptions={isAsyncSelect ? options : undefined}
      />
      <FormErrorMessage fontSize={"xs"} as="div">
        <>{error}</>
      </FormErrorMessage>
    </FormControl>
  );
}

export function MultiSelectFormControl({
  options,
  name,
  customFindValue,
  isMulti,
  onChange,
  ...rest
}: MultiSelectOption) {
  const [field, { error, touched }, helper] = useField(name);
   

  function findValue() {
    
    if(isMulti === false) return options?.find((i:any) => i.value == field.value) ?? null;
    
    if (typeof field?.value === "object" && field?.value?.length)
      return field.value.map((value : number) => {
        const val = options.find((i: any) => i.value == value);
        return { label: val?.label, value: val?.value };
      }) ?? [];
    else if (typeof field?.value === "string")
      return field.value
        .split(",")
        .filter(Boolean)
        .map((str) => {
          const val = options.find((i: any) => i.value == str);
          return { label: val?.label, value: val?.value };
        });
    else return field?.value;
  }
  return (
    <FormMultiSelect
      {...rest}
      {...field}
      options={options}
      error={error}
      touched={touched}
      isMulti={isMulti}
      value={customFindValue ? customFindValue(field.value) : findValue()}
      onChange={(e) => {
        if(onChange) onChange(e);
        if(isMulti === false) {
          helper.setValue(e?.value);
        }
        else helper.setValue(e?.map((i: any) => i.value));
      }}
    />
  );
}

