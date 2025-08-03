"use client";

import { motion } from "framer-motion";
import DashboardHeader from "@/components/dashboard/header/DashboardHeader";
import FinancialOverviewCards from "@/components/dashboard/overview/FinancialOverviewCards";
import ExpenseAnalytics from "@/components/dashboard/analytics/ExpenseAnalytics";
import TransactionsTable from "@/components/dashboard/transactions/TransactionsTable";
import GoalsSidebar from "@/components/dashboard/goals/GoalsSidebar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50"
    >
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-8">
            {/* Financial Overview Cards */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <FinancialOverviewCards />
            </motion.section>

            {/* Expense Analytics */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Expense Analytics
              </h2>
              <ExpenseAnalytics />
            </motion.section>

            {/* Recent Transactions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <TransactionsTable />
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1">
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <GoalsSidebar />
            </motion.aside>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
