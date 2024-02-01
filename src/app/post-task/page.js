import React from "react";
import PostTask from "./PostTask";

const Page = () => {
  return (
    <div className="">
      <h1 className="mb-8 text-4xl font-bold text-center text-blue-600">
        Post a Task
      </h1>
      <div className="">
        <PostTask />
      </div>
    </div>
  );
};

export default Page;
