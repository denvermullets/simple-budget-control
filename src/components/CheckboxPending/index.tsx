import { Checkbox } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

type CheckboxPendingProps = {
  initialValue: boolean;
  id: number;
  actionType: "EDIT_RECURRING" | "EDIT_CREDIT_CARD" | "EDIT_LOAN";
};

const CheckboxPending: React.FC<CheckboxPendingProps> = ({ initialValue, id, actionType }) => {
  const { dispatch } = useContext<CurrentUserContext>(UserContext);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(initialValue);

  // in an attempt to prevent re-renders from when there is a discrepancy from this controlled
  // internal state and when we change the global data we are passing the key like this:
  // key={id.toString() + localStorageValue}

  useEffect(() => {
    if (!dataLoaded) {
      setDataLoaded(true);
      return;
    }

    if (initialValue === isChecked) return;

    console.log("timeout checkbox", actionType);
    dispatch({
      type: actionType,
      payload: {
        id,
        pending: isChecked,
      },
    });
  }, [dispatch, id, dataLoaded, initialValue, actionType, isChecked]);

  return (
    <Checkbox
      variant="simple"
      onChange={(event) => setIsChecked(event.target.checked)}
      isChecked={isChecked}
    />
  );
};

export default CheckboxPending;
