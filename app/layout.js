import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abhijeet Mali Experience",
  description:
    "Portfolio of Abhijeet Mali – Android Developer and founder of Dev Alpha, building modern mobile apps using Kotlin, Jetpack Compose, and Firebase. Incubated at Sanjay Ghodawat University.",
   icons: {
    icon: '/Images/Abhijeet.jpg', // or '/favicon.png'
    shortcut: '/Images/Abhijeet.jpg',
    apple: '/apple-touch-icon.png',
  },
    keywords: [
    "Abhijeet Mali",
    "Abhi Mali",
    "Abhijeetmali",
    "Mali Abhijeet",
    "Abhijeet Mali Skills",
    "Abhijeet Mali Project",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Firebase",
    "Dev Alpha",
    "SGU",
    "Mobile App Portfolio",
    "Srujal Yandagoudar"
  ],
  authors: [{ name: "Abhijeet Mali" }],
  creator: "Abhijeet Mali",
  openGraph: {
    title: "Abhijeet Mali Portfolio",
    description:
      "Android Developer and founder of Dev Alpha, building innovative mobile apps using Kotlin, Jetpack Compose, and Firebase.",
    url: "https://abhijeetmali.dev", // replace with your domain
    siteName: "Abhijeet Mali Portfolio",
    images: [
      {
        url: "/Images.Abhijeet.jpg", // Path to your Open Graph image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/Images/Abhijeet.jpg" type="image/x-icon" />
        <meta name="google-site-verification" content="_OCqeHNT2m0HkPtZdR85CfoOTG1qRd3EA3VZu9YxCXs" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
