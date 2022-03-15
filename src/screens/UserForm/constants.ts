import { FormFields } from "./types";
// errors messages for form fields
export const errorMessages = {
  [FormFields.username]: {
    required: "Please input a valid Github username!",
    userNotExist:
      "Provided user doesn't exist, please input a valid Github username!",
  },
};