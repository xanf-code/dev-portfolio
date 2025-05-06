"use client";

import { useEffect, useRef } from "react";

interface PlaceholderImageProps {
  title: string;
  color: string;
  width?: number;
  height?: number;
}

// Function to generate SVG data URI
export function generatePlaceholderSVG(
  title: string,
  color: string,
  width = 600,
  height = 400
): string {
  const bgColor = color;
  const formattedTitle =
    title.length > 15 ? title.substring(0, 15) + "..." : title;

  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}" />
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="36" 
        fill="white" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${formattedTitle}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function PlaceholderImage({
  title,
  color,
  width = 600,
  height = 400,
}: PlaceholderImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    // Set text
    ctx.fillStyle = "white";
    ctx.font = "36px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const displayText =
      title.length > 15 ? title.substring(0, 15) + "..." : title;
    ctx.fillText(displayText, width / 2, height / 2);
  }, [title, color, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}
