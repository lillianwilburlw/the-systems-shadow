import { site } from "../content/site.ts";

type CoverArtProps = {
  caption: string;
};

export function CoverArt({ caption }: CoverArtProps) {
  const { cover } = site;

  return (
    <figure className="cover">
      <picture>
        <source
          type="image/webp"
          srcSet={cover.webpSrcSet}
          sizes="(max-width: 800px) min(22rem, 92vw), 20.5rem"
        />
        <img
          src={cover.src}
          srcSet={cover.srcSet}
          sizes="(max-width: 800px) min(22rem, 92vw), 20.5rem"
          width={cover.width}
          height={cover.height}
          alt={site.tagline}
        />
      </picture>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
