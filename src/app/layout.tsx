import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Lamar Azur Hotel | Luxury Coastal Retreat in Damietta',
  description: 'Experience unparalleled luxury at Lamar Azur Hotel. Discover elegant rooms, world-class amenities, and breathtaking coastal beauty in Damietta El-Gadeeda. Book your unforgettable stay today.',
  keywords: ["Lamar Azur Hotel, Damietta, luxury hotel, coastal resort, Egypt hotel, 4-star hotel, hotel booking, beach hotel, spa hotel, fine dining"],
  openGraph: {
    "title": "Lamar Azur Hotel | Luxury Coastal Retreat in Damietta",
    "description": "Experience unparalleled luxury at Lamar Azur Hotel. Discover elegant rooms, world-class amenities, and breathtaking coastal beauty in Damietta El-Gadeeda. Book your unforgettable stay today.",
    "url": "https://lamarazurhotel.com",
    "siteName": "Lamar Azur Hotel",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/modern-sauna-interior-with-mountain-view-wood-light_169016-70841.jpg",
        "alt": "Lamar Azur Hotel luxurious lobby"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Lamar Azur Hotel | Luxury Coastal Retreat in Damietta",
    "description": "Experience unparalleled luxury at Lamar Azur Hotel. Discover elegant rooms, world-class amenities, and breathtaking coastal beauty in Damietta El-Gadeeda. Book your unforgettable stay today.",
    "images": [
      "http://img.b2bpic.net/free-photo/modern-sauna-interior-with-mountain-view-wood-light_169016-70841.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
