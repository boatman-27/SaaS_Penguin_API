import bcrypt from "bcrypt";

const hashed = "$2b$10$Y6VnZQnAi8C5xZp5qoUAJ.fBHUtKNKOTB3LunWIDHUjHv13etqYXu"
const apiKey = "penguin_live_sk_48bde6de072a3816ba1e724525526178a340ea3fdc78d0ab4d1c6d11579503c0"

console.log(await bcrypt.compare(apiKey, hashed))
console.log(await bcrypt.hash(apiKey, 10))