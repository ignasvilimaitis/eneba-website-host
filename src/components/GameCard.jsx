export default function GameCard({ item }) {
  const API = import.meta.env.VITE_API_URL;
  const imgSrc = item.image_url?.startsWith("http")
  ? item.image_url
  : `${API}${item.image_url}`;


  return (
    
    <article className="card">
  <div className="cover">
    <img src={imgSrc} alt={item.title} className="coverImage"/>
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
