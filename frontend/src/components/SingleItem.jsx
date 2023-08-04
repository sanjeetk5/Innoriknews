import React from 'react';

const SingleItem = ({ location }) => {
  const { news } = location.state;
  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.description}</p>
    </div>
  );
};

export default SingleItem;