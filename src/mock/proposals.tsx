export const proposals = {
  data: [
    {
      id: '1',
      title: 'To add WETH/USDC, WETH/DAI, WETH/OP pool',
      contents: `Do you aggree to add WETH/USDC, WETH/DAI, WETH/OP pool?`,
      address: '0xa504ed30D05379cbc6AEa1fE178C55C82baEe9CB',
      isOpen: true,
      votingOptions: [
        { name: 'For', percent: 43, amount: 430 },
        { name: 'Against', percent: 50, amount: 500 },
        { name: 'Abstain', percent: 7, amount: 70 },
      ],
    },
    {
      id: '2',
      title: 'Improvement Proposal For Perpetual Trading',
      contents: `Not sure if this is doable, but here are my ideas
I used the perpetual for a while and I'm unsatisfied with it (compare to other derivative DEX)

Problem 1 - High Fee

It charges a high fee on the taker which is 0.07%, the average taker fee in the industry (include both CEX and DEX) is roughly around 0.05% ~ 0.06%
This alone isn't a big deal as long as the maker fee maintain at 0.02% which is consistent with the industry. However, maker fee will not be the solution to problem 1 as long as problem 2 exists

Problem 2 - No Active Taker / Low volume

Generally speaking, volume of a orderbook style exchange is generate when a taker fill the order of a maker. If there is very few taker, the order of the maker won't be fill up frequently, thus the overall volume is pretty low. This is the case for Apollox-Pancakeswap DEX. Limit order has a hard time to be fill during low volatility period. So, if someone wish to enter a trade without waiting for too long up to a few minutes, He/she will need to use market order instead of limit order (back to problem 1). For comparison, an exchange with a healthy volume, maker who place order with to the last price will only need to wait a few seconds for his/her order to be fill.

Putting these problems together, basically make Apollox-Pancakeswap DEX not a good choice to make a trade. Thus, I believe these are the cause of the dead spiral of low volume. So, here are some suggestions.

Suggestion 1 - Low the base fee for maker-taker model

We should build up an userbase before apply them the fee. By lowering the maker-taker fee, it will attract more traders to try out the exchange. To be honest, (0.02%, 0.07%) is way too high. For reference, Binance, the highest volume derivative exchange according to coinmarketcap only apply (0.02%, 0.04%). While dYdX, another derivative DEX apply (0.00%, 0.00%). The competition is way too vigorous and (0.02%, 0.07%) from Apollox-Pancakeswap stands no chance for winning. From a user perspective, (0.00%, 0.00%) is very juicy to be honest. Nonetheless, in a business perspective, no fee meaning no revenue, so please stay with me on suggestion 2.

Suggestion 2 - Tier-based fee

This is a very old model, but seems like Apollox-Pancakeswap doesn't adopt it at all. Users' trading volume will determine their maker-taker fee. The higher trading volume, the lower the fee. In dYdX case, even if they apply (0.00%, 0.00%) on the first tier, but (0.02%, 0.05%) on the second tier. By doing so, they only generate revenue from the users who use the DEX A LOT, instead of everyone including newcomers and newbies. Besides, the conventional tier-based fee model also encourage trader to trade higher volume to reduce their fee.

As the Perpetual DEX on Pancakeswap is the result of the partnership between them and Apollox, so I still have no idea if Pancakeswap have to power to change the rule of the DEX.

If you have any comment or additional idea, please head to Telegram/Discord and discuss about it! Thank you.`,
      address: '012ddxadsfd',
      isOpen: false,
      votingOptions: [
        { name: 'For', percent: 48, amount: 7200 },
        { name: 'Against', percent: 40, amount: 1000 },
        { name: 'Abstain', percent: 12, amount: 1800 },
      ],
    },
  ],
};
