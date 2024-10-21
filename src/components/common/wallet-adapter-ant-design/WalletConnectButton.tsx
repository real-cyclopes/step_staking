"use client";

import type { ButtonProps } from "antd";
import React from "react";
import { BaseWalletConnectButton } from "./BaseWalletConnectButton";

const LABELS = {
  connecting: "Connecting ...",
  connected: "Connected",
  "has-wallet": "Connect",
  "no-wallet": "Connect Wallet",
} as const;

export function WalletConnectButton(props: ButtonProps) {
  return <BaseWalletConnectButton {...props} labels={LABELS} />;
}
