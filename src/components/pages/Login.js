import Illustration from "../Illustration";

import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Form from "../Form";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.signup}>
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Dont have an account? <a href="login.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
