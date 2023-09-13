"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { useState } from "react";
import AuthForm from "@/components/AuthForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volunteers - Issue Management System",
  description:
    "An Issue Management System is a software tool or platform designed to help organizations effectively track, manage, and resolve various types of issues or tasks within their operations. These issues can include software bugs, customer support tickets, project tasks, and any other items that require attention and resolution.",
};

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
