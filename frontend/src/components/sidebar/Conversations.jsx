import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import{getRandomEmoji} from "../../utils/emoji.js"

const Conversations = () => {
	// eslint-disable-next-line no-unused-vars
	const {loading ,conversations } =useGetConversations();
	console.log(conversations)
	return ( 
		<div className='py-2 flex flex-col overflow-auto'>
			{
				conversations.map((conversation,idx)=>(
					<Conversation 
					key = {conversation._id}
					conversation={conversation}
					emoji = {getRandomEmoji()}
					lastIdx = {idx === conversations.length-1}
					/>

				))
			}
		</div>
	);
};
export default Conversations;