import SemiCircleProgressBar from "@/components/semiCircleProgressBar";
import React from "react";

const dashboard = () => {
  return (
    <div className="w-full mt-2">
      <main>
        <div className="rounded">
          <SemiCircleProgressBar />
        </div>
        
      </main>
    </div>
  );
};

export default dashboard;
