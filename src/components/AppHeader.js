import {Flex, Grid, Heading} from "@aws-amplify/ui-react";
import MainMenu from "./MainMenu";
// import {useState, useEffect} from "react";
// import {fetchOrg, fetchUser, initProjectChat} from "../store/state";
import {useNavigate} from "react-router-dom"

// import {useSelector, useDispatch} from "react-redux";
// import {setAuthenticated, setCurrentUserId, setCurrentProjectId} from "../features/user/userSlice";
// import {setInitialAnswer, setInterviewProject, setRefreshHeader} from "../features/project/projectSlice";
// import Dropdown from "./Dropdown";
// import {Project} from "../models";
// import {
//     setAnswerText,
//     setAssistantText,
//     setQuestionText,
//     setUserInitiated,
//     setUserText
// } from "../features/chat/chatSlice";
// import {setCurrentResponseId, setSummary} from "../features/summary/summarySlice";

const AppHeader = ({signOut}) => {
    const navigate = useNavigate();
    const navTo = (path) => navigate(path);
    // const [orgName, setOrgName] = useState("");
    // const [userName, setUserName] = useState("");

    // const dispatch = useDispatch();
    // const {authenticated, adminUser, currentUserId, currentProjectId, currentOrganizationId } = useSelector((state) => state.user);
    // const {interviewLoading, chatLoading} = useSelector((state) => state.chat);
    // const {summaryLoading} = useSelector((state) => state.summary);
    // const {refreshHeader} = useSelector((state) => state.project);
    //
    const handleSignOut = async () => {
    //     dispatch(setCurrentUserId(null));
    //     dispatch(setAuthenticated(false));
        signOut();
    }

    // useEffect( () => {
    //     if (!authenticated) return;
    //     const fetchData = async () => {
    //         const org = await fetchOrg(currentOrganizationId);
    //         setOrgName(org?.name);
    //         const user = await fetchUser(currentUserId);
    //         setUserName(user?.name);
    //         dispatch(setRefreshHeader(false));
    //     }
    //     fetchData().then(() => console.log("AppHeader - fetchData - updating header."));
    // }, [currentUserId, currentOrganizationId, currentProjectId, refreshHeader, authenticated])

    // const handleProjectChange = (projectId) => {
    //     console.log("HandleProjectChange");
    //     if (projectId === currentProjectId) return;
    //     dispatch(setCurrentProjectId(projectId))
    //     initProjectChat(
    //         projectId,
    //         (value) => dispatch(setInterviewProject(value)),
    //         (value) => dispatch(setInitialAnswer(value)),
    //         (value) => dispatch(setAssistantText(value)),
    //         (value) => dispatch(setUserText(value)),
    //         (value) => dispatch(setSummary(value)),
    //         (value) => dispatch(setQuestionText(value)),
    //         (value) => dispatch(setAnswerText(value)),
    //         (value) => dispatch(setCurrentResponseId(value)),
    //         (value) => dispatch(setRefreshHeader(value)),
    //         (value) => dispatch(setUserInitiated(value))
    //     ).then(() => navTo("/"));
    // }

    // const isLoading = () => {
    //     return interviewLoading || chatLoading || summaryLoading
    // }
    //
    // if (!authenticated && currentUserId) return;
    return (
        <header className="App-header">
            <Flex width="100%">
                <Grid
                    alignItems="center"
                    width="100%"
                    columnGap="0.5rem"
                    rowGap="0.5rem"
                    templateColumns="1fr 8fr 1fr"
                    templateRows="1fr"
                >
                    <MainMenu
                        columnStart="1"
                        columnEnd="1"
                        rowStart="1"
                        rowEnd="2"
                        onSignOut={handleSignOut}
                        adminUser={true}
                        // loading={() => isLoading()}
                    />
                    <Flex
                        direction="column"
                        alignItems="center"
                        columnStart="2"
                    >
                        <Heading level={6}>
                            {/*{orgName}*/}
                            Precidix
                        </Heading>
                        <Heading level={4}>
                            Actor Names
                        </Heading>
                    {/*    /!*{currentProjectId &&*!/*/}
                    {/*    /!*    <Dropdown*!/*/}
                    {/*    /!*        value={currentProjectId}*!/*/}
                    {/*    /!*        Entity={Project}*!/*/}
                    {/*    /!*        orgId={currentOrganizationId}*!/*/}
                    {/*    /!*        onChange={handleProjectChange}*!/*/}
                    {/*    /!*        refresh={refreshHeader}*!/*/}
                    {/*    /!*    />*!/*/}
                    {/*    /!*}*!/*/}
                    </Flex>
                    <Flex
                        display="flex"
                        columnStart="3"
                        direction="column"
                        alignItems="center"
                        onClick={() => navTo("/")}
                    >
                        <Flex>
                            <img height="75px"
                                 width="75px"
                                 src='/mmlogo.png'
                                 alt="logo"
                            />
                        </Flex>
                            {/*<Heading level={6}>{userName}</Heading>*/}
                        <Heading textAlign="center" level={8}>Daniel Brandt</Heading>
                    </Flex>
                </Grid>
            </Flex>
        </header>

    )

}

export default AppHeader;