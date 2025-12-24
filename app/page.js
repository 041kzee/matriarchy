"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Scale, Heart, Users, BookOpen, ArrowRight } from "lucide-react";

export default function MatriarchyLanding() {
  const [searchQuery, setSearchQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const GEMINI_API_KEY = "api_key";  //add gemini api key , it is not added here for safety purposes.

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: searchQuery }],
              },
            ],
          }),
        }
      );

      const data = await res.json();

      const answer =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Gemini could not generate a response.";

      setResponse(answer);
    } catch (error) {
      setResponse("Error fetching response from Gemini AI.");
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Workplace Rights",
      description: "Equal pay, maternity leave, and workplace safety laws",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Safety",
      description: "Healthcare rights, reproductive health, and safety laws",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family & Marriage",
      description: "Marriage, divorce, custody, and property rights",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education Rights",
      description: "Access to education and scholarships for women",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-red-900" />
            <h1 className="text-2xl font-bold text-gray-800">Matriarchy</h1>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a className="text-gray-600 hover:text-red-900">Home</a>
            <a href="https://www.legalserviceindia.com/legal/article-20897-top-legal-rights-and-protection-laws-for-women-in-india-2025-update-.html" className="text-gray-600 hover:text-red-900">Laws</a>
            <a href="https://kscw.karnataka.gov.in/en" className="text-gray-600 hover:text-red-900">Resources</a>
            <a  href="/" className="text-gray-600 hover:text-red-900">About</a>
            <button
              onClick={() => router.push("/signup")}
              className="bg-red-900 text-white px-4 py-1 rounded-2xl hover:bg-red-800"
            >
              SignUp
            </button>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Know Your Rights
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover government laws and regulations designed to protect and
          empower women
        </p>

        <div className="max-w-2xl mx-auto mb-4">
          <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-full shadow-lg p-2">
            <div className="flex items-center flex-1 px-4">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search for laws, rights, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none text-gray-700 bg-transparent placeholder-gray-400"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-red-900 text-white px-8 py-3 rounded-full hover:bg-red-800 transition"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          {response && (
            <div className="mt-4 p-4 w-full bg-white rounded shadow text-black text-left whitespace-pre-wrap">
              {response}
            </div>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Explore by Category
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer group"
            >
              <div className="text-red-900 mb-4 group-hover:scale-110 transition">
                {category.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <div className="flex items-center text-red-900 font-medium"
              onClick={()=>router.push("https://lawforindians.com/constitutional-rights-for-women-in-india/")}>
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-red-900 text-white py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Empowerment Through Knowledge
          </h3>
           <h3 className="text-3xl font-bold mb-4">
            Get to know about the latest Jeffrey Epstein Files
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our mission is to make every woman to speak for herself
          </p>
          <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
           onClick={() => router.push("/jeffery")}>
            Know More
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2024 Matriarchy. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Making legal information accessible to all women
          </p>
        </div>
      </footer>
    </div>
  );
}
