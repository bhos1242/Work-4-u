"use client";
// Import necessary modules and styles
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const { data: session } = useSession();

  // If user is not logged in, show a message
  if (!session?.user) {
    return (
      <div className="container flex items-center justify-center h-screen mt-8">
        <p className="text-xl font-semibold text-center text-red-600">
          You are not logged in. Please log in to view this page.
        </p>
      </div>
    );
  }

  const { user } = session;

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" }); // Redirect to home page after logout
  };

  return (
    <div className="container flex flex-col items-center p-4 mx-auto">
      <div className="w-full max-w-md py-8 text-center bg-gray-100 rounded-lg shadow-md md:w-96">
        <div className="mb-4">
          <Image
            src={user.image}
            alt={user.name}
            width={100}
            height={100}
            className="mx-auto border-4 border-blue-500 rounded-full "
          />
          <p className="mt-4 text-xl font-semibold text-gray-800">
            {user.name}
          </p>
        </div>
        <div className="my-4 space-y-2 text-center">
          <Link href="/profile/MyDashboard">
            <p className="text-base text-gray-800 hover:underline">
              My Tasker Dashboard
            </p>
          </Link>
          <Link href="/profile/list-services">
            <p className="text-base text-gray-800 hover:underline">
              List my services
            </p>
          </Link>
          <Link href="/profile/payments-history">
            <p className="text-base text-gray-800 hover:underline">
              Payments history
            </p>
          </Link>
          <Link href="/profile/payment-methods">
            <p className="text-base text-gray-800 hover:underline">
              Payment methods
            </p>
          </Link>
          <Link href="/profile/notifications">
            <p className="text-base text-gray-800 hover:underline">
              Notifications
            </p>
          </Link>
          <Link href="/profile/settings">
            <p className="text-base text-gray-800 hover:underline">Settings</p>
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="px-6 py-2 text-white transition duration-300 bg-red-500 rounded-full hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
