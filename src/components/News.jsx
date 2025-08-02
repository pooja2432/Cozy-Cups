import React, { useEffect, useRef, useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";

const newsData = [
  {
    date: "Mar 15, 2024",
    title: "We started with a small idea and a big love for coffee.",
    image: "/images/news3.jpg",
  },
  {
    date: "Sept 24, 2024",
    title: "From one cozy corner to a thriving cafe, thanks to our loyal community.",
    image: "/images/news2.jpg",
  },
  {
    date: "Feb 6, 2025",
    title: " Our journey continues as we serve warmth, joy, and great coffee every day.",
    image: "/images/news1.jpg",
  },
];

const News = () => {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="news-container" id='story'>
      <h2 ref={headingRef} className={`news-heading ${isVisible ? "slide-in" : ""}`}>
        From Bean to Brew: Our Coffee Journey
      </h2>
      <div className="news-grid">
        {newsData.map((news, index) => (
          <Link to key={index} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <p className="news-date">{news.date}</p>
              <h3 className="news-title">{news.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;