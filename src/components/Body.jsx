import React, { useMemo } from "react";

const Body = ({ blogData, filters }) => {
  const processedBlogData = useMemo(() => {
    let result = [...blogData];

    if (filters.searchTerm) {
      result = result.filter((blog) =>
        blog.content.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    if (filters.selectedCategory) {
      result = result.filter(
        (blog) => blog.category === filters.selectedCategory
      );
    }

    if (filters.sortBy === "newest") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filters.sortBy === "oldest") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return result;
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-8 pt-[350px]">
      <div className="flex flex-col space-y-4">
        {processedBlogData.length > 0 ? (
          processedBlogData.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col bg-gray-100 p-4 rounded-lg"
            >
              <div className="flex items-center">
                <p className="font-bold font-mulish text-lg">{blog.content}</p>
              </div>
              <div className="flex items-center mt-2">
                <p className="text-gray-600">[ {blog.category} ]</p>
                <p className="ml-auto text-gray-600">Date: {blog.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-600">
            No blogs found based on your filters
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
