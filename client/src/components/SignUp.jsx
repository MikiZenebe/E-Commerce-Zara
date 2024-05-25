import { SignContainer, Span, Title } from "../styles/Auth";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function SignUp() {
  return (
    <SignContainer>
      <div>
        <Title>Create New Account 👋</Title>
        <Span>Please enter details to create a new account</Span>
      </div>

      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput label="Full Name" placeholder="Enter your full name" />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
        />
        <Button text="Sign Up" />
      </div>
    </SignContainer>
  );
}
