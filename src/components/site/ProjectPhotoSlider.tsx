"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectPhoto = {
  src: string;
  alt: string;
};

type ProjectPhotoSliderProps = {
  images: readonly ProjectPhoto[];
  projectName: string;
};

export function ProjectPhotoSlider({ images, projectName }: ProjectPhotoSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const activeImage = images[activeIndex];
  if (!activeImage) return null;

  return (
    <div
      className="group/slider relative aspect-[4/3] overflow-hidden bg-[#e8e8e5]"
      role="region"
      aria-label={`${projectName} photos`}
      aria-roledescription="carousel"
    >
      <Image
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-contain"
        priority={false}
      />

      {images.length > 1 && (
        <>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/55 to-transparent px-4 pb-4 pt-12 opacity-100 transition-opacity sm:opacity-0 sm:group-hover/slider:opacity-100 sm:group-focus-within/slider:opacity-100">
            <div className="flex items-center gap-1.5" aria-label="Choose a photo">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show photo ${index + 1} of ${images.length} for ${projectName}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>

            <span className="text-xs font-medium tabular-nums text-white" aria-live="polite">
              {activeIndex + 1} / {images.length}
            </span>
          </div>

          <button
            type="button"
            onClick={showPrevious}
            aria-label={`Previous photo for ${projectName}`}
            className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center border border-white/80 bg-white/90 text-heading shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              ‹
            </span>
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label={`Next photo for ${projectName}`}
            className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center border border-white/80 bg-white/90 text-heading shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              ›
            </span>
          </button>
        </>
      )}
    </div>
  );
}
