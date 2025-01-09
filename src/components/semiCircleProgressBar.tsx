"use client";

import React from "react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [{ month: "january", desktop: 20000, mobile: 10000 }];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function semiCircleProgressBar() {

  return (
    <Card className="flex flex-col bg-gradient-to-r from-[##3034424D] from-0% to-[#6076C11F] to-50% text-white border-transparent w-full max-w-sm justify-self-center max-h-52">
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={127}
                          y={(viewBox.cy || 0) - 48}
                          className="fill-white text-[8px] font-light"
                        >
                          75%
                        </tspan>
                        <tspan
                          x={127}
                          y={(viewBox.cy || 0) - 35}
                          className="fill-white text-[8px] font-light"
                        >
                          you have spent
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 14}
                          className="fill-white text-lg font-bold"
                        >
                          $ 20000
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-white text-[10px] font-light"
                        >
                          of $30000
                        </tspan>
                        <tspan
                          x={(viewBox.cx || 0) - 25}
                          y={(viewBox.cy || 0) + 40}
                          className="fill-white text-[8px] font-light"
                        >
                          safe to spend
                        </tspan>
                        <tspan
                          x={(viewBox.cx || 0) + 28}
                          y={(viewBox.cy || 0) + 43}
                          className="fill-white text-lg font-bold"
                        >
                          $ 250
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <defs>
              <linearGradient id="fillDesktop" x1="1" y1="1" x2="0" y2="1">
                <stop
                  offset="50%"
                  stopColor="#7EFF64"
                  stopOpacity={1}
                />
                <stop offset="100%" stopColor="#00BA16" stopOpacity={0.9} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="1" x2="0" y2="1">
                <stop offset="0%" stopColor="#02620d" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#1b8506" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <RadialBar
              dataKey="mobile"
              fill="url(#fillMobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={7}
              fill="url(#fillDesktop)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
