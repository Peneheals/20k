const useCampaign = () => {
  return {
    campaign: {
      k22: process.env.NEXT_PUBLIC_CAMPAIGN === 'k22',
      k24: process.env.NEXT_PUBLIC_CAMPAIGN === 'k24',
    }
  }
}

export default useCampaign
