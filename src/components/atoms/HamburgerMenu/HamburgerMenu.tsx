import React from 'react'

import cx from 'classnames'

import css from './HamburgerMenu.styles.module.scss'

export type HamburgerMenuProps = {
  isHamburger: boolean
  className?: string
  onClick: () => void
}

export const HamburgerMenu = ({ className, onClick, isHamburger }: HamburgerMenuProps) => {
  return (
    <div
      onClick={onClick}
      className={cx(css.hamburgerMenu, className, {
        [css.transition]: isHamburger
      })}
    >
      <div className={css.line} />
      <div className={css.line} />
      <div className={css.line} />
    </div>
  )
}
