import Image from "next/image";
import { withBasePath } from "@/data/siteEnvironment";

type PhotoPokerChipProps = {
  imageSrc?: string | null;
  alt?: string;
  caption: string;
  placeholder: string;
  tone?: "forest" | "burgundy" | "navy";
  size?: "intro" | "feature";
  objectPosition?: string;
  className?: string;
};

export function PhotoPokerChip({
  imageSrc,
  alt = "",
  caption,
  placeholder,
  tone = "forest",
  size = "intro",
  objectPosition = "50% 50%",
  className = "",
}: PhotoPokerChipProps) {
  const hasImage = Boolean(imageSrc);

  return <figure
    className={`photo-poker-chip photo-poker-chip-${tone} photo-poker-chip-${size} ${className}`.trim()}
    aria-hidden={hasImage ? undefined : true}
  >
    <div className="photo-poker-chip-ring">
      <div className="photo-poker-chip-center">
        {imageSrc
          ? <Image
              src={withBasePath(imageSrc)}
              alt={alt}
              fill
              sizes={size === "feature" ? "(max-width: 700px) 240px, 300px" : "(max-width: 700px) 156px, 220px"}
              style={{ objectFit: "cover", objectPosition }}
            />
          : <span>{placeholder}</span>}
      </div>
    </div>
    <figcaption>{caption}</figcaption>
  </figure>;
}
