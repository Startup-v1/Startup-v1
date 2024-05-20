function formatDate(date: Date): string {
    const day: string = date.getDate().toString().padStart(2, "0");
    const month: string = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to the month since it is zero-based
    const year: string = date.getFullYear().toString();
    const hours: string = date.getHours().toString().padStart(2, "0");
    const minutes: string = date.getMinutes().toString().padStart(2, "0");
  
    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  }
  
  export default formatDate;
  