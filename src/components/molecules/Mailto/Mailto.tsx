import React from 'react'

import css from './Mailto.styles.module.scss'

export type MailtoProps = {
  mailto: string
  label: string
  title: string
}

export const Mailto = ({ mailto, label, title }: MailtoProps) => {
  return (
    <div className={css.mailto}>
      <p className={css.title}>{title}</p>
      <a
        href="#"
        onClick={event => {
          window.location.href = mailto
          event.preventDefault()
        }}
        className={css.label}
      >
        {label}
      </a>
    </div>
  )
}
