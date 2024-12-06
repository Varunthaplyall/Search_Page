import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Body from "./components/Body";

const blogData = [
  {
    id: 1,
    date: "2024-12-01",
    category: "tech",
    content:
      "In this blog, we explore the latest advancements in artificial intelligence and its potential impact on various industries, from healthcare to automation.",
  },
  {
    id: 2,
    date: "2024-12-02",
    category: "health",
    content:
      "A balanced diet is key to a healthy life. Discover 10 simple tips for maintaining a nutritious and balanced diet that supports overall health.",
  },
  {
    id: 3,
    date: "2024-12-03",
    category: "lifestyle",
    content:
      "A productive morning sets the tone for the rest of the day. Learn about effective habits and techniques to create a morning routine that boosts your productivity.",
  },
  {
    id: 4,
    date: "2024-12-04",
    category: "tech",
    content:
      "5G is revolutionizing the way we connect. This blog post delves into the benefits, potential challenges, and the future of 5G technology in communication and business.",
  },
  {
    id: 5,
    date: "2024-12-05",
    category: "health",
    content:
      "Exercise is essential for maintaining physical and mental health. In this post, we discuss the numerous benefits of daily exercise and how it can improve your quality of life.",
  },
  {
    id: 6,
    date: "2024-12-06",
    category: "lifestyle",
    content:
      "In today's fast-paced world, minimalism offers a way to reduce stress and focus on what truly matters. Explore the principles of minimalism and how to implement them in your life.",
  },
  {
    id: 7,
    date: "2024-12-07",
    category: "tech",
    content:
      "Blockchain technology is transforming the financial industry. Learn how blockchain is reshaping everything from payments to security and transparency in finance.",
  },
  {
    id: 8,
    date: "2024-12-08",
    category: "health",
    content:
      "Mental health is just as important as physical health. This blog provides an overview of mental health, its importance, and how to maintain mental wellbeing in everyday life.",
  },
  {
    id: 9,
    date: "2024-12-09",
    category: "lifestyle",
    content:
      "Sustainability is crucial for the future of our planet. Learn how small, everyday lifestyle changes can make a significant difference in reducing your environmental footprint.",
  },
  {
    id: 10,
    date: "2024-12-10",
    category: "tech",
    content:
      "Virtual reality (VR) is not just for gaming. Explore how VR is being used to enhance learning experiences in education, providing immersive and engaging environments for students.",
  },
  {
    id: 11,
    date: "2024-12-11",
    category: "health",
    content:
      "Sleep is vital for maintaining good health. Learn about the importance of a good night's sleep and practical tips to improve your sleep quality.",
  },
  {
    id: 12,
    date: "2024-12-12",
    category: "lifestyle",
    content:
      "Time management is essential for leading a balanced life. Discover strategies for prioritizing your tasks and managing your time effectively.",
  },
  {
    id: 13,
    date: "2024-12-13",
    category: "tech",
    content:
      "The Internet of Things (IoT) is connecting everything around us. Explore how IoT is enhancing industries like healthcare, home automation, and transportation.",
  },
  {
    id: 14,
    date: "2024-12-14",
    category: "health",
    content:
      "Hydration plays a critical role in maintaining good health. Learn about the benefits of staying hydrated and how much water you should be drinking daily.",
  },
  {
    id: 15,
    date: "2024-12-15",
    category: "lifestyle",
    content:
      "Traveling can be a great way to expand your horizons and improve your life. Discover tips for planning your next adventure and making the most out of your travels.",
  },
  {
    id: 16,
    date: "2024-12-16",
    category: "tech",
    content:
      "Cloud computing is changing the way businesses store and access data. Learn about the advantages of cloud technology and how it's shaping the future of IT.",
  },
  {
    id: 17,
    date: "2024-12-17",
    category: "health",
    content:
      "Yoga and mindfulness can improve your overall well-being. This blog post explores the benefits of incorporating yoga into your daily routine for better mental and physical health.",
  },
  {
    id: 18,
    date: "2024-12-18",
    category: "lifestyle",
    content:
      "Developing a growth mindset can lead to greater success and happiness. Learn how adopting a growth mindset can positively impact all areas of your life.",
  },
  {
    id: 19,
    date: "2024-12-19",
    category: "tech",
    content:
      "Artificial Intelligence is transforming industries worldwide. From automation to data analysis, discover how AI is reshaping the future of work and innovation.",
  },
  {
    id: 20,
    date: "2024-12-20",
    category: "health",
    content:
      "Preventive healthcare is essential for long-term well-being. Learn about the importance of regular check-ups, vaccinations, and healthy lifestyle choices to prevent illnesses.",
  },
];

const App = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedCategory: "",
    sortBy: "",
  });

  const handleSearchChanges = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <div className="font-mulish">
      <div className="fixed w-full">
        <Navbar />
        <SearchBar onSearchChange={handleSearchChanges} />
      </div>
      <Body blogData={blogData} filters={filters} />
    </div>
  );
};

export default App;
