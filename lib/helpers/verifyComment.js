const verifyComment = (comment) => {
  if (comment.length == 0) return false;
  comment = comment.trim();
  return (
    comment.includes("@description") &&
    comment.includes("@params") &&
    comment.includes("@returns")
  );
};

module.exports = {
  verifyComment,
};
