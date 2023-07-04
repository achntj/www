export default function SocialLink({
  site,
  href,
}: {
  site: string;
  href: string;
}) {
  return (
    <a target="_blank" rel="noopener noreferrer external" href={href}>
      <li className="group">
        <span className="text-emerald-600 group-hover:underline">{site}</span>
      </li>
    </a>
  );
}
