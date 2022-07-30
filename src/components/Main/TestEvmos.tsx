import React, { useEffect } from 'react';
import { addressConverter, provider, transactions } from 'evmosjs';

// import { ethToEvmos } from '@tharsis/address-converter';
// import { generateEndpointAccount } from '@tharsis/provider';

interface TestEvmosProps {
  ownerAddress: string;
}

function TestEvmos(props: TestEvmosProps) {
  const { ownerAddress } = props;
  const { ethToEvmos } = addressConverter;
  // 제대로 동작 X
  const { generateEndpointBalances, generateEndpointAccount } = provider;
  useEffect(() => {
    const evmosAddress = ethToEvmos(ownerAddress);
    console.log('evmosAddress', ethToEvmos(ownerAddress));
  }, [ownerAddress]);

  return <div>TestEvmos</div>;
}

export default TestEvmos;
