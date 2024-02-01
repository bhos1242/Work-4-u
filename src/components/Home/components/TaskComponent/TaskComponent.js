"use client";
import React from "react";
import Image from "next/image";
import img from "./elements/img1.jpg";
import { Lobster } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

const TaskComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-4xl py-8 mx-auto bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 rounded-2xl space-x-4 md:flex items-center justify-between text-white shadow-lg lg:px-16 px-4`}
    >
      <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <h1 className={`mb-4 text-4xl font-bold `}>
          Post a Task. Get Offers. Get it Done!
        </h1>

        <p className="mb-8 text-lg">
          The best place for people and businesses to outsource tasks.
        </p>
        <Link href={"/post-task"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Post Your Task
          </motion.button>
        </Link>
        <div className="hidden md:block">
          {/* Additional content for larger screens */}
        </div>
      </div>
      <div className="md:w-1/2 relative flex justify-center overflow-hidden rounded-lg shadow-lg">
        <Image
          src={img}
          alt="College student helping an elderly person"
          priority
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default TaskComponent;
