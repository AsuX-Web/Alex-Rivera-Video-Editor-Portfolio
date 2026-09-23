import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-[0.75rem] font-medium font-mono tracking-tight",
  {
    variants: {
      variant: {
        default: "bg-ink/8 text-ink",
        pine: "bg-pine-tint text-pine",
        ember: "bg-ember/12 text-ember-ink",
        onDark: "bg-paper/10 text-cream",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
