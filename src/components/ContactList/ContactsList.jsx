import React from 'react';

const ContactList = ( {data} ) => {
  return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <span className="name">{item.name}: </span>
            <span className="number">{item.number}</span>
          </li>
        ))}
      </ul>
  );
};

export default ContactList;
