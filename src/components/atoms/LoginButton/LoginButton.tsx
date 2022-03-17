import React from 'react'

import cx from 'classnames'

import css from './LoginButton.styles.module.scss'

export type LoginButtonProps = {
  onClick: () => void
  className?: string
  text: string
}

export const LoginButton = ({ onClick, text, className }: LoginButtonProps) => {
  return (
    <span className={cx(css.loginButton, className)} role="button" onClick={onClick}>
      {text}
    </span>
  )
}
