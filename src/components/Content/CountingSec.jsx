
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function CountingSection() {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500, // AOS animation duration
    });

    const handleScroll = () => {
      if (!counted) {
        const counters = document.querySelectorAll('.count.percent');
        counters.forEach((counter) => {
          const countTo = parseInt(counter.getAttribute('data-count'), 10);
          const duration = 3000;
          let startTime;

          function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            if (progress < duration) {
              const value = Math.floor((progress / duration) * countTo);
              counter.textContent = value;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = countTo;
            }
          }

          requestAnimationFrame(updateCounter);
        });

        setCounted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counted]);

  return (
    <section id="counting" className="mt-110">
      <div className="container">
        <div className="title-header" id="performance" data-aos="zoom-in" data-aos-duration={1500}>
          <div className="main_title">
            <span className="small_title">STILL COUNTING</span>
            <h2 className="heading_h2">
              THE TRUE MEASURE OF THE VALUE OF ANY BUSINESS LEADER AND MANAGER IS PERFORMANCE
            </h2>
          </div>
        </div>
      </div>
      <div className="counter">
        <div className="container-fluid g-0">
          <div className="performance_box" id="counter">
            <div className="count-up" id="bg-pink" data-aos="fade-down">
              <div>
                <span className="count percent" data-count={1000}>
                  0
                </span>
                <span>+</span>
                <h3>Completed Projects</h3>
              </div>
            </div>
            <div className="count-up" data-aos="fade-up">
              <div>
                <span className="count percent" data-count={500}>
                  0
                </span>
                <span>+</span>
                <h3>Happy Clients</h3>
              </div>
            </div>
            <div className="count-up" id="bg-pink" data-aos="fade-down">
              <div>
                <span className="count percent" data-count={8}>
                  0
                </span>
                <span>+</span>
                <h3>Years Of Experience</h3>
              </div>
            </div>
            <div className="count-up" data-aos="fade-up">
              <div>
                <span className="count percent" data-count={20}>
                  0
                </span>
                <span>+</span>
                <h3>Team</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountingSection;
