"use client";
// CustomGoogleButton.js
import React, { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const CustomGoogleButton = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [googleSignInSuccess, setGoogleSignInSuccess] = useState(false);

  useEffect(() => {
    // Event listener for messages sent from the child window
    const handleGoogleSignInResponse = (event) => {
      // Ensure the message is from the expected origin
      if (
        event.origin === window.location.origin &&
        event.data.type === "googleSignInResponse"
      ) {
        if (event.data.success) {
          // User successfully signed in, set the success state
          setGoogleSignInSuccess(true);
        } else {
          // Handle sign-in errors
          console.error("Error signing in with Google:", event.data.error);
          toast.error("Error signing in with Google. Please try again later.");
        }
      }
    };

    // Add event listener
    window.addEventListener("message", handleGoogleSignInResponse);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("message", handleGoogleSignInResponse);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  // Handle Google sign-in click
  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    try {
      // Initiate the Google sign-in flow using next-auth signIn method
      await signIn("google");

      // Assuming the user is redirected back to this page after successful authentication.
      toast.success("Google sign-in initiated successfully!");
    } catch (error) {
      console.error("Error initiating Google sign-in:", error);
      toast.error("Error initiating Google sign-in. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect user to "/" after successful Google sign-in
  useEffect(() => {
    if (googleSignInSuccess) {
      toast.success("You are Logged In Successfully");
      router.replace("/post-task");
    }
  }, [googleSignInSuccess, router]);

  return (
    <GoogleButton
      onClick={handleGoogleSignIn}
      {...props}
      disabled={isLoading}
      text={isLoading ? "Loading..." : "Sign in with Google"}
    />
  );
};

export default CustomGoogleButton;
