import { useRouter } from 'next/router';
import Proposal from './DetailVoting/Proposal';
import { proposals } from '../../mock/proposals';

function DetailVoting() {
  const router = useRouter();
  function handleClick(id: string) {
    router.push({
      pathname: `/voting/${id}`,
    });
  }
  return (
    <section className="flex flex-col">
      <div className="flex justify-between mt-[37.5px] mb-[32.5px]">
        <h2 className="text-2xl	font-bold">Proposals</h2>
        {/* <button className="flex gap-1 items-center">
          <Add />
          New proposal
        </button> */}
      </div>
      <div className="grid gap-4 w-full mb-16">
        {proposals.data.map((e, i) => {
          return (
            <Proposal
              key={e.id}
              onClick={() => handleClick(e.id)}
              title={e.title}
              contents={e.contents}
              address={e.address}
              isOpen={e.isOpen}
              votingOptions={e.votingOptions}
            />
          );
        })}
      </div>
    </section>
  );
}

export default DetailVoting;
