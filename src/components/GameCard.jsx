export default function GameCard({ item }) {
  return (
    <article className="card">
      <div className="cover" />
      <div className="cardBody">
        <div className="title">{item.title}</div>
        <div className="region">{item.region}</div>
        <div className="priceRow">
          <div className="price">{item.price}</div>
        </div>
      </div>
    </article>
  );
}
