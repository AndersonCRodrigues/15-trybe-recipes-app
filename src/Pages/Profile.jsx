import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const getEmail = localStorage.getItem('user');

  const history = useHistory();

  const handleClickDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const handleClickFavoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  const handleClickLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />
      <h1
        className="h1"
        data-testid="page-title"
      >
        Profile
      </h1>
      <div className="Profile">
        <h3
          data-testid="profile-email"
          name="profile-email"
          type="text"
          id="profile-email"
        >
          {getEmail}
        </h3>
      </div>
      <div>
        <button
          type="button"
          data-testid="profile-done-btn"
          name="rofile-done-btn"
          id="rofile-done-btn"
          onClick={ handleClickDoneRecipes }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          name="profile-favorite-btn"
          id="profile-favorite-btn"
          onClick={ handleClickFavoriteRecipes }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          name="profile-logout-btn"
          id="profile-logout-btn"
          onClick={ handleClickLogout }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}
