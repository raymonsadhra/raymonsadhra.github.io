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
    imageSrc: "/images/about/chip1.jpg",
    alt: "Raymon kneeling beside a dog next to a decorated Christmas tree",
    caption: "Caption placeholder",
    placeholder: "Photo 01",
    tone: "forest",
    objectPosition: "76% 56%",
  },
  {
    imageSrc: "/images/about/chip2.jpg",
    alt: "Raymon standing with outstretched arms at the base of a waterfall",
    caption: "Caption placeholder",
    placeholder: "Photo 02",
    tone: "burgundy",
    objectPosition: "38% 65%",
  },
  {
    imageSrc: "/images/about/chip3.jpg",
    alt: "A table set with home-cooked pasta, cutlets, and salad",
    caption: "Caption placeholder",
    placeholder: "Photo 03",
    tone: "navy",
    objectPosition: "50% 50%",
  },
];

export const educationPhotoChips: PhotoPokerChipData[] = [
  {
    imageSrc: "/images/about/chip4.jpg",
    alt: "Raymon wearing a UC Santa Cruz graduation stole at the beach",
    caption: "Caption placeholder",
    placeholder: "Photo 04",
    tone: "forest",
    objectPosition: "50% 48%",
  },
  {
    imageSrc: "/images/about/chip5.jpg",
    alt: "Raymon and teammates beside an illuminated CruzHacks sign",
    caption: "Caption placeholder",
    placeholder: "Photo 05",
    tone: "burgundy",
    objectPosition: "50% 48%",
  },
  {
    imageSrc: "/images/about/chip6.jpg",
    alt: "Geisel Library at UC San Diego beneath a clear blue sky",
    caption: "Caption placeholder",
    placeholder: "Photo 06",
    tone: "navy",
    objectPosition: "50% 68%",
  },
];
