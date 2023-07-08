// extracting the types here for the core of the model since it'll be used all over
// and i don't want to have it stored in the reducer or context

export type LocalStorage = {
  monthlyRecurring: MonthlyRecurring[];
  creditCards: CreditCard[];
  loans: Loan[];
  accountInfo: AccountInfo;
};

export type MonthlyRecurring = {
  id: number;
  source: string;
  dueDate: number;
  amount: number;
  pending: boolean;
};

export type CreditCard = {
  id: number;
  source: string;
  balance: number;
  limit: number;
  dueDate: number;
  minimumPayment: number;
  interest: number;
  pending: boolean;
};

export type Loan = {
  id: number;
  source: string;
  balance: number;
  originalAmount: number;
  minimumPayment: number;
  remainingPayments: number;
  dueDate: number;
  // putting as string for now but later i can implement a datepicker and use Date
  endDate: string;
  interest: number;
  pending: boolean;
};

export type AccountInfo = {
  amountFree: number;
  payPeriodStart: Date;
  payPeriodEnd: Date;
  // etc
};

export const INITIAL_STATE: LocalStorage = {
  accountInfo: { amountFree: 0, payPeriodStart: new Date(), payPeriodEnd: new Date() },
  monthlyRecurring: [{ id: 1, source: "Coffee", dueDate: 14, amount: 60.0, pending: true }],
  creditCards: [
    {
      id: 2,
      source: "Credit Card 1",
      balance: 743.18,
      limit: 3500,
      dueDate: 12,
      minimumPayment: 35,
      interest: 21.49,
      pending: true,
    },
  ],
  loans: [
    {
      id: 3,
      source: "Bank of America",
      balance: 446.97,
      minimumPayment: 134.73,
      remainingPayments: 13,
      originalAmount: 1195.45,
      dueDate: 20,
      endDate: "8/20/24",
      interest: 15.74,
      pending: true,
    },
  ],
};

export const generateId = () => {
  const data = localStorage.getItem("simpleBudget");
  const parsedData: LocalStorage = data ? JSON.parse(data) : INITIAL_STATE;
  const currentIds: number[] = [];

  parsedData.creditCards.map((credit) => currentIds.push(credit.id));
  parsedData.loans.map((loan) => currentIds.push(loan.id));
  parsedData.monthlyRecurring.map((recurring) => currentIds.push(recurring.id));

  const sortedIds = currentIds.sort((a, b) => a - b);
  const newId = sortedIds[sortedIds.length - 1] + 1;

  return newId;
};
