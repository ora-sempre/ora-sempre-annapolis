import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '../Firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import ProductItem from '../components/ProductItem';

export const Collection = () => {
  const [collectionProducts, setCollectionProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const collectionRef = collection(db, 'products');
        console.log('Collection Reference:', collectionRef);

        const q = query(
          collectionRef,
          where('collection', '==', params.collectionName),
          limit(10)
        );

        console.log('Query:', q);

        const querySnap = await getDocs(q);

        console.log('Query Snapshot:', querySnap);

        const products = [];

        querySnap.forEach((doc) => {
          products.push({ id: doc.id, data: doc.data() });
        });

        setCollectionProducts(products);
        setLoading(false);
      } catch (error) {
        toast.error('Could not fetch the collection');
        setLoading(false);
      }
    };

    fetchCollection();
  }, [params.collectionName]);

  return (
    <div className="collection">
      <div className="collection-container">
        <h1>{params.collectionName.toUpperCase()} Collection</h1>
        {loading ? (
          <Spinner />
        ) : collectionProducts && collectionProducts.length > 0 ? ( // Check if collectionProducts is not null
          <>
            <ul className="collection-card">
              {collectionProducts.map((product) => (
                <ProductItem
                  product={product.data}
                  id={product.id}
                  key={product.id}
                />
              ))}
            </ul>
          </>
        ) : (
          <p>No products exist for {params.collectionName}</p>
        )}
        <div>
          <Link to="/collections">Go back to all collections</Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
