import React from 'react'

import cx from 'classnames'

import { ColorText } from './ColorText'

import css from './ColorTexts.styles.module.scss'

export type ColorTextsProps = {
  className?: string
  classNameHighlight?: string
  words: string[]
  step: number
}

export const isHighlight = (index: number, step: number) => {
  return (index + 1) % step === 0
}

export const ColorTexts = ({ words, step, className, classNameHighlight }: ColorTextsProps) => {
  return (
    <div className={cx(css.colorText, className)}>
      {words.map((word, index) => (
        <ColorText
          classNameHighlight={classNameHighlight}
          key={word}
          isHighlight={isHighlight(index, step)}
          isSpace={index === 0}
          text={word}
        />
      ))}
    </div>
  )
}
