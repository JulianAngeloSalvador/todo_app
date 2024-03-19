import LinkButton from "../components/LinkButton";
import LottieComp from "../components/LottieComp";

// Lotties
import mainLottie from "../../public/lotties/optimizedLottie.json";
import { useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";

export default function LandingPage() {
  const mainLot = useRef<LottieRefCurrentProps>(null);

  return (
    <section className="min-h-dvh flex justify-center items-center relative isolate">
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
      <div className="absolute left-0 bottom-0 -z-10 w-fluid-400 aspect-square">
        <LottieComp
          lottieRef={mainLot}
          animationData={mainLottie}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[5%] 2xl:left-2/4 w-full"
        />
      </div>
    </section>
  );
}
