import React, { ReactNode, useEffect } from 'react'

import cx from 'classnames'

import css from './Page.module.scss'

export type PageProps = {
  children?: ReactNode
  title: string
  className?: string
}

export const Page = ({ children, title, className }: PageProps) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return <div className={cx(css.digitablePage, className)}>{children}</div>
}
