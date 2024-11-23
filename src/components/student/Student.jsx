import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function StuCard({ name, age, contact, address }) {
    return (
        <Card sx={{ 
            maxWidth: 345, 
            m: 2, 
            boxShadow: 3, 
            borderRadius: 2, 
            bgcolor: '#f5f5f5' 
        }}>
            <CardContent>
                <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div" 
                    sx={{ fontWeight: 'bold', color: '#3f51b5' }}
                >
                    Name: {name}
                </Typography>
                <Box sx={{ mb: 1 }}>
                    <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ fontWeight: 'bold' }}
                    >
                        Age: {age}
                    </Typography>
                </Box>
                <Box sx={{ mb: 1 }}>
                    <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ fontWeight: 'bold' }}
                    >
                        Contact: {contact}
                    </Typography>
                </Box>
                <Box sx={{ mb: 1 }}>
                    <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ fontWeight: 'bold' }}
                    >
                        Address: {address}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}













