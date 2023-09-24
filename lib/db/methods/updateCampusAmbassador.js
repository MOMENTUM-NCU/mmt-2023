import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/client';
import { redirect } from 'next/navigation';

async function updateCounterForUser(userId) {
    try {
      // Check if the user is registered as a campus ambassador
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
  
      if (user && user.campusAmbassadorRegistered) {
        // User is registered, increment the counter
        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: {
            counter: user.counter ? user.counter + 1 : 1, // Increment the counter
          },
        });
  
        console.log(`Counter updated for user: ${updatedUser.id}`);
      } else {
        // User is not registered, set the counter to null
        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: {
            counter: null,
          },
        });
  
        console.log(`Counter set to null for user: ${updatedUser.id}`);
      }
    } catch (error) {
      console.error('Error updating counter:', error);
    }
  }
  
  // Usage example:
  const userId = 1; // Replace with the user's ID
  updateCounterForUser(userId);
  