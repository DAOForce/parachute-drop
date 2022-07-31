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
    const tempData = {
      governanceToken: {
        hash: '0x114e425ee91a1e1f877f071fa3955c1e45b3c2ac0c5d8daf828d2922b589b382',
        contractAddress: '0x44ac3fE79F7F6d8381BC1Ce6e1F25E69745eE233',
      },
      airdropContract: {
        hash: '0x269935779637014f1bd9b3ab460e339ec62b799eadb8baec713f164022b3b5b8',
        contractAddress: '0x47Dcc4000fE75F87C1A952BE0Cf4112f67E1a362',
      },
    };

    // @TODO 실제 데이터로 채우기
    localStorage.setItem('clickedCardInfo', JSON.stringify(tempData));
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
