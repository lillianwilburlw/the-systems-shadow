type CoverArtProps = {
  caption: string;
};

const coverAlt = "The System's Shadow podcast cover art";

export function CoverArt({ caption }: CoverArtProps) {
  return (
    <figure className="cover">
      <picture>
        <source
          type="image/webp"
          srcSet="/cover-600.webp 600w, /cover-1200.webp 1200w"
          sizes="(max-width: 800px) min(22rem, 92vw), 20.5rem"
        />
        <img
          src="/cover-1200.jpg"
          srcSet="/cover-600.jpg 600w, /cover-1200.jpg 1200w"
          sizes="(max-width: 800px) min(22rem, 92vw), 20.5rem"
          width={1200}
          height={1200}
          alt={coverAlt}
        />
      </picture>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
