export type StepStakingIDL = {
  version: "0.0.0";
  address: "Stk5NCWomVN3itaFjLu382u9ibb5jMSHEsh6CuhaGjB";
  name: "step_staking";
  metadata: {
    name: "step_staking";
    version: "0.0.0";
    spec: "";
  };
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "initializer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "nonce";
          type: "u8";
        },
      ];
    },
    {
      name: "reclaimMintAuthority";
      accounts: [
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "xTokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "nonce";
          type: "u8";
        },
      ];
    },
    {
      name: "stake";
      accounts: [
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "xTokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenFrom";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenFromAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "xTokenTo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "nonce";
          type: "u8";
        },
        {
          name: "amount";
          type: "u64";
        },
      ];
    },
    {
      name: "unstake";
      accounts: [
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "xTokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "xTokenFrom";
          isMut: true;
          isSigner: false;
        },
        {
          name: "xTokenFromAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenTo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "nonce";
          type: "u8";
        },
        {
          name: "amount";
          type: "u64";
        },
      ];
    },
    {
      name: "emitPrice";
      accounts: [
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "xTokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenVault";
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
  ];
  events: [
    {
      name: "PriceChange";
      fields: [
        {
          name: "oldStepPerXstepE9";
          type: "u64";
          index: false;
        },
        {
          name: "oldStepPerXstep";
          type: "string";
          index: false;
        },
        {
          name: "newStepPerXstepE9";
          type: "u64";
          index: false;
        },
        {
          name: "newStepPerXstep";
          type: "string";
          index: false;
        },
      ];
    },
    {
      name: "Price";
      fields: [
        {
          name: "stepPerXstepE9";
          type: "u64";
          index: false;
        },
        {
          name: "stepPerXstep";
          type: "string";
          index: false;
        },
      ];
    },
  ];
};
export const StepStakingJSON: StepStakingIDL = {
  version: "0.0.0",
  address: "Stk5NCWomVN3itaFjLu382u9ibb5jMSHEsh6CuhaGjB",
  name: "step_staking",
  metadata: {
    name: "step_staking",
    version: "0.0.0",
    spec: "",
  },
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "initializer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "nonce",
          type: "u8",
        },
      ],
    },
    {
      name: "reclaimMintAuthority",
      accounts: [
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "xTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "nonce",
          type: "u8",
        },
      ],
    },
    {
      name: "stake",
      accounts: [
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "xTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenFrom",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenFromAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "xTokenTo",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "nonce",
          type: "u8",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "unstake",
      accounts: [
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "xTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "xTokenFrom",
          isMut: true,
          isSigner: false,
        },
        {
          name: "xTokenFromAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenTo",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "nonce",
          type: "u8",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "emitPrice",
      accounts: [
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "xTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenVault",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  events: [
    {
      name: "PriceChange",
      fields: [
        {
          name: "oldStepPerXstepE9",
          type: "u64",
          index: false,
        },
        {
          name: "oldStepPerXstep",
          type: "string",
          index: false,
        },
        {
          name: "newStepPerXstepE9",
          type: "u64",
          index: false,
        },
        {
          name: "newStepPerXstep",
          type: "string",
          index: false,
        },
      ],
    },
    {
      name: "Price",
      fields: [
        {
          name: "stepPerXstepE9",
          type: "u64",
          index: false,
        },
        {
          name: "stepPerXstep",
          type: "string",
          index: false,
        },
      ],
    },
  ],
};
