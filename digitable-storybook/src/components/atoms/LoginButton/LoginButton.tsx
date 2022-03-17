import React from 'react'

import cx from 'classnames'

import css from './LoginButton.styles.module.scss'

export type LoginButtonProps = {
  onClick: () => void
  className?: string
  text: string
  color: string;
  backgroundColor: string
}

export const LoginButton = ({ onClick, backgroundColor, color, text, className }: LoginButtonProps) => {
  return (
    <span style={{ color, backgroundColor }} className={cx(css.loginButton, className)} role="button" onClick={onClick}>
      {text}
    </span>
  )
}
