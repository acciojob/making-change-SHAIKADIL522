const makeChange = (c) => {
  // your name he
	 const q = Math.floor(c / 25);
  let remaining = c % 25;
  
  // Calculate dimes (10 cents each)
  const d = Math.floor(remaining / 10);
  remaining = remaining % 10;
  
  // Calculate nickels (5 cents each)
  const n = Math.floor(remaining / 5);
  remaining = remaining % 5;
  
  // Remaining amount is pennies (1 cent each)
  const p = remaining;
  
  return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
