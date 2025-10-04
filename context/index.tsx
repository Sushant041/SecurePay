'use client'

import React, { ReactNode } from 'react'
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PropsWithChildren } from "react";
import { Network } from "@aptos-labs/ts-sdk";

export const WalletProvider = ({ children }: PropsWithChildren) => {

  return (
    <AptosWalletAdapterProvider
      autoConnect={true}
      dappConfig={{
        network: Network.MAINNET,
        aptosApiKeys: {
          mainnet: process.env.APTOS_API_KEY_MAINNET,
        }
      }}
      onError={(error: Error) => {
        console.log("error", error);
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
};