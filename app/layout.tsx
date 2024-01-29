import type { Metadata } from "next";
import { mulish } from "./ui/fonts";
import "@/app/ui/global.scss";

export const metadata: Metadata = {
    title: "РИТУАЛ СЕРВИС",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${mulish.className} antialiased`}>{children}</body>
        </html>
    );
}
