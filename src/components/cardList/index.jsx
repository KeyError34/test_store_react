import Card from '../cardComponent';

function CardList  ({ items, handleClick, btnName , children}) {
  return (
      <ul>
          {children}
      {items.map(item => (
        <Card
          key={item.id}
          item={item}
          handleClick={handleClick}
          btnName={btnName}
        />
      ))}
    </ul>
  );
};
export default CardList;
