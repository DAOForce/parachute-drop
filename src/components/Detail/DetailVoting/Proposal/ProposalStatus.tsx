import { useRef } from 'react';

interface ProposalOption {
  name: string;
  percent: number;
  amount: number;
  color: string;
}

function ProposalOption({ name = '', percent = 0, amount = 0, color = '#000' }: ProposalOption) {
  const fill = useRef<HTMLDivElement | null>(null);
  const width = { width: `${percent}%` };

  return (
    <li className="mb-2">
      <div className="flex justify-between text-sm w-full">
        <div className="mb-2">
          <span className="pr-1 font-bold">{name}</span>
          <span>{percent}%</span>
        </div>
        <span>{amount} TEL</span>
      </div>
      <div className="w-full relative h-2 ">
        <div
          ref={fill}
          style={width}
          className={`absolute inset-0 bg-[${color}] h-2 rounded-full`}
        />
        <div className="bg-[#252525] h-2 rounded-full" />
      </div>
    </li>
  );
}

export default ProposalOption;
