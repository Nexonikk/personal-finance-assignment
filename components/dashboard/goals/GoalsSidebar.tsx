"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Target, AlertTriangle, Calendar, Lightbulb } from "lucide-react";
import {
  financialGoals,
  expenseCategories,
  financialSummary,
} from "@/lib/data/mockData";
import { formatCurrency, formatPercentage } from "@/utils/fomatters";

export default function GoalsSidebar() {
  const overBudgetCategories = expenseCategories.filter(
    (cat) => cat.amount > cat.budget
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Financial Goals */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-500" />
              <span>Financial Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {financialGoals.map((goal, index) => {
              const progress = (goal.current / goal.target) * 100;
              const daysLeft = getDaysUntilDeadline(goal.deadline);

              return (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
                  className="p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{goal.title}</h4>
                    <Badge className={getPriorityColor(goal.priority)}>
                      {goal.priority}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>
                        {formatCurrency(goal.current)} of{" "}
                        {formatCurrency(goal.target)}
                      </span>
                      <span>{progress.toFixed(1)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {daysLeft > 0 ? `${daysLeft} days left` : "Overdue"}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>

      {/* Budget Alerts */}
      {overBudgetCategories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <span>Budget Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {overBudgetCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.3 }}
                >
                  <Alert>
                    <AlertDescription>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-red-600 font-bold">
                          {formatCurrency(category.amount - category.budget)}{" "}
                          over
                        </span>
                      </div>
                    </AlertDescription>
                  </Alert>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Quick Tips */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-blue-500" />
              <span>Financial Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-800">
                <strong>Great job!</strong> You are saving{" "}
                {formatPercentage(
                  (financialSummary.savingsGoal.current /
                    financialSummary.monthlyIncome.current) *
                    100
                )}{" "}
                of your monthly income.
              </p>
            </div>

            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800">
                <strong>Tip:</strong> You have{" "}
                {formatCurrency(financialSummary.budgetStatus.remaining)} left
                in your budget this month.
              </p>
            </div>

            {overBudgetCategories.length > 0 && (
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-sm text-orange-800">
                  <strong>Watch out:</strong> You are over budget in{" "}
                  {overBudgetCategories.length} categories this month.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
