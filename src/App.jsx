import { useState } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Instagram,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Essential Baggy Denim",
    category: "DENIM / MEN",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Vintage Blue Jacket",
    category: "OUTERWEAR",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800",
    tag: "NEW ARRIVAL",
  },
  {
    id: 3,
    name: "Classic Denim Fit",
    category: "DENIM / WOMEN",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
    tag: "ESSENTIAL",
  },
  {
    id: 4,
    name: "Urban Denim Shirt",
    category: "EVERYDAY WEAR",
    price: 749,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800",
    tag: "LIMITED",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
  };

  const money = (amount) =>
    new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="site-shell">
      <div className="announcement">
        FREE DELIVERY ON ORDERS OVER R1,500
      </div>

      <header className="header">
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <a href="#home" className="logo">
          PROJECT<span>DENIM</span>
          <small>DENIM. CULTURE. IDENTITY.</small>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#shop" onClick={() => setMenuOpen(false)}>SHOP</a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>COLLECTIONS</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>OUR STORY</a>
        </nav>

        <a href="#shop" className="cart-link">
          <ShoppingBag size={19} />
          <span>BAG ({cart.length})</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-content">
            <p className="eyebrow">THE NEW DENIM GENERATION</p>
            <h1>
              WEAR YOUR
              <br />
              <span>IDENTITY.</span>
            </h1>
            <p className="hero-description">
              More than denim. A statement of culture,
              confidence and individuality.
            </p>
            <a href="#shop" className="primary-button">
              EXPLORE THE COLLECTION <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="hero-bottom">
            <span>01 / 04 — THE DENIM EDIT</span>
            <span>SOUTH AFRICA · EST. 2026</span>
          </div>
        </section>

        <section className="intro-section" id="about">
          <p className="eyebrow">BUILT DIFFERENT. WORN DIFFERENT.</p>
          <h2>
            DENIM IS NOT JUST WHAT
            <br />
            YOU WEAR. IT'S <span>WHO YOU ARE.</span>
          </h2>
          <p>
            ProjectDenim brings together timeless denim,
            modern streetwear and everyday self-expression.
          </p>
        </section>

        <section className="collections" id="collections">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND YOUR FIT</p>
              <h2>THE COLLECTIONS</h2>
            </div>
            <a href="#shop" className="text-link">
              VIEW ALL <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="collection-grid">
            <a href="#shop" className="collection-card collection-men">
              <span>01 / MEN</span>
              <h3>DENIM<br />FOR THE STREETS.</h3>
              <span className="collection-cta">SHOP MEN <ArrowRight size={17} /></span>
            </a>

            <a href="#shop" className="collection-card collection-women">
              <span>02 / WOMEN</span>
              <h3>MAKE YOUR<br />OWN RULES.</h3>
              <span className="collection-cta">SHOP WOMEN <ArrowRight size={17} /></span>
            </a>
          </div>
        </section>

        <section className="products-section" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CURATED FOR YOUR EVERYDAY</p>
              <h2>THE LATEST DROPS</h2>
            </div>
            <span className="product-count">04 PRODUCTS</span>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">{product.tag}</span>
                  <button
                    className="quick-add"
                    onClick={() => addToCart(product)}
                  >
                    ADD TO BAG +
                  </button>
                </div>
                <div className="product-info">
                  <div>
                    <p>{product.category}</p>
                    <h3>{product.name}</h3>
                  </div>
                  <strong>{money(product.price)}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="statement">
          <p className="eyebrow">PROJECTDENIM / THE MOVEMENT</p>
          <h2>NOT MADE TO FIT IN.</h2>
          <p>MADE TO STAND OUT.</p>
          <a href="#shop" className="primary-button">
            DISCOVER YOUR STYLE <ArrowUpRight size={18} />
          </a>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a href="#home" className="logo footer-logo">
            PROJECT<span>DENIM</span>
            <small>DENIM. CULTURE. IDENTITY.</small>
          </a>
          <p>Premium denim. Urban culture. South Africa.</p>
        </div>

        <div className="footer-links">
          <a href="#shop">SHOP</a>
          <a href="#collections">COLLECTIONS</a>
          <a href="#about">OUR STORY</a>
        </div>

        <div className="footer-social">
          <a href="#home" aria-label="Instagram">
            <Instagram />
          </a>
          <span>© 2026 PROJECTDENIM</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
