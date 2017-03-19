function renderLog(WrappedComponent) {
    return class  extends WrappedComponent {
        render() {
            console.log(WrappedComponent.name + ' Component: render() called once.');
            return super.render();
        }
    }

}

export  default renderLog;