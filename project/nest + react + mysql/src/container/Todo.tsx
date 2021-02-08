
import React from 'react'
import { inject, observer } from 'mobx-react';

const Todo = ({ AppStore }: any) => {
    
    console.log(AppStore);
    
    return (
        <div>
            <p>{AppStore.appName}</p>
            <button onClick={() => AppStore.changeAppName(`change_name_${new Date().getTime()}`)}>Add</button>
        </div>
    );
}

export default inject('AppStore')(observer(Todo));
