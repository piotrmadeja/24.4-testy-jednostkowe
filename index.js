const formatDate = timeInSeconds => {
  if (!timeInSeconds) timeInSeconds = 0;
  const days = Math.floor(timeInSeconds / 86400),
    hours = Math.floor((timeInSeconds % 86400) / 3600),
    mins = Math.floor((timeInSeconds % 3600) / 60),
    secs = Math.floor(timeInSeconds % 60);
  return `${days !== 0 ? `${days}d` : ''}${days && hours ? ' ' : ''}${
    hours !== 0 ? `${hours}h` : ''
  }${(days || hours) && mins ? ' ' : ''}${mins !== 0 ? `${mins}m` : ''}${
    (days || hours || mins) && secs ? ' ' : ''
  }${
    secs !== 0 || (days === 0 && hours === 0 && mins === 0) ? `${secs}s` : ''
  }`;
};

module.exports = formatDate;