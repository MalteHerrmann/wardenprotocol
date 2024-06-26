import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const apps = [
	{
		name: "UniSwap",
		url: "https://app.uniswap.org/swap?chain=sepolia",
		logo: "/logos/uniswap.svg",
		description:
			"UniSwap is a decentralized finance protocol that is used to exchange cryptocurrencies.",
	},
	{
		name: "Squid",
		url: "https://testnet.app.squidrouter.com/",
		logo: "/logos/squid.svg",
		description:
			"Squid allows any token to be swapped between blockchains, and unlocks access to apps across chains in a single click.",
	},
	// {
	// 	name: "PancakeSwap",
	// 	url: "https://pancakeswap.finance/swap?chain=sepolia",
	// 	logo: "/logos/pancakeswap.svg",
	// 	description:
	// 		"Trade, earn, and own crypto on the all-in-one multichain DEX.",
	// },
	{
		name: "Osmosis",
		url: "https://testnet.osmosis.zone/?to=ATOM&from=OSMO",
		logo: "/logos/osmosis.svg",
		description:
			"Swap, earn, and build on the leading decentralized Cosmos exchange.",
		badge: "COSMOS",
	},
];

export function HomeApps() {
	return (
		<div className="grid xl:grid-cols-3 gap-4">
			{apps.map((app) => (
				<Link key={app.name} to={`/apps/open?url=${app.url}`}>
					<div className="relative bg-card rounded-xl w-full p-6 flex flex-col space-y-1 hover:ring-foreground hover:ring-2 flex-grow h-full">
						{app.logo && (
							<div>
								<img
									src={app.logo}
									alt={app.name}
									className="w-16 h-16"
								/>
							</div>
						)}
						<span className="text-lg font-bold pt-2">
							{app.name}
						</span>
						<span className="text-sm text-muted-foreground">
							{app.description}
						</span>
						<Badge className="absolute top-4 right-4">
							{app.badge ? app.badge : "EVM"}
						</Badge>
					</div>
				</Link>
			))}
		</div>
	);
}
