import { FormEvent, useCallback, useEffect, useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InputField from "../../../../shared/components/InputField";
import { errorMessages } from "../../constants";
import { validateUsername } from "../../store/dispatchers";
import useValidateUsername from "../../hooks/useValidateUsername";
import { FormFields } from "../../types";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { state, dispatch } = useValidateUsername();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.failed) {
      setError(errorMessages[FormFields.username].userNotExist);
    }
  }, [state.failed]);

  useEffect(() => {
    if (state.success) {
      // username is valid
      // redirect to user gists page
      navigate(`/users/${username}`);
    }
  }, [state.success, username, navigate]);

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (!username.trim()) {
        setError(errorMessages[FormFields.username].required);
      } else {
        // send validation request
        dispatch(validateUsername(username));
      }
    },
    [username, dispatch]
  );

  const onChangeUsername = (value: string) => {
    // reset error
    setError("");
    setUsername(value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <InputField
            placeholder="Github username"
            value={username}
            onChange={onChangeUsername}
            errorMessage={error}
            data-testid={`input-${FormFields.username}`}
          />
        </Col>
        <Col className="col-auto ps-0">
          <Button
            variant="primary"
            data-testid="submit-btn"
            type="submit"
            disabled={state.inProgress}
          >
            {state.inProgress ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                <span>Loading...</span>
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default UserForm;
