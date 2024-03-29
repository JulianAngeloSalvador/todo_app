import LinkButton from "../components/LinkButton";
import LottieComp from "../components/LottieComp";

// Lotties
import mainLottie from "../lotties/tasksOptimized.json";
import { useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";

export default function LandingPage() {
  const mainLot = useRef<LottieRefCurrentProps>(null);

  return (
    <section className="min-h-dvh flex justify-center items-center relative isolate overflow-hidden">
      <article className="w-fluid-800 text-left sm:text-center flex flex-col sm:items-center px-4 relative md:-top-14">
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-fluid-800 md:w-8/12 lg:w-7/12 -z-10">
        <LottieComp
          lottieRef={mainLot}
          animationData={mainLottie}
          initialSegment={[15, 210]}
          loop={false}
          onComplete={() => mainLot.current?.stop}
          className="absolute -bottom-2 md:-bottom-6 w-fluid-300 md:w-full left-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  );
}
