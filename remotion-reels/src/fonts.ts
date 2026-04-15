import { loadFont as loadPoppins } from "@remotion/google-fonts/Poppins";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadOpenSans } from "@remotion/google-fonts/OpenSans";

export const loadFonts = () => {
  loadPoppins("normal", {
    weights: ["600", "700", "800"],
    subsets: ["latin"],
  });

  loadInter("normal", {
    weights: ["400", "500", "600"],
    subsets: ["latin"],
  });

  loadOpenSans("normal", {
    weights: ["400", "600"],
    subsets: ["latin"],
  });
};

export const FONT_POPPINS = "Poppins, sans-serif";
export const FONT_INTER = "Inter, sans-serif";
export const FONT_OPEN_SANS = "Open Sans, sans-serif";
