/* eslint-disable @typescript-eslint/no-empty-function */
// disabling the eslint rule 'cause i just couldn't get it to satisfy properly

import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { LocalStorage } from "../models/localStorage.model";
import { Actions, simpleBudgetReducer } from "../reducers/simpleBudgetReducer";

interface CurrentUserProviderProps {
  children: ReactNode;
  initialData: LocalStorage;
}

export interface CurrentUserContext {
  localBudgetData: LocalStorage;
  dispatch: Dispatch<Actions>;
}

export const UserContext = createContext<CurrentUserContext>({
  localBudgetData: {
    accountInfo: { amountFree: 0 },
    monthlyRecurring: [],
    creditCards: [],
    loans: [],
  },
  dispatch: () => {},
});

export const CurrentUserProvider = ({ children, initialData }: CurrentUserProviderProps) => {
  // userSession data will be added later
  const [localBudgetData, dispatch] = useReducer(simpleBudgetReducer, initialData);

  return (
    <UserContext.Provider value={{ localBudgetData, dispatch }}>{children}</UserContext.Provider>
  );
};
