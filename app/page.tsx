"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Users, User } from "lucide-react";
import NavBar from "@/components/navbar";
import { ThemeToggle } from "./components/theme-toggle";
import GameTitle from "./components/game-title";
import Image from "next/image";
import { TiltSpotlight } from "./components/ui/tilt-spotlight";

export default function LandingPage() {
  const [playerName, setPlayerName] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleModeSelection = (mode: "multiplayer" | "local") => {
    if (!playerName.trim()) {
      setNameError(true);
      return;
    }

    console.log(mode);
  };

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

        <div className="grid gap-4">
          <div className="space-y-2">
            <Input
              id="name"
              placeholder="Your name"
              value={playerName}
              onChange={(e) => {
                setPlayerName(e.target.value);
                setNameError(false);
              }}
              className={`border-2 ${nameError ? "border-destructive" : ""}`}
            />
            {nameError && (
              <p className="text-destructive text-sm">Please enter your name</p>
            )}
          </div>

          <Button
            size="lg"
            variant="outline"
            className="h-16 text-lg font-semibold group border-2"
            onClick={() => handleModeSelection("local")}
          >
            <User className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Local Play
          </Button>
          <Button
            size="lg"
            className="h-16 text-lg font-semibold group"
            onClick={() => handleModeSelection("multiplayer")}
          >
            <Users className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Multiplayer
          </Button>
        </div>
      </div>
    </div>
  );
}
