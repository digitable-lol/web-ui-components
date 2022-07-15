import React from 'react'

import cx from 'classnames'

import { Size } from 'src/components/types'

import { TextColor } from './types'

import css from './Text.module.scss'

export type TextProps = {
  size: Size
  text: string
  color?: TextColor
}

export const Text = ({ text, size, color = TextColor.default }: TextProps) => (
  <span
    className={cx(css.digitableText, {
      [css.digitableTextSmall]: size === Size.small,
      [css.digitableTextMedium]: size === Size.medium,
      [css.digitableTextLarge]: size === Size.large,
      [css.digitableTextDefault]: color === TextColor.default,
      [css.digitableTextBlack]: color === TextColor.black,
      [css.digitableTextLightGray]: color === TextColor.lightGray,
      [css.digitableTextCyan]: color === TextColor.cyan
    })}
  >
    {text}
  </span>
)
