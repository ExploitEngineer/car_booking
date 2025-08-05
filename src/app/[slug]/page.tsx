import { notFound } from "next/navigation";
import { ComponentMap } from "@/app/_lib/componentMap";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Component = ComponentMap[slug];

  if (!Component) return notFound();

  return <Component />;
}
