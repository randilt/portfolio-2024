import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function EvervaultCardDemo(props: any) {
  return (
    <div className="relative mx-auto flex h-[13rem] w-full max-w-full flex-col items-start border border-white/[0.2]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <EvervaultCard text={props.text} icon={props.icon} />
    </div>
  );
}
