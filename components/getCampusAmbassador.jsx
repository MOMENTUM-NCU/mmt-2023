import generateTag from 'utils/generateTag';
import { useRouter } from 'next/router';
import prisma from '@prisma/client';




// const UserTag = ({ user }) => {
//   return (
//     <div>
//       <h1>User Tag</h1>
//       {user ? (
//         <p>Tag: {user.name}</p>
//       ) : (
//         <p>User not found</p>
//       )}
//     </div>
//   );
// };

export async function getCampusAmbassador({ params }) {
  // Get the user ID from the URL
  const { id } = params;

  try {
    // Query the database for the user with the specified ID
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        user: null,
      },
    };
  }
}

export default UserTag;
