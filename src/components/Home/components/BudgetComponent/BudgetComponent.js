"use client";
import React from "react";
import Image from "next/image";
import taskImage from "../BudgetComponent/elements/budget.webp"; // Replace this with the actual path to your image
import { Lobster } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

const BudgetComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-4xl mt-16 py-8 mx-auto rounded-2xl px-4 md:px-8 md:flex items-center justify-between text-white to-blue-700 ${lobster.className}`}
    >
      <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left text-blue-950 md:mr-8">
        <h1 className={`mb-4 text-4xl font-bold ${lobster.className}`}>
          Set Your Budget
        </h1>
        <p className="mb-8 text-lg text-blue-950">
          Dont worry, you can adjust your budget later and discuss it with
          potential Taskers if needed.
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
      </div>
      <div className="md:w-1/2 relative flex justify-center overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg shadow-lg">
        <Image
          src={taskImage}
          alt="Task Description"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default BudgetComponent;
