import { Link } from 'react-router-dom';
import microderm from '../assets/website-images/microderm.jpg';
import bluelight from '../assets/website-images/blue-light.jpg';
import redlight from '../assets/website-images/red-light.jpg';
import microneedle from '../assets/website-images/microneedle.jpg';
import signature from '../assets/website-images/signature.jpeg';
import dermaplane from '../assets/website-images/dermaplane.jpeg';

const Treatments = () => {
  const products = [
    {
      id: 1,
      link: '',
      imageUrl: microderm,
      title: 'Deep Cleaning with Diamond Microdermabrasion',
      subtitle: 'EXFOLIATING AND CLARIFYING',
      description:
        'Our Diamond Microdermabrasion Facial is a gentle, non-invasive exfoliating treatment that encourages new cell growth and clears clogged pores. It helps reduce acne scars and balances skin tone. By stimulating collagen production, it enhances your complexion, leaving your skin brighter and more youthful.',
      price: '$225',
    },
    {
      id: 2,
      link: '',
      imageUrl: microneedle,
      title: 'Nanoneedling',
      subtitle: 'SKIN REJUVENATION',
      description:
        'Our Nanoneedling Rejuvenation Facial reduces the appearance of scars, including acne scars, and smooths fine lines and wrinkles. It addresses enlarged pores, evens skin tone, and tackles hyperpigmentation and dark spots. Enjoy improved skin elasticity and a smoother texture with this advanced treatment.',
      price: '$350',
    },
    {
      id: 3,
      link: '',
      imageUrl: bluelight,
      title: 'Deep Cleaning with Blue Light Therapy',
      subtitle: 'SOOTHING AND PURIFYING',
      description:
        'Unwind with our Deep Cleansing Facial, which includes a calming massage and precise extractions. This all-inclusive treatment deeply purifies your skin, while our exclusive mask enhances your facial experience and delivers even better results.',
      price: '$149',
    },
    {
      id: 4,
      link: '',
      imageUrl: redlight,
      title: 'Anti-Aging with Red Light',
      subtitle: 'LIFTING AND FIRMING',
      description:
        'Our nonsurgical facelift is crafted to lift sagging skin and stimulate collagen production. This cutting-edge treatment reduces acne scars and improves blood circulation, giving your skin a healthier glow. Enjoy a youthful look without the recovery time of traditional surgery.',
      price: '$499',
    },
    {
      id: 5,
      link: '',
      imageUrl: signature,
      title: 'Signature Facial',
      subtitle: 'CLEANING AND BOOSTING',
      description:
        'Our Signature Facial is a luxury treatment, customized to target your specific skin concerns. It revitalizes tired, aging skin, boosts collagen production, and encourages cellular repair for firmer, youthful skin. It reduces fine lines and wrinkles, enhancing skin health and texture.',
      price: '$199',
    },
    {
      id: 6,
      link: '',
      imageUrl: dermaplane,
      title: 'Dermaplaning',
      subtitle: 'REJUVINATING',
      description:
        'Our Dermaplaning Facial is a non-invasive treatment with no downtime, free from chemicals. It assists with skin texture, scarring, sun damage, and discoloration, unveiling a brighter, healthier complexion. Enjoy a rejuvenated experience with your newly revealed skin looking fresher than ever.',
      price: '$120',
    },
  ];

  return (
    <div className="collections">
      <h2>Our Facial Treatments</h2>
      <div className="collections-container">
        {products.map((product) => (
          <Link to={product.link} key={product.id}>
            <div
              className="collections-card"
              style={{ background: `url(${product.imageUrl}) no-repeat center/cover` }}
            >
              <div className="collections-text">
                <h3>{product.title}</h3>
                <p>{product.subtitle}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
