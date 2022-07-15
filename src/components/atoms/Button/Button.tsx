import React, { ReactNode } from 'react'

import cx from 'classnames'

import { Icon, Icons } from 'src/components/atoms/Icon'
import { Size } from 'src/components/types'

import { ButtonColor } from './types'

import css from './Button.module.scss'

export type ButtonProps = {
  className?: string
  children?: ReactNode
  onClick?: () => void
  iconName?: Icons
  size?: Size
  color?: ButtonColor
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const Button = ({
  children,
  className,
  onClick,
  iconName,
  size,
  type,
  color = ButtonColor.default,
  disabled
}: ButtonProps) => (
  <button
    className={cx(
      css.digitableButton,
      {
        [css.digitableButtonSmall]: size === Size.small,
        [css.digitableButtonMedium]: size === Size.medium,
        [css.digitableButtonLarge]: size === Size.large,
        [css.digitableButtonDefault]: color === ButtonColor.default,
        [css.digitableButtonPurple]: color === ButtonColor.purple
      },
      className
    )}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {iconName && <Icon className={cx(css.digitableButtonIcon)} name={iconName} />}
    {children}
  </button>
)
