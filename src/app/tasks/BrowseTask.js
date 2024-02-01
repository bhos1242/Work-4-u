"use client";
import React, { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import { getAllTasks } from "@/services/taskService";
import { motion } from "framer-motion";
import { Manrope } from "next/font/google";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BrowseTask = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayedTasks, setDisplayedTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getAllTasks();
        setTasks(tasksData);
        setDisplayedTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => {
      const titleMatch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const locationMatch = task.location
        .toLowerCase()
        .includes(location.toLowerCase());
      const budgetMatch = task.budget.toString().includes(budget);
      const dateMatch = selectedDate
        ? task.selectedDate.includes(selectedDate.toISOString().split("T")[0])
        : true;

      return titleMatch && locationMatch && budgetMatch && dateMatch;
    });

    setDisplayedTasks(filteredTasks);
  }, [searchTerm, location, budget, selectedDate, tasks]);

  return (
    <div className="container px-4 py-2 mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-center text-blue-600">
        Explore Available Tasks
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by title"
          className="px-2 py-1 mt-1 border rounded-full focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by location"
          className="px-2 py-1 mt-1 border rounded-full focus:outline-none focus:border-blue-500"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by budget"
          className="px-2 py-1 mt-1 border rounded-full focus:outline-none focus:border-blue-500"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Search by date"
          className="px-2 py-1 mt-1 border rounded-full focus:outline-none focus:border-blue-500"
        />
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2"
      >
        {displayedTasks.map((task) => (
          <motion.div key={task._id} variants={cardVariants}>
            <TaskCard
              className={manrope.className}
              task_id={task._id}
              title={task.title}
              // description={task.description}
              budget={task.budget}
              location={task.location}
              selectedDate={task.selectedDate}
              status={task.status}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrowseTask;
