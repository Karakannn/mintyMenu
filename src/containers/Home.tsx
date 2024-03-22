import menü from "../assets/menü.json";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";
import Icon from "../components/Icon";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <div className="container m-auto px-2 py-4 lg:py-12">
        <div className="space-y-4">
          <h5 className="text-primary-700 text-lg lg:text-2xl text-center font-semibold">İletişim</h5>
          <div className="flex gap-4">
            <a
              href="https://maps.app.goo.gl/GCvtrwUpFfodnuby9"
              target="_blank"
              className="bg-primary-700  text-white font-bold py-3 px-4 rounded flex gap-4 max-md:flex-1 lg:w-min items-center"
            >
              <Icon class="stroke-white w-5 h-5" id={"location-mark"} />
              <span className="whitespace-nowrap text-base">Minty Cafe</span>
            </a>

            <a href="/" target="_blank" className="bg-primary-700  text-white font-bold py-3 px-4 rounded flex gap-4 max-md:flex-1 lg:w-min items-center">
              <Icon class="stroke-white w-5 h-5" id={"phone"} />
              <span className="whitespace-nowrap text-base">323232323</span>
            </a>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h5 className="text-primary-700 text-lg lg:text-2xl text-center font-semibold">Menüler</h5>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 pb-4">
            {menü.map((item, index) => (
              <div className="space-y-2 h-full" onClick={() => navigate(`${item.slug}`)}>
                <Product
                  type="category"
                  product={item}
                  key={index}
                  actions={
                    <button
                      type="button"
                      className=" p-4 w-full flex gap-2 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <span className="whitespace-nowrap">Menüye Git</span>
                      <Icon class="stroke-gray-600 w-4 h-4" id={"arrow-right"} />
                    </button>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
