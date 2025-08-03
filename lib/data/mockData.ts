export const userProfile = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  avatar:
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
  currentBalance: 24567.89,
  creditScore: 742,
  lastUpdated: "2025-01-25T14:30:00Z",
};

export const financialSummary = {
  monthlyIncome: {
    current: 8500.0,
    previous: 8200.0,
    change: 3.66,
  },
  monthlyExpenses: {
    current: 5234.5,
    previous: 4987.3,
    change: 4.96,
  },
  savingsGoal: {
    target: 50000,
    current: 32750,
    percentage: 65.5,
  },
  budgetStatus: {
    totalBudget: 6000,
    spent: 5234.5,
    remaining: 765.5,
  },
};

export const expenseCategories = [
  { name: "Food & Dining", amount: 1250.3, budget: 1200, color: "#EF4444" },
  { name: "Transportation", amount: 890.5, budget: 800, color: "#F59E0B" },
  { name: "Shopping", amount: 756.2, budget: 1000, color: "#8B5CF6" },
  { name: "Entertainment", amount: 425.8, budget: 500, color: "#3B82F6" },
  { name: "Utilities", amount: 380.7, budget: 400, color: "#22C55E" },
  { name: "Healthcare", amount: 245.3, budget: 300, color: "#EC4899" },
  { name: "Others", amount: 285.7, budget: 350, color: "#6B7280" },
];

export const recentTransactions = [
  {
    id: 1,
    date: "2025-01-25T09:30:00Z",
    description: "Starbucks Coffee",
    category: "Food & Dining",
    amount: -12.5,
    status: "completed",
    merchant: "Starbucks",
  },
  {
    id: 2,
    date: "2025-01-24T18:45:00Z",
    description: "Salary Deposit",
    category: "Income",
    amount: 4250.0,
    status: "completed",
    merchant: "TechCorp Inc",
  },
  {
    id: 3,
    date: "2025-01-24T16:20:00Z",
    description: "Uber Ride",
    category: "Transportation",
    amount: -18.75,
    status: "completed",
    merchant: "Uber",
  },
  {
    id: 4,
    date: "2025-01-24T12:15:00Z",
    description: "Amazon Purchase",
    category: "Shopping",
    amount: -89.99,
    status: "pending",
    merchant: "Amazon",
  },
  {
    id: 5,
    date: "2025-01-23T20:30:00Z",
    description: "Netflix Subscription",
    category: "Entertainment",
    amount: -15.99,
    status: "completed",
    merchant: "Netflix",
  },
  {
    id: 6,
    date: "2025-01-23T14:45:00Z",
    description: "Grocery Shopping",
    category: "Food & Dining",
    amount: -156.78,
    status: "completed",
    merchant: "Whole Foods",
  },
  {
    id: 7,
    date: "2025-01-22T11:20:00Z",
    description: "Gas Station",
    category: "Transportation",
    amount: -45.6,
    status: "completed",
    merchant: "Shell",
  },
  {
    id: 8,
    date: "2025-01-22T08:30:00Z",
    description: "Freelance Payment",
    category: "Income",
    amount: 750.0,
    status: "completed",
    merchant: "Design Client",
  },
  {
    id: 9,
    date: "2025-01-21T19:15:00Z",
    description: "Electric Bill",
    category: "Utilities",
    amount: -124.56,
    status: "completed",
    merchant: "Electric Company",
  },
  {
    id: 10,
    date: "2025-01-21T10:00:00Z",
    description: "Gym Membership",
    category: "Healthcare",
    amount: -79.99,
    status: "completed",
    merchant: "FitLife Gym",
  },
];

export const financialGoals = [
  {
    id: 1,
    title: "Emergency Fund",
    target: 15000,
    current: 12750,
    deadline: "2025-06-30",
    priority: "high",
  },
  {
    id: 2,
    title: "Vacation to Japan",
    target: 5000,
    current: 2100,
    deadline: "2025-09-15",
    priority: "medium",
  },
  {
    id: 3,
    title: "New Laptop",
    target: 2500,
    current: 1850,
    deadline: "2025-03-31",
    priority: "low",
  },
];

export const monthlyTrends = [
  { month: "Aug", income: 8200, expenses: 4800 },
  { month: "Sep", income: 8350, expenses: 5100 },
  { month: "Oct", income: 8100, expenses: 4950 },
  { month: "Nov", income: 8400, expenses: 5200 },
  { month: "Dec", income: 8600, expenses: 5350 },
  { month: "Jan", income: 8500, expenses: 5234.5 },
];
