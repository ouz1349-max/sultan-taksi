import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sultan Taksi",
  description: "Adana'nın güvenilir taksi hizmeti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
