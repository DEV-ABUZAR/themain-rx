import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const VerticalCursor = () => {
  const [collections, setCollections] = useState([]);
  const reduxCollections = useSelector((state) => state.collections);

  useEffect(() => {
    setCollections(reduxCollections);
  }, [reduxCollections]);

  return (
    <div className="vertical-cursor">
      {collections.map((collection, index) => (
        <div key={index}>
          <h3>{collection.name}</h3>
          <p>{collection.time}</p>
        </div>
      ))}
    </div>
  );
};

export default VerticalCursor;
