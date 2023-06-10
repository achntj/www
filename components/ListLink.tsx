export default function ListLink({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        className="text-emerald-600 hover:text-emerald-800"
        href={href}
      >
        {text}
      </a>
    </li>
  );
}
