/// <reference types="express" />

// Add DecodedUser Interface on to Express's Request Interface.
declare namespace Express {
  interface Request extends DecodedUser {}
}

interface DecodedUser {
  user: User;
}
interface User {
  _id?: string;
  email: string;
}
