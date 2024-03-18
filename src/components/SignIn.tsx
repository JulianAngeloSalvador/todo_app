import Authenticator from "./Authenticator";

export default function SignIn() {
  const authAction = "Sign in";

  return (
    <Authenticator
      header={{ title: authAction, subtitle: "Welcome back!" }}
      googleAction={authAction}
      newUser={false}
    />
  );
}
