//simple function component to display installment value
import React from "react";

export default function Messageboard(props) {
  return (
    <div>
      Monthly installements : <b>{props.installments} €</b>
    </div>
  );
}
