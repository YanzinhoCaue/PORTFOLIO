import Link from "next/link";

interface RepositoryItemProps {
  repository: {
    name: string;
    html_url: string,
    language: string,
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li key={props.repository.name}>
      <strong>{props.repository.name}</strong>
      <div>
        <Link href={props.repository.html_url}>View more</Link>
        <p>{props.repository.language}</p>
      </div>
    </li>
  );
}