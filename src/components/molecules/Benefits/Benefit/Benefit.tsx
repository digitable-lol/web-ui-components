import React from 'react'

import cx from 'classnames'

import { Image } from 'src/components/atoms/Image'

import css from './Benefit.styles.module.scss'

export type BenefitProps = {
  className?: string
  headerClassName?: string
  imgClassName?: string
  titleClassName?: string
  emergenceClassName?: string
  containerClassName?: string
  contentClassName?: string
  header: string
  content: string
  svgUrl: string
}

export const Benefit = ({
  header,
  content,
  svgUrl,
  className,
  headerClassName,
  imgClassName,
  titleClassName,
  emergenceClassName,
  containerClassName,
  contentClassName
}: BenefitProps) => {
  return (
    <div className={cx(css.benefit, className)}>
      <div className={cx(css.header, headerClassName)}>
        <Image className={cx(css.img, imgClassName)} src={svgUrl} />
        <span className={cx(css.title, titleClassName)}>{header}</span>
      </div>

      <div className={cx(css.emergence, emergenceClassName)}>
        <div className={cx(css.container, containerClassName)}>
          <span className={cx(css.content, contentClassName)}>{content}</span>
        </div>
      </div>
    </div>
  )
}
