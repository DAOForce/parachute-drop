import Navbar from '@src/components/common/Navbar';
import BackIcon from '../../assets/Icon/BackIcon.svg';
import ProposalOption from '@src/components/Detail/DetailVoting/Proposal/ProposalOption';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { proposals } from '../../mock/proposals';
import { getAddressSubstring } from '@src/components/Detail/DetailVoting/Proposal';
import { useQuery } from '@tanstack/react-query';
import { beautifyAllGovernanceTokenInfoForIndex } from '@src/utils/getAllGovernanceTokenInfo';

function VotingDetails() {
  const router = useRouter();
  const { id } = router.query;

  const proposal = proposals.data.find((e) => e.id === id) || {
    id: '',
    title: '',
    contents: '',
    address: '',
    isOpen: false,
    votingOptions: [
      { name: '', percent: 0, amount: 0 },
      { name: '', percent: 0, amount: 0 },
      { name: '', percent: 0, amount: 0 },
    ],
  };
  const { isOpen, address, title, contents, votingOptions } = proposal;

  const votingStatus = [
    {
      name: votingOptions[0].name,
      amount: votingOptions[0].amount,
      percent: votingOptions[0].percent,
      color: '',
    },
    {
      name: votingOptions[1].name,
      amount: votingOptions[1].amount,
      percent: votingOptions[1].percent,
      color: '',
    },
    {
      name: votingOptions[2].name,
      amount: votingOptions[2].amount,
      percent: votingOptions[2].percent,
      color: '',
    },
  ].sort((a, b) => b.percent - a.percent);

  votingStatus[0].color = '#FCFF70';
  votingStatus[1].color = '#ffffff4d';
  votingStatus[2].color = '#ffffff1a';

  const status = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      status.current?.classList.add('bg-[#FCFF70]');
      status.current?.classList.remove('bg-[#5E5E5E]');
    }
  }, [isOpen]);

  function getWidth(percent: number) {
    const width = Math.round((percent / 100) * 12);
    if (width % 2 === 0) return 'w-' + width + '/12';
    else return 'w-' + (width + 1) + '/12';
  }

  function handleClickBack() {
    router.back();
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <button className="flex gap-1 items-center pt-4 pb-12" onClick={handleClickBack}>
          <BackIcon />
          <span className="text-sm font-bold opacity-80">Back</span>
        </button>
        <div className="flex">
          <div className="w-8/12 pr-16">
            <div className="mb-10">
              <p className="mb-4">{getAddressSubstring(address)}</p>
              <h1 className="text-5xl	font-bold mb-4">{title}</h1>
              <span
                ref={status}
                className={`py-1 px-2 font-bold text-sm rounded-full text-[#000000] bg-[#5E5E5E]`}
              >
                {isOpen ? 'Open' : 'Closed'}
              </span>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-1">Summary</h4>
              <pre className="text-base opacity-80 whitespace-pre-wrap">{contents}</pre>
            </div>

            <div className="mb-20">
              <h4 className="text-xl font-bold mb-2">Cast your vote</h4>
              <ul className="grid gap-4">
                {proposal?.votingOptions.map((e, i) => {
                  return <ProposalOption key={i} name={e.name} percent={e.percent} />;
                })}
              </ul>
            </div>
          </div>
          <div className="w-4/12">
            <div className="bg-[#ffffff1a] p-6 mb-4 rounded-lg">
              <h5 className="text-base font-bold mb-4">Voting</h5>
              <ul>
                {votingStatus.map((e, i) => {
                  return (
                    <li className="mb-2" key={i}>
                      <div className="flex justify-between text-sm w-full">
                        <div className="mb-2">
                          <span className="pr-1 font-bold">{e.name}</span>
                          <span>{e.percent}%</span>
                        </div>
                        <span>{e.amount} TEL</span>
                      </div>
                      <div className="w-full relative h-2 ">
                        <div
                          className={`${getWidth(e.percent)} absolute inset-0 bg-[${
                            e.color
                          }] h-2 rounded-full`}
                        />
                        <div className="bg-[#252525] h-2 rounded-full" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bg-[#ffffff1a] p-6 rounded-lg">
              <h5 className="text-base font-bold mb-4">Info</h5>
              <div className="text-base flex justify-between">
                <div className="font-bold">Start date</div>
                <div>08/08/2022 5:58 AM</div>
              </div>
              <div className="text-base flex justify-between">
                <div className="font-bold">End date</div>
                <div>08/08/2022 5:58 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VotingDetails;
