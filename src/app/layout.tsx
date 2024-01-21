import type { Metadata } from "next";
import "./globals.css";
import Root from "@/ui/root-provider";
import MainLayout from "./layouts/main.layout";
export const metadata: Metadata = {
  title: "NextBasket E-Market",
  description:
    "This is a prototype market web app to test the proficiency on  web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Root>
          <MainLayout>{children}</MainLayout>
        </Root>
      </body>
    </html>
  );
}
