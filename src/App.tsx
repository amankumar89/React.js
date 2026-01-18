import { useState } from "react";
import Modal from "./design-patterns/03-compound-components-pattern/with-pattern/modal/Modal";
import './design-patterns/03-compound-components-pattern/compound-components-pattern.css'
// import Modal from "./design-patterns/03-compound-components-pattern/messy/Modal";
import AccordionDemo from "./design-patterns/03-compound-components-pattern/with-pattern/accordian/AccordianDemo";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col items-center">
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Modal.Header>
                    <h2>Welcome!</h2>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        This is a modal built with the Compound Component
                        pattern.
                    </p>
                    <AccordionDemo />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                    <button onClick={() => alert("Action performed!")}>
                        Do Action
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default App;