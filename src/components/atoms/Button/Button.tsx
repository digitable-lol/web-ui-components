import React, { ReactNode } from 'react'

import cx from 'classnames'

// eslint-disable-next-line css-modules/no-unused-class
import css from './Button.styles.module.scss'

export type ButtonProps = {
  isRounded?: boolean
  isDisabled?: boolean
  className?: string
  type: 'primary' | 'success'
  buttonType?: 'button' | 'submit' | 'reset'
  children?: ReactNode | string
  name?: string
  onClick?: () => void
}

export const Button = ({
  isRounded,
  buttonType,
  type,
  name,
  children,
  isDisabled,
  className,
  onClick
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType}
      role={name}
      name={name}
      onClick={onClick}
      className={cx(className, css[type], {
        [css.round]: isRounded,
        [css.disabled]: isDisabled
      })}
    >
      {children}
    </button>
  )
}
