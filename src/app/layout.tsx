"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { useState } from "react";
import AuthForm from "@/components/AuthForm";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Callback function to be passed to AuthForm
  const handleAuthentication = () => {
    setIsAuthenticated(true); // Set isAuthenticated to true on authentication success
  };

  return (
    <html lang="en">
      <head>
        <meta title="volunteers - sih" />
      </head>
      <body className={inter.className}>
        <Navbar />

        {/* Conditionally render the AuthForm or children based on isAuthenticated */}
        {isAuthenticated ? (
          children // Display children if authenticated
        ) : (
          <AuthForm onAuthenticationSuccess={handleAuthentication} />
          // Pass the callback function to AuthForm
        )}

        <Footer />
      </body>
    </html>
  );
}
