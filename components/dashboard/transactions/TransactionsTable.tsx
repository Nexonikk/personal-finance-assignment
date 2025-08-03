"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { recentTransactions } from "@/lib/data/mockData";
import {
  formatCurrency,
  formatDate,
  getCategoryColor,
} from "@/utils/fomatters";

export default function TransactionsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTransactions = recentTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || transaction.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    ...Array.from(new Set(recentTransactions.map((t) => t.category))),
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="w-full"
    >
      <Card className="mx-2 md:mx-0">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl">
            Recent Transactions
          </CardTitle>
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-sm md:text-base"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent className="p-2 md:p-6">
          <div className="space-y-2 md:space-y-3">
            {filteredTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ backgroundColor: "#F9FAFB" }}
                className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-200 space-y-3 md:space-y-0"
              >
                <div className="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0"
                    style={{
                      backgroundColor: getCategoryColor(transaction.category),
                    }}
                  >
                    {transaction.merchant[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate text-sm md:text-base">
                      {transaction.description}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 truncate">
                      {transaction.merchant} • {formatDate(transaction.date)}
                    </p>

                    {/* Mobile: Status and Price on second line */}
                    <div className="flex items-center justify-between mt-2 md:hidden">
                      <Badge
                        variant="secondary"
                        className={`${getStatusColor(
                          transaction.status
                        )} text-xs`}
                      >
                        {transaction.status}
                      </Badge>
                      <p
                        className={`font-bold text-sm ${
                          transaction.amount > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}
                        {formatCurrency(transaction.amount)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex md:items-center md:space-x-3">
                  <div className="flex gap-2">
                    <Badge
                      variant="secondary"
                      className={`${getStatusColor(
                        transaction.status
                      )} text-xs`}
                    >
                      {transaction.status}
                    </Badge>

                    <Badge
                      variant="outline"
                      className="border-gray-200 text-xs"
                      style={{
                        borderColor: getCategoryColor(transaction.category),
                        color: getCategoryColor(transaction.category),
                      }}
                    >
                      {transaction.category}
                    </Badge>
                  </div>

                  <div className="text-right">
                    <p
                      className={`font-bold text-base ${
                        transaction.amount > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.amount > 0 ? "+" : ""}
                      {formatCurrency(transaction.amount)}
                    </p>
                  </div>
                </div>

                <div className="md:hidden">
                  <Badge
                    variant="outline"
                    className="border-gray-200 text-xs"
                    style={{
                      borderColor: getCategoryColor(transaction.category),
                      color: getCategoryColor(transaction.category),
                    }}
                  >
                    {transaction.category}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-8 text-gray-500 text-sm md:text-base">
              No transactions found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
