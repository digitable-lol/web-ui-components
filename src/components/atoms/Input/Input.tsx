import React from 'react'

import cx from 'classnames'

import { FieldError, Path, UseFormRegister, ValidationRule } from 'react-hook-form'

import { DEFAULT_LENGTH_CONFIGURATION } from './Input.utils'

import css from './Input.module.scss'

export type InputProps<T> = {
  register: UseFormRegister<T>
  required: boolean
  label: Path<T>
  error: FieldError | undefined
  placeholder: string
  type?: string
  pattern?: ValidationRule<RegExp>
  className?: string
}

export const Input = <T extends object>({
  register,
  required,
  label,
  error,
  placeholder,
  type = 'text',
  pattern,
  className
}: InputProps<T>) => (
  <div
    className={cx(
      css.digitableInputBox,
      {
        [css.digitableInputBoxInvalid]: error,
        [css.digitableInputBoxValid]: !error
      },
      className
    )}
  >
    <input
      {...register(label, {
        required,
        pattern,
        maxLength: { ...DEFAULT_LENGTH_CONFIGURATION }
      })}
      className={cx(css.digitableInput, className)}
      name={label}
      placeholder={placeholder}
      type={type}
      role={label}
    />
  </div>
)
