function asPromise(func:Function){
    return (opts:any)=>{
        return new Promise(function(resolve:Function, reject:Function){
            func(Object.assign({}, opts, {
                success : resolve,
                fail : reject
            }));
        });
    }
}

const _wx:any = {}
Object.keys(wx).forEach(key => {
    if(!key.endsWith("Sync")){
        _wx[key] = asPromise(wx[key]);
    }
});

export const request = (url:string) => _wx.request({ url });
export const getUserInfo = _wx.getUserInfo;
export const showLoading = (message:string = "加载中…") => _wx.showLoading({ title: message, mask: true });
export const hideLoading = _wx.hideLoading;
