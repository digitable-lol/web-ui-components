import React from 'react'

import { Link } from 'react-router-dom'

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
      <Link
        to="#"
        onClick={event => {
          window.location.href = mailto
          event.preventDefault()
        }}
        className={css.label}
      >
        {label}
      </Link>
    </div>
  )
}
