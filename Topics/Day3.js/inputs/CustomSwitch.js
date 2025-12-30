import { useState } from "react";
import { Switch } from "react-native";

export default function CustomSwitch() {

    const [switchIs, setSwitchIs] = useState(false);

    return <Switch
        style={{  }}
        trackColor={{ false:'#000', true:'#ccc'}}
        thumbColor={'purple'}
        value={switchIs}
        onValueChange={() => setSwitchIs(!switchIs)}
    >

    </Switch>
}