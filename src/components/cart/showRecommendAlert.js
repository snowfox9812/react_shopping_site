import { Button, Alert } from 'react-bootstrap';
import React, {useState} from 'react'
function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="secondary" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>HAVE A PROMO CODE?</Alert.Heading>
          <p>
            If you have a promo code you will able to apply it on the payment page during checkout.
          </p>
        </Alert>
      );
    }
    return (
        <div className="d-none">

        </div>
    );
  }

  export default AlertDismissible;