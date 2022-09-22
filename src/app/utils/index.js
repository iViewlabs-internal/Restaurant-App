const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
  const d = new Date();

 export const day = days[d.getDay()];

 export const year = d.getFullYear();