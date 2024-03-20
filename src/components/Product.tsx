export default function Product({ product, callback, type = "product" }: any) {
  return (
    <div onClick={() => callback(product)} className="border bg-white shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer hover:bg-gray-100">
       <img src={product.image} alt={product.name} className="w-full h-[200px] object-cover rounded-t-lg" />
      <div className="flex max-md:flex-col gap-4 items-center max-md:text-center justify-between px-2 py-4">
        <p className="font-bold">{type == "category" ? product.category : product.name}</p>
        {type == "category" ? null : <span className="bg-green-600 text-white p-2 rounded-full font-semibold whitespace-nowrap">{product.price}</span>}
      </div>
    </div>
  );
}
