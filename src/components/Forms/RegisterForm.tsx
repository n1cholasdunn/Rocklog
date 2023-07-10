import * as Form from '@radix-ui/react-form';

const RegisterForm = () => {
  return (
    <div>
      <Form.Root>
        <Form.Field name="name">
          <div>
            <Form.Label>Name:</Form.Label>
            <Form.Message match="valueMissing">
              Please enter your name
            </Form.Message>
            <Form.Message match="typeMismatch">
              Please provide a valid name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field name="email">
          <div>
            <Form.Label>Email</Form.Label>
            <Form.Message match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input type="email" required />
          </Form.Control>
        </Form.Field>
        <Form.Field name="password">
          <div>
            <Form.Label>Password</Form.Label>
            <Form.Message match="valueMissing">
              Please enter your password
            </Form.Message>
            <Form.Message match="tooShort">
              Password is required to be 8-20 characters
            </Form.Message>
            <Form.Message match="tooLong">
              Password is required to be 8-20 characters
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input type="password" required />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <button>Register</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default RegisterForm;
