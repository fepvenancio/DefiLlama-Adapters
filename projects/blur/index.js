const sdk = require('@defillama/sdk')


const blurBiddingAddr = "0x0000000000A39bb272e79075ade125fd351887Ac"


async function ethtvl(timestamp, block) {
 
  const ethBalance = await sdk.api.eth.getBalance({
    target: blurBiddingAddr,
    block
  })

  return {
    '0x0000000000000000000000000000000000000000': ethBalance.output,
    
  }
}

module.exports = {
    timetravel: true,
    misrepresentedTokens: false,
    methodology: 'TVL counts ETH tokens in the Blur Bidding address:0x0000000000A39bb272e79075ade125fd351887Ac',
    
    ethereum: {
        tvl: ethtvl
    }
}