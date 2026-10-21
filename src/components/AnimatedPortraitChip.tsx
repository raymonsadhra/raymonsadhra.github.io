"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { withBasePath } from "@/data/siteEnvironment";

type AnimatedPortraitChipProps = {
  portrait: string | null;
  objectPosition?: string;
  animate?: boolean;
};

export function AnimatedPortraitChip({ portrait, objectPosition = "50% 50%", animate = true }: AnimatedPortraitChipProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const motion = motionRef.current;
    if (!shell || !motion) return;

    const showFinal = () => {
      motion.getAnimations().forEach((animation) => animation.cancel());
      motion.querySelectorAll<HTMLElement>(".portrait-chip-flipper").forEach((element) => element.getAnimations().forEach((animation) => animation.cancel()));
      motion.removeAttribute("style");
      motion.classList.remove("is-pending", "is-flying");
      motion.classList.add("is-ready");
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!animate || reducedMotion) {
      showFinal();
      return;
    }
    const destination = shell.getBoundingClientRect();
    if (!destination.width || !destination.height) {
      showFinal();
      return;
    }

    const startSize = Math.min(310, window.innerWidth * 0.58, window.innerHeight * 0.58);
    const startLeft = (window.innerWidth - destination.width) / 2;
    const startTop = (window.innerHeight - destination.height) / 2;
    const dx = startLeft - destination.left;
    const dy = startTop - destination.top;
    const scale = startSize / destination.width;
    const flipper = motion.querySelector<HTMLElement>(".portrait-chip-flipper");

    motion.classList.remove("is-pending");
    motion.classList.add("is-flying");
    Object.assign(motion.style, {
      position: "fixed",
      left: `${destination.left}px`,
      top: `${destination.top}px`,
      width: `${destination.width}px`,
      height: `${destination.height}px`,
      visibility: "visible",
      zIndex: "150",
    });

    const flight = motion.animate([
      { transform: `translate3d(${dx}px, ${dy}px, 0) scale(${scale}) rotateX(8deg) rotateZ(-5deg)`, offset: 0 },
      { transform: `translate3d(${dx * .76 + 22}px, ${dy * .82 - 12}px, 0) scale(${scale * .91}) rotateX(-6deg) rotateZ(7deg)`, offset: .42 },
      { transform: `translate3d(${dx * .2 - 10}px, ${dy * .24}px, 0) scale(${1 + (scale - 1) * .18}) rotateX(3deg) rotateZ(-2deg)`, offset: .82 },
      { transform: "translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateZ(0deg)", offset: 1 },
    ], { duration: 1850, easing: "cubic-bezier(.2,.72,.18,1)", fill: "forwards" });

    const flip = flipper?.animate([
      { transform: "rotateY(0deg)", offset: 0 },
      { transform: "rotateY(630deg)", offset: .58 },
      { transform: "rotateY(820deg)", offset: .84 },
      { transform: "rotateY(900deg)", offset: 1 },
    ], { duration: 1850, easing: "cubic-bezier(.22,.64,.2,1)", fill: "forwards" });

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      showFinal();
    };
    Promise.all([flight.finished, flip?.finished ?? Promise.resolve()]).then(finish).catch(finish);
    const failSafe = window.setTimeout(finish, 2300);
    const onViewportChange = () => finish();
    const onVisibilityChange = () => { if (document.hidden) finish(); };
    window.addEventListener("resize", onViewportChange, { once: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.clearTimeout(failSafe);
      window.removeEventListener("resize", onViewportChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      flight.cancel();
      flip?.cancel();
    };
  }, [animate]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !tiltRef.current) return;
    const target = event.currentTarget;
    const clientX = event.clientX;
    const clientY = event.clientY;
    window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - .5;
      const y = (clientY - rect.top) / rect.height - .5;
      tiltRef.current?.style.setProperty("--portrait-tilt-x", `${(-y * 10).toFixed(2)}deg`);
      tiltRef.current?.style.setProperty("--portrait-tilt-y", `${(x * 10).toFixed(2)}deg`);
      tiltRef.current?.style.setProperty("--portrait-light-x", `${((x + .5) * 100).toFixed(0)}%`);
      tiltRef.current?.style.setProperty("--portrait-light-y", `${((y + .5) * 100).toFixed(0)}%`);
    });
  };

  const resetTilt = () => {
    window.cancelAnimationFrame(frameRef.current);
    tiltRef.current?.style.removeProperty("--portrait-tilt-x");
    tiltRef.current?.style.removeProperty("--portrait-tilt-y");
    tiltRef.current?.style.removeProperty("--portrait-light-x");
    tiltRef.current?.style.removeProperty("--portrait-light-y");
  };

  return <div className="portrait-chip-shell" ref={shellRef}>
    <div className="animated-portrait-chip is-pending" ref={motionRef} onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
      <div className="portrait-chip-tilt" ref={tiltRef}>
        <div className="portrait-chip-flipper">
          <div className="portrait-chip-face portrait-chip-front"><strong>RS</strong><span>Software Engineer</span></div>
          <div className="portrait-chip-face portrait-chip-back">
            <div className="portrait-chip-photo">
              {portrait ? <Image src={withBasePath(portrait)} alt="Raymon Sadhra" fill sizes="(max-width: 700px) 155px, 205px" priority style={{ objectPosition }} /> : <div className="portrait-placeholder"><strong>RS</strong><span>Portrait placeholder</span></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
