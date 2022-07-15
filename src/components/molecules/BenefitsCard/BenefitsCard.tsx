import React from 'react'

import cx from 'classnames'

import { Heading } from 'src/components/atoms/Heading'
import { Icon, Icons } from 'src/components/atoms/Icon'
import { Text } from 'src/components/atoms/Text'
import { TextColor } from 'src/components/atoms/Text/types'
import { Size } from 'src/components/types'

import css from './BenefitsCard.module.scss'

export type BenefitsCardProps = {
  className?: string
  title: string
  content: string
  icon: Icons
}

export const BenefitsCard = ({ title, content, icon }: BenefitsCardProps) => (
  <div className={cx(css.digitableBenefitsCard)}>
    <div className={cx(css.digitableBenefitsCardIcon)}>
      <Icon name={icon} />
    </div>
    <div className={cx(css.digitableBenefitsCardTitle)}>
      <Heading text={title} size={Size.small} />
    </div>
    <div className={cx(css.digitableBenefitsCardContent)}>
      <Text size={Size.small} text={content} color={TextColor.lightGray} />
    </div>
  </div>
)
