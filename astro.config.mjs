import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://www.flyredarrow.com/",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        page !== "https://www.flyredarrow.com/dashboard/" &&
        page !== "https://www.flyredarrow.com/students/" &&
        page !== "https://www.flyredarrow.com/rejected-students/" &&
        page !== "https://www.flyredarrow.com/pending-students/",
    }),
    tailwind(),
    icon(),
    react(),
    alpinejs(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  redirects: {
    "/faq": "/",
    "/simulators": "/about/our-fleet",
    "/aircraft": "/about/our-fleet",
    "/discoveryflight": "/discovery-flight",
    "/m1-visa": "/flight-programs/international-program",
    "/our-team": "/about/our-team",
    "/about-us": "/about/our-story",
    "/advanced-training": "/flight-programs/training-courses",
    "/independent-flight-instructors": "/about/our-team",
    "/become-a-pilot": "/flight-programs/new-to-flying",
    "/shop": "/",
    "/faa-testing-center": "/resources/faa-exam-center",
    "/members": "/",
    "/military-rotor-transition-training":
      "/flight-programs/military-rotor-transition",
    "/copy-of-international-student": "/flight-programs/international-program",
    "/book-online": "/discovery-flight-form",
    "/plans-pricing": "/",
    "/post/[...slug]": "/blog/[...slug]",
    "/flight-experience": "/",
    "/copy-of-financing": "/resources/financing",
    "/copy-of-faa-testing-center": "/resources/faa-exam-center",
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
