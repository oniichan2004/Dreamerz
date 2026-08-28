// "use client";

// import { useEffect, useId, useRef } from "react";
// import "../styles/dream-animation.css";

// /* ── Tipuri ─────────────────────────────────────────────── */

// export type Dream = {
//   name: string;
//   text: string;
//   /** procentul de sprijin strâns, 0–100 */
//   scope: number;
//   fulfilled: number;
//   received: number;
// };

// /** Orice stare pe care o poate afișa cardul. `pct` și `scope` sunt
//     două nume pentru aceeași valoare; se acceptă oricare. */
// export type Progress = {
//   pct?: number;
//   scope?: number;
//   fulfilled: number;
//   received: number;
// };

// export type DreamIntroProps = {
//   dreams?: Dream[];
//   finalState?: Progress;
//   className?: string;
// };

// type Ease = (t: number) => number;

// /* ── Conținut implicit (poți trimite altul prin prop) ──── */
// const DEFAULT_DREAMS: Dream[] = [
//   { name: "Ilinca Marc",  text: "I want to travel all around the world",  scope: 12, fulfilled: 2,  received: 21  },
//   { name: "Teodor Vlas",  text: "I want to open a bakery by the sea",     scope: 34, fulfilled: 8,  received: 64  },
//   { name: "Sofia Enache", text: "I want to learn to play the piano",      scope: 57, fulfilled: 15, received: 128 },
//   { name: "Radu Cimpoi",  text: "I want to build a school in my village", scope: 41, fulfilled: 9,  received: 87  },
// ];

// const FINAL: Progress = { pct: 100, fulfilled: 500, received: 1000 };
// const ZERO:  Progress = { pct: 0,   fulfilled: 0,   received: 0    };

// /* ── Durate, ms ─────────────────────────────────────────── */
// const T = {
//   drawIn: 1150, cardIn: 620, typeSpeed: 34, fillDelay: 260,
//   fill: 950, holdA: 1350, fulfil: 1150, holdB: 2000,
//   fadeOut: 420, erase: 900,
// } as const;

// const PALETTE = ["#8ef0d2", "#c3a8f5", "#f3a8c8", "#f9c9a4", "#ffffff"] as const;

// /* Visurile vin cu `scope`, iar FINAL/ZERO cu `pct`; acceptăm ambele. */
// const pctOf = (o: Progress): number => o.pct ?? o.scope ?? 0;

// const clamp = (v: number, a: number, b: number): number => (v < a ? a : v > b ? b : v);
// const lerp  = (a: number, b: number, t: number): number => a + (b - a) * t;

// const easeOutCubic:   Ease = (t) => 1 - Math.pow(1 - t, 3);
// const easeInOutCubic: Ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
// const easeOutBack:    Ease = (t) => 1 + 2.2 * Math.pow(t - 1, 3) + 1.4 * Math.pow(t - 1, 2);
// const linear:         Ease = (t) => t;

// export default function DreamIntro({
//   dreams = DEFAULT_DREAMS,
//   finalState = FINAL,
//   className = "",
// }: DreamIntroProps) {
//   const rootRef      = useRef<HTMLDivElement | null>(null);
//   const rectRef      = useRef<SVGRectElement | null>(null);
//   const cardRef      = useRef<HTMLElement | null>(null);
//   const nameRef      = useRef<HTMLDivElement | null>(null);
//   const dreamTextRef = useRef<HTMLSpanElement | null>(null);
//   const caretRef     = useRef<HTMLElement | null>(null);
//   const pctRef       = useRef<HTMLElement | null>(null);
//   const fillRef      = useRef<HTMLDivElement | null>(null);
//   const fulfilledRef = useRef<HTMLElement | null>(null);
//   const receivedRef  = useRef<HTMLElement | null>(null);
//   const burstRef     = useRef<HTMLDivElement | null>(null);

//   /* id unic pentru gradient, stabil între server și client (fără hydration mismatch).
//      useId poate întoarce caractere ilegale în url(#…), deci le filtrăm. */
//   const gradId = `dzGrad-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

//   useEffect(() => {
//     /* Citim toate ref-urile o singură dată. Fiind `const`, TypeScript
//        păstrează îngustarea la non-null și în closure-urile de mai jos,
//        deci nu mai avem nevoie de `!` sau `?.` nicăieri. */
//     const root        = rootRef.current;
//     const rect        = rectRef.current;
//     const card        = cardRef.current;
//     const nameEl      = nameRef.current;
//     const textEl      = dreamTextRef.current;
//     const caret       = caretRef.current;
//     const pctEl       = pctRef.current;
//     const fill        = fillRef.current;
//     const fulfilledEl = fulfilledRef.current;
//     const receivedEl  = receivedRef.current;
//     const burst       = burstRef.current;

