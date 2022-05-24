import React from 'react'

import cx from 'classnames'

import css from './PageContainer.styles.module.scss'

export type PageContainerProps = {
  className?: string
  children?: React.ReactNode
}

export const PageContainer = ({ className, children }: PageContainerProps) => {
  return <div className={cx(css.pageContainer, className)}>{children}</div>
}
