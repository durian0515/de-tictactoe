export const tictactoe_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_playerTwo",
				"type": "address",
			},
		],
		"stateMutability": "nonpayable",
		"type": "constructor",
	},
	{
		"inputs": [],
		"name": "Unauthorized",
		"type": "error",
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_playerId",
				"type": "uint256",
			},
		],
		"name": "checkState",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256",
			},
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [],
		"name": "getGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256",
			},
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [],
		"name": "getPlayers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]",
			},
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_move",
				"type": "uint256",
			},
		],
		"name": "move",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256",
			},
		],
		"stateMutability": "nonpayable",
		"type": "function",
	},
	{
		"inputs": [],
		"name": "newGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
	},
];

export const tictactoe_bytecode =
	"0x60806040526000805534801561001457600080fd5b50604051610e28380380610e2883398181016040528101906100369190610272565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361006f57600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506003600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506003600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062100000600054176000819055505061029f565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061023f82610214565b9050919050565b61024f81610234565b811461025a57600080fd5b50565b60008151905061026c81610246565b92915050565b6000602082840312156102885761028761020f565b5b60006102968482850161025d565b91505092915050565b610b7a806102ae6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630fdcf8771461005c5780634494fd9f1461008c5780637d03f5f3146100aa57806387cb15f7146100b45780638b5b9ccc146100e4575b600080fd5b610076600480360381019061007191906107c3565b610102565b60405161008391906107ff565b60405180910390f35b6100946102a8565b6040516100a191906107ff565b60405180910390f35b6100b26102b1565b005b6100ce60048036038101906100c991906107c3565b6103a2565b6040516100db91906107ff565b60405180910390f35b6100ec61068f565b6040516100f9919061090a565b60405180910390f35b6000806000549050826003603f610119919061098a565b901b603f82160361012e5760019150506102a3565b6006836003603f61013f919061098a565b901b901b6006603f901b82160361015a5760019150506102a3565b600c836003603f61016b919061098a565b901b901b600c603f901b8216036101865760019150506102a3565b8260036130c3610196919061098a565b901b6130c38216036101ac5760019150506102a3565b60028360036130c36101be919061098a565b901b901b60026130c3901b8216036101da5760019150506102a3565b60048360036130c36101ec919061098a565b901b901b60046130c3901b8216036102085760019150506102a3565b82600362030303610219919061098a565b901b620303038216036102305760019150506102a3565b826003613330610240919061098a565b901b6133308216036102565760019150506102a3565b60005b600981101561029c576000600183161480156102785750600060028316145b15610288576000925050506102a3565b600282901c91508080600101915050610259565b5060029150505b919050565b60008054905090565b33600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561035e5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b15610395576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6210000060008190555050565b600033600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156104515750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b15610488576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336104928161071d565b60016012600054901c16146104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610a18565b60405180910390fd5b836000600182901b905060006001826104f59190610a38565b90506000805490506001808483901c16148061051657506001808383901c16145b15610556576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054d90610ab8565b60405180910390fd5b60098410610599576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059090610ab8565b60405180910390fd5b60008054905060006001601383901c161480156105bc5750600180601483901c16145b6105fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f290610b24565b60405180910390fd5b60006106063361071d565b90508060018b901b6106189190610a38565b6001901b82189150620400008218600081905550600061063782610102565b9050600181036106685781601361064e9190610a38565b6001901b6000541860008190555060019950505050610684565b6002810361067c5760029950505050610684565b600099505050505b505050505050919050565b6060600380548060200260200160405190810160405280929190818152602001828054801561071357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106c9575b5050505050905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461077b57600161077e565b60005b60ff169050919050565b600080fd5b6000819050919050565b6107a08161078d565b81146107ab57600080fd5b50565b6000813590506107bd81610797565b92915050565b6000602082840312156107d9576107d8610788565b5b60006107e7848285016107ae565b91505092915050565b6107f98161078d565b82525050565b600060208201905061081460008301846107f0565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061087182610846565b9050919050565b61088181610866565b82525050565b60006108938383610878565b60208301905092915050565b6000602082019050919050565b60006108b78261081a565b6108c18185610825565b93506108cc83610836565b8060005b838110156108fd5781516108e48882610887565b97506108ef8361089f565b9250506001810190506108d0565b5085935050505092915050565b6000602082019050818103600083015261092481846108ac565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006109958261078d565b91506109a08361078d565b9250826109b0576109af61092c565b5b828204905092915050565b600082825260208201905092915050565b7f4e6f7420796f7572207475726e00000000000000000000000000000000000000600082015250565b6000610a02600d836109bb565b9150610a0d826109cc565b602082019050919050565b60006020820190508181036000830152610a31816109f5565b9050919050565b6000610a438261078d565b9150610a4e8361078d565b9250828201905080821115610a6657610a6561095b565b5b92915050565b7f696e76616c6964206d6f76650000000000000000000000000000000000000000600082015250565b6000610aa2600c836109bb565b9150610aad82610a6c565b602082019050919050565b60006020820190508181036000830152610ad181610a95565b9050919050565b7f47616d652068617320656e646564000000000000000000000000000000000000600082015250565b6000610b0e600e836109bb565b9150610b1982610ad8565b602082019050919050565b60006020820190508181036000830152610b3d81610b01565b905091905056fea2646970667358221220a9cee4206548f7bc5cda25ede88df62e6fdade843a85d94fedb5e9731a7c247a64736f6c63430008110033";

export const registry_abi = [
	{ "inputs": [{ "internalType": "address", "name": "gameContract", "type": "address" }], "name": "GameAlreadyExists", "type": "error" },
	{
		"inputs": [
			{ "internalType": "address", "name": "", "type": "address" },
			{ "internalType": "uint256", "name": "", "type": "uint256" },
		],
		"name": "FirstPlayerGames",
		"outputs": [
			{ "internalType": "address", "name": "firstPlayer", "type": "address" },
			{ "internalType": "address", "name": "secondPlayer", "type": "address" },
			{ "internalType": "address", "name": "gameContract", "type": "address" },
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [
			{ "internalType": "address", "name": "", "type": "address" },
			{ "internalType": "uint256", "name": "", "type": "uint256" },
		],
		"name": "SecondPlayerGames",
		"outputs": [
			{ "internalType": "address", "name": "firstPlayer", "type": "address" },
			{ "internalType": "address", "name": "secondPlayer", "type": "address" },
			{ "internalType": "address", "name": "gameContract", "type": "address" },
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [{ "internalType": "address", "name": "_player", "type": "address" }],
		"name": "getGameList",
		"outputs": [
			{
				"components": [
					{ "internalType": "address", "name": "firstPlayer", "type": "address" },
					{ "internalType": "address", "name": "secondPlayer", "type": "address" },
					{ "internalType": "address", "name": "gameContract", "type": "address" },
				],
				"internalType": "struct TictactoeRegistry.Game[]",
				"name": "",
				"type": "tuple[]",
			},
		],
		"stateMutability": "view",
		"type": "function",
	},
	{
		"inputs": [
			{ "internalType": "address", "name": "_firstPlayer", "type": "address" },
			{ "internalType": "address", "name": "_secondPlayer", "type": "address" },
			{ "internalType": "address", "name": "_gameContract", "type": "address" },
		],
		"name": "register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
	},
];

export const registry_address = "0x22eA981B67b73DBdA58D4bD9c76f0F78e0CFD6f9";

