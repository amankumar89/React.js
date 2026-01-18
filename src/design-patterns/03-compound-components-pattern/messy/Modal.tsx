import type { ReactNode } from "react";

function Modal({ title, body, primaryAction, secondaryAction }: {
    title: string;
    body: ReactNode;
    primaryAction: ReactNode;
    secondaryAction: ReactNode;
}) {
    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                <h2 className="modal-header">{title}</h2>
                <p className="modal-body">{body}</p>
                <div className="modal-footer">
                    {secondaryAction}
                    {primaryAction}
                </div>
            </div>
        </div>
    );
}

export default Modal;