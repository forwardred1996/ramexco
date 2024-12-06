import type {Metadata} from "next";
import {Merriweather} from 'next/font/google'
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import {Theme} from "@chakra-ui/react";

const merri = Merriweather({
    weight: ["400","300","700","900"],
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "RAMEX Co Idustry & Trading",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${merri.className} antialiased`}
        >
        <Provider>
            <Theme appearance="light">
            {children}
            </Theme>
        </Provider>
        </body>
        </html>
    );
}