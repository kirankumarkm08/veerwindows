"use client";

import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ArrowRight,
  Droplets,
  Frame as FrameIcon,
  Move3D,
  PanelsTopLeft,
  Rotate3D,
} from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

const FRAME_FINISHES = [
  {
    id: "nut-tree",
    label: "Nut Tree",
    group: "Natura",
    color: "#b98d65",
    swatch: "linear-gradient(105deg, #c9a27d, #a97850 48%, #c0966d)",
  },
  {
    id: "golden-oak-cognacse",
    label: "Golden Oak Cognacse",
    group: "Natura",
    color: "#9a5b27",
    swatch: "linear-gradient(105deg, #bc7938, #86501f 48%, #a7672d)",
  },
  {
    id: "black-brown",
    label: "Black Brown",
    group: "Natura",
    color: "#27140d",
    swatch: "linear-gradient(105deg, #3b2117, #160b08 52%, #321b12)",
  },
  {
    id: "alux-db",
    label: "Alux DB",
    group: "Natura",
    color: "#554b43",
    swatch: "linear-gradient(105deg, #655a50, #423b36 52%, #5d5148)",
  },
  {
    id: "wenge",
    label: "Wenge",
    group: "Natura",
    color: "#352117",
    swatch: "linear-gradient(105deg, #493025, #25140e 52%, #3c271c)",
  },
  {
    id: "mahagoni",
    label: "Mahagoni",
    group: "Natura",
    color: "#6d2418",
    swatch: "linear-gradient(105deg, #8e3524, #57170f 52%, #77291b)",
  },
  {
    id: "turner-oak-malt",
    label: "Turner Oak Malt",
    group: "Wooddec",
    color: "#ac8058",
    swatch: "linear-gradient(105deg, #c49a70, #936641 50%, #b5885f)",
  },
  {
    id: "turner-oak-toffee",
    label: "Turner Oak Toffee",
    group: "Wooddec",
    color: "#7b4728",
    swatch: "linear-gradient(105deg, #925c37, #68371f 50%, #85502d)",
  },
  {
    id: "turner-oak-walnut",
    label: "Turner Oak Walnut",
    group: "Wooddec",
    color: "#4f2818",
    swatch: "linear-gradient(105deg, #64351f, #3a1a11 52%, #542918)",
  },
  {
    id: "turner-oak-amber",
    label: "Turner Oak Amber",
    group: "Wooddec",
    color: "#996027",
    swatch: "linear-gradient(105deg, #b67935, #80501f 52%, #a26829)",
  },
  {
    id: "sheffield-oak-alpine",
    label: "Sheffield Oak Alpine",
    group: "Wooddec",
    color: "#dedbd4",
    swatch: "linear-gradient(105deg, #f4f1eb, #d4d0c8 52%, #e9e5dd)",
  },
  {
    id: "sheffield-oak-concrete",
    label: "Sheffield Oak Concrete",
    group: "Wooddec",
    color: "#aaa5a0",
    swatch: "linear-gradient(105deg, #c2beba, #97918c 52%, #b1aca6)",
  },
  {
    id: "anthracite-grey",
    label: "Anthracite Grey",
    group: "Aludec",
    color: "#2f3131",
    swatch: "linear-gradient(135deg, #414343, #252727)",
  },
  {
    id: "jet-black",
    label: "Jet Black",
    group: "Aludec",
    color: "#0b0c0c",
    swatch: "linear-gradient(135deg, #1b1c1c, #050505)",
  },
  {
    id: "db-703",
    label: "DB 703",
    group: "Aludec",
    color: "#3d3e3d",
    swatch: "linear-gradient(135deg, #555654, #2d2e2d)",
  },
  {
    id: "umbra-grey",
    label: "Umbra Grey",
    group: "Aludec",
    color: "#625f57",
    swatch: "linear-gradient(135deg, #77736a, #514f49)",
  },
  {
    id: "window-grey",
    label: "Window Grey",
    group: "Aludec",
    color: "#747778",
    swatch: "linear-gradient(135deg, #8a8d8e, #646667)",
  },
  {
    id: "basalt-grey",
    label: "Basalt Grey",
    group: "Aludec",
    color: "#777570",
    swatch: "linear-gradient(135deg, #8b8984, #66645f)",
  },
] as const;

