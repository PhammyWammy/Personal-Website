import * as React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Stack,
  Grid,
} from '@mui/material';

const SCALE = 3;

// cut image size in half (was 120*SCALE)
const leftImageSx = {
  height: 60 * SCALE,
  width: 60 * SCALE,
  objectFit: 'contain' as const,
  flexShrink: 0,
};

type InfoCardProps = {
  title: string;
  value: string;
  leftImg?: string;
};

function InfoCard({ title, value, leftImg }: InfoCardProps) {
  return (
    <Card
      sx={{
        // width: 520 * ,
        borderRadius: 2 * SCALE,
        overflow: 'hidden',
        boxShadow: 2,
      }}
    >
      <CardHeader
        title={title}
        sx={{ pb: 0.5 * SCALE, pt: 1.5 * SCALE }}
        titleTypographyProps={{
          variant: 'h5',
          fontWeight: 700,
        }}
      />
      <CardContent sx={{ pt: 1.25 * SCALE, pb: 2 * SCALE }}>
        <Stack direction="row" spacing={1.5 * SCALE} alignItems="center">
          {leftImg ? (
            <Box
              component="img"
              src={leftImg}
              alt={`${title} icon`}
              sx={leftImageSx}
            />
          ) : null}

          <Typography
            variant="h4"
            sx={{
              color: 'text.secondary',
            //   lineHeight: 1.15,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
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
    { title: 'Name', value: 'Jonathan Pham', leftImg: 'assets/kid.png' },
    { title: 'School/Grade', value: 'NDCR 10th Grade', leftImg: 'assets/NDCR.png' },
    { title: 'Time at MITRE', value: '1 and 1/2 years', leftImg: 'assets/MITRE.png' },
    { title: 'Hobbies', value: 'Gym Geek, Movie Lover, and a Tutor', leftImg: 'assets/car.png' },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((c) => (
        <Grid size={6}>
        <InfoCard key={c.title} {...c} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutMe;
