import React from 'react'

export type TextProps = {
  text: string
  className?: string
}

export const Text = ({ text, className }: TextProps) => {
  return <span className={className}>{text}</span>
}
