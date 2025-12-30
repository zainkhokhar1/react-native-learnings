import { useState } from "react";
import { Switch } from "react-native";

export default function CustomSwitch(){

    const [ switchIs,setSwitchIs ] = useState(false);

    return <Switch  
    value={switchIs} 
    onValueChange={()=> setSwitchIs(!switchIs)}
    >

    </Switch>
}