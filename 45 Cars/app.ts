
function carDetails(manufacturer: string, modelName: string, ...additionalInfo) {
    const car = {
      manufacturer,
      modelName,
      ...Object.fromEntries(additionalInfo),
    };
  
    return car;
  }
  
  const myCarDetails = carDetails(
    "Hyundai",
    "Sonata",
    ["color", "black"],
    ["year", "2024"]
  );
  
  console.log(myCarDetails);
  

