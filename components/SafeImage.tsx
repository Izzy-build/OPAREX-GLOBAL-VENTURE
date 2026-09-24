"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

/**
 * Wraps next/image so a broken/expired hotlinked demo photo never shows
 * a broken-image icon — it quietly falls back to a soft gradient instead.
 */
export default function SafeImage(props: ImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-lilac-pale to-stone" />
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} onError={() => setErrored(true)} />
  );
}
