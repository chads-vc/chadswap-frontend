import React, { useCallback, useEffect, useState } from "react";

import numeral from "numeral";

import useSushi from "../../../hooks/useSushi";
import { bnToDec } from "../../../utils";

import {
  getCurrentPrice,
  getScalingFactor,
  getMaxSupply,
  getMarketCap,
  getProjectedRebase,
  getProjectedMint,
  getProjectedRebasePercent,
  getProjectedMintPercent,
} from "../../../yam-sdk/utils";
import Rebase from "../../../components/Rebase";
import { useWallet } from "use-wallet";

const TopCards: React.FC = () => {
  const sushi = useSushi();
  const [currentPrice, setCurrentPrice] = useState<string>();
  const [scalingFactor, setScalingFactor] = useState<string>();
  const [maxSupply, setMaxSupply] = useState<string>();
  const [marketCap, setMarketCap] = useState<string>();
  const [projectedRebase, setProjectedRebase] = useState<string>();
  const [projectedMint, setProjectedMint] = useState<string>();
  const [projectedRebasePercent, setProjectedRebasePercent] = useState<string>();
  const [projectedMintPercent, setProjectedMintPercent] = useState<string>();
  const { status } = useWallet();

  const fetchOnce = useCallback(async () => {
    const maxSupply = await getMaxSupply();
    const marketCap = await getMarketCap();
    setMaxSupply(numeral(maxSupply).format("0.00a"));
    setMarketCap(numeral(marketCap).format("0.00a"));
  }, [setMaxSupply, setMarketCap]);

  useEffect(() => {
    if (status === "connected") {
      fetchOnce();
    }
  }, [fetchOnce, status]);

  const fetchStats = useCallback(async () => {
    if (!sushi) return;
    const price = await getCurrentPrice(sushi);
    const factor = await getScalingFactor(sushi);
    const projectedRebase = await getProjectedRebase(sushi);
    const projectedMint = await getProjectedMint(sushi);
    const projectedRebasePercent = await getProjectedRebasePercent(sushi);
    const projectedMintPercent = await getProjectedMintPercent(sushi);
    setCurrentPrice(numeral(bnToDec(price)).format("0.00a"));
    setScalingFactor(numeral(bnToDec(factor)).format("0.00a"));
    setProjectedRebase((Math.sign(projectedRebase) === 1 ? "+" : "") + numeral(projectedRebase).format("0.00a"));
    // setProjectedRebasePercent(numeral(projectedRebasePercent).format("0.00a"));
    // setProjectedMint(numeral(projectedMint).format("0.00a"));
    // setProjectedMintPercent(numeral(projectedMintPercent).format("0.00a"));
  }, [setCurrentPrice, setScalingFactor, setProjectedRebase, sushi]);

  useEffect(() => {
    fetchStats();
    let refreshInterval = setInterval(fetchStats, 10000);
    return () => clearInterval(refreshInterval);
  }, [fetchStats, sushi]);

  const totalYUsdValue = 10000
  const treasuryValue =
    typeof totalYUsdValue !== "undefined"
      ? "$" + numeral(totalYUsdValue * 1.15).format("0.00a")
      : "--";

  const col = [
    [
      {
        icon: "💲",
        label: "Current price TWAP",
        value: currentPrice ? `${currentPrice} yUSD` : "--",
      },
      {
        icon: "🚀",
        label: "Scaling factor",
        value: scalingFactor ? `x${scalingFactor}` : "--",
      },
    ],
    [
      {
        icon: "🧱",
        label: "YAM total supply",
        value: maxSupply ? maxSupply : "--",
      },
      {
        icon: "🍠",
        label: "YAM to be rebased",
        value: projectedRebase ? projectedRebase : "--", // -2.0%
      },
    ],
    [
      {
        icon: "🌎",
        label: "Marketcap",
        value: marketCap ? `$${marketCap}` : "--",
      },
      {
        icon: "💰",
        label: "Treasury value",
        value: treasuryValue ? treasuryValue : "--",
      },
    ],
  ];
  return <div/>
  /*
  return (
    <Split>
      <Rebase type="bar" />
      <Box column>
        <Card>
          <CardContent>
            <FancyValue wrap icon={col[0][0].icon} label={col[0][0].label} value={col[0][0].value} />
          </CardContent>
        </Card>
        <Spacer />
        <Card>
          <CardContent>
            <FancyValue wrap icon={col[0][1].icon} label={col[0][1].label} value={col[0][1].value} />
          </CardContent>
        </Card>
      </Box>
      <Box column>
        <Card>
          <CardContent>
            <FancyValue wrap icon={col[1][0].icon} label={col[1][0].label} value={col[1][0].value} />
          </CardContent>
        </Card>
        <Spacer />
        <Card>
          <CardContent>
            <FancyValue wrap icon={col[1][1].icon} label={col[1][1].label} value={col[1][1].value} />
          </CardContent>
        </Card>
      </Box>
      <Box column>
        <Card>
          <CardContent>
            <FancyValue wrap icon={col[2][0].icon} label={col[2][0].label} value={col[2][0].value} />
          </CardContent>
        </Card>
        <Spacer />
        <Card>
          <CardContent>
            <FancyValue wrap icon={col[2][1].icon} label={col[2][1].label} value={col[2][1].value} />
          </CardContent>
        </Card>
      </Box>
    </Split>
  );
   */
};

export default TopCards;
