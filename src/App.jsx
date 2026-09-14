import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tasks from "./components/Tasks";
import { useState } from "react";
import Login from "./components/Login";
import Fetch from "./components/Fetch";
import { Toaster } from "sonner";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const users = [
    {
      name: "Adeyemi Franklin",
      height: "6ft",
      age: 30,
      email: "TestingUser@gmail.com",
      occupation: "Electrician",
      status: "Single",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam officiis deleniti expedita sequi eligendi quidem laboriosam ullam dicta praesentium quis.",
      phone: 123123456789,
      image:
        "https://images.squarespace-cdn.com/content/v1/624f4bb135fbf60489e1bccf/508daf7a-c6fd-4543-b032-d49853072d37/Actor+Headshots+Los+Angeles.jpg",
    },
    {
      name: "Sophia Chen",
      height: "5ft 7in",
      age: 27,
      email: "sophia.chen@example.com",
      occupation: "Software Engineer",
      status: "Single",
      desc: "Passionate about building scalable web applications and exploring modern UI design tools. Always eager to learn new tech stacks.",
      phone: 14155552671,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Marcus Vance",
      height: "6ft 2in",
      age: 34,
      email: "m.vance@example.com",
      occupation: "Architectural Designer",
      status: "Married",
      desc: "Focused on sustainable urban architecture and modern minimal interior design. Enjoys photography and weekend cycling.",
      phone: 12025550143,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Amina Bello",
      height: "5ft 5in",
      age: 29,
      email: "amina.bello@example.com",
      occupation: "Product Manager",
      status: "Engaged",
      desc: "Bridging the gap between engineering and user experience. Driven by data-backed decision making and product innovation.",
      phone: 2348031234567,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Liam O'Connor",
      height: "5ft 11in",
      age: 42,
      email: "liam.oconnor@example.com",
      occupation: "Graphic Designer",
      status: "Divorced",
      desc: "Creative director with over 15 years of experience in brand identity, typography, and visual communication strategies.",
      phone: 442079460912,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Elena Rostova",
      height: "5ft 8in",
      age: 31,
      email: "elena.rostova@example.com",
      occupation: "Data Scientist",
      status: "Single",
      desc: "Specializing in machine learning models and predictive analytics. Obsessed with transforming raw data into actionable insights.",
      phone: 493012345678,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Devon Miller",
      height: "6ft 1in",
      age: 26,
      email: "devon.m@example.com",
      occupation: "Fitness Trainer",
      status: "Single",
      desc: "Dedicated to helping clients achieve sustainable health and strength goals through personalized training and nutrition plans.",
      phone: 13125550198,
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Priya Sharma",
      height: "5ft 4in",
      age: 35,
      email: "priya.sharma@example.com",
      occupation: "Financial Analyst",
      status: "Married",
      desc: "Helping startups and small businesses optimize cash flow, manage risk, and scale corporate operations efficiently.",
      phone: 919876543210,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    },
  ];
  return (
    <div className="bg-[#e0e0e0] min-h-screen py-6">
      <Toaster position="top-right"/>
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      {/* <Tasks /> */}
      <Fetch />

      {/* <Hero users={users} /> */}

      {/* 
      {isLoggedIn ? (
        <Hero users={users} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      )} */}
    </div>
  );
}

export default App;
