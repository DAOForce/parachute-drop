import { useRouter } from 'next/router';

interface CardSpaceProps {
  key: number;
  profile: string;
  name: string;
  number: number;
}

function CardSpace(props: CardSpaceProps) {
  const { key, profile, name, number } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push('/details');
  };

  return (
    <div key={key} className="card shadow-xl bg-[#191919]">
      <div className="card-body items-center text-center mb-2">
        <img src={profile} className="w-24 rounded-full" />

        <h2 className="card-title">{name}</h2>
        <p>
          <span>{number}</span> members
        </p>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-warning" onClick={() => handleClick()}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSpace;
