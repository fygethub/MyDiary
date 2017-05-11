export function shalloEqual(prev, next) {
    if(prev === next) return true;
    const prevKeys = Object.keys(prev);
    const nextKeys = Object.keys(next);

    if(prevKeys.length !== nextKeys.length) return false;

    return prevKeys.every((key) => {
        return prevKeys.hasOwnProperty(key) && prevKeys[key] === nextKeys[key];
    })

}


function PureRender(Component) {
    //console.log("is update : ",Component.name);
    Component.prototype.shouldComponentUpdate = function (nextProps,nextState){
        return PureRender.prototype.shouldComponentUpdate(nextProps, nextState, this.props, this.state);
    }
}

PureRender.prototype.shouldComponentUpdate = function(nextProps, nextState, preProps, preState){
    return !shalloEqual(preProps, nextProps) || !shalloEqual(preState, nextState);
}

export  default PureRender;