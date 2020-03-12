import React, {ReactDOM} from "react";
export let Abc = function() {
    return <div>
        Flight Name is:-
        <Flight name="Air India"/>
    </div>;
};

let Flight = function(props) {

    return <label>{props.name} Flight 6E543</label>;
};
