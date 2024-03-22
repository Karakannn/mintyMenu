export default function Product({ product, callback, actions, type = "product" }: any) {
  return (
    <div
      onClick={() => callback(product)}
      className="border bg-white h-full shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer hover:bg-gray-100 flex flex-col"
    >
      <img src={product.image} alt={product.name} className="w-full max-h-[200px] lg:max-h-[360px] object-cover rounded-lg flex-1" />
      <div className="flex flex-col justify-end">
        <div className="flex max-md:flex-col gap-4 items-center max-md:text-center justify-between px-2 py-4">
          <p className=" text-xl font-medium">{type == "category" ? product.category : product.name}</p>
          {type == "category" ? null : <span className="bg-primary-700 text-white p-2 rounded-full font-semibold whitespace-nowrap">{product.price}</span>}
        </div>
        <div className="p-2 pt-0 text-sm text-gray-600">{product.description && product.description}</div>

        <div className="p-2 pt-0">{actions && actions}</div>  
      </div>
    </div>
  );
}
