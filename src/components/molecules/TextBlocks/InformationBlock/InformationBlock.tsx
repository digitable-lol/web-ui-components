import React from 'react'

import cx from 'classnames'

import { InformationBlockContent } from './InformationBlock.types'

import css from './InformationBlock.styles.module.scss'

export type InformationBlockProps = {
  header?: string
  blocks?: InformationBlockContent[]
  href?: string
  className?: string
  classNameHeader?: string
  classNameBox?: string
  classNameSubheader?: string
  classNameText?: string
  classNameCiting?: string
}

export const InformationBlock = ({
  className,
  classNameHeader,
  classNameBox,
  classNameSubheader,
  classNameText,
  classNameCiting,
  blocks,
  header,
  href
}: InformationBlockProps) => {
  return (
    <div className={cx(css.block, className)}>
      {header && <span className={cx(css.header, classNameHeader)}>{header}</span>}
      {blocks?.map((block, index) => {
        return (
          <div key={`information-block-${index}`} className={cx(css.box, classNameBox)}>
            {block.subheader && <span className={cx(css.item, classNameSubheader)}>{block.subheader}</span>}
            {block.text && <span className={cx(css.item, css.itemColor, classNameText)}>{block.text}</span>}
            {block.citing && (
              <a href={href} className={cx(css.itemColor, classNameCiting)}>
                {block.citing}
              </a>
            )}
          </div>
        )
      })}
    </div>
  )
}
