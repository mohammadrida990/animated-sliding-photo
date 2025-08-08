"use client";
import { AnimatePresence } from "framer-motion";
import Main from "./_components/main";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <Main />
    </AnimatePresence>
  );
}
