"use client";

import { useState, useRef } from "react";
import { Play, Pause, Maximize2 } from "lucide-react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
  className?: string;
}

export function VideoPlayer({
  src,
  poster,
  title = "Demo Video",
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // Placeholder state when no video src is provided
  const hasVideo = Boolean(src);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => !isPlaying && setShowControls(true)}
    >
      {hasVideo ? (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="aspect-video w-full object-cover"
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
          />

          {/* Play/Pause overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
              showControls || !isPlaying ? "opacity-100" : "opacity-0"
            }`}
            onClick={togglePlay}
          >
            <button
              className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-primary/90 text-bg-primary transition-transform hover:scale-110"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-8 w-8" />
              ) : (
                <Play className="ml-1 h-8 w-8" />
              )}
            </button>
          </div>

          {/* Bottom controls */}
          <div
            className={`absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-sm font-medium text-white">{title}</span>
            <button
              onClick={handleFullscreen}
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Fullscreen"
            >
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
        </>
      ) : (
        /* Placeholder when no video is provided */
        <div className="relative aspect-video w-full">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-bg-tertiary via-bg-secondary to-bg-tertiary" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          {/* Center play button and text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent-primary/50 bg-accent-primary/10">
              <Play className="ml-1 h-8 w-8 text-accent-primary" />
            </div>
            <span className="font-display text-lg font-semibold text-text-primary">
              {title}
            </span>
            <span className="mt-1 text-sm text-text-muted">
              Coming Soon
            </span>
          </div>

          {/* Corner accents */}
          <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-accent-primary/30" />
          <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-accent-primary/30" />
          <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-accent-primary/30" />
          <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-accent-primary/30" />
        </div>
      )}
    </div>
  );
}
