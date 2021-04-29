import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title:string,
        colors:{
            primary:string,
            secondary:string,
            background:string,
            text:string,
            title:string,
            grayLine: string,
            red: string,
            green: string,
            white:string,
            gray:string,
        }
    }
}
