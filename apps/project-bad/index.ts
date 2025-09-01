// Parameter decorator factory - returns a decorator function
function logger(message?: string) {
  // This returns the actual parameter decorator function
  // biome-ignore lint/suspicious/noExplicitAny: ignore
  // biome-ignore lint/correctness/noUnusedFunctionParameters: ignore
  return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    console.log(`Parameter ${parameterIndex} of ${String(propertyKey)} was decorated${message ? ` with message: ${message}` : ''}`);
  };
}

class Vehicle {
  // Parameter decorator with no message
  drive(@logger() message: string) {
    console.log(`Vehicle says: ${message}`);
  }
  
  // Parameter decorator with custom message
  start(@logger("engine parameter") engineType: string, @logger("fuel parameter") fuelType: string) {
    console.log(`Starting ${engineType} engine with ${fuelType} fuel`);
  }
}

const vehicle = new Vehicle();
console.log("=== Testing parameter decorators ===");
vehicle.drive("Driving fast!");
vehicle.start("V8", "gasoline");