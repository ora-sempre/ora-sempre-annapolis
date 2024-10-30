import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase.config';
import Spinner from '../components/Spinner';
import shareIcon from '../assets/svg/shareIcon.svg';
import { toast } from 'react-toastify';

const TechnologyProduct = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [sharedLinkCopied, setSharedLinkCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'technology', params.productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
        setLoading(false);
      }
    };

    fetchProduct();
  }, [navigate, params.productId]);

  if (loading) {
    return <Spinner />;
  }

  const { description, image, name, /*price,*/ provider } = product || {};

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setSharedLinkCopied(true);
    toast.success('Link copied');
  };

  // const addComma = (price) =>
  //   price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="product">
      <div className="product-container">
        <div className="product-link">
          <img src={shareIcon} alt="Share Icon" onClick={copyLink} />
        </div>

        <div className="product-image">
          <div className="image-wrapper">
            <img src={image} alt={name} />
          </div>
        </div>

        <div className="product-info">
          <h3>{name}</h3>
          <p>By: {provider}</p>
          <p>
            {' '}
            {/* <b>Price:</b> $ {addComma(price)} */}
          </p>

          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <ul style={{ listStyle: 'none' }}>
            <li>
              - Always test on a patch of skin to check for any adverse
              reactions before applying.
            </li>
            <li>
              - Read the instructions provided with the product before using.
            </li>
            <li>
              - If you are unsure whether the ingredients or the product is
              suitable for you, consult with your healthcare professional.
            </li>
            <li>
              - It is the responsibility of the user to determine if they wish
              to use this item.
            </li>
            <li>
              - Always read the instructions provided by the original provider
              of the product.
            </li>
            <li>
               - Purchases can only be made in person
            </li>
            <li>
              - <b>No refunds. Exchanges accepted within 14 days.</b>{' '}
              <Link to="/shipping-policy" alt="policy">
                [Check out policy]
              </Link>
            </li>
          </ul>
        </div>
        <Link onClick={() => navigate(-1)}>
          Go Back to Technology Collection
        </Link>
      </div>
    </div>
  );
};

export default TechnologyProduct;
