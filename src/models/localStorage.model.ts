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
  dueDate: number;
  minimumPayment: number;
  interest: number;
};

export type Loan = {
  id: string;
  source: string;
  balance: number;
  originalAmount: number;
  minimumPayment: number;
  remainingPayments: number;
  dueDate: number;
  // putting as string for now but later i can implement a datepicker and use Date
  endDate: string;
  interest: number;
};

export const INITIAL_STATE: LocalStorage = {
  monthlyRecurring: [{ id: new Date().toString(), source: "Coffee", dueDate: 14, amount: 60.0 }],
  creditCards: [
    {
      id: new Date().toString(),
      source: "Credit Card 1",
      balance: 743.18,
      limit: 3500,
      dueDate: 12,
      minimumPayment: 35,
      interest: 21.49,
    },
    {
      id: new Date().toString() + 1,
      source: "Credit Card 2",
      balance: 743.18,
      limit: 3500,
      dueDate: 12,
      minimumPayment: 35,
      interest: 21.49,
    },
  ],
  loans: [
    {
      id: new Date().toString(),
      source: "Bank of America",
      balance: 446.97,
      minimumPayment: 134.73,
      remainingPayments: 13,
      originalAmount: 1195.45,
      dueDate: 20,
      endDate: "8/20/24",
      interest: 15.74,
    },
    {
      id: new Date().toString() + 1,
      source: "Chase",
      balance: 3245.12,
      minimumPayment: 89.15,
      remainingPayments: 8,
      originalAmount: 6000.0,
      dueDate: 15,
      endDate: "8/20/24",
      interest: 21.24,
    },
  ],
};
