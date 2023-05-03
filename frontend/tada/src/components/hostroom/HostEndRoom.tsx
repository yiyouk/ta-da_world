import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { change } from '../../stores/host';
import tw from 'tailwind-styled-components';
import { HeaderBox, WhiteBox, Button } from '../../util/Semantics';
import { TreasureInfo } from '../../util/Interface';
import TreasureMap from '../common/TreasureMap';

const PlayTimeBox = tw(WhiteBox)`
	flex flex-row justify-center items-center
	w-3/4 h-12
`;

function HostEndRoom() : JSX.Element {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const a  = 'https://d2ab9z4xn2ddpo.cloudfront.net/%EC%84%9E%EA%B8%B0.png';

	const treasures : TreasureInfo[] = [
		{
			id: 1,
			img: a,
			lat: '37.5128064',
			lng: '127.0284288',
			hint: '학동역',
			rewardImg: a,
			reward: '나의 망므~',
			status : true,
			finderNick:'한원석 안경'
		},
		{
			id: 2,
			img: a,
			lat: '37.513035165378085',
			lng: '127.02883155684492',
			hint: '카페 마오지래',
			rewardImg: '',
			reward: '커피',
			status : false,
			finderNick: null
		},
		{
			id: 3,
			img: a,
			lat: '37.512846012270565',
			lng: '127.0285939551883',
			hint: '주차장',
			rewardImg: a,
			reward: '',
			status : true,
			finderNick:'우겨ㅑㅇ'
		},
	];


	const endGame = () : void => {
		dispatch(change(0));
		navigate('/hosthome');
	};

	return (
		<div className="flex flex-col items-center">
			<HeaderBox> 이유경의 보물 찾기 </HeaderBox>
			<div className='w-full flex flex-col items-center bg-white2 px-2 pt-4 pb-16 mt-2 rounded-t-2xl space-y-2 overflow-y-scroll'>
				<PlayTimeBox>
					<p className='mx-3 font-black text-gray5'>총 플레이 시간</p>
					<p className='text-main font-black'>30</p>
					<p className='mx-3 font-black text-gray5'>분</p>
				</PlayTimeBox>
				<TreasureMap isHost={true} title ='보물 찾기 결과' treasures={treasures}/>
				<Button className='w-4/5' onClick={endGame}>종료</Button>
			</div>
		</div>
	);
}
  
export default HostEndRoom;
