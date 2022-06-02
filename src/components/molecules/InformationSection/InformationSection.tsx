import React from 'react'

import cx from 'classnames'

import { Image } from 'src/components/atoms/Image'

import { InformationBlock } from './InformationBlock'
import { getSections } from './InformationSection.utils'

import css from './InformationSection.styles.module.scss'

export const InformationSection = () => {
  const sections = getSections()
  return (
    <div className={css.informationSection}>
      <div className="row">
        <div className={cx(css.blocks, 'col-md-8')}>
          {sections.map((section, index) => {
            return <InformationBlock key={index} header={section.header} texts={section.texts} />
          })}
        </div>
        <div className={cx(css.images, 'col-md-4')}>
          <Image src="/images/common/boxes.png" className={css.image} />
        </div>
      </div>
    </div>
  )
}
