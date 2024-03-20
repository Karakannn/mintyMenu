import Icon from "./Icon";

export default function BreadCrump() {
  return (
    <div className="container mx-auto">
      <div
        className="flex gap-2 cursor-pointer w-min group"
        onClick={() => {
          window.history.back();
        }}
      >
        <Icon class="w-5 h-5 stroke-green-700 group-hover:stroke-green-800" id={"arrow-left"} />
        <span className="text-sm font-semibold text-green-700 group-hover:text-green-800">Geri</span>
      </div>
    </div>
  );
}
