'use client';

import React from 'react';

export default function ScrollReveal({
  children,
  variant = 'up', // 'up' | 'left' | 'right' | 'zoom' | 'fade' | 'line'
  delay = 0, // in seconds
  className = '',
  style = {},
  as: Component = 'div',
  ...props
}) {
  if (variant === 'line') {
    return (
      <span className="h-mask" style={{ display: 'block', overflow: 'hidden' }}>
        <Component
          className={`reveal-line ${className}`.trim()}
          style={{ animationDelay: `${delay + 0.05}s`, ...style }}
          {...props}
        >
          {children}
        </Component>
      </span>
    );
  }

  return (
    <Component
      className={`rise ${className}`.trim()}
      data-anim={variant}
      style={{ animationDelay: `${delay + 0.05}s`, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
