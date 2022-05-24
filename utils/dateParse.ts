
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const longDate = (date:string | undefined): string => {
  const arr = date?.split("-");
  if(arr){
    return `${months[parseInt(arr[0])-1]} ${arr[1]}, ${arr[2]}`;
  }
  return "";
}