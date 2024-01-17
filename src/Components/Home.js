import React, { useEffect, useRef } from "react";
import './home.css';

function Home() {
  const additionalImage2Ref = useRef(null);
  const productInfoRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          entry.target.classList.remove("leave");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.add("leave");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    if (additionalImage2Ref.current) observer.observe(additionalImage2Ref.current);
    if (productInfoRef.current) observer.observe(productInfoRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="Home container-fluid">
      <div className="main-container">
        <img className="bg-image img-fluid" src="images/bg.png" alt="Background" />
        
        <img ref={additionalImage2Ref} className="additional-image-2 img-fluid" src="images/xci swagger (1).png" alt="Additional 2" />
        
        <div ref={productInfoRef} className="product-info">
          <div ref={titleRef} className="title">Swagger <br /> 26T 21S</div>
          <button className="learn-more-button btn btn-primary">Learn More</button>
          <p ref={descriptionRef} className="description">
            The Swagger 26T is one of our premier geared cycles that is built to handle various terrains
            and riding styles. It is a reliable and durable cycle with a lightweight frame
            engineered to transition seamlessly from on-road to off-road.
          </p>
        </div>
        
        <div className="contact-us">CONTACT US</div>
        <img className="contact-box img-fluid" src="images/contact box.png" alt="Contact Box" />
      </div>

      <div className="social-media">
        <div className="social-text text-white">GET SOCIAL</div>
        <img className="social-icon img-fluid" src="images/facebook.png" alt="Facebook" />
        <img className="social-icon-2 img-fluid" src="images/instagram.png" alt="Instagram" />
        <img className="social-icon-3 img-fluid" src="images/xtwitter.png" alt="Twitter" />
      </div>
    </section>
  );
}

export default Home;
