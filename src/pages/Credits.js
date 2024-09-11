import React from 'react';

const Credits = () => {
  return (
    <div>
      {' '}
      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          textAlign: 'center',
        }}
      >
        <h3>Credits</h3>
        <p>
          Special thanks to the following companies for allowing the use of
          their product information and images:
        </p>
        <ul>
          <li>
            <a
              href="https://www.avinichi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avinichi
            </a>
            - for their product information and images.
          </li>
          <li>
            <a
              href="https://avologi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avologi
            </a>
            - for their product information and images.
          </li>
          <li>
            <a
              href="https://moses-a.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moses Poston
            </a>
            - for the website development.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Credits;
