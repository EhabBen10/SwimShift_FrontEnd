import { cva, VariantProps } from 'class-variance-authority'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const buttonStyle = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['bg-secondary', 'hover:bg-secondary-hover'],
      ghost: ['hover:bg-gray-100'],
    },
    size: {
      default: ['rounded', 'p-2'],
      icon: [
        'rounded-full',
        'w-10',
        'h-10',
        'flex',
        'items-center',
        'justify-center',
        'p-2.5',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type ButtonProp = VariantProps<typeof buttonStyle> & ComponentProps<'button'>

export function SpecialButton({ variant, size, className, ...props }: ButtonProp) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyle({ variant, size }), className)}
    />
  )
}
