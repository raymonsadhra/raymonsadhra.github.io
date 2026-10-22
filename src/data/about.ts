export type PhotoPokerChipData = {
  imageSrc: string | null;
  alt: string;
  caption: string;
  placeholder: string;
  tone: "forest" | "burgundy" | "navy";
  objectPosition?: string;
};

export const introductionPhotoChips: PhotoPokerChipData[] = [
  {
    imageSrc: null,
    alt: "",
    caption: "Caption placeholder",
    placeholder: "Photo 01",
    tone: "forest",
  },
  {
    imageSrc: null,
    alt: "",
    caption: "Caption placeholder",
    placeholder: "Photo 02",
    tone: "burgundy",
  },
  {
    imageSrc: null,
    alt: "",
    caption: "Caption placeholder",
    placeholder: "Photo 03",
    tone: "navy",
  },
];

export const educationPhotoChip: PhotoPokerChipData = {
  imageSrc: null,
  alt: "",
  caption: "Caption placeholder",
  placeholder: "Photo 04",
  tone: "forest",
};
