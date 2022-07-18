import React, { ReactNode } from 'react'

import cx from 'classnames'

export type ContainerProps = {
  className?: string
  children?: ReactNode
}

export const Container = ({ className, children }: ContainerProps) => <div className={cx(className)}>{children}</div>
