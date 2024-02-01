import React from "react";
import CategoryCard from "./CategoryCard/CategoryCard"; // Create a separate component for individual category card
import categoriesData from "./CategoriesData"; // An array containing your category data
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

const CategoriesComponent = () => {
  return (
    <div className="container grid grid-cols-1 gap-4 py-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categoriesData.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoriesComponent;
