import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Not for indexing",
  description: "Internal page of the Ministry of Sports and Youth Development.",
  path: "/test",
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
