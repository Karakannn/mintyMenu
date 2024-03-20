import menü from "../assets/menü.json";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="container m-auto px-2 py-4 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-4">
          {menü.map((item, index) => (
            <Product
              type="category"
              product={item}
              key={index}
              callback={(product: any) => {
                navigate(`${product.slug}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
