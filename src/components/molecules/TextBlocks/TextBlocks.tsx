import React from 'react'

import { Mailto } from 'src/components/molecules/Mailto'

import { InformationBlock } from './InformationBlock'

import css from './TextBlocks.styles.module.scss'

export const TextBlocks = () => {
  return (
    <div className={css.container}>
      <InformationBlock className={css.block} header="Есть деловое предложение или идея для сотрудничества?" />
      <InformationBlock header="Вы хотите оставить свой отзыв или пожелание?" />
      <InformationBlock header="Вам нужна помощь?" />

      <InformationBlock
        className={css.block}
        blocks={[
          {
            text: 'Мы знаем каким должен быть инструмент для Вашей продуктивности!'
          },
          {
            text:
              'Айтишник, предприниматель или геймер вовлекается в процесс,' +
              ' а не отвлекается на мелочи или маленький экран ноутбука и сотню проводов.'
          },
          {
            text: 'Мы всегда рады Вам помочь и ответить на все интересующие вопросы.'
          }
        ]}
      />

      <InformationBlock
        className={css.block}
        blocks={[
          {
            subheader: 'Адрес:',
            text: 'г. Иваново, улица Жиделёва, дом 1, инд 153002'
          },
          {
            subheader: 'Телефон:',
            text: 'В разработке...'
          }
        ]}
      />
      <Mailto
        classNameMailto={css.mailto}
        classNameTitle={css.mailtoTitle}
        classNameLabel={css.mailtoLabel}
        title="Почта:"
        label=" support@digitable.ru"
        mailto="mailto:support@digitable.ru"
      />

      <InformationBlock
        className={css.block}
        blocks={[
          {
            subheader: 'ОГРН:',
            text: '321370200054131'
          },
          {
            subheader: 'ИНН:',
            text: '370403695975'
          }
        ]}
      />
    </div>
  )
}
