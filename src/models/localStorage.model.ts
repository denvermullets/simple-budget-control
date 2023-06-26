// extracting the types here for the core of the model since it'll be used all over
// and i don't want to have it stored in the reducer or context

export type LocalStorage = {
  monthlyRecurring: MonthlyRecurring[];
  creditCards: CreditCard[];
  loans: Loan[];
};

export type MonthlyRecurring = {
  id: string;
  source: string;
  dueDate: number;
  amount: number;
};

export type CreditCard = {
  id: string;
  source: string;
  balance: number;
  limit: number;
  availableBalance: number;
  utilization: number;
  timeToPayOff: number;
  dueDate: number;
  minimumPayment: number;
  interest?: number;
};

export type Loan = {
  id: string;
  source: string;
  balance: number;
  originalAmount: number;
  remainingPayments?: number;
  estimatedPayments: number;
  dueDate: number;
  // putting as string for now but later i can implement a datepicker and use Date
  endDate: string;
  interest?: number;
};

export const INITIAL_STATE: LocalStorage = {
  monthlyRecurring: [{ id: "monthlyRecurring_00001", source: "Coffee", dueDate: 14, amount: 60.0 }],
  creditCards: [
    {
      id: "creditCard_00001",
      source: "Credit Card 1",
      balance: 743.18,
      limit: 3500,
      availableBalance: 2756.82,
      utilization: 21.23,
      timeToPayOff: 22,
      dueDate: 12,
      minimumPayment: 35,
      interest: 21.49,
    },
  ],
  loans: [
    {
      id: "loan_00001",
      source: "Bank of America",
      balance: 446.97,
      originalAmount: 1195.45,
      estimatedPayments: 9,
      dueDate: 20,
      endDate: "8/20/24",
      interest: 15.74,
    },
  ],
};
