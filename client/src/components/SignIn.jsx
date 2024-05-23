import { SignContainer, Span, Title } from "../styles/Auth";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function SignIn() {
  return (
    <SignContainer>
      <div>
        <Title>Welcome to Jibruk 👋</Title>
        <Span>Please login with your details here</Span>
      </div>

      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
        />
        <TextInput label="Password" placeholder="Enter your password" />
        <Button text="Sign In" />
      </div>
    </SignContainer>
  );
}
