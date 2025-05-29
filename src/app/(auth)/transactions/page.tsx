"use client";

import TransactionCard from "@/components/transactionCard";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
} from "@/components/ui/pagination";
import { Pagination, PaginationItem } from "@/components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const transactions = [
    { success: false },
    { success: true },
    { success: false },
    { success: true },
    { success: false },
    { success: false },
    { success: true },
    { success: false },
  ];

interface PaginationData {
  totalItems: number;
  itemsPerPage: number;
}

export default function Analytics() {
  // const [activeTab, setActiveTab] = useState("daily");
  const [currentPage, setCurrentPage] = useState(1);

  // Test values for pagination
  const paginationData: PaginationData = {
    totalItems: 70, // Total number of transactions
    itemsPerPage: 7, // Number of transactions per page
  };

  const totalPages = Math.ceil(
    paginationData.totalItems / paginationData.itemsPerPage
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    // Here you would fetch the data for the new page
    console.log(
      `Fetching page ${page} with ${paginationData.itemsPerPage} items per page`
    );
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Here you would fetch the data for the previous page
      console.log(`Fetching previous page ${currentPage - 1}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Here you would fetch the data for the next page
      console.log(`Fetching next page ${currentPage + 1}`);
    }
  };

  const renderPaginationItems = () => {
    const items = [];

    // Always show first page
    items.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          className={`text-white rounded-full hover:bg-pagination-active hover:text-white ${
            currentPage === 1 ? "bg-pagination-active" : ""
          }`}
          onClick={() => handlePageClick(1)}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Calculate the range of pages to show
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    // Adjust the range based on current page position
    if (currentPage <= 3) {
      // When near the start, show more pages after current
      endPage = Math.min(4, totalPages - 1);
    } else if (currentPage >= totalPages - 2) {
      // When near the end, show more pages before current
      startPage = Math.max(totalPages - 3, 2);
    } else {
      // When in the middle, show one page before and after
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      items.push(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis className="text-white" />
        </PaginationItem>
      );
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            className={`text-white rounded-full hover:bg-pagination-active hover:text-white ${
              currentPage === i ? "bg-pagination-active" : ""
            }`}
            onClick={() => handlePageClick(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      items.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis className="text-white" />
        </PaginationItem>
      );
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            className={`text-white rounded-full hover:bg-pagination-active hover:text-white ${
              currentPage === totalPages ? "bg-pagination-active" : ""
            }`}
            onClick={() => handlePageClick(totalPages)}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <section className="mt-2">
      <Tabs
        defaultValue="daily"
        className="w-full max-w-[380px] justify-self-center"
        // onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="grid w-full h-[45px] grid-cols-3 rounded-full bg-pagination-background text-white">
          <TabsTrigger
            value="daily"
            className="rounded-full h-full data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Daily
          </TabsTrigger>
          <TabsTrigger
            value="monthly"
            className="rounded-full h-full data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="yearly"
            className="rounded-full h-full data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Yearly
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Pagination className="mt-3 max-w-[380px] justify-self-center">
        <PaginationContent className="justify-center bg-appbar-primary rounded-full">
          <PaginationItem className="">
            <PaginationLink
              href="#"
              className="text-white rounded-full hover:bg-pagination-background hover:text-white"
              onClick={handlePrevClick}
            >
              <ChevronLeft className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
          {renderPaginationItems()}
          <PaginationItem>
            <PaginationLink
              href="#"
              className="text-white rounded-full hover:bg-pagination-background hover:text-white"
              onClick={handleNextClick}
            >
              <ChevronRight className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div>
        {transactions.map((transaction, index) => (
          <TransactionCard key={index} success={transaction.success} />
        ))}
      </div>
    </section>
  );
}
