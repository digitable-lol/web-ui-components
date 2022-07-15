import React, { FormEventHandler, ReactNode } from 'react'

import cx from 'classnames'

import css from './Form.module.scss'

export type FormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>
  children?: ReactNode
}

export const Form = ({ onSubmit, children }: FormProps) => (
  <form role="form" onSubmit={onSubmit} className={cx(css.digitableForm)}>
    {children}
  </form>
)
