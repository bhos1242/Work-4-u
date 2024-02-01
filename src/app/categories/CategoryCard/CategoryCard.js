import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="p-6 text-center transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
      <div className="mb-4 text-5xl text-blue-500">{category.icon}</div>
      <h2 className="mb-2 text-3xl font-semibold text-gray-800">
        {category.name}
      </h2>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <button className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
        View Services
      </button>
    </div>
  );
};

export default CategoryCard;
