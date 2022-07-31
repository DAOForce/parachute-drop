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
        hash: '0xcd82a1396d3fd4c4acf88b84a945d605c50417f78da27b87be4c985bde0a5bea',
        contractAddress: '0xf51a13303F50F7e80cf0C0C9a416ed9e21f5c1eF',
      },
      airdropContract: {
        hash: '0xb1f72c5ebf8d3d57f94a98ba42e5de5e883bd4905b906d665286e9e0800cb50d',
        contractAddress: '0x986d5C2531e80A56315Ea15CD386a55E3178ed91',
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
