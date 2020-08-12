import React from 'react'
import Collapsible from 'react-collapsible';
import { Button } from 'react-bootstrap';

function Sidebar() {
  return(
    <div>
      <div className="border-bottom p-2">
        <Collapsible trigger="Gender" transitionTime="150">
            <div className="m-2">
              <input type="checkbox" id="gender" className="mr-2" name="Men" value="Men"></input>
              <label for="Men">Men</label>
            </div>
            <div className="m-2">
              <input type="checkbox" id="gender" className="mr-2" name="Women" value="Women"></input>
              <label for="Women">Women</label>
            </div>
            <div className="m-2"> 
              <input type="checkbox" id="gender" className="mr-2" name="Unisex" value="Unisex"></input>
              <label for="Unisex">Unisex</label>
            </div>
        </Collapsible>
      </div>
      <div className="border-bottom p-2">
        <Collapsible trigger="Color" transitionTime="150">
            <div className="m-2">
              <input type="checkbox" id="color" className="mr-2" name="Red" value="Red"></input>
              <label for="Red">Red</label>
            </div>
            <div className="m-2">
              <input type="checkbox" id="color" className="mr-2" name="Green" value="Green"></input>
              <label for="Green">Green</label>
            </div>
            <div className="m-2"> 
              <input type="checkbox" id="color" className="mr-2" name="Blue" value="Blue"></input>
              <label for="Blue">Blue</label>
            </div>
        </Collapsible>
      </div>
      <Button variant="primary" size="md" block>Apply Filter</Button>
    </div>
  );
}
export default Sidebar;