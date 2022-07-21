import React from 'react';

const Main = (props) => {
  const mainData = [
    {
      header: '15 полезных однострочных выражений JavaScript',
      text: 'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
    },
    {
      header: 'Полиморфизм простыми словами',
      text: ' Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
    },
    { header: 'Начало работы с Node.js', text: ' Node Hero: Глава 1' },
    {
      header:
        'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
      text: 'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron)',
    },
    {
      header: '8 практичных хитростей веб-разработчика применить немедленно!',
      text: 'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately',
    },
    {
      header: 'Насколько JavaScript сильный?',
      text: 'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
    },
    {
      header: 'Изучите CSS-переменные за 5 минут',
      text: 'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.',
    },
    {
      header: 'Создание MEVN-приложения (Часть 1/2)',
      text: 'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)',
    },
    {
      header: 'Реактивность Vue.js',
      text: 'Реактивность фреймворка Vue.js и использование метода Vue.set',
    },
    {
      header: 'Микроптимизации производительности и JavaScript',
      text: 'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
    },
    {
      header: 'Девшахта-подкаст',
      text: ' #108: Производительность кода — это важнейший критерий качества?» Если…',
    },
    {
      header: 'Одна из самых красивых идей в информатике: Y-Combinator',
      text: '  Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript',
    },
  ];
  return (
    <main>
      <section className="posts">
        <div className="container">
          <h1>Posts</h1>
          <ul className="list">
            {mainData.map(({ id, header, text }) => {
              return (
                <li key={id} className="list__item">
                  <h2>{header}</h2>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Main;
