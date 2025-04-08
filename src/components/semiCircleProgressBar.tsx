"use client";

import React from "react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig, chartData } from "@/constants/chartConstants";

export default function semiCircleProgressBar() {
  return (
    <Card className="flex flex-col bg-gradient-to-r from-card-gradient-1 from-0% to-card-gradient-2 to-50% text-white border-transparent w-full max-w-sm justify-self-center max-h-52">
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px] min-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
            width={250}
            height={250}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    const centerX = viewBox.cx || 125;
                    const centerY = viewBox.cy || 125;
                    return (
                      <text x={centerX} y={centerY} textAnchor="middle">
                        <tspan
                          x={centerX}
                          y={centerY - 50}
                          className="fill-white text-[8px] font-light"
                        >
                          75%
                        </tspan>
                        <tspan
                          x={centerX}
                          y={centerY - 35}
                          className="fill-white text-[8px] font-light"
                        >
                          you have spent
                        </tspan>
                        <tspan
                          x={centerX}
                          y={centerY - 15}
                          className="fill-white text-lg font-bold"
                        >
                          $ 20000
                        </tspan>
                        <tspan
                          x={centerX}
                          y={centerY + 5}
                          className="fill-white text-[10px] font-light"
                        >
                          of $30000
                        </tspan>
                        <tspan
                          x={centerX - 30}
                          y={centerY + 40}
                          className="fill-white text-[8px] font-light"
                        >
                          safe to spend
                        </tspan>
                        <tspan
                          x={centerX + 30}
                          y={centerY + 40}
                          className="fill-white text-lg font-bold"
                        >
                          $ 250
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </PolarRadiusAxis>
            <defs>
              <linearGradient id="fillDesktop" x1="1" y1="1" x2="0" y2="1">
                <stop offset="50%" stopColor="#7EFF64" stopOpacity={1} />
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
