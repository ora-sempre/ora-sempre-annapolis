import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../Firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import ProductItem from '../components/ProductItem';

export const Technology = () => {
  const [technologyProducts, setTechnologyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnology = async () => {
      try {
        const collectionRef = collection(db, 'technology');
        const q = query(collectionRef, limit(10));
        const querySnap = await getDocs(q);

        const products = [];
        querySnap.forEach((doc) => {
          products.push({ id: doc.id, data: doc.data() });
        });

        setTechnologyProducts(products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error('Could not fetch the collection');
        setLoading(false);
      }
    };

    fetchTechnology();
  }, []);

  return (
    <div className="collection">
      <div className="collection-container">
        <h2>Technology Collection</h2>
        {loading ? (
          <Spinner />
        ) : technologyProducts.length > 0 ? (
          <>
            <ul className="collection-card">
              {technologyProducts.map((product) => (
                <ProductItem
                  product={product.data}
                  id={product.id}
                  key={product.id}
                />
              ))}
            </ul>
          </>
        ) : (
          <p>No products exist in the technology collection</p>
        )}
        <div>
          <Link to="/collections">Go back to all collections</Link>
        </div>
      </div>
    </div>
  );
};

export default Technology;
