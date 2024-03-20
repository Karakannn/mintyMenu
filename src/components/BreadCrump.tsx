import { useMatches, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Icon from "./Icon";

export default function BreadCrump({ categoryName }: any) {
  let matches: any = useMatches();
  let crumbs: any = matches.filter((match: any) => match.handle?.crumb);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/dashboard");
  };
  let result: any = crumbs.map((match: any) => {
    return match.handle.crumb(match);
  });

  return (
    <div className="container mx-auto">
  {/*     <div className="flex items-center gap-2">
        {result.map((crumb: any, index: number) => {
          return index == 0 ? (
            <div className="flex gap-4 items-center">
              <Icon class="h-4 w-4 stroke-gray-500 cursor-pointer" key={index} callback={goHome} id="home" />
              <span className="flex px-1 py-2 justify-center items-center rounded-md text-sm font-medium text-gray-600 transition-all hover:bg-gray-100">
                {crumb}
              </span>
            </div>
          ) : (
            <Fragment key={index}>
              {index > 0 && <Icon class="h-4 w-4 stroke-gray-500 cursor-pointer" id={"chevron-right"} />}
              <div className="flex items-center" key={index}>
                <span className="flex px-1 py-2 justify-center items-center rounded-md text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 last-of-type:bg-gray-100">
                  {categoryName}
                </span>
              </div>
            </Fragment>
          );
        })}
      </div>
 */}
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
