"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div>
      <motion.div className="relative mx-4 my-4 flex flex-col  items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip 
          text="WELCOME TO "
          words={["RADIO ROOM📻", "MUSIC WORLD🎧", "BEATS CENTER🥁", "MUSIC PLAY🎤"]}
        />
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        Welcome to Music Play, your space for discovering fresh tracks, exploring curated playlists, and enjoying seamless streaming anytime. Dive into powerful beats, calming melodies, and everything between. Experience music crafted for your mood, style, and daily moments every single day.
      </p>
    </div>
  );
}
