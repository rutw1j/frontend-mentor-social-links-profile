import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Social Links Profile',
    description: 'Frontend Mentor Social Links Profile Challenge',
    referrer: "origin-when-cross-origin",
    authors: [{ 
        name: 'Rutwij Patankar', 
        url: 'https://github.com/rutw1j' 
    }],
    creator: 'Rutwij Patankar',
    keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'ChakraUI'],
    appLinks: {
        web: {
            url: 'https://rutw1j-social-links-profile.vercel.app',
            should_fallback: true,
        }
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
