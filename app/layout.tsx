import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Ridza Ninzato - Frontend-Focused Fullstack Developer",
  description: "Hey there! I'm Ridza — a frontend-focused fullstack developer who enjoys turning ideas into beautiful, user-friendly web apps. I work with React, Next.js, Tailwind CSS, and Supabase to build fast, responsive, and delightful digital experiences.",
  keywords: ["Ridza", "Ninzato", "Frontend Developer", "Fullstack Developer", "React", "Next.js", "Tailwind CSS", "Web Development", "Portfolio", "JavaScript", "TypeScript"],
  authors: [{ name: "Ridza Ninzato", url: "https://github.com/Ninzato" }],
  creator: "Ridza Ninzato",
  publisher: "Ridza Ninzato",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "ridzakalimanto.me",
    siteName: "Ridza Ninzato - Portfolio",
    title: "Ridza Ninzato - Frontend-Focused Fullstack Developer",
    description: "Hey there! I'm Ridza — a frontend-focused fullstack developer who enjoys turning ideas into beautiful, user-friendly web apps. I work with React, Next.js, Tailwind CSS, and Supabase.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ridza Ninzato - Frontend-Focused Fullstack Developer",
        type: "image/png",
      },
      {
        url: "/profilePhoto.jpg",
        width: 500,
        height: 500,
        alt: "Ridza Ninzato Profile Photo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridza Ninzato - Frontend-Focused Fullstack Developer",
    description: "Frontend-focused fullstack developer building beautiful web experiences with React, Next.js, and Tailwind CSS.",
    images: ["/og-image.png"],
    creator: "@ninzato",
    site: "@ninzato",
  },
  verification: {
    google: "66aZLKc0PtYT0wXf3Blu9G0SDm1WsBA0oBE7KY9FFh0",
  },
  alternates: {
    canonical: "ridzakalimanto.me",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ridza Ninzato",
              "alternateName": "Ninzato",
              "description": "Frontend-focused fullstack developer specializing in React, Next.js, and modern web technologies",
              "url": "ridzakalimanto.me",
              "image": "ridzakalimanto.me/profilePhoto.jpg",
              "sameAs": [
                "https://github.com/Ninzato"
              ],
              "jobTitle": "Frontend-Focused Fullstack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Supabase",
                "Web Development",
                "Frontend Development",
                "Fullstack Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Web Developer",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Remote"
                },
                "skills": "React, Next.js, TypeScript, Tailwind CSS, Supabase"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ridza Ninzato Portfolio",
              "alternateName": "Ninzato Portfolio",
              "url": "ridzakalimanto.me",
              "description": "Personal portfolio website showcasing frontend and fullstack development projects",
              "inLanguage": "en-US",
              "isPartOf": {
                "@type": "WebSite",
                "url": "ridzakalimanto.me"
              },
              "about": {
                "@type": "Person",
                "name": "Ridza Ninzato"
              },
              "author": {
                "@type": "Person",
                "name": "Ridza Ninzato"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
