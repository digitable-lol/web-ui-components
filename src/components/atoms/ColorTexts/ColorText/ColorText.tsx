import React from 'react'

import cx from 'classnames'

import css from './ColorText.styles.module.scss'

export type ColorTextProps = {
  isHighlight: boolean
  isSpace: boolean
  text: string
  classNameHighlight?: string
}

export const ColorText = ({ isHighlight, isSpace, text, classNameHighlight }) => {
  return (
    <span
      className={cx({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        [(css.highlight, classNameHighlight)]: isHighlight
      })}
    >
      {isSpace && <>&nbsp;</>}
      {<>&nbsp;</>}
      {text}
    </span>
  )
}
