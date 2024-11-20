import React from "react";

const BigImage = ({
    buttonLabel,
    imageSrc,
    bottomText,
}: {
    buttonLabel: string;
    imageSrc: string;
    bottomText: string;
}) => {
    return (
        <div className="image-card">
            <img src={imageSrc} alt="card image" className="image" />
            <div className="overlay">
                <p className="bottom-text">{bottomText}</p>
                <button className="btn">{buttonLabel}</button>
            </div>
            <style jsx>{`
        .image-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1; /* Ensures square dimensions */
          overflow: hidden;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          padding: 1rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .bottom-text {
          color: white;
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .btn {
          margin-top: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          border-radius: 5px;
        }

        .btn:hover {
          background-color: #005bb5;
        }
      `}</style>
        </div>
    );
};

export default BigImage;
