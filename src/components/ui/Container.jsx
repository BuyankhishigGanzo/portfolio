import React from 'react';

export default function Container({ children, className = '', id, style }) {
  return (
    <div id={id} style={style} className={`container-custom ${className}`}>
      {children}
    </div>
  );
}
