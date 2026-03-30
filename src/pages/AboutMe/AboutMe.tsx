import * as React from "react";
import Grid from "@mui/material/Grid"; // in v7 this is the new Grid
import { Card, CardHeader, CardContent, Typography, Box } from "@mui/material";

type InfoCardProps = {
  title: string;
  value: string;
  label?: string;
  img?: string;
};

function InfoCard({ title, value, label, img }: InfoCardProps) {
  const isUrl = /^https?:\/\//i.test(value);
  const text = label ?? value;

  return (
    <Card sx={{ height: 240, width: "100%" }}>
      <CardHeader
        title={title}
        sx={{ textAlign: "center", py: 1 }}
        titleTypographyProps={{ fontWeight: 700, noWrap: true }}
      />
      <CardContent
        sx={{
          height: "calc(240px - 56px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
        }}
      >
        <Typography
          component={isUrl ? "a" : "div"}
          href={isUrl ? value : undefined}
          target={isUrl ? "_blank" : undefined}
          rel={isUrl ? "noopener noreferrer" : undefined}
          sx={{
            textAlign: "center",
            fontWeight: 600,
            px: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {text}
        </Typography>

        <Box sx={{ width: 80, height: 80, display: "grid", placeItems: "center" }}>
          {img ? (
            <Box
              component="img"
              src={img}
              alt={`${title} icon`}
              sx={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
}

export default function AboutMe() {
  const cards: InfoCardProps[] = [
    { title: "Name", value: "Jonathan Pham", img: "assets/kid.png" },
    { title: "School/Grade", value: "NDCR 10th Grade", img: "assets/NDCR.png" },
    { title: "Time at MITRE", value: "1 and 1/2 years", img: "assets/MITRE.png" },
    { title: "Hobbies", value: "Gym Geek, Movie Lover, and a Tutor", img: "assets/car.png" },
    { title: "LinkedIn", value: "https://www.linkedin.com/in/jonathan-pham-083b27331/", label: "My LinkedIn", img: "assets/Link.png" },
    { title: "Github", value: "https://github.com/PhammyWammy", label: "My Github", img: "assets/Git.png" },
  ];

  return (
    <Grid container spacing={2} alignItems="stretch">
      {cards.map((c) => (
        <Grid key={c.title} size={{ xs: 6, md: 3 }} sx={{ display: "flex" }}>
          <InfoCard {...c} />
        </Grid>
      ))}
    </Grid>
  );
}
