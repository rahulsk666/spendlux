import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export interface transactionCardTypes {
  transaction: {
    id: number;
    title: string;
    description: string;
    amount: number;
    type: string;
    category_id: number;
    user_id: string;
    created_at: string;
    updated_at: string;
  };
}

export default function transactionCard({ transaction }: transactionCardTypes) {
  const backgroundColor =
    transaction.type == "income"
      ? "from-card-gradient-3 from-40% to-card-gradient-4 to-80%"
      : "from-card-gradient-3 from-40% to-card-gradient-5 to-90%";
  const textColor =
    transaction.type == "income"
      ? "text-font-transaction-green"
      : "text-font-transaction-red";
  return (
    <Card
      className={`border-none rounded-full bg-gradient-to-r ${backgroundColor} justify-self-center w-full max-w-sm text-white mt-3`}
    >
      <CardContent className="p-0 max-w-md">
        <div className="flex flex-row pt-1 pb-1">
          <div className="rounded-full justify-start align-middle p-4 bg-gradient-to-r from-card-gradient-6 to-card-gradient-7">
            <Image
              src={`/currency_rupee.svg`}
              alt="rupee"
              width={30}
              height={30}
              style={{ width: "auto" }}
            />
          </div>
          <div className="w-full max-w-56 flex flex-col pl-7 pt-1.5">
            <span className="font-bold text-xs">{transaction.title}</span>
            <span className="font-light text-[10px]">
              {transaction.description}
            </span>
            <span className="font-extralight text-[8px]">September 21</span>
          </div>
          <div className="content-center p-2">
            <span className={`${textColor} font-light text-lg`}>
              &#8377; {transaction.amount}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