const GLASS_TYPES = [
  {
    id: "clear",
    label: "Clear",
    opacity: 0.32,
    color: "#b8d4e8",
    roughness: 0.08,
    swatch: "linear-gradient(135deg, #eff9ff, #b7d3df)",
  },
  {
    id: "tinted",
    label: "Tinted",
    opacity: 0.48,
    color: "#668777",
    roughness: 0.12,
    swatch: "linear-gradient(135deg, #b8c4c2, #71807e)",
  },
  {
    id: "frosted",
    label: "Frosted",
    opacity: 0.62,
    color: "#dce3e3",
    roughness: 0.72,
    swatch: "linear-gradient(135deg, #f3f5f5, #c9cecf 55%, #e8ebeb)",
  },
  {
    id: "reflective",
    label: "Reflective",
    opacity: 0.58,
    color: "#7894ad",
    roughness: 0.18,
    swatch: "linear-gradient(115deg, #637a8a, #e5d7bd 42%, #344956 70%, #a9bac4)",
  },
] as const;

type FinishId = (typeof FRAME_FINISHES)[number]["id"];
type GlassId = (typeof GLASS_TYPES)[number]["id"];
type ConfiguratorPanel = "frame" | "glass" | "opening";

function FrameBar({
  position,
  scale,
  color,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
}) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={scale} />
      <meshStandardMaterial color={color} metalness={0.14} roughness={0.36} />
    </mesh>
  );
}

function DoorPanel({
  initialX,
  targetOffset,
  open,
  finish,
  glassType,
  z,
}: {
  initialX: number;
  targetOffset: number;
  open: boolean;
  finish: FinishId;
  glassType: GlassId;
  z: number;
}) {
  const panelRef = useRef<THREE.Group>(null);
  const finishColor = FRAME_FINISHES.find((option) => option.id === finish)?.color ?? "#f5f5f0";
  const glass = GLASS_TYPES.find((option) => option.id === glassType) ?? GLASS_TYPES[0];
  const targetX = initialX + (open ? targetOffset : 0);

  useFrame((_, delta) => {
    if (!panelRef.current) return;
    panelRef.current.position.x = THREE.MathUtils.damp(
      panelRef.current.position.x,
      targetX,
      7,
      delta,
    );
  });

  return (
    <group ref={panelRef} position={[initialX, 0, z]}>
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[1.75, 3.45, 0.035]} />
        <meshPhysicalMaterial
          color={glass.color}
          transparent
          opacity={glass.opacity}
          roughness={glass.roughness}
          metalness={glassType === "reflective" ? 0.5 : 0.08}
          side={THREE.DoubleSide}
        />
      </mesh>

      <FrameBar position={[0, 1.78, 0.01]} scale={[1.98, 0.14, 0.12]} color={finishColor} />
      <FrameBar position={[0, -1.78, 0.01]} scale={[1.98, 0.14, 0.12]} color={finishColor} />
      <FrameBar position={[-0.92, 0, 0.01]} scale={[0.14, 3.7, 0.12]} color={finishColor} />
      <FrameBar position={[0.92, 0, 0.01]} scale={[0.14, 3.7, 0.12]} color={finishColor} />

      <mesh position={[0.78, -0.45, 0.1]} castShadow>
        <boxGeometry args={[0.1, 0.52, 0.08]} />
        <meshStandardMaterial color="#9d825b" metalness={0.72} roughness={0.22} />
      </mesh>
    </group>
  );
}

