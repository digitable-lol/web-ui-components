import React from 'react'

import { TitleBlock } from 'src/components/atoms/TitleBlock'

import css from './Geolocation.styles.module.scss'

export const Geolocation = () => {
  return (
    <div className={css.geolocation}>
      <TitleBlock
        className={css.titleBlock}
        simpleClassName={css.titleText}
        highlightClassName={css.titleText}
        simpleText="Где мы"
        highlightText="находимся"
      />
      <section className={css.map}>
        <iframe
          className={css.box}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543.1525599097694!2d40.96989692923843!3d57.006858498806714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414d1437a4efb02f%3A0x67dea4da8a94f68c!2z0YPQuy4g0JbQuNC00LXQu9C10LLQsCwgMSwg0JjQstCw0L3QvtCy0L4sINCY0LLQsNC90L7QstGB0LrQsNGPINC-0LHQuy4sIDE1MzAwMg!5e0!3m2!1sru!2sru!4v1648190412217!5m2!1sru!2sru"
        />
      </section>
    </div>
  )
}
