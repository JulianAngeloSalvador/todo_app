import { FcGoogle } from "react-icons/fc";

export default function GoogleAuthenticator({ action }: { action: string }) {
  return (
    <button
      onClick={(e) => e.preventDefault()}
      className="text-sm cta-base-pad flex items-center justify-center gap-2 outline outline-1 outline-secondary/55 rounded-md hocus:outline-secondary"
    >
      <FcGoogle fontSize={"1.5em"} className="mb-0.5" />
      {action} with Google
    </button>
  );
}
