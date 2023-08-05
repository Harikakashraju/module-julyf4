import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ItemDetailPage = () => {
  const { id } = useParams();
  const { items } = useSelector((state) => state.items);
  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div>
      <h1>Item Detail Page</h1>
      <h2>Title: {item.title}</h2>
      <p>{item.body}</p>
      <p>UserID: {item.userId}</p>
    </div>
  );
};

export default ItemDetailPage;
