import React, { ReactNode } from 'react'

import cx from 'classnames'

import css from './Container.styles.module.scss'

export type ContainerProps = {
  isCentered?: boolean
  isVertical?: boolean
  id?: string
  className?: string | string[]
  children?: ReactNode | string
}

export const Container = ({ id, className, children, isCentered, isVertical }: ContainerProps) => (
  <div
    id={id}
    className={cx(className, css.container, {
      [css.centered]: isCentered,
      [css.vertical]: isVertical
    })}
  >
    {children}
  </div>
)
