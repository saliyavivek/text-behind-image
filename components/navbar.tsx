import React from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useUser } from '@/hooks/useUser';
import NewDesignButton from './new-design-button';

const Navbar = () => {
  const { user } = useUser()

  return (
    <div className='flex flex-row items-center justify-between p-5 px-10'>
        <h2 className="text-2xl font-semibold tracking-tight">
          Text behind image
        </h2>
        <div className='flex gap-4'>
          <NewDesignButton userId={user?.id || ''}/>
          <Avatar>
            <AvatarImage src={user?.user_metadata.avatar_url} />
          </Avatar>
        </div>
    </div>
      
  );
};

export default Navbar;