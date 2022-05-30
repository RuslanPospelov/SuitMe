import React from 'react';
import style from './s.module.css'


function CardParams() {
  const data = {
    price: 2000,
    title: 'Все начинается с накрахмаленной белой классической рубашки. Идеальная основа, ее можно легко одеть или одеть в зависимости от вашего мероприятия, возможности безграничны.',
    name: 'Белая рубашка',
    Colors: { name: 'red' },
    Sizes: [{ id: 1, name: 'XS' }, { id: 2, name: 'S' }]
  }
  return (
    <>
    <div > IMG</div>
    <div>
      <p>Grey Suit Vest</p>
      <div>
        <h5>1 ВЫБЕРИТЕ ТИП ЗАКАЗА</h5>
        <button>Arenda</button>
        <button disabled></button>
      </div>
      <div>
        <h5>1 ВЫБЕРИТЕ ТИП ЗАКАЗА</h5>
        <button>Добавить в список</button>
      </div>
      <div>
        <h5> Размеры </h5>
        <p>Воротник 14–20, рукав 31–39 (только нечетные размеры). Узкая или классическая посадка.
          Наша викторина Fit Finder поможет вам найти правильные размеры до оформления заказа.
        </p>
      </div>
      <div>
        <h5>ПОДРОБНОСТИ</h5>
        <p>
          Все начинается с накрахмаленной белой классической рубашки. Идеальная основа, ее можно легко одеть
          или одеть в зависимости от вашего мероприятия, возможности безграничны.
          100% тонкий хлопок
          Трансформируемые манжеты-бочонки (подходят запонки)
          Трансформируемая передняя планка (подходит для заклепок на пуговицах)
        </p>
      </div>
    </div>
  </>
  )
}

export default CardParams;
