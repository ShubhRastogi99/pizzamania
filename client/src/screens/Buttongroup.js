import React from 'react'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useHistory } from 'react-router-dom';

const Buttongroup = () => {
  const navigate = useHistory()
  return (
    <div class="text-center">
      <ButtonGroup
        vertical
        style={{
          minHeight: "380px",
          minWidth: "150px",
        }}
      >
        <Button onClick={() => navigate.push("/admin/userlist")}>Users</Button>
        <Button onClick={() => navigate.push("/admin/pizzalist")}>
          Pizzas
        </Button>
        <Button onClick={() => navigate.push("/admin/addnewpizza")}>
          Add New Pizza
        </Button>
        <Button onClick={() => navigate.push("/admin/orderlist")}>
          All Orders
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Buttongroup