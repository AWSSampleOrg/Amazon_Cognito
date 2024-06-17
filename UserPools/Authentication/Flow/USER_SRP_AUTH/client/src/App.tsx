import {
  SignUpInput,
  signUp,
  confirmSignUp,
  ConfirmSignUpInput,
  signIn,
  SignInInput,
} from "aws-amplify/auth";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const services: Parameters<typeof Authenticator>[0]["services"] = {
  async handleSignUp(input: SignUpInput) {
    console.log(input);
    return signUp({
      ...input,
      options: {
        userAttributes: {
          email: input?.options?.userAttributes?.email?.toLocaleLowerCase(),
        },
      },
    });
  },
  async handleConfirmSignUp(input: ConfirmSignUpInput) {
    return confirmSignUp(input);
  },
  async handleSignIn(input: SignInInput) {
    return signIn({
      ...input,
      options: {
        authFlowType: "USER_SRP_AUTH",
      },
    });
  },
};

const formFields: Parameters<typeof Authenticator>[0]["formFields"] = {
  signUp: {
    username: {
      label: "Username:",
      placeholder: "Enter your Username:",
      isRequired: true,
      order: 1,
    },
    password: {
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: true,
      order: 2,
    },
    confirm_password: {
      label: "Confirm Password:",
      isRequired: true,
      order: 3,
    },
    email: {
      label: "Your Email:",
      isRequired: true,
      order: 4,
    },
  },
};

function App() {
  return (
    <>
      <Authenticator services={services} formFields={formFields}>
        {({ signOut, user }) => (
          <>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </>
        )}
      </Authenticator>
    </>
  );
}

export default App;