//     if (!root || !rect || !card || !nameEl || !textEl || !caret ||
//         !pctEl || !fill || !fulfilledEl || !receivedEl || !burst) return;

//     const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     /* ── Registru de resurse, pentru cleanup la unmount ── */
//     let alive = true;
//     const timeouts = new Set<ReturnType<typeof setTimeout>>();
//     const rafs = new Set<number>();
//     const anims = new Set<Animation>();

//     const wait = (ms: number): Promise<void> =>
//       new Promise<void>((res) => {
//         const id = setTimeout(() => { timeouts.delete(id); res(); }, reduced ? 0 : ms);
//         timeouts.add(id);
//       });

//     const tween = (dur: number, onFrame: (p: number) => void, ease: Ease = easeOutCubic): Promise<void> =>
//       new Promise<void>((res) => {
//         if (reduced) { onFrame(1); return res(); }
//         const t0 = performance.now();
//         const step = (now: number): void => {
//           if (!alive) return res();
//           const p = clamp((now - t0) / dur, 0, 1);
//           onFrame(ease(p));
//           if (p < 1) { const id = requestAnimationFrame(step); rafs.add(id); }
//           else res();
//         };
//         const id = requestAnimationFrame(step);
//         rafs.add(id);
//       });

//     const typewriter = (text: string): Promise<void> =>
//       new Promise<void>((res) => {
//         if (reduced) {
//           textEl.textContent = text;
//           caret.style.display = "none";
//           return res();
//         }
//         let i = 0;
//         caret.style.display = "inline-block";
//         const step = (): void => {
//           if (!alive) return res();
//           textEl.textContent = text.slice(0, ++i);
//           if (i < text.length) {
//             const id = setTimeout(() => { timeouts.delete(id); step(); }, T.typeSpeed);
//             timeouts.add(id);
//           } else {
//             caret.style.display = "none";
//             res();
//           }
//         };
//         step();
//       });

//     /* O singură valoare de progres alimentează bara, procentul
//        și ambele contoare — nu se pot desincroniza. */
//     const paint = (t: number, from: Progress, to: Progress): void => {
//       const p = clamp(t, 0, 1);
//       const pct = lerp(pctOf(from), pctOf(to), p);
//       fill.style.width       = pct + "%";
//       pctEl.textContent      = Math.round(pct) + " %";
//       fulfilledEl.textContent = String(Math.round(lerp(from.fulfilled, to.fulfilled, p)));
//       receivedEl.textContent  = String(Math.round(lerp(from.received,  to.received,  p)));
//     };

//     const firework = (x: number, y: number): void => {
//       if (reduced) return;

//       const ring = document.createElement("div");
//       ring.className = "dz__ring";
//       ring.style.cssText = `left:${x}px;top:${y}px;width:8px;height:8px;margin:-4px 0 0 -4px`;
//       burst.appendChild(ring);
//       const ringAnim = ring.animate(
//         [{ transform: "scale(1)", opacity: 0.9 }, { transform: "scale(11)", opacity: 0 }],
//         { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }
//       );
//       anims.add(ringAnim);
//       ringAnim.onfinish = () => { anims.delete(ringAnim); ring.remove(); };

//       for (let i = 0; i < 46; i++) {
//         const angle = (i / 46) * Math.PI * 2 + Math.random() * 0.28;
//         const dist  = 34 + Math.random() * 104;
//         const size  = 3 + Math.random() * 5;
//         const color = PALETTE[i % PALETTE.length];

//         const s = document.createElement("i");
//         s.className = "dz__spark";
//         s.style.cssText =
//           `left:${x}px;top:${y}px;width:${size}px;height:${size}px;` +
//           `margin:${-size / 2}px 0 0 ${-size / 2}px;background:${color};` +
//           `box-shadow:0 0 ${size * 2.4}px ${color}`;
//         burst.appendChild(s);

//         const a = s.animate(
//           [
//             { transform: "translate(0,0) scale(1)", opacity: 1 },
//             { transform: `translate(${Math.cos(angle) * dist * 0.62}px,${Math.sin(angle) * dist * 0.62 - 6}px) scale(.9)`, opacity: 1, offset: 0.45 },
//             { transform: `translate(${Math.cos(angle) * dist}px,${Math.sin(angle) * dist + 46}px) scale(.2)`, opacity: 0 },
//           ],
//           { duration: 850 + Math.random() * 700, easing: "cubic-bezier(.16,.7,.3,1)", fill: "forwards" }
//         );
//         anims.add(a);
//         a.onfinish = () => { anims.delete(a); s.remove(); };
//       }
//     };

//     /* ── Bucla ──────────────────────────────────────────── */
//     let index = 0;

