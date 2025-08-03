export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};

export const formatPercentage = (value: number): string => {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
};

export const formatDate = (dateString: string): string => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
};

export const formatDateFull = (dateString: string): string => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
};

export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    "Food & Dining": "#EF4444",
    Transportation: "#F59E0B",
    Shopping: "#8B5CF6",
    Entertainment: "#3B82F6",
    Utilities: "#22C55E",
    Healthcare: "#EC4899",
    Income: "#22C55E",
    Others: "#6B7280",
  };
  return colors[category] || "#6B7280";
};
