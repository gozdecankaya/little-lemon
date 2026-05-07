import profile from "../assets/profile.webp";

const testimonialsData = [
  {
    id: 1,
    rating: '⭐⭐⭐⭐⭐',
    name: 'Sara Lopez',
    image: profile,
    review: 'The Greek salad was amazing! Best Mediterranean food in Chicago.',
  },
  {
    id: 2,
    rating: '⭐⭐⭐⭐⭐',
    name: 'John Doe',
    image: profile,
    review: 'Great atmosphere and friendly staff. The Bruchetta is a must-try.',
  },
  {
    id: 3,
    rating: '⭐⭐⭐⭐⭐',
    name: 'Anna Smith',
    image: profile,
    review: 'Authentic flavors. It reminded me of my trip to Greece!',
  },
  {
    id: 4,
    rating: '⭐⭐⭐⭐⭐',
    name: 'Mark J.',
    image: profile,
    review: 'The Lemon Dessert is to die for. I will definitely come back.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section layout">
      <div className="container testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="rating">{item.rating}</div>
              <div className="user-info">
                <img src={item.image} alt={item.image} />
                <h3>{item.name}</h3>
              </div>
              <p className="review-text">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
