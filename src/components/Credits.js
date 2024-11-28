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
              href="https://switchcasestudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Switch Case LLC
            </a>
            - for website design and development.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Credits;
