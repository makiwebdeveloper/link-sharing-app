import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const buttonVariants = cva(
  "rounded-lg px-4 py-2 transition duration-300",
  {
    variants: {
      variant: {
        default: "text-white bg-violet-500 hover:bg-violet-400",
        outline:
          "text-violet-700 border-2 border-violet-500 hover:bg-violet-500 hover:text-white",
        ghost: "text-violet-700 hover:bg-violet-500/10",
        custom: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, children, type, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
