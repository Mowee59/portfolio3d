import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  id?: string;
};

/**
 * Bounded is a higher-order component that provides consistent padding and maximum width
 * to its children. It allows for a customizable HTML element type and additional class names.
 *
 * @param {React.ElementType} as - The HTML element type to render. Defaults to "section".
 * @param {string} className - Additional class names to apply to the component.
 * @param {React.ReactNode} children - The content to be rendered inside the component.
 * @param {object} restProps - Any other props to be passed to the component.
 * @param {React.Ref} ref - The ref to be forwarded to the component.
 *
 * @returns {JSX.Element} The rendered component with consistent padding and maximum width.
 */
const Bounded = React.forwardRef<React.ElementType, BoundedProps>(
  function Bounded(
    { as: Component = "section", className, children, id, ...restProps },
    ref,
  ) {
    return (
      <Component
        ref={ref}
        id={id}
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        {...restProps}
      >
        <div className="mx-auto max-w-7xl">{children}</div>
      </Component>
    );
  },
);

export default Bounded;
