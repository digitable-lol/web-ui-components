import React from 'react'

import cx from 'classnames'

import css from './EmptyBasket.styles.module.scss'

export const EmptyBasket = () => {
  return (
    <div className={cx(css.container)}>
      <div className={cx(css.cart)}>
        <span className={cx(css.text)}>Ваша корзина пуста</span>
      </div>
    </div>
  )
}
