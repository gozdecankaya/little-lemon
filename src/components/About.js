import img1 from '../assets/images/mario-adrian-a.jpg';
import img2 from '../assets/images/mario-adrian-b.jpg';

const About = () => {
  return (
    <section className="about-section layout">
      <div className="container about-container">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Based in the heart
            of Chicago, our story began with two brothers, Mario and Adrian, who
            wanted to bring the authentic flavors of their childhood to the
            city.
          </p>
          <p>
            Every dish we serve is crafted with fresh ingredients and a deep
            respect for our heritage. Whether you're here for our famous Greek
            salad or our signature Lemon Dessert, we promise a dining experience
            that feels like home.
          </p>
        </div>
        <div className="about-images">
          <img src={img1} alt="Little Lemon" className="img-front" />
          <img src={img2} alt="Little Lemon Restaurant" className="img-back" />
        </div>
      </div>
    </section>
  );
};

export default About;
