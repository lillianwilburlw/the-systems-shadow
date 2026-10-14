import { site } from "../content/site.ts";

type TrailerPlaceholderProps = {
  caption: string;
};

export function TrailerPlaceholder({ caption }: TrailerPlaceholderProps) {
  return (
    <figure className="trailer">
      <div className="trailer-frame">
        <p className="plate-kicker">{site.ui.trailer}</p>
        <p className="trailer-caption">{caption}</p>
      </div>
    </figure>
  );
}
