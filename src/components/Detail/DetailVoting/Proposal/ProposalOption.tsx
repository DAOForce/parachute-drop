import { VotingOption } from '../Proposal';

function ProposalOption({ name = '', percent = 0 }: VotingOption) {
  return <li className="justify-between flex bg-[#252525] px-5 py-5 rounded-lg">{name}</li>;
}

export default ProposalOption;
