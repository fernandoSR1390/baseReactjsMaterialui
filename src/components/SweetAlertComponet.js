import * as React from "react";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import { useState } from "react";
import { Button, Stack, Tooltip } from "@mui/material";
import AddAlertIcon from "@mui/icons-material/AddAlert";

export default function SweetAlertCopmponent() {
  const [inputValue, setInputValue] = useState("");

  const showSwal = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setInputValue("Se guardo la alerta con SweetAlert2!!!");
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        setInputValue("Se denego la alerta con SweetAlert2!!!");
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Stack direction="column" spacing={2} className="App">
        <Tooltip title="Show SweetAlert2 modal">
          <Button
            variant="outlined"
            startIcon={<AddAlertIcon />}
            onClick={showSwal}
          >
            Show SweetAlert2 modal
          </Button>
        </Tooltip>
      </Stack>

      <div>Your input: {inputValue}</div>
    </Box>
  );
}
