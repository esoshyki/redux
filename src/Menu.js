import React from 'react';
import { Link } from 'react-router';

export default function Menu() {
  return (
    <div>
      <Link to="/">Tracks</Link>
      <Link to="/about">About</Link>
    </div>
  )
}