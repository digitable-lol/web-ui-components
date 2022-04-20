import React from 'react'

import cx from 'classnames'

import css from './Mailto.styles.module.scss'

export type MailtoProps = {
  mailto: string
  label: string
  title: string

  // Extend props
  classNameMailto?: string
  classNameTitle?: string
  classNameLabel?: string
}

export const Mailto = ({ mailto, label, title, classNameLabel, classNameMailto, classNameTitle }: MailtoProps) => {
  return (
    // TODO: Change className `mailto` to `container`
    <div className={cx(css.mailto, classNameMailto)}>
      {/* TODO: Add prefix for classes: mailtoTitle */}
      <p className={cx(css.title, classNameTitle)}>{title}</p>
      <a
        href="#"
        onClick={event => {
          window.location.href = mailto
          event.preventDefault()
        }}
        // TODO: Add prefix for classes: mailtoLabel
        className={cx(css.label, classNameLabel)}
      >
        {label}
      </a>
    </div>
  )
}
