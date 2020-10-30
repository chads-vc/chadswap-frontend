import { useCallback, useEffect, useState } from 'react'



const useCoingeckoData = async () => {

 
  //ts-ignore
  window.fetch = fetch

  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=sushi&vs_currencies=usd&include_market_cap=true")
  const e : any = response.json()
  console.log(e)
  const response_eth = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
  const f: any = response_eth.json()
  console.log(f)

  return [e["stacy"]["usd"], e["stacy"]["usd_market_cap"], f["ethereum"]["usd"]]

}


export default useCoingeckoData
