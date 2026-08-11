import Link from "next/link";

export function BrandLogo() {
  return (
    <Link href="/" className="brandLogo" aria-label="¿Qué me dicen de Ixtlán?">
      <svg
        className="brandSymbol"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <g transform="translate(32 32)">
          <ellipse rx="7" ry="17" transform="rotate(0) translate(0 -15)" fill="#F2A900" />
          <ellipse rx="7" ry="17" transform="rotate(45) translate(0 -15)" fill="#E4572E" />
          <ellipse rx="7" ry="17" transform="rotate(90) translate(0 -15)" fill="#D72C72" />
          <ellipse rx="7" ry="17" transform="rotate(135) translate(0 -15)" fill="#8056C7" />
          <ellipse rx="7" ry="17" transform="rotate(180) translate(0 -15)" fill="#2AA7A1" />
          <ellipse rx="7" ry="17" transform="rotate(225) translate(0 -15)" fill="#148A67" />
          <ellipse rx="7" ry="17" transform="rotate(270) translate(0 -15)" fill="#58A640" />
          <ellipse rx="7" ry="17" transform="rotate(315) translate(0 -15)" fill="#E6C229" />
          <circle r="7" fill="#08745B" />
        </g>
      </svg>

      <span className="brandWords">
        <small>¿QUÉ ME DICEN DE</small>
        <strong>IXTLÁN?</strong>
      </span>
    </Link>
  );
}
