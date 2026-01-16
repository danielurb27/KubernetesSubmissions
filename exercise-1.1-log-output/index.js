import { randomUUID } from "crypto";

const randomString = randomUUID();

function logMessage() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}

// log inmediato
logMessage();

// log cada 5 segundos
setInterval(logMessage, 5000);