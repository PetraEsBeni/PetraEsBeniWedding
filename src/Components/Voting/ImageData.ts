import FirstImage from "./Pictures/logo1.jpg";
import SecondImage from "./Pictures/logo2.jpg";
import ThirdImage from "./Pictures/logo3.jpg";
import FourthImage from "./Pictures/logo4.jpg";
import FifthImage from "./Pictures/logo5.jpg";
import SixthImage from "./Pictures/logo6.jpg";
import SeventhImage from "./Pictures/logo7.jpg";
import EighthImage from "./Pictures/logo8.jpg";
import NinthImage from "./Pictures/logo9.jpg";
import TenthImage from "./Pictures/logo10.jpg";
import EleventhImage from "./Pictures/logo11.jpg";
import TwelfthImage from "./Pictures/logo12.jpg";
import ThirteenthImage from "./Pictures/logo13.jpg";
import FourteenthImage from "./Pictures/logo14.jpg";
import FifteenthImage from "./Pictures/logo15.jpg";

export interface ImageData {
  id: number;
  url: string;
  alt: string;
}

export const VotingImages: ImageData[] = [
     { id: 1, url: FirstImage, alt: "Logo 1" },
     { id: 2, url: SecondImage, alt: "Logo 2" },
     { id: 3, url: ThirdImage, alt: "Logo 3" },
     { id: 4, url: FourthImage, alt: "Logo 4" },
     { id: 5, url: FifthImage, alt: "Logo 5" },
     { id: 6, url: SixthImage, alt: "Logo 6" },
     { id: 7, url: SeventhImage, alt: "Logo 7" },
     { id: 8, url: EighthImage, alt: "Logo 8" },
     { id: 9, url: NinthImage, alt: "Logo 9" },
     { id: 10, url: TenthImage, alt: "Logo 10" },
     { id: 11, url: EleventhImage, alt: "Logo 11" },
     { id: 12, url: TwelfthImage, alt: "Logo 12" },
     { id: 13, url: ThirteenthImage, alt: "Logo 13" },
     { id: 14, url: FourteenthImage, alt: "Logo 14" },
     { id: 15, url: FifteenthImage, alt: "Logo 15" },
];