import { useParams } from "react-router-dom";
import menü from "../assets/menü.json";
import { Tab } from "@headlessui/react";
import useScroll from "../hooks/useScroll";
import { useMediaQuery } from "@react-hook/media-query";
import classNames from "classnames";
import BreadCrump from "../components/BreadCrump";
import ProductModal from "../components/ProductModal";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import Icon from "../components/Icon";

export default function Categories() {
  const params = useParams();
  const isMobile = useMediaQuery("(max-width: 640px)");

  const selectedCategory = menü.findIndex((item) => item.slug === params.categoryName);
  const categoryProducts = menü.find((item) => item.slug === params.categoryName);
  const shallowMenü = [...menü];
  
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});

  const [selectedIndex, setSelectedIndex] = useState(selectedCategory + 1);
  const { isOverflowing, scrollContainerRef, scrollToRight } = useScroll(selectedIndex);

  const allProducts: { id: number; name: string; image: string; price: string }[] = [].concat(...menü.map((category: any) => category.items));

  useEffect(() => {
    shallowMenü.unshift({
      category: "Tüm Ürünler",
      slug: "all",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
      items: allProducts,
    });
  }, []);

  return (
    <div className="container m-auto px-2">
      <Tab.Group
        onChange={(index) => {
          setSelectedIndex(index);
        }}
        defaultIndex={selectedIndex}
      >
        <div
          className={classNames("py-8 overflow-hidden  w-full max-w-full", {
            "w-full": !isOverflowing && !isMobile,
            "mx-auto": !isOverflowing && isMobile,
          })}
        >
          <Tab.List
            ref={scrollContainerRef}
            className={classNames("custom-tab-list overflow-x-auto relative w-full", {
              "flex-wrap ": !isMobile,
            })}
          >
            {shallowMenü.map((item, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames("custom-tab-item", {
                    "bg-green-600 text-white shadow": selected,
                    "text-gray-600 hover:bg-gray-400/[0.2]": !selected,
                  })
                }
              >
                {item.category}
              </Tab>
            ))}

            {isOverflowing && isMobile && (
              <div onClick={scrollToRight} className="sticky right-0 bg-gray-50 top-0 flex px-2  items-center justify-center  border border-gray-300">
                <Icon id={"chevron-right"} class="stroke-gray-700" width={24} height={24} />
              </div>
            )}
          </Tab.List>
        </div>
        <Tab.Panels>
          <BreadCrump categoryName={categoryProducts?.category} />
          {shallowMenü.map((category, index) => (
            <Tab.Panel key={index}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-4">
                {category.items.map((item, index) => (
                  <Product
                    type="product"
                    product={item}
                    key={index}
                    callback={(product: any) => {
                      console.log("product");

                      setProduct(product);
                      setOpen(true);
                    }}
                  />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <ProductModal open={open} setOpen={setOpen} product={product} />
    </div>
  );
}
