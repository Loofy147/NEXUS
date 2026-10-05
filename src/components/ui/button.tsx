import * as React from 'react';

type Variant = 'nexus' | 'nexusOutline' | 'header' | 'icon';
type Size = 'sm' | 'icon' | 'nexus';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      variant = 'nexus',
      size = 'nexus',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = ['btn', `btn-${variant}`, `btn-size-${size}`, className]
      .filter(Boolean)
      .join(' ');
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children as React.ReactElement<{
          className?: string;
          ref?: React.Ref<HTMLElement>;
        }>,
        {
          className: [children.props.className, classes]
            .filter(Boolean)
            .join(' '),
          ref: ref as React.Ref<HTMLElement>,
        }
      );
    }
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
