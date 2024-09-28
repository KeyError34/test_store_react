function Card({ item, btnName, handleClick }) {
  return (
    <li key={item.id}>
      <img src={item.image} alt={item.name} />
      {item.name} - ${item.price}
      <button onClick={() => handleClick(item.id)}>{btnName}</button>
    </li>
  );
}

export default Card;
