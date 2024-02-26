import React from 'react';

export const Notification = ({ title, body }) => {
  return (
    <div className="notification">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
