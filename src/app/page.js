import BudgetComponent from "@/components/Home/components/BudgetComponent/BudgetComponent";
import TaskComponent from "@/components/Home/components/TaskComponent/TaskComponent";
import TaskDescriptionComponent from "@/components/Home/components/TaskDescriptionComponent/TaskDescriptionComponent";

import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <TaskComponent />
      <TaskDescriptionComponent />
      <Toaster />
      <BudgetComponent />
    </>
  );
}
