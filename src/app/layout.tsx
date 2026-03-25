import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kenan Evren Sultan Taksi",
  description: "Kenan Evren çevresinde yaklaşık 2 km hizmet alanında güvenilir 7/24 taksi hizmeti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
