const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  if(diffYears > 0){
    return `${diffYears} years ago`;
  }
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
  if(diffMonths > 0){
    return `${diffMonths} months ago`;
  }
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} days ago`;
};
export default formatDate;
    