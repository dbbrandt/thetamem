import {View, Flex, Heading} from "@aws-amplify/ui-react";

const AppMain = () => {
    return (
        <View className="App-body">
            <Flex>
                <Heading padding="100px" level={4}>Hello</Heading>
            </Flex>
        </View>
    )
}

export default AppMain;
