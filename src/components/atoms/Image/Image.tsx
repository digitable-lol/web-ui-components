import React from 'react'

export type ImageProps = {
  src?: string
  width?: string | number
  height?: string | number
  className?: string
  alt?: string
  onClick?: () => void
}

export const Image = ({ src, className, alt, height, width, onClick }: ImageProps) => {
  return <img className={className} onClick={onClick} alt={alt} src={src} width={width} height={height} />
}
