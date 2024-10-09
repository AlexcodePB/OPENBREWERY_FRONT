import BottomNavigation from "@/components/BottomNavigation";
import { Box, ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body>
          <Box bg="#010316" minHeight="100vh">
            {children}
          </Box>
          <BottomNavigation />
        </body>
      </ChakraProvider>
    </html>
  );
}
