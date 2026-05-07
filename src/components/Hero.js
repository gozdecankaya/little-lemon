import heroImg from '../assets/images/restauranfood.jpg'

const Hero = () => {
return (
  <section className="hero-section layout">
    <div className="container">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button className="reserve-btn">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt='Delicious Mediterranen food'/>
      </div>
    </div>
  </section>
)
}

export default Hero;