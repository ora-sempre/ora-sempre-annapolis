import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    link: '/collection/noni/Ra55FMxK5TK9v1Df9tRj',
    imageUrl:
      'https://www.avinichi.com/wp-content/uploads/Noni-Morning-Glow-1.png',
    title: 'NONI POLISHING PEEL',
    benefits: ['BEST SELLERS', 'EXFOLIANTS', 'NONI COLLECTION'],
    description: 'Exfoliant with Noni for firmer, smoother skin',
    price: '$300',
  },
  {
    id: 2,
    link: '/collection/noni/CQxcXtGOaTKrWk3GIKBo',
    imageUrl:
      'https://www.avinichi.com/wp-content/uploads/Noni-Youth-Restoring-Solution-1.png',
    title: 'NONI YOUTH RESTORING SOLUTION',
    benefits: ['ANTI-WRINKLE', 'FIRMING', 'REPAIRING'],
    description:
      'Reduces fine lines and wrinkles quickly for a firm appearance',
    price: '$1,300',
  },
  {
    id: 3,
    link: '/collection/noni/pu2U3aCanEZzaMcz8QpR',
    imageUrl:
      'https://www.avinichi.com/wp-content/uploads/Noni-Pore-Purifying-Toner-1.png',
    title: 'NONI MOUSSE CLEANSER',
    benefits: ['CLEANSING', 'REFRESHING', 'RADIANCE'],
    description: 'A daily, gentle cleanser for fresh and radiant skin',
    price: '$250',
  },
];

const BestSeller = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="best-seller">
      <h2>Skincare Best Sellers</h2>
      <div className="best-seller-container">
        {products.map((product, index) => {
          if (windowWidth <= 768 && index === 2) return null;
          return (
            <Link to={product.link} key={product.id}>
              <div className="best-seller-card">
                <div className="image-wrapper">
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <hr />
                <ul className="benefits">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <p>{product.description}</p>
                {/* <p>{product.price}</p> */}
              </div>
            </Link>
          );
        })}
        <Link to="/collections" className="btn">
          Explore Skincare
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;
