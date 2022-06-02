import React, { useState } from 'react'

import cx from 'classnames'

import { InformationBlock } from 'src/components/molecules/TextBlocks/InformationBlock'

import css from './Checkbox.styles.module.scss'

export type CheckboxProps = {
  className?: string
  subheaderClassName?: string
  citingClassName?: string
  subheader?: string
  citing?: string
}

export const Checkbox = ({ className, citing, subheader, subheaderClassName, citingClassName }: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={cx(css.checkboxContainer, className)}>
      <input
        className={css.checkbox}
        type="checkbox"
        id="box"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="box">
        <InformationBlock
          classNameBox={css.informationBlock}
          classNameSubheader={subheaderClassName}
          classNameCiting={citingClassName}
          href="https://vk.com/digitable_team"
          blocks={[
            {
              subheader,
              citing
            }
          ]}
        />
      </label>
    </div>
  )
}
