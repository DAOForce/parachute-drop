import Navbar from '@src/components/common/Navbar';
import BackIcon from '../../assets/Icon/BackIcon.svg';
import ProposalOption from '@src/components/Detail/DetailVoting/Proposal/ProposalOption';
import { useRouter } from 'next/router';
import { proposals } from '../../mock/proposals';

function VotingDetails() {
  const router = useRouter();
  const { id } = router.query;
  const proposal = proposals.data.find((e) => e.id === id);

  const votingStatus = [
    { name: 'For', amount: 50, percent: 30, color: '#FCFF70' },
    { name: 'Against', amount: 50, percent: 30, color: '#ffffff4d' },
    { name: 'Abstain', amount: 50, percent: 30, color: '#ffffff1a' },
  ];

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
              <p className="mb-4">{proposal?.address}</p>
              <h1 className="text-5xl	font-bold mb-4">{proposal?.title}</h1>
              <span
                className={`py-1 px-2 font-bold text-sm rounded-full text-[#000] bg-[${
                  proposal?.isOpen ? '#FCFF70' : '#5E5E5E'
                }]`}
              >
                {proposal?.isOpen ? 'Open' : 'Closed'}
              </span>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-1">Summary</h4>
              <p className="text-base opacity-80">{proposal?.contents}</p>
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
                          className={`w-6/12 absolute inset-0 bg-[${e.color}] h-2 rounded-full`}
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
