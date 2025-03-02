import { Spotlight } from "@/components/ui/spotlight";
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type TiltSpotlightProps = {
  children: ReactNode;
  className: string;
};

export function TiltSpotlight({ children, className }: TiltSpotlightProps) {
  return (
    <div className={cn("aspect-video max-w-sm", className)}>
      <Tilt
        rotationFactor={8}
        isRevese
        style={{
          transformOrigin: "center center",
        }}
        className="group relative rounded-lg"
      >
        <Spotlight
          className="z-10 bg-radial from-white via-white/30 to-white/10 bg-blend-saturation blur-2xl"
          size={248}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        {children}
      </Tilt>
    </div>
  );
}
