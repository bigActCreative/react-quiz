import Illustration from "../Illustration";

import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Form from "../Form";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.signup}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="text"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <CheckBox>
            <span> I agree to the Terms &emp; Conditions</span>
          </CheckBox>

          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
