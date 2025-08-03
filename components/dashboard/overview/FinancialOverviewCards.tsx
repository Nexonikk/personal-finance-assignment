"use client";

import { motion, easeOut } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  CreditCard,
} from "lucide-react";
import { financialSummary, userProfile } from "@/lib/data/mockData";
import { formatCurrency, formatPercentage } from "@/utils/fomatters";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

export default function FinancialOverviewCards() {
  const cards = [
    {
      title: "Monthly Income",
      value: financialSummary.monthlyIncome.current,
      change: financialSummary.monthlyIncome.change,
      icon: DollarSign,
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
    },
    {
      title: "Monthly Expenses",
      value: financialSummary.monthlyExpenses.current,
      change: financialSummary.monthlyExpenses.change,
      icon: TrendingDown,
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
    },
    {
      title: "Savings Goal",
      value: financialSummary.savingsGoal.current,
      target: financialSummary.savingsGoal.target,
      percentage: financialSummary.savingsGoal.percentage,
      icon: Target,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      title: "Credit Score",
      value: userProfile.creditScore,
      icon: CreditCard,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-600">
                {card.title}
              </CardTitle>
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${card.gradient}`}
              >
                <card.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl font-bold text-gray-900">
                {card.title === "Credit Score"
                  ? card.value
                  : formatCurrency(card.value)}
              </div>

              {card.change !== undefined && (
                <div className="flex items-center mt-2">
                  {card.change > 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      card.change > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {formatPercentage(card.change)} from last month
                  </span>
                </div>
              )}

              {card.percentage !== undefined && (
                <div className="mt-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{card.percentage}%</span>
                  </div>
                  <Progress value={card.percentage} className="h-2" />
                  <p className="text-xs text-gray-500 mt-2">
                    Target: {formatCurrency(card.target!)}
                  </p>
                </div>
              )}

              {card.title === "Credit Score" && (
                <div className="mt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-medium text-green-600">
                      Excellent
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(card.value / 850) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
