import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ComponentShape, ComponentSize, ComponentVariant } from '@/common/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  noAnimation?: boolean;
  shape?: ComponentShape;
  size?: ComponentSize;
  variant?: ComponentVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, variant, size, shape, loading, noAnimation, leftIcon, rightIcon, ...restProps } = props;

  const buttonStyle = clsx({
    'btn-lg': size === 'lg',
    'btn-md': size === 'md',
    'btn-sm': size === 'sm',
    'btn-xs': size === 'xs',
    'btn-neutral text-white': variant === 'neutral',
    'btn-primary': variant === 'primary',
    'btn-secondary': variant === 'secondary',
    'btn-accent': variant === 'accent',
    'btn-ghost': variant === 'ghost',
    'btn-outline': variant === 'outline',
    'btn-circle': shape === 'circle',
    'btn-square': shape === 'square',
    'gap-2': children && (!!leftIcon || !!rightIcon || loading),
    'no-animation': !!noAnimation
  });

  const composedClassName = twMerge('btn', buttonStyle, className);

  return (
    <button type="button" className={composedClassName} {...{ ref, ...restProps }}>
      {loading && <span className="loading loading-spinner" />}
      {!loading && leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
