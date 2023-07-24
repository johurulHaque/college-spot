import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ProfessorTalk = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Celebrating a Joyful Toy Marketplace!</h2>
          <p className="text-gray-600">
            <FaQuoteLeft className="text-[#09ccd0]"></FaQuoteLeft>Master the art of study with effective techniques and strategies for academic excellence. Learn beyond memorization, embracing critical thinking to understand and retain information.
            <FaQuoteRight className="text-[#09ccd0]"></FaQuoteRight>
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Most incredible toy places in here!</h2>
          <p className="text-gray-600">
            <FaQuoteLeft className="text-[#09ccd0]"></FaQuoteLeft>
            Balance academics and life with efficient time management skills. Cultivate a passion for learning and turn setbacks into stepping stones towards success in your study journey.
            <FaQuoteRight className="text-[#09ccd0]"></FaQuoteRight>
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Place to choose joyful for kids!</h2>
          <p className="text-gray-600">
            <FaQuoteLeft className="text-[#09ccd0]"></FaQuoteLeft>
            Unlock your learning potential with insights into how the brain absorbs and retains knowledge. Explore the power of persistence, staying motivated to overcome challenges and achieve your academic goals.
            <FaQuoteRight className="text-[#09ccd0]"></FaQuoteRight>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorTalk;