import { NFTStorage } from 'nft.storage';

export const uploadImage = async (image: File) => {
  const apiKey = process.env.NEXT_PUBLIC_DAO_FORCE_IMG_KEY;

  if (apiKey) {
    const imageStorage = new NFTStorage({ token: apiKey });

    const prefix = 'https://ipfs.io/ipfs/';

    const returnData = await imageStorage.store({
      image,
      name: 'dao-image',
      description: 'dao-image-description',
    });

    const ipfsUrl = returnData?.data?.image?.pathname;

    return prefix + ipfsUrl.slice(2);
  }

  throw new Error('No API key found');
};
