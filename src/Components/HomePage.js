import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../redux/actions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, items, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <nav>
      <ul className="navbar">
        <a href="#">TravelMedia.in</a>
        <a href="#home"><i className="fas fa-home"></i></a>
        <a href="#notification"><i className="fas fa-bell"></i></a>
        <a href="#save"><i className="fas fa-save"></i></a>
        <a href="#contact"><i className="fas fa-address-book"></i></a>
      </ul>
      </nav>
      <h1>Social Media For Travellers</h1>
      <input type='text' placeholder='Search' id="search"/>
      <div className='home'>
        {items.map((item) => (
           <div key={item.id}>
            <img src='https://fastly.picsum.photos/id/155/200/200.jpg?hmac=D_Tf9XAIteS9U6InmFX2j3DXYkvhlEOOkGGiWuMwU9Q' alt="image"/>
            <h3>Post Title</h3>
            <Link id="link" to={`/item/${item.id}`}>{item.title.slice(0, 50)}{item.title.length > 50 ? '...' : ''}
            </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

