// Step 1: Create and Initialize Variables
const startupName = "TechNest Solutions";      // Startup name
let initialCapital = 50000;                    // Initial capital in dollars
let monthlyRevenue = 12000;                    // Monthly revenue in dollars
let monthlyExpenses = 8000;                    // Monthly expenses in dollars

// Step 2: Calculate Business Metrics
let netCashFlow = monthlyRevenue - monthlyExpenses; // Revenue - Expenses
let currentBalance = initialCapital + netCashFlow;  // Capital + Net Cash Flow
let isProfitable = netCashFlow > 0;                 // Boolean check

// Step 3: Print to Console
console.log("=== Startup Budget Report ===");
console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + isProfitable);

VM92:13 === Startup Budget Report ===
VM92:14 Startup Name: TechNest Solutions
VM92:15 Net Monthly Cash Flow: $4000
VM92:16 Current Balance: $54000
VM92:17 Profitability Status: true

