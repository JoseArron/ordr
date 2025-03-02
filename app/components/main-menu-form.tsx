"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { User, Users } from "lucide-react";

export type gameMode = "local" | "multiplayer";

const MainMenuForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ username: string }>();

  const submitGameMode = (mode: gameMode, username: string) => {
    console.log(mode, username);
  };

  return (
    <form
      className="grid gap-4"
      onSubmit={handleSubmit((data) => submitGameMode("local", data.username))}
    >
      <div className="space-y-2">
        <Input
          id="name"
          placeholder="Your name"
          className={`border-2 ${errors.username ? "border-destructive" : ""}`}
          {...register("username", { required: "Please enter your name" })}
        />
        {errors.username && (
          <p className="text-destructive text-sm">{errors.username.message}</p>
        )}
      </div>

      <Button
        size="lg"
        variant="outline"
        className="h-16 text-lg font-semibold group border-2"
        type="submit"
        onClick={handleSubmit((data) => submitGameMode("local", data.username))}
      >
        <User className="mr-2 h-5 w-5 group-hover:animate-pulse" />
        Local Play
      </Button>
      <Button
        size="lg"
        className="h-16 text-lg font-semibold group"
        type="submit"
        onClick={handleSubmit((data) =>
          submitGameMode("multiplayer", data.username),
        )}
      >
        <Users className="mr-2 h-5 w-5 group-hover:animate-pulse" />
        Multiplayer
      </Button>
    </form>
  );
};

export default MainMenuForm;
