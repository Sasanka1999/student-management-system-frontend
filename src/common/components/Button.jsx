import Button from '@mui/material/Button';
import {PropTypes} from 'prop-types';

export default function CustomButton(props) {
  return (
    
      <Button
        variant={props.variant || 'outlined'}  // Default to 'contained'
        color={props.color || 'primary'}        // Default to 'primary'
        padding={props.padding}
        size={props.size || 'medium'}           // Default to 'medium'
        onClick={props.onClick}                 // Custom onClick handler
        sx={{
          borderRadius: props.borderRadius || '4px',  // Custom border radius with default
          padding: props.padding || '10px 20px',      // Custom padding with default
          backgroundColor: props.bgColor, // Custom background color
          '&:hover': {
            backgroundColor: props.hoverColor, // Custom hover state color
          },
          ...props.sx,  // Allow overriding/adding styles from props
        }}
      >
        {props.children || 'save'}  {/* Use children to allow custom text/icons inside the button */}
      </Button>
    
  );
}

// Define PropTypes for the component
CustomButton.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    borderRadius: PropTypes.string,
    padding: PropTypes.string,
    bgColor: PropTypes.string,
    hoverColor: PropTypes.string,   // Add hoverColor to PropTypes
    sx: PropTypes.object,
    children: PropTypes.node,       // For button text or icons
  };