export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#fff]">
      <div className="container">
        <div className="tag">Services</div>
        <h2 className="header-head">Explore Our Core<br /> Therapeutic Offerings</h2>
        <p className="text-center md:text-left text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">At Sukhmanah, we provide a range of therapeutic services designed to support your mental well-being. Our approach blends traditional wisdom with modern techniques to foster healing and growth.</p>
      </div>
      <div className="cards-container mt-5">
        <div className="card">
          <div className="content">
            <p className="heading bg-gradient-to-b from-[#FFA5A5] to-[#FF6464] text-transparent bg-clip-text">Individual Therapy Tailored to Your Needs</p>
            <p className="paragraph">
              Experience personalized sessions with our skilled therapists.
            </p>
          </div>
        </div>

        <div className="card">
                <div className="content">
                    <p className="heading bg-gradient-to-b from-[#FFA5A5] to-[#FF6464] text-transparent bg-clip-text">Connect and Grow Through Group Therapy</p>
                    <p className="paragraph">
                      Join a supportive community and share your journey.
                    </p>
                </div>
          </div>

          <div className="card">
          <div className="content">
            <p className="heading bg-gradient-to-b from-[#FFA5A5] to-[#FF6464] text-transparent bg-clip-text">Engaging Wellness Workshops for Holistic Growth</p>
            <p className="paragraph">
              Participate in workshops that enhance your well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
