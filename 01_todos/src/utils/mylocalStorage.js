export default function (newKey, newValue) {
  if(newValue){
    return localStorage.setItem(newKey, JSON.stringify(newValue))
  }else{
    return JSON.parse(localStorage.getItem(newKey) || "[]")
  }
}
