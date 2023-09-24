const VendoraContract = {
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi: [
    {
      inputs: [],
      name: "TRADE_DOES_NOT_EXIST",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bool",
          name: "buyerMetTerms",
          type: "bool",
        },
      ],
      name: "Buyer_Met_Terms",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bool",
          name: "sellerMetTerms",
          type: "bool",
        },
      ],
      name: "Seller_Met_Terms",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "seller",
          type: "address",
        },
      ],
      name: "Terms_Set",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bool",
          name: "tradeCanceled",
          type: "bool",
        },
        {
          indexed: true,
          internalType: "address",
          name: "userThatCanceled",
          type: "address",
        },
      ],
      name: "Trade_Canceled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bool",
          name: "tradeCompleted",
          type: "bool",
        },
      ],
      name: "Trade_Completed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bool",
          name: "termsFinalized",
          type: "bool",
        },
        {
          indexed: true,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
      ],
      name: "Trade_Started",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "cancelTradeAndWithdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "deleteTermsFromProfile",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "depositAssets",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "getOfferedErc1155s",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "erc1155Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc1155Details[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "getOfferedErc20s",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "erc20Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc20Details[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "getOfferedErc721s",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "erc721Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc721Details[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "getOfferedEthAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "getRequestedErc1155s",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "erc1155Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc1155Details[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "getRequestedErc20s",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "erc20Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc20Details[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "getRequestedErc721s",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "erc721Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc721Details[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "getRequestedEthAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getUsersActiveTrades",
      outputs: [
        {
          internalType: "bytes32[]",
          name: "userTrades",
          type: "bytes32[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC1155BatchReceived",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC1155Received",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC721Received",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "erc721Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc721Details[]",
          name: "offeredErc721s",
          type: "tuple[]",
        },
        {
          components: [
            {
              internalType: "address",
              name: "erc721Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc721Details[]",
          name: "requestedErc721s",
          type: "tuple[]",
        },
        {
          components: [
            {
              internalType: "address",
              name: "erc1155Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc1155Details[]",
          name: "offeredErc1155s",
          type: "tuple[]",
        },
        {
          components: [
            {
              internalType: "address",
              name: "erc1155Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc1155Details[]",
          name: "requestedErc1155s",
          type: "tuple[]",
        },
        {
          components: [
            {
              internalType: "address",
              name: "erc20Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc20Details[]",
          name: "offeredErc20s",
          type: "tuple[]",
        },
        {
          components: [
            {
              internalType: "address",
              name: "erc20Address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          internalType: "struct Vendora.Erc20Details[]",
          name: "requestedErc20s",
          type: "tuple[]",
        },
        {
          internalType: "uint256",
          name: "offeredEthAmount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "requestedEthAmount",
          type: "uint256",
        },
      ],
      name: "setTerms",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tradeId",
          type: "bytes32",
        },
      ],
      name: "startTrade",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "trades",
      outputs: [
        {
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "offeredEthAmount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "requestedEthAmount",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "termsFinalized",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "sellerMetTerms",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "buyerMetTerms",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "allTermsMet",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "tradeCanceled",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "tradeCompleted",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "usersActiveTrades",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};
export { VendoraContract };
