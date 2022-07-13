import React from 'react'

import { Icons } from './Icon.types'
import { getIcon } from './Icon.utils'

export type IconProps = {
  name: Icons | string
  tooltip?: string
  onClick?: () => void
  className?: string
  tabindex?: number
}

export const Icon = ({ name, onClick, className, tooltip, tabindex }: IconProps) => {
  const IconComponent = getIcon(name)

  return (
    <div className={className} onClick={onClick} title={tooltip} tabIndex={tabindex}>
      <IconComponent />
    </div>
  )
}
