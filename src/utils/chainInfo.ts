// factory pattern 활용
const chainInfo = (
  chainId: string,
  chainName: string,
  rpc: string,
  rest: string,
  coinDenom: string,
  coinMinimaldenom: string,
  coinDecimals: number,
  bech32: string,
) => {
  return {
    // 체인 Id
    chainId: chainId,
    // 사용자에게 보여질 chain 이름
    chainName: chainName,
    // 체인의 RPC 엔드포인트 주소
    rpc: rpc,
    // 체인의 REST 엔드포인트 주소
    rest: rest,
    // 스테이킹 코인 정보
    stakeCurrency: {
      // 사용자에게 보여지는 코인 명칭(denomination)
      coinDenom: coinDenom,
      // 실제 블록체인에서 사용되는 코인의 명칭 (i.e. uatom, uosmo)
      coinMinimalDenom: coinMinimaldenom,
      // upebble를 PEBBLE로 변환하는 소수점 이하 자릿수
      coinDecimals: coinDecimals,
    },
    // BIP44 경로
    bip44: {
      // BIP44 타입의 코인만 사용 가능
      // 'purpose' 는 44로 항상 고정되어 있다.
      // 'coinType'은 118 (Cosmos Hub) 을 사용할 것을 권장
      coinType: 118,
    },
    // 사용자에게 주소를 보여주는 Bech32 정보
    bech32Config: {
      bech32PrefixAccAddr: bech32,
      bech32PrefixAccPub: bech32 + 'pub',
      bech32PrefixValAddr: bech32 + 'valoper',
      bech32PrefixValPub: bech32 + 'valoperpub',
      bech32PrefixConsAddr: bech32 + 'valcons',
      bech32PrefixConsPub: bech32 + 'valconspub',
    },
    // 체인에서 사용되는 모든 코인/토큰의 리스트
    currencies: [
      {
        // 사용자에게 보여지는 코인 명칭(denomination)
        coinDenom: coinDenom,
        // 실제 블록체인에서 사용되는 코인 명칭
        coinMinimalDenom: coinMinimaldenom,
        // upebble를 PEBBLE로 변환하는 소수점 이하 자릿수
        coinDecimals: coinDecimals,
      },
    ],
    // 체인에서 fee 토큰으로 사용되는 코인/토큰의 리스트
    feeCurrencies: [
      {
        // 사용자에게 보여지는 코인 명칭(denomination)
        coinDenom: coinDenom,
        // 실제 블록체인에서 사용되는 코인 명칭
        coinMinimalDenom: coinMinimaldenom,
        // upebble를 PEBBLE로 변환하는 소수점 이하 자릿수
        coinDecimals: coinDecimals,
      },
    ],
    // (Optional) ENS에서 주소를 가져올 때만 사용되는 정보로 BIP44의 coinType과 일치하는 것이 좋음
    coinType: 118,
    // (Optional) 트랜잭션의 가격을 저알 때 사용됨
    // 따로 지정하지 않을 경우 (low: 0.01, average: 0.025, high: 0.04)를 default로 설정
    // 아직까지 Keplr 는 온체인 데이터에 기반한 동적 계산을 지원하지 않음
    // RPC/REST 엔드포인트와 체인의 검증인들이 설정한 최소 gas 가격보다 높아야 한다.
    gasPriceStep: {
      low: 0.01,
      average: 0.05,
      high: 0.25,
    },
  };
};

const networkInfo = {
  'evmos_9001-1': chainInfo(
    'evmos_9001-1',
    'Evmos Mainnet',
    'https://grpc.bd.evmos.org:9090',
    'https://rest.bd.evmos.org:1317',
    'evmos',
    'uevmos',
    6,
    'wasm',
  ),
};

export default networkInfo;
