/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { FORMS } from "../../Utils/Const";

const Terminsurance = lazy(() => import("./Forms/Terms"));
const Liabilityinsurance = lazy(() => import("./Forms/Liability"));
const Disabilityinsurance = lazy(() => import("./Forms/Disability"));
const Automobileinsurance = lazy(() => import("./Forms/Automobile"));
const Petinsurance = lazy(() => import("./Forms/Pet"));
const Fireinsurance = lazy(() => import("./Forms/Fire"));

export const InsuranceForm = {
  [FORMS.Term]: <Terminsurance />,
  [FORMS.Liability]: <Liabilityinsurance />,
  [FORMS.Disability]: <Disabilityinsurance />,
  [FORMS.Automobile]: <Automobileinsurance />,
  [FORMS.Pet]: <Petinsurance />,
  [FORMS.Fire]: <Fireinsurance />,
}

export const TabLabel = {
  [FORMS.Term] : "Term Insurance",
  [FORMS.Liability] : "Liability Insurance",
  [FORMS.Disability] : "Disability Insurance",
  [FORMS.Automobile] : "Automobile Insurance",
  [FORMS.Pet]: "Pet Insurance",
  [FORMS.Fire]: "Fire Insurance",
};