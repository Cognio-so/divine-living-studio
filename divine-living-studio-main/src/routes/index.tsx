import { createFileRoute } from "@tanstack/react-router";
import { ScienceDivineHome } from "@/components/science-divine-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Science Divine — The Science of Divine Living" },
      { name: "description", content: "Awaken awareness through timeless wisdom, meditation, Bhagavad Gita teachings and compassionate service." },
      { property: "og:title", content: "Science Divine — The Science of Divine Living" },
      { property: "og:description", content: "Awaken awareness through timeless wisdom, meditation, Bhagavad Gita teachings and compassionate service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ScienceDivineHome,
});
