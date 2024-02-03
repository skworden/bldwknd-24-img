import { FC } from "react";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<LayoutProps> = ({ children }) => (
  <html lang="en" className="h-full w-full">
    <body className="h-full w-full flex flex-1 items-center justify-center">
      {children}
    </body>
  </html>
);

export const metadata = {
  description: "The fastest way to build and ship",
  metadataBase: new URL(defaultUrl),
  title: "BLDWKND 24",
};
