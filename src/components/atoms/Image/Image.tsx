import React from 'react'

export type ImageProps = {
  src: string
  width?: string | number
  height?: string | number
  alt: string
  className?: string
}

export const Image = ({ src, width, height, alt, className }: ImageProps) => (
  <img src={src} alt={alt} className={className} width={width} height={height} />
)
