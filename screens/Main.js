import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import * as Permissions from "expo-permissions";

import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';

import Filter1 from './Filter1'
import Filter2 from './Filter2'
import Filter3 from './Filter3'
import Filter4 from './Filter4'
import Filter5 from './Filter5'
import Filter6 from './Filter6'
import Filter7 from './Filter7'
import Filter8 from './Filter8'
import Filter9 from './Filter9'
import Filter10 from './Filter10'


let data = {
    "crowns": [
        {
            "id": "1",
            "image": require('../crown-pic1.png')
        },
        {
            "id": "2",
            "image": require('../crown-pic2.png')
        },
        {
            "id": "3",
            "image": require('../crown-pic3.png')
        }
    ],
    "flowers": [
        {
            "id": "4",
            "image": require('../flower-pic1.png')
        },
        {
            "id": "5",
            "image": require('../flower-pic2.png')
        },
        {
            "id": "6",
            "image": require('../flower-pic3.png')
        }
    ],
    "hairs": [
        {
            "id": "7",
            "image": require('../hair-pic1.png')
        }
    ],
    "hats": [
        {
            "id": "8",
            "image": require('../hat-pic1.png')
        },
        {
            "id": "9",
            "image": require('../hat-pic2.png')
        }
    ],
    "others": [
        {
            "id": "10",
            "image": require('../other-pic1.png')
        },
      ]
}

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            faces: [],
            current_filter: "filter_1",
            selected: "crowns"
        }
        this.onCameraPermission = this.onCameraPermission.bind(this)
        this.onFacesDetected = this.onFacesDetected.bind(this)
        this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
    }

    componentDidMount() {
        Permissions
            .askAsync(Permissions.CAMERA)
            .then(this.onCameraPermission)
    }

    onCameraPermission({ status }) {
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    onFacesDetected({ faces }) {
        this.setState({ faces: faces })
    }

    onFaceDetectionError(error) {
        console.log(error)
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />
        }
        if (hasCameraPermission === false) {
            return (
                <View style={styles.container}>
                    <Text>No access to camera</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.headingContainer}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.titleText1}>LOOK</Text><Text style={styles.titleText2}> MEE...</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        
                    </View>
                </View>
                <View style={styles.cameraStyle}>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                       faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                           detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                           runClassifications: FaceDetector.FaceDetectorClassifications.all,
                            minDetectionInterval: 100,
                            tracking: true,
                        }}
                        onFacesDetected={this.onFacesDetected}
                        onFacesDetectionError={this.onFacesDetectionError}
                    />
                    {
                        this.state.faces.map(face => {
                            if (this.state.current_filter === "filter_1") {
                                return <Filter1 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_2") {
                                return <Filter2 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_3") {
                                return <Filter3 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_4") {
                                return <Filter4 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_5") {
                                return <Filter5 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_6") {
                                return <Filter6 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_7") {
                                return <Filter7 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_8") {
                                return <Filter8 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_9") {
                                return <Filter9 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_10") {
                                return <Filter10 key={face.faceID} face={face} />
                            }
                            
                        })
                    }
                </View>
                <View style={styles.framesContainer}>
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={this.state.selected == "crowns" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `crowns` })}>
                            <Text>Crowns</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.selected == "flowers" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `flowers` })}>
                            <Text>Flowers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.selected == "hairs" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `hairs` })}>
                            <Text>Hairs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.selected == "hats" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `hats` })}>
                            <Text>Hats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.selected == "others" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `others` })}>
                            <Text>Others</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ flexDirection: "row", flex: 0.6 }} horizontal showsHorizontalScrollIndicator={false}>
                        {
                            data[this.state.selected].map(filter_data => {
                                return (
                                    <TouchableOpacity style={styles.filterImageContainer} onPress={() => this.setState({ current_filter: `filter_${filter_data.id}` })}>
                                        <Image source={filter_data.image} style={{ height: 32, width: 80 }} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#8fbc8f"
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "yellow",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -7, height: 3.5 },
        textShadowRadius: 1
    },
    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "cyan",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -4, height: 3 },
        textShadowRadius: 1
    },
    cameraStyle: {
        flex: 0.65
    },
    framesContainer: {
        flex: 0.2,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(10),
        backgroundColor: "#8fbc8f"
    },
    filterImageContainer: {
        height: RFPercentage(8),
        width: RFPercentage(15),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4e7f8",
        borderRadius: 30,
        marginRight: 20
    },
    categoryContainer: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: RFValue(10)
    },
    categoryBox: {
        flex: 0.2,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: "#ffdab9",
        width: "100%",
        padding: RFValue(3),
        margin: 1,
        alignItems: "center"
    },
    categoryBoxSelected: {
        flex: 0.2,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: "yellow",
        width: "100%",
        padding: RFValue(3),
        margin: 1,
        alignItems: "center"
    }
});