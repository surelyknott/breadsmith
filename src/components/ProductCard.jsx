function ProductCard({ product }) {
  return (
    <details className="product-card">
      <summary>
        <div className={`product-cutout art-${product.art}`} aria-hidden="true">
          <div className="art-piece art-main" />
          <div className="art-piece art-accent" />
        </div>
        <div className="product-heading">
          <p className="panel-number">
            {product.note ?? product.notice ?? "Signature bake"}
          </p>
          <h3>{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <p>{product.description}</p>
        </div>
        <span className="expand-label">View contents & allergens</span>
      </summary>
      <div className="product-meta">
        <p>
          <strong>Contents:</strong> {product.contents}
        </p>
        <p>
          <strong>Allergens:</strong> {product.allergens}
        </p>
      </div>
    </details>
  );
}

export default ProductCard;
