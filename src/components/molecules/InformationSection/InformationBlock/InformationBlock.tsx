import React from 'react'

import { InformationBlockContent } from 'src/components/molecules/InformationSection/InformationSection.types'

import css from './InformationBlock.styles.module.scss'

export type InformationBlockProps = InformationBlockContent

export const InformationBlock = ({ header, texts }: InformationBlockProps) => {
  return (
    <div className={css.informationBlock}>
      <p className={css.header}>{header}</p>
      {texts.map((text, index) => (
        <p key={index} className={css.text}>
          {text}
        </p>
      ))}
    </div>
  )
}
