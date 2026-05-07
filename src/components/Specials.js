import greekSalad from '../assets/images/greek_salad.jpg';
import bruchetta from '../assets/images/bruchetta.svg';
import lemonDessert from '../assets/images/lemon_dessert.jpg';

const specialsData = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSalad,
  },
  {
    id: 2,
    title: 'Bruchetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruchetta,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
  },
];

const Specials = () => {
  return (
    <section className="specials-section layout">
      <div className="container">
        <div className="specials-header">
          <h1 className="specials-title">Specials</h1>
          <button className="reserve-btn"> Online Menu </button>
        </div>

        <div className="specials-grid">
          {specialsData.map((item) => (
            <div key={item.id} className="special-card">
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <div className="card-title">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button className="order-delivery">
                  Order delivery <i className="fas fa-motorcycle"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
