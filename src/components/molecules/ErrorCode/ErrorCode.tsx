import React from 'react'

import cx from 'classnames'
import { Link } from 'react-router-dom'

import { Image } from 'src/components/atoms/Image'

import css from './ErrorCode.styles.module.scss'

export type ErrorCodeProps = {
  imageUrl?: string
  leftNumber?: number
  rightNumber?: number
  simpleText?: string
  highlightText?: string
}

export const ErrorCode = ({ imageUrl, leftNumber, rightNumber, simpleText, highlightText }: ErrorCodeProps) => {
  return (
    <div className={css.error}>
      <span className={css.numeric}>{leftNumber}</span>
      <Image src={imageUrl} alt={'image'} />
      <span className={css.numeric}>{rightNumber}</span>
      <div className={css.box}>
        <span className={css.text}>{simpleText}</span>
        <span className={cx(css.text, css.highlightText)}> {highlightText}</span>
        <Link to="/" className={css.button}>
          На главную
        </Link>
      </div>
    </div>
  )
}
