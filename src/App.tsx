/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { CoverSection } from "./components/CoverSection";
import { MagazineContent } from "./components/MagazineContent";
import 'lenis/dist/lenis.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="noise-overlay pointer-events-none" />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <CoverSection key="cover" onOpen={() => setIsOpen(true)} />
        ) : (
          <MagazineContent key="content" />
        )}
      </AnimatePresence>
    </>
  );
}
