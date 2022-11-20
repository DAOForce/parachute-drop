import ProposalOption from './Proposal/ProposalOption';

export interface VotingOption {
  name: string;
  percent: number;
}

interface ProposalProps {
  title: string;
  contents: string;
  address: string;
  isOpen: boolean;
  votingOptions: VotingOption[];
  onClick: () => void;
}

function Proposal({
  title = '',
  contents = '',
  address = '',
  isOpen = false,
  votingOptions = [],
  onClick,
}: ProposalProps) {
  return (
    <div className="bg-[#ffffff1a] p-8 w-full cursor-pointer rounded-lg" onClick={onClick}>
      <div className="justify-between flex items-center	mb-4">
        <span className="text-sm font-bold">{address}</span>
        <span
          className={`py-1 px-2 font-bold text-sm rounded-full text-[#000] bg-[${
            isOpen ? '#FCFF70' : '#5E5E5E'
          }]`}
        >
          {isOpen ? 'Open' : 'Closed'}
        </span>
      </div>

      <h2 className="text-3xl	font-bold mb-1">{title}</h2>
      <p className="text-sm mb-6 opacity-80">{contents}</p>
      <ul className="grid gap-4">
        {votingOptions.map((e, i) => {
          return <ProposalOption name={e.name} percent={e.percent} key={`${i}`} />;
        })}
      </ul>
    </div>
  );
}

export default Proposal;
