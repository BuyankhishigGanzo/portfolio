import React from 'react';

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-[0.12em] uppercase transition-all duration-200 rounded-full select-none disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2',
    md: 'text-[12px] px-6 py-3 h-[42px]',
    lg: 'text-[13px] px-8 py-4 h-[48px]'
  };

  const variantStyles = {
    primary: 'bg-white text-black hover:bg-[var(--accent)] hover:text-white',
    accent: 'bg-[var(--accent)] text-white hover:brightness-110 shadow-lg shadow-[rgba(255,64,31,0.25)]',
    outline: 'border border-[rgba(255,255,255,0.16)] text-white hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)]',
    ghost: 'text-neutral-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
