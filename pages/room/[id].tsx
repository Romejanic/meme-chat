import { NextPage } from "next";
import { useRouter } from "next/router";

const RoomPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <main>
                <h1>Hello world</h1>
                <h3>You are in room {id}</h3>
            </main>
        </>
    );
};

export default RoomPage;