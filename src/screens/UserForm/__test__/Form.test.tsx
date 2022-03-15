import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import moxios from "moxios";
import { BrowserRouter } from "react-router-dom";
import UserForm from "../components/Form";
import { errorMessages } from "../constants";
import { FormFields } from "../types";

const renderForm = () => {
  render(
    <BrowserRouter>
      <UserForm />
    </BrowserRouter>
  );
};
const getSubmitButton = () => {
  return screen.getByTestId("submit-btn");
};
const expectErrorMessage = (errorMessage: string) => {
  expect(screen.getByText(errorMessage)).toBeInTheDocument();
};
const expectNoErrorMessage = (errorMessage: string) => {
  expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
};
const getInput = (name: FormFields) => {
  return screen.getByTestId(`input-${name}`);
};
const setInputValue = (name: FormFields, value: string) => {
  const inputEl = getInput(name);
  fireEvent.change(inputEl, { target: { value } });
};
beforeEach(() => {
  moxios.install();
});
afterEach(() => {
  moxios.uninstall();
});
describe("Form validations", () => {
  test("If the 'required' validation errors are displayed when an empty form is submitted", () => {
    renderForm();
    const buttonEl = getSubmitButton();
    fireEvent.submit(buttonEl);
    expectErrorMessage(errorMessages[FormFields.username].required);
  });
  test("If the 'required' validation errors are not displayed when the form is filled", () => {
    renderForm();
    // set input value
    setInputValue(FormFields.username, "test");
    const buttonEl = getSubmitButton();
    fireEvent.submit(buttonEl);
    expectNoErrorMessage(errorMessages[FormFields.username].required);
  });
  test("If the 'invalid' validation is displayed when a invalid Github username is provided", (done) => {
    renderForm();
    setInputValue(FormFields.username, "test");
    const buttonEl = getSubmitButton();
    fireEvent.submit(buttonEl);
    // mock axios request
    (async () => {
      await waitFor(() => {
        const request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 404,
            response: {
              details: {},
            },
          })
          .then(async (response) => {
            expectErrorMessage(errorMessages[FormFields.username].userNotExist);
            done();
          });
      });
    })();
  });
});
