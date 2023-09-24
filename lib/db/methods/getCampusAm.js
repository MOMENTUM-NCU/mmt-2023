import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/client';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export default async function campus(req, res) {
 
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const userEmail = session.user.email;

  try {
    // Query the database for the user with the provided email
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user details
    return res.status(200).redirect('https://google.com');
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  } 
}
