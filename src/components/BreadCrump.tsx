import Icon from "./Icon";

export default function BreadCrump() {
  return (
    <div className="container mx-auto">
      <div
        className="flex gap-2 cursor-pointer"
        onClick={() => {
          window.history.back();
        }}
      >
        <Icon class="w-5 h-5 stroke-gray-600" id={"arrow-left"} />
        <span className="text-sm font-semibold text-gray-600">Geri</span>
      </div>
    </div>
  );
}
