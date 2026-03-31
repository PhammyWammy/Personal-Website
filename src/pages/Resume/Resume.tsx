import * as React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Box } from "@mui/material";

export default function Resume() {
  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 2 }}
      justifyContent="center"
      sx={{ px: { xs: 1, sm: 2 }, py: { xs: 2, sm: 4 } }}
    >
      <Grid size={{ xs: 12, md: 8, lg: 6 }} sx={{ display: "flex" }}>
        <Card
          elevation={3}
          sx={{
            width: "100%",
            borderRadius: { xs: 2, sm: 3 },
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
            <Box
              component="img"
              src="assets/Resume.png"
              alt="Resume screenshot"
              loading="lazy"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: { xs: 1.5, sm: 2 },
                maxHeight: { xs: "75vh", sm: "none" },
                objectFit: "contain",
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
