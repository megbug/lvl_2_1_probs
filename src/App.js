
import './App.css';
import Product from './Components/Product';

const productArr = [
  {
    name: "cocooil",
    price: "30$"
  },
  {
    name: "polaroid",
    price: "60$"
  },
  {
    name: "shampoo",
    price: "40$"
  }
]

function App() {
  return (
    <div className="App">
      <h1>supershop</h1>
      <div className="Container">
        <div>
          <img src="https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg" alt="coconutoil" />
          <Product
            productName={productArr[0].name}
            price={productArr[0].price}
          />
          <a href="#" className="Button">Buy Now</a>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="polaroid" />
          <Product
            productName={productArr[1].name}
            price={productArr[1].price}
          />
          <a href="#" className="Button">Buy Now</a>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="shampoo" />
          <Product
            productName={productArr[2].name}
            price={productArr[2].price}
          />
          <a href="#" className="Button">Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default App;