function SlidingDoorScene({
  open,
  finish,
  glassType,
}: {
  open: boolean;
  finish: FinishId;
  glassType: GlassId;
}) {
  const finishColor = FRAME_FINISHES.find((option) => option.id === finish)?.color ?? "#f5f5f0";

  return (
    <>
      <color attach="background" args={["#e9e5dd"]} />
      <ambientLight intensity={1.15} />
      <hemisphereLight args={["#dcebfa", "#75614e", 1.35]} />
      <directionalLight position={[5, 8, 6]} intensity={2.2} castShadow />
      <directionalLight position={[-4, 3, 2]} intensity={0.7} />

      <group position={[0, 0.05, 0]}>
        <FrameBar position={[-2.05, 0, 0]} scale={[0.18, 4.05, 0.2]} color={finishColor} />
        <FrameBar position={[2.05, 0, 0]} scale={[0.18, 4.05, 0.2]} color={finishColor} />
        <FrameBar position={[0, 1.97, 0]} scale={[4.28, 0.18, 0.2]} color={finishColor} />
        <FrameBar position={[0, -1.97, 0]} scale={[4.28, 0.2, 0.24]} color={finishColor} />

        <DoorPanel
          initialX={-0.97}
          targetOffset={1.65}
          open={open}
          finish={finish}
          glassType={glassType}
          z={0.02}
        />
        <DoorPanel
          initialX={0.97}
          targetOffset={-1.65}
          open={open}
          finish={finish}
          glassType={glassType}
          z={0.16}
        />
      </group>

      <mesh position={[0, -2.08, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#d8d1c5" roughness={0.92} />
      </mesh>
      <ContactShadows position={[0, -2.06, 0]} opacity={0.32} scale={8} blur={2.6} far={3.5} />

      <OrbitControls
        makeDefault
        enablePan={false}
        minPolarAngle={Math.PI / 4.5}
        maxPolarAngle={Math.PI / 2.05}
        minAzimuthAngle={-Math.PI / 3}
        maxAzimuthAngle={Math.PI / 3}
        minDistance={4.8}
        maxDistance={8.5}
        target={[0, 0, 0]}
      />
    </>
  );
}

function CanvasFallback() {
  return (
    <div className="flex h-full min-h-96 items-center justify-center bg-surface text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">3D preview</p>
        <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
          Your browser could not start the interactive preview. You can still select your options
          and contact our team.
        </p>
      </div>
    </div>
  );
}

export function SlidingDoorConfigurator() {
  const [doorOpen, setDoorOpen] = useState(false);
  const [finish, setFinish] = useState<FinishId>("anthracite-grey");
  const [glassType, setGlassType] = useState<GlassId>("clear");
  const [activePanel, setActivePanel] = useState<ConfiguratorPanel>("frame");
  const [isCompactViewport, setIsCompactViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsCompactViewport(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const selectedFinish = FRAME_FINISHES.find((option) => option.id === finish) ?? FRAME_FINISHES[0];
  const selectedGlass = GLASS_TYPES.find((option) => option.id === glassType) ?? GLASS_TYPES[0];

  const panels = [
    { id: "frame", label: "Frame", icon: FrameIcon },
    { id: "glass", label: "Glass", icon: Droplets },
    { id: "opening", label: "Opening", icon: PanelsTopLeft },
  ] as const;

  const finishGroups = ["Natura", "Wooddec", "Aludec"] as const;

  return (
    <section
      aria-labelledby="configurator-heading"
      className="bg-background pb-20 pt-24 sm:pb-28 lg:pt-0"
    >
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
        <h2 id="configurator-heading" className="sr-only">
          Configure your sliding door
        </h2>

        <div className="mx-auto max-w-[30rem] overflow-hidden rounded-[2.25rem] border-[7px] border-[#17191b] bg-[#17191b] shadow-[0_32px_90px_-42px_rgba(3,30,44,0.65)] lg:grid lg:max-w-none lg:grid-cols-[minmax(0,1fr)_28rem] lg:rounded-3xl lg:border lg:border-heading/10 lg:bg-white">
          <div
            className="relative h-[31rem] overflow-hidden bg-surface sm:h-[42rem] lg:h-[44rem]"
            aria-label="Interactive 3D model of a two-panel sliding door"
          >
            <Canvas
              camera={{ position: [5.3, 1.8, 6.4], fov: 38 }}
              dpr={isCompactViewport ? [1, 1.15] : [1, 1.5]}
              shadows
              fallback={<CanvasFallback />}
              gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
            >
              <Suspense fallback={null}>
                <SlidingDoorScene open={doorOpen} finish={finish} glassType={glassType} />
              </Suspense>
            </Canvas>

            <div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[#fbf8f2]/95 px-5 py-3 text-xs font-semibold text-heading shadow-lg backdrop-blur sm:bottom-8">
              <Rotate3D className="size-4 text-primary" aria-hidden="true" />
              <span className="sm:hidden">Drag to rotate · pinch to zoom</span>
              <span className="hidden sm:inline">Drag to rotate · scroll to zoom</span>
            </div>

            <div className="pointer-events-none absolute left-5 top-5 max-w-[calc(100%-2.5rem)] rounded-full bg-black/45 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur sm:left-7 sm:top-7">
              {selectedFinish.label} · {selectedGlass.label} glass
            </div>
          </div>

          <div className="relative z-10 -mt-8 flex flex-col rounded-t-[2rem] bg-[#fbf8f2] px-5 pb-6 pt-3 sm:px-8 sm:pb-8 lg:mt-0 lg:max-h-[44rem] lg:overflow-y-auto lg:rounded-none lg:px-8 lg:py-6">
            <div
              aria-hidden="true"
              className="mx-auto mb-4 h-1 w-12 rounded-full bg-heading/35 lg:hidden"
            />

            <div
              role="tablist"
              aria-label="Configurator options"
              className="grid grid-cols-3 border-b border-heading/10"
            >
              {panels.map(({ id, label, icon: Icon }) => {
                const selected = activePanel === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActivePanel(id)}
                    className={cn(
                      "relative flex min-h-14 items-center justify-center gap-2 px-2 text-sm font-semibold transition-colors after:absolute after:inset-x-2 after:bottom-0 after:h-1 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                      selected
                        ? "text-heading after:scale-x-100"
                        : "text-muted-foreground hover:text-heading",
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="py-6">
              {activePanel === "frame" ? (
                <div role="tabpanel">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xl font-bold text-heading">Frame finish</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Colours and finishes from the Veer Windows catalogue.
                      </p>
                    </div>
                    <span className="shrink-0 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary">
                      {FRAME_FINISHES.length} finishes
                    </span>
                  </div>

                  <div className="mt-6 grid gap-7">
                    {finishGroups.map((group) => (
                      <fieldset key={group}>
                        <legend className="text-[0.65rem] font-bold uppercase tracking-[0.17em] text-muted-foreground">
                          {group}
                        </legend>
                        <div className="mt-3 grid grid-cols-4 gap-x-3 gap-y-5 lg:grid-cols-3">
                          {FRAME_FINISHES.filter((option) => option.group === group).map(
                            (option) => {
                              const selected = finish === option.id;
                              return (
                                <button
                                  key={option.id}
                                  type="button"
                                  aria-pressed={selected}
                                  onClick={() => setFinish(option.id)}
                                  className="group flex min-h-24 flex-col items-center gap-2 text-center text-[0.68rem] font-semibold leading-4 text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                  <span
                                    aria-hidden="true"
                                    className={cn(
                                      "block size-14 rounded-full border-2 border-white shadow-[0_2px_12px_rgba(3,30,44,0.18)] ring-1 ring-heading/10 transition-transform group-hover:scale-105",
                                      selected &&
                                        "ring-2 ring-primary ring-offset-3 ring-offset-[#fbf8f2]",
                                    )}
                                    style={{ background: option.swatch }}
                                  />
                                  <span>{option.label}</span>
                                </button>
                              );
                            },
                          )}
                        </div>
                      </fieldset>
                    ))}
                  </div>
                </div>
              ) : null}

              {activePanel === "glass" ? (
                <fieldset role="tabpanel">
                  <legend className="text-xl font-bold text-heading">Glass</legend>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Preview transparency, tint, privacy, and reflectivity.
                  </p>
                  <div className="mt-7 grid grid-cols-4 gap-4 lg:grid-cols-2">
                    {GLASS_TYPES.map((option) => {
                      const selected = glassType === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setGlassType(option.id)}
                          className="group flex min-h-28 flex-col items-center gap-3 text-center text-xs font-semibold text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              "block size-16 rounded-full border-2 border-white shadow-[0_2px_14px_rgba(3,30,44,0.2)] ring-1 ring-heading/10 transition-transform group-hover:scale-105",
                              selected && "ring-2 ring-primary ring-offset-3 ring-offset-[#fbf8f2]",
                            )}
                            style={{ background: option.swatch }}
                          />
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ) : null}

              {activePanel === "opening" ? (
                <div role="tabpanel">
                  <p className="text-xl font-bold text-heading">Opening position</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Animate the two sliding panels to understand the available passage.
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      aria-pressed={!doorOpen}
                      onClick={() => setDoorOpen(false)}
                      className={cn(
                        "flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                        !doorOpen
                          ? "border-primary bg-white text-heading shadow-sm"
                          : "border-heading/10 text-muted-foreground hover:border-heading/25",
                      )}
                    >
                      <PanelsTopLeft className="size-8" aria-hidden="true" />
                      Closed
                    </button>
                    <button
                      type="button"
                      aria-pressed={doorOpen}
                      onClick={() => setDoorOpen(true)}
                      className={cn(
                        "flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                        doorOpen
                          ? "border-primary bg-white text-heading shadow-sm"
                          : "border-heading/10 text-muted-foreground hover:border-heading/25",
                      )}
                    >
                      <Move3D className="size-8" aria-hidden="true" />
                      Centre opening
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            <Link
              href="/contact"
              className="mt-auto inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Enquire about this door
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
