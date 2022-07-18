import React from 'react'

import cx from 'classnames'

import { Size } from 'src/components/types'

import { HeadingColor } from './types'

import css from './Heading.module.scss'

export type HeadingProps = {
  size: Size
  className?: string
  text: string
  color?: HeadingColor
}

export const Heading = ({ text, size, className, color = HeadingColor.default }: HeadingProps) => (
  <h1
    className={cx(
      css.digitableHeading,
      {
        [css.digitableHeadingSmall]: size === Size.small,
        [css.digitableHeadingMedium]: size === Size.medium,
        [css.digitableHeadingLarge]: size === Size.large,
        [css.digitableHeadingDefault]: color === HeadingColor.default,
        [css.digitableHeadingTurquoise]: color === HeadingColor.turquoise
      },
      className
    )}
  >
    {text}
  </h1>
)
