"use client";

import React from "react";
import {
  Label,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
} from "@/components/ui/chart";
import { chartConfig } from "@/constants/chartConstants";

interface SemiCircleProgressBarProps {
  totalAmount: number;
  spentAmount: number;
  safeToSpend: number;
  className?: string;
}

interface ChartDataItem {
  name: string;
  safeToSpend: number;
  spentAmount: number;
}

export function SemiCircleProgressBar({
  totalAmount = 30000,
  spentAmount = 10000,
  safeToSpend = 20000,
  className,
}: SemiCircleProgressBarProps) {
  const percentage = Math.round((spentAmount / totalAmount) * 100);
  const spendAmountPercent = Math.round((safeToSpend / totalAmount) * 100);

  const chartData: ChartDataItem[] = [
    {
      name: "Progress",
      safeToSpend: spendAmountPercent, // Background layer
      spentAmount: 100 - spendAmountPercent, // Foreground layer
    },
  ];

  return (
    <Card
      className={`flex flex-col bg-gradient-to-r from-card-gradient-1 from-0% to-card-gradient-2 to-50% text-white border-transparent w-full max-w-sm justify-self-center max-h-52 ${className}`}
      role="figure"
      aria-label={`Progress indicator showing ${percentage}% spent of total budget`}
    >
      <CardContent className="flex flex-1 items-center pb-0">
        <ResponsiveContainer width={"100%"} height={250}>
          <ChartContainer
            config={chartConfig}
            className="mx-auto w-[250px] h-[250px] min-w-[250px] min-h-[250px]"
          >
            <RadialBarChart
              data={chartData}
              endAngle={180}
              innerRadius={80}
              outerRadius={130}
              width={250}
              height={250}
            >
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
                            {percentage}%
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
                            &#8377; {spentAmount.toLocaleString()}
                          </tspan>
                          <tspan
                            x={centerX - 15}
                            y={centerY + 5}
                            className="fill-white text-[10px] font-light"
                          >
                            of
                          </tspan>
                          <tspan
                            x={centerX + 12}
                            y={centerY + 5}
                            className="fill-white text-[10px] font-bold"
                          >
                            &#8377; {totalAmount.toLocaleString()}
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
                            className="fill-white text-base font-bold"
                          >
                            &#8377; {safeToSpend.toLocaleString()}
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
              <defs>
                <linearGradient
                  id="fillSafeToSpend"
                  x1="1"
                  y1="1"
                  x2="0"
                  y2="1"
                >
                  <stop offset="50%" stopColor="#7EFF64" stopOpacity={1} />
                  <stop offset="100%" stopColor="#00BA16" stopOpacity={0.9} />
                </linearGradient>
                <linearGradient
                  id="fillSpentAmount"
                  x1="0"
                  y1="1"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#7f1d1d" stopOpacity={0.95} />
                  <stop offset="100%" stopColor="#991b1b" stopOpacity={0.95} />
                </linearGradient>
              </defs>
              <RadialBar
                dataKey="safeToSpend"
                fill="url(#fillSafeToSpend)"
                stackId="a"
                cornerRadius={5}
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="spentAmount"
                stackId="a"
                cornerRadius={5}
                fill="url(#fillSpentAmount)"
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
