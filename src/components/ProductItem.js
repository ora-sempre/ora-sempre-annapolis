import { Link, useLocation } from 'react-router-dom';

const ProductItem = ({ product, id }) => {
  const { collection, name, price, image } = product;
  const location = useLocation();

  const addComma = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const isTechnology = location.pathname.includes('/technology');
  return (
    <li className="collection-card-product">
      <Link
        to={
          isTechnology ? `/technology/${id}` : `/collection/${collection}/${id}`
        }
      >
        <div className="image-wrapper">
          <img src={image} alt={name} />
        </div>
        <p className="product-name" style={{ height: 'auto' }}>
          {name}
        </p>
        <hr />

        <p>$ {addComma(price)}</p>
      </Link>
    </li>
  );
};

export default ProductItem;
