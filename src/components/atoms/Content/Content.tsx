import React, { ReactNode } from 'react'

import cx from 'classnames'

import css from './Content.module.scss'

export type ContentProps = {
  className?: string
  children?: ReactNode
}

export const Content = ({ children, className }: ContentProps) => (
  <div className={cx(css.digitableContent, className)}>{children}</div>
)
