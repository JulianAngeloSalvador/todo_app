import Authenticator from "./Authenticator";

export default function SignUp() {
  const authAction = "Sign up";

  return (
    <Authenticator
      header={{
        title: authAction,
        subtitle: "Start tracking your progress and evolve",
      }}
      googleAction={authAction}
      newUser={true}
    />
  );
}
