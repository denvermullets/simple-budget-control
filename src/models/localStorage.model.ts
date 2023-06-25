// extracting the types here for the core of the model since it'll be used all over
// and i don't want to have it stored in the reducer or context

export type LocalStorage = {
  monthlyRecurring: MonthlyRecurring[];
  creditCards: CreditCard[];
  loans: Loan[];
};

export type MonthlyRecurring = {
  source: string;
  dueDate: number;
  amount: number;
};

export type CreditCard = {
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
