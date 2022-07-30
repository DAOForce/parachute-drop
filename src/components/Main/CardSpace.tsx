import { useRouter } from 'next/router';

interface CardSpaceProps {
  index: number;
  profile: string;
  name: string;
  number: number;
  id: string;
}

function CardSpace(props: CardSpaceProps) {
  const { index, profile, name, number, id } = props;

  const router = useRouter();

  const handleClick = (value: string) => {
    router.push({
      pathname: '/details',
      query: value,
    });
  };

  return (
    <div key={index} className="card shadow-xl bg-[#191919]">
      <div className="card-body items-center text-center mb-2">
        <img src={profile} className="w-24 rounded-full" />

        <h2 className="card-title">{name}</h2>
        <p>
          <span>{number}</span> members
        </p>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-warning" onClick={() => handleClick(id)}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSpace;
