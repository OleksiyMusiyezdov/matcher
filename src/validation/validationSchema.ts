import { SchemaOf } from "yup";
import * as yup from "yup";
import { Inputs } from "../redux/interfaces";

export enum Error {
  RequiredError = "Field is required",
  TextLengthError = "Max 32 symbols",
  AllowedSymbolsError = "English letters only",
}

export const validationSchema: SchemaOf<Inputs> = yup
  .object()
  .shape({
    firstFirstName: yup
      .string()
      .required(Error.RequiredError)
      .max(32, Error.TextLengthError)
      .matches(/^[a-zA-Z- ]+$/g, Error.AllowedSymbolsError),
    firstSecondName: yup
      .string()
      .required(Error.RequiredError)
      .max(32, Error.TextLengthError)
      .matches(/^[a-zA-Z- ]+$/g, Error.AllowedSymbolsError),

    secondFirstName: yup
      .string()
      .required(Error.RequiredError)
      .max(32, Error.TextLengthError)
      .matches(/^[a-zA-Z- ]+$/g, Error.AllowedSymbolsError),

    secondSecondName: yup
      .string()
      .required(Error.RequiredError)
      .max(32, Error.TextLengthError)
      .matches(/^[a-zA-Z- ]+$/g, Error.AllowedSymbolsError),
  })
  .defined();