//     const cycle = async (): Promise<void> => {
//       if (!alive) return;
//       const d = dreams[index++ % dreams.length];
//       if (!d) return;

//       textEl.textContent = "";
//       textEl.className = "";
//       nameEl.textContent = d.name;
//       paint(0, ZERO, d);
//       card.style.opacity = "0";
//       card.style.transform = "rotate(-4deg) scale(.94)";
//       rect.style.strokeDashoffset = "1";

//       /* 1 · rama se desenează */
//       void tween(T.drawIn, (p) => { rect.style.strokeDashoffset = String(1 - p); }, easeInOutCubic);
//       await wait(320);
//       if (!alive) return;

//       /* 2 · cardul se așază */
//       await tween(T.cardIn, (p) => {
//         card.style.opacity = String(p);
//         card.style.transform = `rotate(-4deg) scale(${lerp(0.94, 1, easeOutBack(p))})`;
//       }, linear);
//       if (!alive) return;

//       /* 3 · visul se scrie */
//       await typewriter(d.text);
//       if (!alive) return;

//       /* 4 · apare sprijinul */
//       await wait(T.fillDelay);
//       await tween(T.fill, (p) => paint(p, ZERO, d));
//       await wait(T.holdA);
//       if (!alive) return;

//       /* 5 · visul se împlinește */
//       textEl.className = "dz__dream-text--done";
//       textEl.textContent = "your dream came true";
//       const box     = root.getBoundingClientRect();
//       const cardBox = card.getBoundingClientRect();
//       firework(cardBox.right - box.left - 14, cardBox.top - box.top + 62);
//       await tween(T.fulfil, (p) => paint(p, d, finalState));
//       await wait(T.holdB);
//       if (!alive) return;

//       /* 6 · ieșire lină: întâi conținutul, apoi rama */
//       await tween(T.fadeOut, (p) => {
//         card.style.opacity = String(1 - p);
//         card.style.transform = `rotate(-4deg) scale(${lerp(1, 0.97, p)})`;
//       }, linear);
//       await tween(T.erase, (p) => { rect.style.strokeDashoffset = String(-p); }, easeInOutCubic);
//       await wait(180);

//       void cycle();
//     };

//     void cycle();

//     return () => {
//       alive = false;
//       timeouts.forEach(clearTimeout);
//       rafs.forEach(cancelAnimationFrame);
//       anims.forEach((a) => a.cancel());
//       burst.innerHTML = "";
//     };
//   }, [dreams, finalState]);

//   return (
//     <div
//       ref={rootRef}
//       className={`dz ${className}`.trim()}
//       role="img"
//       aria-label="Card de vis animat: un vis primește sprijin până este împlinit."
//     >
//       <svg className="dz__frame" viewBox="0 0 420 430" aria-hidden="true">
//         <defs>
//           <linearGradient id={gradId} x1="0" y1="1" x2="1" y2="0">
//             <stop offset="0%"   stopColor="#8ef0d2" />
//             <stop offset="50%"  stopColor="#c3a8f5" />
//             <stop offset="100%" stopColor="#f3a8c8" />
//           </linearGradient>
//         </defs>
//         <rect
//           ref={rectRef}
//           x="66" y="71" width="288" height="288" rx="14"
//           pathLength="1"
//           transform="rotate(15 210 215)"
//           style={{ stroke: `url(#${gradId})` }}
//         />
//       </svg>

//       <article className="dz__card" ref={cardRef} aria-hidden="true">
//         <div className="dz__photo">
//           <div className="dz__sun" />
//           <div className="dz__avatar">
//             <svg viewBox="0 0 78 78" aria-hidden="true">
//               <circle cx="39" cy="30" r="13" fill="rgba(29,27,46,.82)" />
//               <path d="M8 78c0-17.7 13.9-30 31-30s31 12.3 31 30z" fill="rgba(29,27,46,.82)" />
//             </svg>
//           </div>
//         </div>

//         <div className="dz__body">
//           <div className="dz__name" ref={nameRef}>&nbsp;</div>
//           <div className="dz__dream">
//             <span ref={dreamTextRef} />
//             <i className="dz__caret" ref={caretRef} />
//           </div>

//           <div className="dz__metrics">
//             <div className="dz__row dz__row--top">
//               <span>Scope</span>
//               <b ref={pctRef}>0 %</b>
//             </div>
//             <div className="dz__track">
//               <div className="dz__fill" ref={fillRef} />
//             </div>
//             <div className="dz__row dz__row--bottom">
//               <span>Fulfilled <b ref={fulfilledRef}>0</b></span>
//               <span>Received <b ref={receivedRef}>0</b></span>
//             </div>
//           </div>
//         </div>
//       </article>

//       <div className="dz__burst" ref={burstRef} />
//     </div>
//   );
// }