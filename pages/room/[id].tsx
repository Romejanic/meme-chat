import { NextPage } from "next";
import { useRouter } from "next/router";
import ChatWindow from "../../components/ChatWindow";
import Container from "../../components/Container";

const RoomPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Container>
            <ChatWindow />
        </Container>
    );
};

export default RoomPage;