import React, { ReactNode } from 'react'

import cx from 'classnames'

import { Icon, Icons } from 'src/components/atoms/Icon'
import { Text } from 'src/components/atoms/Text'
import { Size } from 'src/components/types'

import css from './Accordion.module.scss'

export type AccordionProps = {
  title: string
  children: ReactNode
  open?: boolean
}

export const Accordion = ({ title, children, open }: AccordionProps) => (
  <details className={cx(css.digitableAccordion)} open={open}>
    <summary className={cx(css.digitableAccordionSummary)}>
      <Text size={Size.large} text={title} />
      <Icon className={cx(css.digitableAccordionArrow)} name={Icons.arrowAccordion} />
    </summary>
    <div className={cx(css.digitableAccordionContent)}>{children}</div>
  </details>
)
