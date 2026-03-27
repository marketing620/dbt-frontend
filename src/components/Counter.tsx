"use client";

import CountUp from "react-countup";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 2.5,
}: CounterProps) {
  return (
    <CountUp
      end={end}
      prefix={prefix}
      suffix={suffix}
      duration={duration}
      enableScrollSpy={true}
      scrollSpyOnce={true}
    />
  );
}
