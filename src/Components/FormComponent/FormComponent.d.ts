/* eslint-disable @typescript-eslint/no-explicit-any */
 
import {  FormLabelProps, SelectFieldProps, SelectProps, TextareaProps, InputProps } from "@chakra-ui/react";


export type commonFormComponentType  ={
  required: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  rest?: any;
  maxLength?:number
  labelStyle?: FormLabelProps;
  responsive?:boolean;
  infoIcon?:boolean;
  disabled?:boolean;
  fieldType?:string;
  width?:string;
  isView? : boolean;
} 
export interface optionType extends commonFormComponentType,  SelectFieldProps {
  options: { label: string | number; value: string | number; }[];
  fieldStyle ? : SelectProps;
  isMulti? : boolean;
}


export interface textAreaType extends commonFormComponentType, TextareaProps {
  maxLength?:  number;
  value : string;
  onChange : (e : string) => void;
}


export interface dateFieldType extends commonFormComponentType {
  value?: string;
  onChange?: (e : string) => void;
}


export interface InputFieldType extends commonFormComponentType, InputProps  {
  showLength?: boolean;
  value?: string;
  labelInfo?: () => React.ReactElement | null;
  onChange?: (e : string) => void;
  precision? :number;
  step ? :number;
}

export interface MultiSelectOption extends optionType {
  onChange?: (e : any) => void;
  options: any;
  customFindValue ?: (e : any) => void;
  value?: any;
  isAsyncSelect?: boolean;
  isCreatable?: boolean;
  asyncCallback?: (i : string) =>Promise<any[]>;
  onCreateOption ? : (i : string) => void;
}
