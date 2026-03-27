"use client";

import { useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="modal-backdrop fade show" 
        style={{ zIndex: 1050, backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={onClose}
      ></div>
      <div 
        className="modal fade show d-block" 
        tabIndex={-1} 
        style={{ zIndex: 1055 }}
        onClick={onClose}
      >
        <div 
          className="modal-dialog modal-dialog-centered modal-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content shadow-lg border-0 rounded-4">
            <div className="modal-header border-bottom-0 pb-0 pt-4 px-4">
              <h5 className="modal-title fw-bold text-dark">{title}</h5>
              <button 
                type="button" 
                className="btn-close shadow-none" 
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-4 pt-3 pb-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
