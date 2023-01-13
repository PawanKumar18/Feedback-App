import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";

import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import Spinnner from "./shared/Spinnner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinnner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
