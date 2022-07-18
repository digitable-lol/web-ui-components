import React, { ReactNode } from 'react'

import cx from 'classnames'

import { Link } from 'react-router-dom'

import css from './NavLink.module.scss'

export type NavLinkProps = {
  href: string
  className?: string
  children?: ReactNode | string
}

export const NavLink = ({ href, className, children }: NavLinkProps) => (
  <Link to={href} className={cx(css.digitableNavLink, className)}>
    {children}
  </Link>
)
