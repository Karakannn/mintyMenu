type IconProps = {
  id: string;
  class?: string;
  width?: number;
  height?: number;
  callback?: (e: any) => any;
};

const Icon = (props: IconProps) => {
  return (
    <svg
      onClick={(e) => {
        if (props.callback) props?.callback(e);
      }}
      style={{ width: props.width, height: props.height }}
      className={`icon ${props.class ? props.class : ""}`}
    >
      <use href={`/sprite.svg#${props.id}`} />
    </svg>
  );
};

export default Icon;
