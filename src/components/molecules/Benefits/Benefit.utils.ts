export type Benefit = {
  header: string
  content: string
  svgUrl: string
}

export const BENEFITS: Benefit[][] = [
  [
    {
      svgUrl: 'images/benefit/dollar.svg',
      header: 'Доступность',
      content: 'Мы внимательно подошли к формированию цены, чтобы Вы могли найти подходящее решение'
    }
  ],
  [
    {
      svgUrl: 'images/benefit/guality.svg',
      header: 'Профессионализм',
      content: 'Мы - программисты и геймеры, которые понимают что нужно для максимального комфорта и эргономики!'
    }
  ],
  [
    {
      svgUrl: 'images/benefit/tool.svg',
      header: 'Конфигурируемость',
      content:
        'Заменить видеокарту или добавить ОЗУ?' +
        ' Без проблем, крышка поднимается так, что процесс установки комплектующих принесёт удовольствие!'
    }
  ],
  [
    {
      svgUrl: 'images/benefit/modules.svg',
      header: 'Модульность',
      content:
        'Ремонтопригодность - неотъемлая часть долгосрочной эксплуатации' +
        ', если повредите стекло или опоры, то всегда сможете заказать их отдельно!'
    }
  ],
  [
    {
      svgUrl: 'images/benefit/vector.svg',
      header: 'Гибкость',
      content: 'Хотите использовать свою сборку или поместить элементы декора? Мы поможем!'
    }
  ],
  [
    {
      svgUrl: 'images/benefit/envelope.svg',
      header: 'Ваши предложения',
      // TODO: Добавить возможность перехода по ссылке
      content: 'В разделе Контакты есть вся необходимая информация, чтобы связаться с нами!'
    }
  ]
]
