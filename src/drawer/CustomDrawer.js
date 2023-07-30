import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

const CustomDrawer = () => {
    return (
        <View style={{ backgroundColor: "skyblue", flex: 1 }}>
            <View>
                <View>
                    <Collapse>
                        <CollapseHeader >
                            <View>
                                <Text>Click here</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text>Ta daa!</Text>
                        </CollapseBody>
                    </Collapse>
                </View>

                <View>
                    <Collapse>
                        <CollapseHeader>
                            <View>
                                <Text>Click here</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text>Ta daa!</Text>
                        </CollapseBody>
                    </Collapse>
                </View>

            </View>
        </View>




    );
}

export default CustomDrawer;