"use client";
import React, { useState, useEffect } from "react";
import Profile from "../Profile";
import Image from "next/image";
import bronze from "./images/ads_bronze.png";

const MyDashboard = () => {
  const [earnings, setEarnings] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/earnings");
        const data = await response.json();
        setEarnings(data.earnings);
      } catch (error) {
        console.error("Error fetching earnings:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const progressBarWidth = (earnings / 400) * 100;

  return (
    <div className="flex flex-col p-4 md:p-4 md:flex-row">
      <div className="hidden w-full left-menu md:w-1/4 md:block">
        <Profile />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-lg md:p-8 md:w-3/4">
        <div className="mb-6 heading">
          <h1 className="text-3xl font-bold text-blue-600 md:text-4xl">
            Welcome to Your Tasker Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-20">
            <Image src={bronze} alt="bronze" width={100} height={100} />
          </div>
          <div className="badge">
            <p className="text-2xl font-bold text-gray-800">Bronze</p>
            <span className="text-base text-gray-600">20% service fee</span>
          </div>
        </div>

        {!loading && (
          <div className="mt-6 text-lg text-gray-800">
            <p className="font-semibold">Your Scores</p>
            <p className="text-base text-gray-600">
              Earnings (last 30 days): €{400 - earnings}
            </p>
            <p className="text-base text-gray-600">
              You are €{400 - earnings} away from Silver and lower service fees.
            </p>
          </div>
        )}

        <div className="relative mt-6">
          <div className="flex items-center justify-between mb-2 text-xs font-semibold">
            <div>
              <span className="text-blue-600">{earnings} €</span>
            </div>
            <div className="text-right">
              <span className="text-blue-600">€400</span>
            </div>
          </div>
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-blue-200 rounded">
            <div
              style={{ width: `${progressBarWidth}%` }}
              className="flex flex-col justify-center text-center text-white bg-blue-600 whitespace-nowrap"
            ></div>
          </div>
        </div>

        <div className="mt-6 text-lg text-gray-800">
          <p className="font-semibold">NEXT TIER BENEFITS</p>
          <div className="flex items-center mt-4 space-x-4 text-gray-900">
            <div className="text-3xl text-blue-600 dollar">&#36;</div>
            <div>
              <p className="mt-2 text-lg font-semibold">
                Reach Silver for lower service fees!
              </p>
              <p className="mt-2 text-lg font-semibold text-gray-600">
                Pay less with a service fee of 15%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
