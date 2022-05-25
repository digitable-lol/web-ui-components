import React from 'react'

import cx from 'classnames'

import css from './TitleBlock.styles.module.scss'

export type TitleBlockProps = {
  simpleText?: string
  highlightText?: string
  className?: string
  simpleClassName?: string
  highlightClassName?: string
}

export const TitleBlock = ({
  simpleText,
  highlightText,
  className,
  simpleClassName,
  highlightClassName
}: TitleBlockProps) => {
  if (!simpleText && !highlightText) {
    return null
  }

  const getSimpleText = () => {
    if (simpleText) {
      return <>{simpleText}&nbsp;</>
    }

    return simpleText
  }

  return (
    <div className={cx(css.heading, className)}>
      {simpleText && <span className={cx(css.text, simpleClassName)}>{getSimpleText()}</span>}
      {highlightText && <span className={cx(css.text, css.textColor, highlightClassName)}>{highlightText}</span>}
    </div>
  )
}
