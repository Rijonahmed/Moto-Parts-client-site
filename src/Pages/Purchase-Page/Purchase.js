import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <h1>this is Purchase page{id}</h1>

    </div>
  );
};

export default Purchase;