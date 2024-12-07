import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx"
import { useEffect, useRef } from "react";

const Messages = () => {
	const {messages, loading} = useGetMessages();
	const lastMessageRef = useRef();

	useEffect(()=>{
		setTimeout(()=>{
			lastMessageRef.current.scrollIntoView({behaviour :"smooth"});
		},100)
	}, [messages]);


	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && messages.length >0 && messages.map((message) =>(
				<div key={message._id} ref={lastMessageRef}>
					<Message  message={message} />
				</div>
			))}

			{loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx}/> )}
			{!loading && messages.length === 0 && (
				<p className="text-center"> You be the one to start the Conversation </p>
			)}
		</div>
	);
};
export default Messages;