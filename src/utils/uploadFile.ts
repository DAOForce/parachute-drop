import { NFTStorage } from 'nft.storage';

export const uploadCsvFile = async (delegationList: File) => {
  const apiKey = process.env.NEXT_PUBLIC_DAO_FORCE_IMG_KEY;

  if (apiKey) {
    const imageStorage = new NFTStorage({ token: apiKey });

    const prefix = 'https://ipfs.io/ipfs/';

    const returnData = await imageStorage.store({
      image: delegationList,
      name: 'delegation list',
      description: 'dao-file-description',
    });

    const ipfsUrl = returnData?.data?.image?.pathname;

    return prefix + ipfsUrl.slice(2);
  }
};
