import React from 'react';
import ReturnPolicy from './ReturnPolicy';

const ShippingPolicy = () => {
  return (
    <>
      <ReturnPolicy />
      <div className="policy-page">
        <div className="policy-container">
          <h2>Shipping Policy</h2>
          <h3>Free Shipping for Orders Over $250</h3>
          <p>
            We are pleased to offer free shipping for orders totaling $250 or
            more. Your order will be shipped via standard shipping and should
            arrive within 5-7 business days.
          </p>
          <h3>In-Store Purchases Only</h3>
          <p>
            Please note that shipping from KAMEA is only available for items
            purchased physically in our store. Unfortunately, we are unable to
            fulfill online orders. We appreciate your understanding.
          </p>
          <p>
            For further inquiries regarding shipping or assistance with your
            order, please contact our customer service team at{' '}
            <a href="mailto:santafe@kamea.online" style={{ color: '#000' }}>
              santafe@kamea.online
            </a>
            .
          </p>
          <p>Last Updated: August 2024</p>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
