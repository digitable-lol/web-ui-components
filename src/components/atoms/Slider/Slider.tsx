import React from 'react'

import cx from 'classnames'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// eslint-disable-next-line import/no-unresolved
import { Swiper } from 'swiper/react'

import css from './Slider.styles.module.scss'

export type SliderProps = {
  className?: string
  children?: React.ReactNode
  slidesPerView?: number
  spaceBetween?: number
  autoplay?: boolean
}

export const Slider = ({ className, autoplay, children, slidesPerView = 1, spaceBetween = 1 }: SliderProps) => {
  return (
    <div className={cx(css.slider, className)}>
      <Swiper
        autoplay={autoplay}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {children}
      </Swiper>
    </div>
  )
}
