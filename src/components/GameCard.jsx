export default function GameCard({ item }) {
  console.log("Rendering GameCard for item:", item.title);
  return (
    
    <article className="card">
  <div className="cover">
    <img src={item.image_url} alt={item.title} className="coverImage"/>
    <div className="platform">{item.platform}</div>
  </div>
  <div className="cardBody">
  <div className="title">{item.title}</div>
  <div className="region">{item.region}</div>
  <div className="priceSection">
  <div className="oldPrice"> {"From €" + item.price_eur} </div>
  <div className="discountPercent">-{item.discount}%</div>
  </div>
  <div className="priceRow">
  <div className="price">{"€" + (item.price_eur - item.price_eur *(item.discount / 100)).toFixed(2)}</div>
  </div>
  <div className="likeBtn">♡ {item.likes}</div>
  </div>
</article>
  );
}
