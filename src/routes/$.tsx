import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage } from "@/components/site";
import { pages, titles } from "@/lib/site-content";

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const slug = params._splat || "";
    const data = pages[slug];
    if (!data) throw notFound();
    return { slug, data };
  },
  head: ({ loaderData }) => {
    const data = loaderData?.data;
    const slug = loaderData?.slug || "";
    const title = titles[slug] || `${data?.subtitle || data?.title || "Xmatic"} | Xmatic Innovations`;
    const description = data?.description || "Electric unmanned ground vehicles designed and built in Bengaluru, India.";
    return { meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: Page,
});

function Page() {
  const { data, slug } = Route.useLoaderData();
  return <ContentPage data={data} slug={slug} />;
}