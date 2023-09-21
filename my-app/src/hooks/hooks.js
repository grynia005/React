import React, { useState, useEffect } from "react";

// function Counter() {
//   // Використовуємо useState для створення змінної стану "count"
//   const [count, setCount] = useState(0);

//   // Функція для збільшення значення count
//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Значення лічильника: {count}</p>
//       <button onClick={increment}>Збільшити</button>
//     </div>
//   );
// }

function DataFetching() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };


  useEffect(() => {
    // Симулюємо запит до сервера
    setTimeout(() => {
      const mockData = [`Значення -${count}", "Значення - ${count * 2}", "Значення3- ${count*100}`];
      setData(mockData);
    }, 1000);
  }, [count]); // Порожній масив позначає, що ефект виконується тільки при монтажі компонента, при передачі параметра виконується при кожній зміні компонента

  return (
    <>
      <div>
        <h2>Запит до сервера:</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Значення лічильника: {count}</p>
        <button onClick={increment}>Збільшити</button>
      </div>
    </>
  );
}

export { DataFetching };
