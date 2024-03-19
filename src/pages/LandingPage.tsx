import LinkButton from "../components/LinkButton";

export default function LandingPage() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <article className="w-fluid-800 text-left sm:text-center flex flex-col sm:items-center px-4">
        <h1 className="text-headline text-balance">
          Stop Juggling Tasks. Start Getting Things Done
        </h1>
        <p className="text-subtitle text-balance text-left sm:text-wrap text-secondary/75">
          Focus on What Matters. Ditch the Chaos.
        </p>
        <LinkButton
          to="/register"
          text="Let's go!"
          styled
          className="text-main-fs mt-4 self-start sm:self-center"
        />
      </article>
    </section>
  );
}
