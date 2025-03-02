import NavBar from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import GameTitle from "@/components/game-title";
import Image from "next/image";
import { TiltSpotlight } from "@/components/ui/tilt-spotlight";
import MainMenuForm from "@/components/main-menu-form";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-950 dark:to-gray-950">
      <NavBar left={<GameTitle />} right={<ThemeToggle />} />

      <div className="w-full max-w-md">
        <div className="flex justify-center p-8">
          <TiltSpotlight className="h-fit w-fit">
            <div className="flex flex-col rounded-md p-2 bg-slate-200 border-slate-600 dark:bg-slate-600 dark:border-slate-900 :">
              <Image
                src={"ordr-logo.svg"}
                alt="ordr logo"
                width={175}
                height={175}
              />
            </div>
          </TiltSpotlight>
        </div>
        <MainMenuForm />
      </div>
    </div>
  );
}
