import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import BottomNavigation from "../components/BottomNavigation";
import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mi Aplicación</title>
      </Head>
      <ChakraProvider>
        <body style={{ margin: 0 }}>
          <Box as="main" bg="#010316">
            <Navbar />
            {children}
          </Box>
          <BottomNavigation />
        </body>
      </ChakraProvider>
    </html>
  );
}
