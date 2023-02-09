import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'; 


function ChangeAlert({sincronize}) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
              <div className="ChangeAlert-container">
                <p>Looks like you have change your TODOs in other window.</p>
                <p>¿Would you like to sincronized your TODOs?</p>
                <button
                  className="TodoForm-button TodoForm-button--add"
                  onClick={toggleShow}
                >
                  Yes!
                </button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      }
            
      export { ChangeAlert };