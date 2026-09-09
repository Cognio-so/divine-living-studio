import { createFileRoute } from "@tanstack/react-router";
import { EventsPage } from "@/components/events-page";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events & Mahotsav — Science Divine" },
      {
        name: "description",
        content:
          "Find events for conscious awakening with Sadguru Sakshi Shree. Satsang, Meditation & Divine Blessings at Siddha Sudarshan Sakshi Dhaam, Ghaziabad.",
      },
      { property: "og:title", content: "Events & Sacred Mahotsav — Science Divine" },
      {
        property: "og:description",
        content:
          "Join us at enriching events, where we seamlessly blend learning with inspiration, to foster growth and build lasting connections.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});
