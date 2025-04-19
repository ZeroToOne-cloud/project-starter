import { ClerkProvider } from '@clerk/nextjs';
import { authMiddleware } from '@clerk/nextjs/server';
export default ClerkProvider;
export const middleware = authMiddleware();
export const config = {
  matcher: ['/dashboard(.*)', '/account(.*)']
};
