import { Link } from 'react-router-dom';

interface TopPostCardProps {
  id: string;
  title: string;
  content: string;
  firstname: string;
  lastname: string;
}

const TopPostCard = ({
  content,
  firstname,
  id,
  lastname,
  title,
}: TopPostCardProps) => {
  return (
    <Link
      to={`/post/${id}`}
      className="w-full block rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer p-4 "
    >
      <h1 className="text-lg font-bold">{title}</h1>
      <p>
        {content.length > 250 ? `${content.substring(0, 250)}...` : content}
      </p>
      <p className="text-right">
        - {firstname} {lastname}
      </p>
    </Link>
  );
};

export default TopPostCard;
