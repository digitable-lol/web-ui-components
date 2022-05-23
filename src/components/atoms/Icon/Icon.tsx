import React from 'react'

import { Icons } from 'src/components/atoms/Icon/Icon.types'

import { getIcon } from 'src/components/atoms/Icon/Icon.utils'

export type IconProps = {
  name: Icons | string
  tooltip?: string
  onClick?: () => void
  className?: string
}

export const Icon = ({ name, onClick, className, tooltip }: IconProps) => {
  const IconComponent = getIcon(name)

  return (
    <div className={className} onClick={onClick} title={tooltip}>
      <IconComponent />
    </div>
  )
}
