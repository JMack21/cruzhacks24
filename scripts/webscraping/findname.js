function FindName(url) {
    if(url != "Undefined"){
      let address = url;
      let iter = 0;
      let Pcount = 0;
      let first = -1;
      let second = -1;
      let name = "";
    
      if (address.includes("eng.kavkaz-uzel.eu")) {
        return "caucasianknot";
      }
    
      let addressThing = address.indexOf("://");
      addressThing = addressThing + 2;
      //console.log(address.substring(addressThing + 1, addressThing + 4));
      if (address.substring(addressThing + 1, addressThing + 4) == "www") {
        while (Pcount < 2) {
          if (address[iter] == ".") {
            Pcount = Pcount + 1;
            if (first > 0) {
              second = iter;
            } else {
              first = iter;
            }
          }
          iter = iter + 1;
        }
        name = address.substring(first + 1, second);
      } else {
        first = address.indexOf(".");
        name = address.substring(addressThing + 1, first);
      }
    
      console.log(name);
      return name;
      }
    else{
      return "Undefined";
    }
  }
  
  //console.log(FindName("https://reason.com/"));
  
export { FindName };
  