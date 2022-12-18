import { products } from '../utils/Products.data';

const Products = () => {
  return (
    <section>
      <article>
        <h2 className="heading">our creations</h2>
        <ul className="products-container">
          {products?.map((product) => {
            const { id, mobileImg, desktopImg, text } = product;
            return (
              <li key={id}>
                <picture>
                  <source media="(min-width: 62.5em)" srcSet={desktopImg} />
                  <img src={mobileImg} alt={text} />
                </picture>
                <h3>{text}</h3>
              </li>
            );
          })}
        </ul>
        <div className="button-box">
          <button>see all</button>
        </div>
      </article>
    </section>
  );
};

export default Products;
