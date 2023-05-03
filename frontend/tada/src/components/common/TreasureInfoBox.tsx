import tw from 'tailwind-styled-components';
import { WhiteBox } from '../../util/Semantics';
import { TreasureInfo } from '../../util/Interface';

interface StyledDivProps {
	active: string;
}

interface TreasureInfoProps {
	treasure : TreasureInfo | null;
	isHost : boolean;
}

const Header = tw.div` 
 	w-full
	text-lg text-gray5 font-black
	mb-1 mt-2 px-2
`;

const Text = tw.p`
	my-2 font-bold text-gray5
`;

const Img = tw.img<StyledDivProps>`
	${({ active }) => `
		${active ? 'rounded-t-lg' : 'rounded-lg'}
  	`}
`;

function TreasureInfoBox({treasure, isHost}: TreasureInfoProps) : JSX.Element {
	return (
		<>
			<WhiteBox>
				<Header>보물</Header>
				<Img active ='1' src={treasure?.img}/>
				<Text> Hint: {treasure?.hint}</Text>
			</WhiteBox>
			{isHost?
				<WhiteBox>
					<Header>보상</Header>
					{ treasure?.rewardImg ?
						<Img active = {treasure.reward ? '1':''} src={treasure.rewardImg}/>
						: null
					}
					{ treasure?.reward ?
						<Text>{treasure.reward}</Text> : null
					}
				</WhiteBox>
				:
				null	
			}
		</>
	);
}
  
export default TreasureInfoBox;
