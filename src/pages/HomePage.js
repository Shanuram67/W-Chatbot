import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar'; // Import Navbar

function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="./assets/video1.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 relative">
        {/* Logo and Slogan */}
        <section className="text-center mb-8">
          <img src="./assets/logo.jpg" alt="Logo" className="mx-auto h-32 w-auto" />
          <h2 className="text-2xl sm:text-4xl font-bold mt-4 text-white">
            Empowering Women Through Technology
          </h2>
        </section>

        {/* Buttons */}
        <div className="text-center mb-12">
          <Link to="/home1" className="btn btn-info text-lg font-semibold px-6 py-3">
            Go to Home 🏠
          </Link>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {/* Abstract Section */}
          <section>
            <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-white">
              Abstract
            </h3>
            <p className="text-justify text-base sm:text-lg text-white max-w-3xl mx-auto">
          Smart Safety Assistant for Women  is a web application designed to enhance women's safety by providing real-time support and assistance. Developed using React.js for the frontend and Python for the backend, the application includes critical features such as SOS alerts, panic button activation, and safe area detection. It leverages responsive design for ease of use across devices and integrates safety precautions and location-based analysis. This tool aims to offer immediate help and preventative measures to ensure women feel secure in various environments.
            </p>
          </section>

          {/* Introduction Section */}
          <section>
            <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-white">
              Introduction
            </h3>
            <p className="text-justify text-base sm:text-lg text-white max-w-3xl mx-auto">
              Developing an some safety funtions Chatbot for women safety aims to provide immediate assistance and guidance to women in emergency situations . The chatbot will understand user queries and provide appropriate responses, including connecting users with emergency services.
            </p>
          </section>

          {/* Paper Research Section */}
          <section>
            <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-white">
              Paper Research
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <p className="text-justify text-base sm:text-lg text-white max-w-3xl">
                "If a woman logs in and her destination is unfamiliar, the spatial data kit analyzes the location against its database to determine if it's a high-crime area..."
              </p>
              <img src="./assets/paper.png" alt="Research" className="mt-6 lg:mt-0 lg:ml-6 w-full lg:w-1/3" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
