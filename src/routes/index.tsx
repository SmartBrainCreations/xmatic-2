import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Xmatic Innovations | Electric Unmanned Ground Vehicles, Made in India" },
    { name: "description", content: "Remote-controlled electric UGVs that carry up to 500 kg and work where people should not. Built in Bengaluru. Buy, rent or pilot." },
    { property: "og:title", content: "Xmatic Innovations | Electric Unmanned Ground Vehicles" },
    { property: "og:description", content: "Move more. Move safer. Move electric. Built in Bengaluru for the toughest ground." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <HomePage />;
}
