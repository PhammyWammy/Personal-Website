import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Stack,
  Grid,
} from "@mui/material";

type InfoCardProps = {
  title: string;
  value: string; // can be plain text OR a URL
  leftImg?: string;
};

function InfoCard({ title, value, leftImg }: InfoCardProps) {
  const isUrl = /^https?:\/\//i.test(value);

  return (
    <Card
      sx={{
        borderRadius: { xs: 2, sm: 3 },
        overflow: "hidden",
        boxShadow: { xs: 1, sm: 2 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: 160, sm: 190, md: 220 },
      }}
    >
      <CardHeader
        title={title}
        sx={{
          pb: { xs: 0.5, sm: 1 },
          pt: { xs: 1.25, sm: 2 },
          px: { xs: 2, sm: 3 },
          minHeight: { xs: 56, sm: 64, md: 72 },
        }}
        titleTypographyProps={{
          variant: "h6",
          fontWeight: 800,
          sx: { fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.35rem" } },
        }}
      />

      <CardContent
        sx={{
          pt: { xs: 1.25, sm: 2 },
          pb: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 3 },
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 1.5, sm: 2.5 }}
          alignItems="center"
          sx={{ minWidth: 0, width: "100%" }}
        >
          {leftImg ? (
            <Box
              component="img"
              src={leftImg}
              alt={`${title} icon`}
              sx={{
                height: { xs: 56, sm: 72, md: 90 },
                width: { xs: 56, sm: 72, md: 90 },
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
          ) : null}

          <Typography
            component={isUrl ? "a" : "span"}
            href={isUrl ? value : undefined}
            target={isUrl ? "_blank" : undefined}
            rel={isUrl ? "noopener noreferrer" : undefined}
            sx={{
              color: isUrl ? "primary.main" : "text.secondary",
              fontWeight: 700,
              fontSize: { xs: "1.15rem", sm: "1.4rem", md: "1.85rem" },
              lineHeight: 1.2,
              minWidth: 0,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: { xs: 3, sm: 2, md: 1 },
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
              textDecoration: isUrl ? "underline" : "none",
              cursor: isUrl ? "pointer" : "default",
            }}
          >
            {value}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

const AboutMe = () => {
  const cards: InfoCardProps[] = [
    { title: "Name", value: "Jonathan Pham", leftImg: "assets/kid.png" },
    {
      title: "School/Grade",
      value: "NDCR 10th Grade",
      leftImg: "assets/NDCR.png",
    },
    {
      title: "Time at MITRE",
      value: "1 and 1/2 years",
      leftImg: "assets/MITRE.png",
    },
    {
      title: "Hobbies",
      value: "Gym Geek, Movie Lover, and a Tutor",
      leftImg: "assets/car.png",
    },
    {
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/jonathan-pham-083b27331/",
      leftImg: "assets/Link.png",
    },
    {
      title: "Github",
      value: "https://github.com/PhammyWammy",
      leftImg: "assets/Git.png",
    },
  ];

  return (
    <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} alignItems="stretch">
      {cards.map((c) => (
        <Grid item key={c.title} xs={12} sm={6} sx={{ display: "flex" }}>
          <InfoCard {...c} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutMe;
