declare function App(app:any): void;
declare function Page(app:any): void;

declare namespace wx {
    export function request(opts:any):void;
    export function getUserInfo(opts:any):void;
    export function showLoading(opts:any):void;
    export function hideLoading(opts:any):void;
}
