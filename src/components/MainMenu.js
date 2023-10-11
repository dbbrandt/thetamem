import { Menu, MenuItem, View } from '@aws-amplify/ui-react';
import { useNavigate } from "react-router-dom";

const MainMenu = ({onSignOut, adminUser, loading}) => {
    const navigate = useNavigate();

    function navTo(path) {
        console.log(`NavTo path: ${path}`);
        navigate(path);
    }
    return (
        <View width="4rem">
            <Menu className="Menu-icon">
                <MenuItem onClick={() => navTo("/")}>Home</MenuItem>
                {adminUser && <MenuItem onClick={() => navTo("/organizations")}>Organizations</MenuItem>}
                {adminUser && <MenuItem onClick={() => navTo("/users")}>Users</MenuItem>}
                <MenuItem onClick={() => navTo("/goals")}>Goals</MenuItem>
                <MenuItem onClick={() => navTo("/interactions")}>Interactions</MenuItem>
                <MenuItem onClick={() => navTo("/responses")}>Responses</MenuItem>
                {/*{adminUser && !loading() && <MenuItem onClick={() => navTo("/export")}>Export</MenuItem>}*/}
                {/*{adminUser && !loading() && <MenuItem onClick={() => navTo("/import")}>Import</MenuItem>}*/}
                <MenuItem onClick={() => {
                    onSignOut();
                    navTo("/")
                }}>Logout</MenuItem>
            </Menu>
        </View>
    )
}

export default MainMenu;