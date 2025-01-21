import React, { forwardRef } from "react";
import clsx from "clsx";

/**
 * @typedef {Object} ButtonProps
 * @property {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'} [variant]
 * @property {'default' | 'sm' | 'lg'} [size]
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props]
 */

/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<ButtonProps> & React.RefAttributes<HTMLButtonElement>>}
 */
export const BPButton = forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={clsx(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90":
              variant === "default",
            "bg-destructive text-destructive-foreground hover:bg-destructive/90":
              variant === "destructive",
            "border border-input hover:bg-accent hover:text-accent-foreground":
              variant === "outline",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "underline-offset-4 hover:underline text-primary":
              variant === "link",
            "h-10 py-2 px-4": size === "default",
            "h-9 px-3": size === "sm",
            "h-11 px-8": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
