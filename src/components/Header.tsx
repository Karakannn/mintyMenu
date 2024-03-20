export default function Header() {
  return (
    <div className="flex justify-center items-center w-full border-b border-gray-300 bg-white py-2 sticky top-0 z-30">
      <div className="flex gap-4 items-center">
     {/*    <h1 className="text-xl font-semibold text-green-700 text-center">Minty Cafe Menü</h1> */}
        <img className="lg:h-20 h-12 w-auto" src="src/assets/logo.webp" alt="Your Company" />
      </div>
    </div>
  );
}
