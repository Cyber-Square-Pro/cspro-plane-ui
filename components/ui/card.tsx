import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `
      relative rounded-2xl border border-border
      bg-card text-card-foreground
      shadow-md
      transition-all duration-300
      hover:shadow-xl hover:-translate-y-1

      before:absolute before:inset-0 before:rounded-2xl
      before:p-[1px]
      before:bg-gradient-to-br 
      before:from-blue-900/40 
      before:via-transparent 
      before:to-red-900/40
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-300
      before:-z-10
      `,
      className,
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `
      flex flex-col space-y-2 p-6
      border-b border-border/60
      `,
      className,
    )}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      `
      text-xl font-semibold tracking-tight

      /* Subtle gradient text accent */
      bg-gradient-to-r 
      from-blue-900 
      to-red-800
      bg-clip-text text-transparent
      `,
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      `
      text-sm text-muted-foreground leading-relaxed
      `,
      className,
    )}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `
      p-6 pt-4 space-y-4
      `,
      className,
    )}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `
      flex items-center justify-between
      p-6 pt-4
      border-t border-border/60
      `,
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
