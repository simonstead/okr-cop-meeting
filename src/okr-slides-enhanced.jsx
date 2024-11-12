import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  const slides = [
    {
      title: "Let's Talk About OKRs",
      content: (
        <div>
          <p className="mb-6">
            Hey everyone! Today we're going to dig into OKRs for our engineering
            community.
          </p>
          <p>
            I know - another acronym, another framework. But OKRs can be
            genuinely useful rather than just another box-ticking exercise.
          </p>
        </div>
      ),
    },
    {
      title: "What's the Point?",
      content: (
        <div>
          <p className="mb-4">
            We've all sat through meetings where goals are set that feel
            disconnected from our actual work. OKRs are different (or at least,
            they should be).
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Get everyone pointing in the same direction</li>
            <li>Know if we're actually making progress</li>
            <li>Think bigger while staying practical</li>
            <li>See how our work connects to the company's goals</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Breaking it Down",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-2">Objectives</h3>
            <p>
              The big, exciting stuff we want to achieve. They should make you
              think "yeah, that would be awesome" - but also feel a bit nervous
              about whether we can pull it off.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Key Results</h3>
            <p>
              How we know we're getting there. They're the numbers, the metrics,
              the actual evidence that we're making progress. No fuzzy language
              allowed here - it either happened or it didn't.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Real-World OKR Examples",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="font-bold mb-3 text-blue-600">Google</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium mb-2">
                Objective: Make Google's cloud the best platform for AI and ML
              </p>
              <ul className="list-disc ml-6">
                <li>KR1: Launch 10 new AI/ML services</li>
                <li>KR2: Increase ML workflow completion rate by 25%</li>
                <li>KR3: Reduce model training costs by 40%</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-rose-600">Airbnb</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium mb-2">
                Objective: Create the most trusted home-sharing community
              </p>
              <ul className="list-disc ml-6">
                <li>KR1: Achieve 99% verified host profiles</li>
                <li>KR2: Reduce safety-related incidents by 50%</li>
                <li>KR3: Increase guest satisfaction score to 4.8/5.0</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-emerald-600">Spotify</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium mb-2">
                Objective: Become the best personalized music platform
              </p>
              <ul className="list-disc ml-6">
                <li>KR1: Increase daily active users by 30%</li>
                <li>KR2: Improve recommendation acceptance rate to 75%</li>
                <li>KR3: Reduce song skip rate by 20%</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    // Rest of the previous slides continue here
    {
      title: "How It Works in Real Life",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-2">CEO Level</h3>
            <p>"We want to be the go-to platform for our users"</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Measured through user growth</li>
              <li>Platform stability</li>
              <li>Market share</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Senior Leadership</h3>
            <ul className="list-disc ml-6">
              <li>Focus on reliability, speed, user satisfaction</li>
              <li>Track response times, uptime, deployment frequency</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Engineering Teams</h3>
            <ul className="list-disc ml-6">
              <li>Pick specific technical challenges</li>
              <li>Track build times, test coverage, incident rates</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Workshop Time",
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <p>This is where you come in. We're going to:</p>
            <ol className="list-decimal ml-6">
              <li>Break into small groups</li>
              <li>
                Think about what matters most for our engineering community
              </li>
              <li>Come up with objectives that excite us</li>
              <li>Figure out how we'll measure success</li>
            </ol>
          </div>
          <div>
            <p className="mb-2">Some questions to get you thinking:</p>
            <ul className="list-disc ml-6">
              <li>What bugs you about how we work now?</li>
              <li>What would make you proud to tell other engineers about?</li>
              <li>Where could we make the biggest difference?</li>
              <li>What would help you do your best work?</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "What Happens Next?",
      content: (
        <div className="space-y-6">
          <p>After today:</p>
          <ul className="list-disc ml-6">
            <li>We'll pull together everyone's input</li>
            <li>Clean it up into proper OKRs</li>
            <li>Share them back with everyone for a final check</li>
            <li>Lock them in for Q1 2025</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Let's Discuss",
      content: (
        <div className="space-y-6">
          <p>The floor is yours - let's hear what you're thinking:</p>
          <ul className="list-disc ml-6">
            <li>What questions do you have?</li>
            <li>What concerns you about this?</li>
            <li>What excites you?</li>
            <li>What examples would be helpful to see?</li>
          </ul>
        </div>
      ),
    },
  ];

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        setDirection("prev");
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setDirection("next");
        setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
      }
    },
    [slides.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handlePrevClick = () => {
    setDirection("prev");
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    setDirection("next");
    setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-8 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-gray-400">
          {currentSlide + 1} / {slides.length}
        </div>

        <div className="h-full flex flex-col">
          <h1
            className={`text-3xl font-bold mb-8 text-gray-800 transition-all duration-500 transform
              ${
                direction === "next"
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-0 opacity-100"
              }
            `}
          >
            {slides[currentSlide].title}
          </h1>

          <div
            className={`flex-grow transition-all duration-500 transform
              ${
                direction === "next"
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-0 opacity-100"
              }
            `}
          >
            {slides[currentSlide].content}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevClick}
            disabled={currentSlide === 0}
            className={`flex items-center transition-colors duration-200 ${
              currentSlide === 0
                ? "text-gray-300"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="ml-2">Previous</span>
          </button>

          <button
            onClick={handleNextClick}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center transition-colors duration-200 ${
              currentSlide === slides.length - 1
                ? "text-gray-300"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <span className="mr-2">Next</span>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
