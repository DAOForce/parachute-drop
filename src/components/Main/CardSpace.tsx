import { useRouter } from 'next/router';

interface CardSpaceProps {
  index: number;
  ticker: string;
  intro: string;
  DAOName: string;
  image: string;
}

function CardSpace(props: CardSpaceProps) {
  const { index, ticker, intro, DAOName, image } = props;

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
        <img src={image} className="w-24 rounded-full" />

        <h2 className="card-title">{DAOName}</h2>
        <p>{intro}</p>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-warning" onClick={() => handleClick(ticker)}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSpace;
