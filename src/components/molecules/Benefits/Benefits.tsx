import React from 'react'

import cx from 'classnames'

import { TitleBlock } from 'src/components/atoms/TitleBlock'

import { Benefit } from './Benefit'
import { BENEFITS } from './Benefit.utils'

import css from './Benefits.styles.module.scss'

export const Benefits = () => {
  return (
    <div className={css.benefits}>
      <div className={cx(css.title)}>
        <TitleBlock simpleText="Наши" highlightText="преимущества" />
      </div>
      <div className={cx(css.container)}>
        {BENEFITS.map((row, rowIndex) => {
          return (
            <div key={`benefit-row-${rowIndex}`}>
              {row.map((column, columnIndex) => {
                return (
                  <Benefit
                    key={`benefit-column-${columnIndex}`}
                    header={column.header}
                    content={column.content}
                    svgUrl={column.svgUrl}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
