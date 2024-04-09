import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

interface InformationItem {
  title: string;
  link: string;
  snippet: string;
}

interface Result {
  statement: string;
  judgement: string;
  justification: string;
  process_time: number;
  information: InformationItem[];
  message: string;
}

interface ResultCardProps {
  result: Result;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ maxWidth: 500, margin: 2, transition: 'transform 0.3s', transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Statement
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {result.statement}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Judgement
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 1 }}>
          {result.judgement}
        </Typography>
        {isHovered && (
          <>
            <Divider sx={{ my: 1 }} />
            <Typography gutterBottom variant="h6" component="div">
              Justification
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 1 }}>
              {result.justification}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Sources
            </Typography>
            <Box sx={{ marginBottom: 1 }}>
              <ol style={{ paddingLeft: 16 }}>
                {result.information.map((item, index) => (
                  <li key={index} style={{ marginBottom: 8 }}>
                    {item.link ? (
                      <Link href={item.link} target="_blank" rel="noopener noreferrer" underline="hover">
                        {item.title}
                      </Link>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        {item.title}
                      </Typography>
                    )}
                  </li>
                ))}
              </ol>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
