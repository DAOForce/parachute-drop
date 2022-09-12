const resetEvent = new Event('resetAccount');

export const resetAccount = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Get MetaMask!');
      return;
    }

    localStorage.setItem('ownerAddress', '');
    document.dispatchEvent(resetEvent);
    console.log('DISCONNECTED');
  } catch (error) {
    console.log(error);
  }
};
