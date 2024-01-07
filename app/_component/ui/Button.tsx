import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  ["transition-colors duration-200 px-3 py-1.5", "text-white"],
  {
    variants: {
      variant: {
        ghost: ["hover:bg-slate-100"],
        primary: ["bg-accent", "text-white", "hover:bg-head", "outline-none"],
        outline: [
          "border-[1px] border-accent  text-accent hover:border-head hover:text-head",
        ],
      },
      size: {
        default: ["rounded-md"],
        icon: [
          "rounded-full",
          "w-10",
          "h-10",
          "flex",
          "items-center",
          "justify-center",
          "p-2.5",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size, className }))}
    />
  );
};

export default Button;
