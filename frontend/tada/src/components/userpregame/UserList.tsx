import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';
import BoxHeader from '../common/HeaderBox';

interface UserListItem {
	id: string;
	nick: string;
	imgNo: number;
}

interface UserListProps {
	users: UserListItem[] | null;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
	const currentUserId = useSelector((state: RootState) => state.user.userId);

	return (
		<>
			<div className='w-full flex flex-col items-center bg-white2 px-2 pt-4 pb-16 mt-2 '>
				{users && users.length > 0 ? (
					<BoxHeader total={0} num={users.length} title='참가자 수' />
				) : (
					''
				)}
				<div className='w-full ml-7 h-96 mx-auto space-y-3  overflow-scroll'>
					{users && users.length > 0 ? (
						users
							.filter((user) => user.id !== currentUserId)
							.map((user) => (
								<div
									className='w-5/6 flex items-center h-16 px-2 font-bold bg-white shadow-lg rounded-2xl text-main'
									key={user.id}
								>
									<img
										className='w-10 ml-5 h-10 mr-3'
										src={require(`../../assets/images/avatar${user.imgNo.toString()}.png`)}
										alt=''
									/>
									<p className='text-lg font-bold'>{user.nick}</p>
								</div>
							))
					) : (
						<p>아직 다른 참가자가 없어요!</p>
					)}
				</div>
			</div>
		</>
	);
};

export default UserList;
