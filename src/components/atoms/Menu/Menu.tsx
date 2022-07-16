import React from 'react'

import cx from 'classnames'

import css from './Menu.module.scss'

export type MenuProps = {
  open: boolean
  onClick: () => void
}

export const Menu = ({ open, onClick }: MenuProps) => {
  return (
    <button
      onClick={onClick}
      className={cx(css.digitableMenu, {
        [css.digitableMenuOpen]: open
      })}
    >
      <div className={cx(css.digitableMenuLine)} />
      <div className={cx(css.digitableMenuLine)} />
      <div className={cx(css.digitableMenuLine)} />
    </button>
  )
}
