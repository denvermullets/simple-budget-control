import { CreditCard, Loan, LocalStorage, MonthlyRecurring } from "../models/localStorage.model";

type ModifyCredit = { type: "ADD_CREDIT_CARD" | "EDIT_CREDIT_CARD"; payload: CreditCard };
type ModifyLoan = { type: "ADD_LOAN" | "EDIT_LOAN"; payload: Loan };
type ModifyRecurring = { type: "ADD_RECURRING" | "EDIT_RECURRING"; payload: MonthlyRecurring };
type DeleteCreditCard = { type: "DELETE_CREDIT_CARD"; payload: CreditCard };
type DeleteLoan = { type: "DELETE_LOAN"; payload: Loan };
type DeleteRecurring = { type: "DELETE_RECURRING"; payload: MonthlyRecurring };
type UpdateBugetData = { type: "UPDATE_BUDGET_DATA"; payload: LocalStorage };

export type Actions =
  | ModifyCredit
  | DeleteCreditCard
  | ModifyLoan
  | DeleteLoan
  | ModifyRecurring
  | DeleteRecurring
  | UpdateBugetData;

export const INITIAL_STATE: LocalStorage = {
  monthlyRecurring: [{ source: "Coffee", dueDate: 14, amount: 60.0 }],
  creditCards: [
    {
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

// will need to make sure we update localStorage on each action
// localStorage.setItem("simpleBudget", JSON.stringify(localBudgetData));
export const simpleBudgetReducer = (state: LocalStorage, action: Actions) => {
  switch (action.type) {
    case "ADD_LOAN":
      return {
        ...state,
        loans: [...state.loans, action.payload],
      };
    case "UPDATE_BUDGET_DATA":
      return state;

    // case "ADD_TAG":
    //     return {
    //       ...state,
    //       tags: [...state.tags, action.payload],
    //     };
    //   case "REMOVE_TAG":
    //     return {
    //       ...state,
    //       tags: state.tags.filter((tag) => tag !== action.payload),
    //     };
    //   case "INCREASE":
    //     return {
    //       ...state,
    //       quantity: state.quantity + 1,
    //     };
    //   case "DECREASE":
    //     return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};
