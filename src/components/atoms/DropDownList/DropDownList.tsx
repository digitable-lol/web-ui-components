import React from 'react'

import cx from 'classnames'

import css from './DropDownList.styles.module.scss'

export type DropDownListProps = {
  className?: string
  headerClassName?: string
  containerClassName?: string
  header?: string
}

export const DropDownList = ({ className, header, headerClassName, containerClassName }: DropDownListProps) => {
  return (
    <div className={cx(css.dropDownList, className)}>
      <div>
        <span className={cx(css.header, headerClassName)}>{header}</span>
        <div className={(css.container, containerClassName)}></div>
      </div>
    </div>
  )
}
